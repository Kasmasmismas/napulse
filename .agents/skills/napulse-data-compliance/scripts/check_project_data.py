#!/usr/bin/env python3
"""Проверка консистентности данных, ассетов и маркеров соответствия нормам РФ."""

from __future__ import annotations

import argparse
import hashlib
import re
import sys
import zipfile
import xml.etree.ElementTree as ET
from pathlib import Path

ROOT = Path(__file__).resolve().parents[4]


def md5_file(path: Path) -> str:
    h = hashlib.md5()
    with path.open("rb") as f:
        for chunk in iter(lambda: f.read(65536), b""):
            h.update(chunk)
    return h.hexdigest()


def format_kb(num_bytes: int) -> str:
    return f"{num_bytes / 1024:.1f}".replace(".", ",") + " КБ"


def extract_docx_text(path: Path) -> str:
    ns = {"w": "http://schemas.openxmlformats.org/wordprocessingml/2006/main"}
    with zipfile.ZipFile(path) as z:
        root = ET.fromstring(z.read("word/document.xml"))
    return " ".join(t.text for t in root.findall(".//w:t", ns) if t.text)


def main() -> int:
    parser = argparse.ArgumentParser(description="Аудит данных и норм РФ проекта «На пульсе».")
    parser.add_argument("--strict", action="store_true", help="Возвращать код 1 при любых предупреждениях.")
    args = parser.parse_args()

    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")

    index_path = ROOT / "index.html"
    js_path = ROOT / "js" / "main.js"
    css_path = ROOT / "css" / "style.css"
    docs_dir = ROOT / "docs"
    images_dir = ROOT / "images"

    if not index_path.exists() or not js_path.exists():
        print("[FAIL] Не найдены index.html или js/main.js в корне репозитория:", ROOT)
        return 1

    index_html = index_path.read_text(encoding="utf-8")
    js_code = js_path.read_text(encoding="utf-8")
    css_code = css_path.read_text(encoding="utf-8") if css_path.exists() else ""

    fails: list[str] = []
    warns: list[str] = []
    oks: list[str] = []

    # 1. Проверка ссылок на docs/
    doc_refs = sorted(set(re.findall(r"docs/[A-Za-z0-9_.-]+", index_html + "\n" + js_code)))
    missing_docs = [r for r in doc_refs if not (ROOT / r).exists()]
    if missing_docs:
        for r in missing_docs:
            fails.append(f"Отсутствует файл документа по ссылке из кода: {r}")
    else:
        oks.append(f"Все ссылки на docs/ ({len(doc_refs)} шт.) ведут на существующие файлы.")

    # 2. Проверка размеров ARCHIVE в js/main.js
    archive_entries = re.findall(
        r"size:\s*'([^']+)'\s*,\s*href:\s*'(docs/[^']+)'", js_code
    )
    size_mismatches = []
    for declared_size, rel_href in archive_entries:
        fpath = ROOT / rel_href
        if fpath.exists():
            actual_size = format_kb(fpath.stat().st_size)
            if declared_size != actual_size:
                size_mismatches.append((rel_href, declared_size, actual_size))
    if size_mismatches:
        for href, decl, act in size_mismatches:
            warns.append(f"Несовпадение размера в ARCHIVE для {href}: указано '{decl}', на диске '{act}'.")
    else:
        oks.append(f"Размеры файлов в ARCHIVE ({len(archive_entries)} шт.) совпадают с диском.")

    # 3. Дубликаты по MD5 в docs/
    if docs_dir.exists():
        by_hash: dict[str, list[str]] = {}
        for p in sorted(docs_dir.iterdir()):
            if p.is_file():
                by_hash.setdefault(md5_file(p), []).append(p.name)
        dup_groups = [names for names in by_hash.values() if len(names) > 1]
        if dup_groups:
            for names in dup_groups:
                warns.append(f"Дубликаты в docs/ (одинаковый MD5): {', '.join(names)}")
        else:
            oks.append("Побайтовых дубликатов среди файлов в docs/ не обнаружено.")

    # 4. Проверка слотов фото и неиспользуемых изображений
    photo_bases = set(re.findall(r"(?:photo|src):\s*'([^']+)'", js_code))
    photo_bases.update(re.findall(r'data-photo="([^"]+)"', index_html))
    raster_exts = (".jpg", ".jpeg", ".png", ".webp")
    missing_svg = []
    multi_raster = []
    only_svg = []
    for base in sorted(photo_bases):
        svg_file = images_dir / f"{base}.svg"
        if not svg_file.exists():
            missing_svg.append(f"images/{base}.svg")
        rasters = [ext for ext in raster_exts if (images_dir / f"{base}{ext}").exists()]
        if len(rasters) > 1:
            multi_raster.append((base, rasters))
        elif len(rasters) == 0:
            only_svg.append(base)
    if missing_svg:
        for m in missing_svg:
            fails.append(f"Отсутствует базовая SVG-заглушка: {m}")
    else:
        oks.append(f"Все {len(photo_bases)} фотослотов имеют базовый .svg файл.")
    for base, rasters in multi_raster:
        warns.append(f"Несколько растровых файлов для слота {base}: {', '.join(rasters)} (риск гонки в upgradePhoto).")
    if only_svg:
        warns.append(f"Слоты без реального фото (только .svg, {len(only_svg)} шт.): {', '.join(only_svg)}")

    # Проверка неиспользуемых изображений (верхний уровень images/)
    all_code = index_html + "\n" + js_code + "\n" + css_code
    unused_top_imgs = []
    if images_dir.exists():
        for p in sorted(images_dir.iterdir()):
            if p.is_file() and p.name not in all_code:
                unused_top_imgs.append(f"images/{p.name}")
    if unused_top_imgs:
        warns.append(f"Неподключённые изображения: {', '.join(unused_top_imgs)}")

    # 5. Сверка дат (сайт vs расписания)
    hero_date = re.search(r"hero__meta-item\"><b>([^<]+)</b>", index_html)
    sched_links = re.findall(r'href="(docs/raspisanie-[^"]+)"[^>]*>([^<]+)<', index_html)
    if hero_date and sched_links:
        hd = hero_date.group(1).strip()
        for href, label in sched_links:
            if "мая" in label.lower() and "декабря" in hd.lower():
                warns.append(f"Конфликт дат: на главном экране '{hd}', а в расписании '{label}' ({href}).")
                break
        for href, _ in sched_links:
            p = ROOT / href
            if p.exists() and p.suffix.lower() == ".docx":
                txt_compact = extract_docx_text(p).replace(" ", "")
                if "05.2026" in txt_compact and "декабря" in hd.lower():
                    warns.append(f"Внутри {href} указан май 2026, тогда как на сайте дата '{hd}'.")

    # 6. Сверка телефонов в index.html
    phones = sorted(set(re.findall(r'href="tel:([^"]+)"', index_html)))
    if len(phones) > 2:
        warns.append(f"В index.html найдено несколько разных телефонов: {', '.join(phones)} (проверьте футер vs площадку).")

    # 7. Маркеры соответствия законодательству РФ
    if "fonts.googleapis.com" in index_html or "fonts.gstatic.com" in index_html:
        warns.append("[152-ФЗ ч. 5 ст. 18 / 23-ФЗ] Обнаружены внешние шрифты Google Fonts (утечка IP за пределы РФ).")
    else:
        oks.append("[152-ФЗ ч. 5 ст. 18] Внешние шрифты Google Fonts не подключены.")

    if 'type="checkbox"' not in index_html:
        warns.append("[152-ФЗ ст. 9 / 156-ФЗ] В формах заявки отсутствуют отдельные чекбоксы согласия на обработку ПДн.")
    if "политик" not in index_html.lower():
        warns.append("[152-ФЗ ст. 18.1] На сайте не найдена ссылка на Политику обработки персональных данных.")

    if not re.search(r"(?<!\d)(?:0|6|12|16|18)\+", index_html):
        warns.append("[436-ФЗ] На сайте не найдена возрастная маркировка информационной продукции (например, 0+ или 6+).")

    if 'href="https://t.me/"' in index_html:
        warns.append("В футере осталась незаполненная ссылка-заглушка Telegram: https://t.me/")

    if "fetch(" not in js_code.split("function submitForm", 1)[-1]:
        warns.append("Форма заявки работает локально (скачивание .txt) без отправки на сервер/бэкенд в РФ.")

    print("=== Результаты аудита проекта «На пульсе» ===")
    for msg in oks:
        print(f"[OK]   {msg}")
    for msg in warns:
        print(f"[WARN] {msg}")
    for msg in fails:
        print(f"[FAIL] {msg}")
    print(f"\nИтого: OK={len(oks)}, WARN={len(warns)}, FAIL={len(fails)}")

    if fails or (args.strict and warns):
        return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
