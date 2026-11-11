'use strict';

/* Данные сайта: меняйте имена, роли и пути к фото здесь. */
const TEAM = {
  organizers: [
    { name: 'Ключарева Валентина Геннадьевна', role: 'Художественный руководитель фестиваля', photo: 'organizers/org-1' },
    { name: 'Караслан Анна Валерьевна ', role: 'Глава орг. комитета', photo: 'organizers/org-2' },
    { name: 'Злобин Артем Сергеевич', role: 'Технический директор фестиваля', photo: 'organizers/org-3' },
    { name: 'Типографов Алексей Печатников', role: 'Типография. Визуальное оснащение фестиваля', photo: 'organizers/org-4' },
    { name: 'Абибуллаев Тимур Ришатович', role: 'Ведущий конкурса-фестиваля', photo: 'organizers/org-5' }
  ],
  volunteers: [
    { name: 'Караслан Марк', photo: 'volunteers/vol-1' },
    { name: 'Тюкачева Екатерина', photo: 'volunteers/vol-2' },
    { name: 'Ахрименко Анастасия', photo: 'volunteers/vol-3' },
    { name: 'Лиманская Виктория', photo: 'volunteers/vol-4' },
    { name: 'Софья Романова', photo: 'volunteers/vol-5' },
    { name: 'Тимур Алиев', photo: 'volunteers/vol-6' }
  ]
};

const JURY = [
  { name: 'Елизавета Николаевна Кабоева', dir: 'vocal', photo: 'jury/jury-1',
    regalia: [
      'Джазовая певица, педагог, сонграйтер',
      'Заслуженная артистка РСО-Алания',
      'Доцент, заведующая отделением эстрадно-джазового пения Ростовской государственной консерватории им. С.В. Рахманинова',
      'Лауреат I премий международных конкурсов («Jazz Voces» 2007, «Jazz Birds» 2017)',
      'Солистка Муниципального джазового оркестра Кима Назаретова (Ростов-на-Дону)',
      '2 сольных альбома и 5 синглов'
    ] },
  { name: 'Инна Шеина', dir: 'vocal', photo: 'jury/jury-2',
    regalia: [
      'Член Российской Академии Голоса',
      'Выпускница Санкт-Петербургской государственной консерватории',
      'Лауреат международных конкурсов, солистка вокальной группы REMAKE',
      'Преподаватель СПбГУКиИ, кафедра «Музыкальное искусство эстрады» (2000–2012)',
      'Создатель и руководитель Школы вокала SOCHI VOICES (Сочи)',
      'Художественный руководитель детского творческого лагеря «ЗВУЧИ!»'
    ] },
  { name: 'Валентина Васильевна Георгиева', dir: 'vocal', photo: 'jury/jury-3',
    regalia: [
      'Вокальный педагог, дирижёр, аранжировщик',
      'Наставник и член жюри краевого вокального конкурса «Имя»',
      'Хормейстер художественно-постановочной части Краснодарской филармонии им. Г.Ф. Пономаренко',
      'Руководитель ансамбля «Скрыня»'
    ] },
  { name: 'Геннадий Георгиевич Князьков', dir: 'dance', photo: 'jury/jury-4',
    regalia: [
      'Заслуженный деятель искусств Кубани',
      'Заслуженный работник культуры Башкирии',
      'Хореограф-постановщик, доцент',
      'Педагог-хореограф Детской школы-интерната искусств и казачьей культуры им. В.Г. Захарченко (Школа Кубанского казачьего хора), Краснодар'
    ] },
  { name: 'Евгений Евгеньевич Банянин', dir: 'dance', photo: 'jury/jury-5',
    regalia: [
      'Экс-артист балета творческого объединения «Премьера»',
      'Балетмейстер, преподаватель хореографических дисциплин высшей категории Краснодарского хореографического училища',
      'Обладатель премии министерства культуры Краснодарского края «За развитие и популяризацию культуры края»',
      'Лауреат всероссийских и международных конкурсов',
      'Балетмейстер-постановщик городских и краевых программ'
    ] },
  { name: 'Нина Анатольевна Кушнир', dir: 'dance', photo: 'jury/jury-6',
    regalia: [
      'Преподаватель высшей квалификационной категории НМК им. Д.Д. Шостаковича (Новороссийск)',
      'Лауреат международных и российских конкурсов',
      'Руководитель и хореограф-постановщик ансамбля «Галатея»'
    ] }
];

const GALLERY = [
  { src: 'gallery/g-2023-1', year: 2023, caption: 'Эстрадный вокал · соло' },
  { src: 'gallery/g-2023-2', year: 2023, caption: 'Современная хореография' },
  { src: 'gallery/g-2023-3', year: 2023, caption: 'Ансамбль · народный вокал' },
  { src: 'gallery/g-2023-4', year: 2023, caption: 'Джаз-фанк · дуэт' },
  { src: 'gallery/g-2024-1', year: 2024, caption: 'Классическая хореография' },
  { src: 'gallery/g-2024-2', year: 2024, caption: 'Академический вокал' },
  { src: 'gallery/g-2024-3', year: 2024, caption: 'Хип-хоп · команда' },
  { src: 'gallery/g-2024-4', year: 2024, caption: 'Вокальный ансамбль' },
  { src: 'gallery/g-2025-1', year: 2025, caption: 'Эстрадный вокал · дуэт' },
  { src: 'gallery/g-2025-2', year: 2025, caption: 'Народный танец' },
  { src: 'gallery/g-2025-3', year: 2025, caption: 'Гала-концерт · финал' },
  { src: 'gallery/g-2025-4', year: 2025, caption: 'Современный танец' }
];

const ARCHIVE = [
  { year: 2023, roman: 'I', files: [
    { type: 'pdf',  dir: 'vocal', name: 'Ведомость · PDF',   size: '55,8 КБ', href: 'docs/results-2023-vokal.pdf' },
    { type: 'xlsx', dir: 'vocal', name: 'Ведомость · Excel', size: '2,4 КБ',  href: 'docs/results-2023-vokal.xlsx' },
    { type: 'pdf',  dir: 'hore',  name: 'Ведомость · PDF',   size: '55,8 КБ', href: 'docs/results-2023-horeografiya.pdf' },
    { type: 'xlsx', dir: 'hore',  name: 'Ведомость · Excel', size: '2,4 КБ',  href: 'docs/results-2023-horeografiya.xlsx' } ] },
  { year: 2024, roman: 'II', files: [
    { type: 'pdf',  dir: 'vocal', name: 'Ведомость · PDF',   size: '55,6 КБ', href: 'docs/results-2024-vokal.pdf' },
    { type: 'xlsx', dir: 'vocal', name: 'Ведомость · Excel', size: '2,4 КБ',  href: 'docs/results-2024-vokal.xlsx' },
    { type: 'pdf',  dir: 'hore',  name: 'Ведомость · PDF',   size: '55,6 КБ', href: 'docs/results-2024-horeografiya.pdf' },
    { type: 'xlsx', dir: 'hore',  name: 'Ведомость · Excel', size: '2,4 КБ',  href: 'docs/results-2024-horeografiya.xlsx' } ] },
  { year: 2025, roman: 'III', files: [
    { type: 'pdf',  dir: 'vocal', name: 'Ведомость · PDF',   size: '55,4 КБ', href: 'docs/results-2025-vokal.pdf' },
    { type: 'xlsx', dir: 'vocal', name: 'Ведомость · Excel', size: '2,4 КБ',  href: 'docs/results-2025-vokal.xlsx' },
    { type: 'pdf',  dir: 'hore',  name: 'Ведомость · PDF',   size: '55,4 КБ', href: 'docs/results-2025-horeografiya.pdf' },
    { type: 'xlsx', dir: 'hore',  name: 'Ведомость · Excel', size: '2,4 КБ',  href: 'docs/results-2025-horeografiya.xlsx' } ] },
  { year: 2026, roman: 'IV', files: [
    { type: 'pdf',  dir: 'vocal', name: 'Ведомость · PDF',   size: '313,1 КБ', href: 'docs/results-2026-vokal.pdf' },
    { type: 'xlsx', dir: 'vocal', name: 'Ведомость · Excel', size: '3,1 КБ',   href: 'docs/results-2026-vokal.xlsx' },
    { type: 'pdf',  dir: 'hore',  name: 'Ведомость · PDF',   size: '313,1 КБ', href: 'docs/results-2026-horeografiya.pdf' },
    { type: 'xlsx', dir: 'hore',  name: 'Ведомость · Excel', size: '3,1 КБ',   href: 'docs/results-2026-horeografiya.xlsx' } ] },
  { year: 2027, roman: 'V', pending: true }
];

const $ = (s, c) => (c || document).querySelector(s);
const $$ = (s, c) => Array.from((c || document).querySelectorAll(s));
const esc = s => String(s).replace(/[&<>"']/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m]));

/* Фото: если рядом положить .jpg/.png/.webp с тем же именем — он подхватится вместо .svg */
function photoSrc(base) { return 'images/' + base + '.svg'; }
function upgradePhoto(img, base) {
  ['jpg', 'jpeg', 'png', 'webp'].forEach(ext => {
    const t = new Image();
    t.onload = () => { img.src = 'images/' + base + '.' + ext; };
    t.src = 'images/' + base + '.' + ext;
  });
}
function bindPhotos(scope) {
  $$('img[data-photo]', scope).forEach(img => {
    const base = img.dataset.photo;
    img.src = photoSrc(base);
    upgradePhoto(img, base);
  });
}

function renderTeam() {
  $('#orgGrid').innerHTML = TEAM.organizers.map(p =>
    `<article class="person reveal"><img class="person__photo" data-photo="${p.photo}" alt="Фото: ${esc(p.name)}" loading="lazy"><div class="person__name">${esc(p.name)}</div><div class="person__role">${esc(p.role)}</div></article>`).join('');
  $('#volGrid').innerHTML = TEAM.volunteers.map(p =>
    `<article class="person reveal"><img class="person__photo" data-photo="${p.photo}" alt="Фото: ${esc(p.name)}" loading="lazy"><div class="person__name">${esc(p.name)}</div></article>`).join('');
}

function renderJury() {
  $('#juryGrid').innerHTML = JURY.map(j =>
    `<article class="jury-card reveal">
      <img class="jury-card__photo" data-photo="${j.photo}" alt="Фото: ${esc(j.name)}" loading="lazy">
      <div class="jury-card__body">
        <span class="jury-card__dir jury-card__dir--${j.dir}">${j.dir === 'vocal' ? '🎤 Вокал' : '💃 Хореография'}</span>
        <h3 class="jury-card__name">${esc(j.name)}</h3>
        <ul class="jury-card__regalia">${j.regalia.map(r => `<li>${esc(r)}</li>`).join('')}</ul>
      </div>
    </article>`).join('');
}

const ARCHIVE_DIRS = [
  { key: 'vocal', label: '🎤 Вокал' },
  { key: 'hore',  label: '💃 Хореография' }
];

function renderArchive() {
  $('#archiveGrid').innerHTML = ARCHIVE.map(y => {
    const body = y.pending
      ? `<div class="year-card__pending">Результаты появятся после проведения фестиваля</div>`
      : ARCHIVE_DIRS.map(d => {
          const fs = (y.files || []).filter(f => f.dir === d.key);
          if (!fs.length) return '';
          return `<div class="year-card__group">
            <div class="year-card__dir">${d.label}</div>
            ${fs.map(f => `<a class="filelink" href="${f.href}" download>
              <span class="filelink__icon filelink__icon--${f.type}">${f.type.toUpperCase()}</span>
              <span class="filelink__meta"><b>${esc(f.name)}</b><span>${f.size}</span></span>
              <span class="filelink__dl" aria-hidden="true">⬇</span>
            </a>`).join('')}
          </div>`;
        }).join('');
    return `<article class="year-card${y.pending ? ' year-card--pending' : ''} reveal">
      <div class="year-card__head"><div class="year-card__year">${y.year}</div><div class="year-card__label">${y.roman} фестиваль · вокал и хореография</div></div>
      <div class="year-card__files">${body}</div>
    </article>`;
  }).join('');
}
let galleryVisible = GALLERY.slice();
let lbIndex = 0;

function renderGallery(year) {
  galleryVisible = year === 'all' ? GALLERY.slice() : GALLERY.filter(g => g.year === Number(year));
  $('#galleryGrid').innerHTML = galleryVisible.map((g, i) =>
    `<button class="gphoto" type="button" data-i="${i}" style="animation-delay:${i * 40}ms" aria-label="Открыть фото: ${esc(g.caption)}">
      <img data-photo="${g.src}" alt="${esc(g.caption)} · ${g.year}" loading="lazy">
      <span class="gphoto__cap">${esc(g.caption)} · ${g.year}</span>
    </button>`).join('');
  bindPhotos($('#galleryGrid'));
  $$('.gphoto').forEach(b => b.addEventListener('click', () => openLightbox(Number(b.dataset.i))));
}

function openLightbox(i) {
  lbIndex = i;
  updateLightbox();
  $('#lightbox').hidden = false;
  document.body.style.overflow = 'hidden';
  $('#lbClose').focus();
}
function updateLightbox() {
  const g = galleryVisible[lbIndex];
  const img = $('#lbImg');
  img.src = photoSrc(g.src);
  upgradePhoto(img, g.src);
  img.alt = g.caption;
  $('#lbCaption').textContent = `${g.caption} · ${g.year} год`;
  $('#lbCount').textContent = `${lbIndex + 1} / ${galleryVisible.length}`;
}
function closeLightbox() {
  $('#lightbox').hidden = true;
  document.body.style.overflow = '';
}
function lbStep(d) { lbIndex = (lbIndex + d + galleryVisible.length) % galleryVisible.length; updateLightbox(); }

function initGallery() {
  renderGallery('all');
  $$('.gfilter').forEach(b => b.addEventListener('click', () => {
    $$('.gfilter').forEach(x => x.classList.remove('is-active'));
    b.classList.add('is-active');
    renderGallery(b.dataset.year);
  }));
  $('#lbClose').addEventListener('click', closeLightbox);
  $('#lbPrev').addEventListener('click', () => lbStep(-1));
  $('#lbNext').addEventListener('click', () => lbStep(1));
  $('#lightbox').addEventListener('click', e => { if (e.target === $('#lightbox')) closeLightbox(); });
  document.addEventListener('keydown', e => {
    if ($('#lightbox').hidden) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') lbStep(-1);
    if (e.key === 'ArrowRight') lbStep(1);
  });
}

function initNav() {
  const burger = $('#burger'), links = $('#navLinks');
  burger.addEventListener('click', () => {
    const open = links.classList.toggle('is-open');
    burger.classList.toggle('is-open', open);
    burger.setAttribute('aria-expanded', String(open));
  });
  $$('#navLinks a').forEach(a => a.addEventListener('click', () => {
    links.classList.remove('is-open'); burger.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false');
  }));
  const sections = ['about', 'team', 'jury', 'venue', 'gallery', 'regulations', 'archive', 'apply'].map(id => $('#' + id));
  const navA = $$('#navLinks a[href^="#"]');
  const spy = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      navA.forEach(a => a.classList.toggle('is-active', a.getAttribute('href') === '#' + en.target.id));
    });
  }, { rootMargin: '-35% 0px -55% 0px' });
  sections.forEach(s => s && spy.observe(s));
  const toTop = $('#toTop');
  window.addEventListener('scroll', () => toTop.classList.toggle('is-visible', window.scrollY > 600), { passive: true });
  toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

function initCountdown() {
  const target = new Date(2026, 11, 5, 10, 0, 0);
  const cells = { d: $('[data-cd="d"]'), h: $('[data-cd="h"]'), m: $('[data-cd="m"]'), s: $('[data-cd="s"]') };
  const pad = n => String(n).padStart(2, '0');
  function tick() {
    let diff = Math.max(0, target - Date.now());
    const d = Math.floor(diff / 864e5); diff -= d * 864e5;
    const h = Math.floor(diff / 36e5); diff -= h * 36e5;
    const m = Math.floor(diff / 6e4); diff -= m * 6e4;
    cells.d.textContent = d; cells.h.textContent = pad(h);
    cells.m.textContent = pad(m); cells.s.textContent = pad(Math.floor(diff / 1e3));
  }
  tick(); setInterval(tick, 1000);
}

function initReveal() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('is-visible'); io.unobserve(en.target); } });
  }, { threshold: .12 });
  $$('.reveal').forEach(el => io.observe(el));
  const counters = $$('[data-count]');
  const cio = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      cio.unobserve(en.target);
      const el = en.target, end = Number(el.dataset.count), suf = el.dataset.suffix || '';
      const t0 = performance.now(), dur = 1400;
      (function step(t) {
        const p = Math.min(1, (t - t0) / dur), ease = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(end * ease) + suf;
        if (p < 1) requestAnimationFrame(step);
      })(t0);
    });
  }, { threshold: .5 });
  counters.forEach(c => cio.observe(c));
}

function initMap() {
  $('#loadMap').addEventListener('click', () => {
    const box = $('#mapBox');
    box.innerHTML = '<iframe src="https://yandex.ru/map-widget/v1/?text=' + encodeURIComponent('Крымск, улица Ленина, 231') + '&z=17" title="Карта: СКЦ, Крымск" loading="lazy" allowfullscreen></iframe>';
  });
}

/* Размер файла положения показываем, когда сайт открыт через веб-сервер;
   при локальном открытии (file://) остаётся нейтральная подпись. */
function initPoloMeta() {
  const el = $('#poloMeta');
  if (!el || location.protocol === 'file:') return;
  fetch('docs/polo.pdf', { method: 'HEAD' }).then(r => {
    const len = Number(r.headers.get('Content-Length'));
    if (r.ok && len > 0) {
      const mb = len / 1048576;
      el.textContent = 'действующая редакция · ' + (mb >= 1 ? mb.toFixed(1).replace('.', ',') + ' МБ' : Math.round(len / 1024) + ' КБ');
    }
  }).catch(() => {});
}
const AGES = ['4–6 лет', '7–9 лет', '10–12 лет', '13–15 лет', '16–18 лет', '19–25 лет', 'Смешанная'];
const DANCE_STYLES = ['Классический танец', 'Народный танец', 'Эстрадный танец', 'Современный танец (contemporary, jazz-modern)', 'Хип-хоп', 'Степ / чечётка', 'Бальный танец', 'Стилизованный народный танец'];
const VOCAL_NOMS = ['Эстрадный вокал', 'Народный вокал', 'Академический вокал'];

const FORMS = {
  dance: {
    title: 'Хореография',
    common: [
      { id: 'collective', label: 'Название коллектива', req: true, ph: 'Например: ансамбль «Радуга»' },
      { id: 'leader', label: 'ФИО руководителя', req: true, ph: 'Иванова Мария Петровна' },
      { id: 'contact', label: 'Телефон / Email', req: true, ph: '+7 900 000-00-00 или mail@example.ru', check: 'contact' }
    ],
    number: [
      { id: 'title', label: 'Название номера', req: true, ph: 'Например: «Весенний вальс»' },
      { id: 'age', label: 'Возрастная категория', type: 'select', options: AGES, req: true },
      { id: 'style', label: 'Номинация / стиль танца', type: 'select', options: DANCE_STYLES, req: true },
      { id: 'count', label: 'Количество участников', type: 'number', req: true, ph: '12', min: 1, max: 100, check: 'count' },
      { id: 'media', label: 'Ссылка на фонограмму / видео', type: 'url', req: false, ph: 'https://disk.yandex.ru/…', check: 'url' }
    ]
  },
  vocal: {
    title: 'Вокальное искусство',
    common: [
      { id: 'performer', label: 'ФИО солиста или название ансамбля', req: true, ph: 'Петрова Анна или ансамбль «Камертон»' },
      { id: 'teacher', label: 'ФИО педагога', req: true, ph: 'Сидорова Ольга Ивановна' },
      { id: 'phone', label: 'Контактный телефон', type: 'tel', req: true, ph: '+7 900 000-00-00', check: 'phone' }
    ],
    number: [
      { id: 'title', label: 'Название композиции', req: true, ph: 'Например: «Прекрасное далёко»' },
      { id: 'age', label: 'Возрастная категория', type: 'select', options: AGES, req: true },
      { id: 'nom', label: 'Номинация', type: 'select', options: VOCAL_NOMS, req: true },
      { id: 'authors', label: 'Автор музыки / слов', req: true, ph: 'Музыка: …, слова: …' }
    ]
  }
};

function fieldRow(formId, scope, f, idx) {
  const name = `${formId}-${scope}-${f.id}-${idx}`;
  const req = f.req ? ' <span class="req">*</span>' : '';
  let control;
  if (f.type === 'select') {
    control = `<select name="${name}" id="${name}"><option value="" disabled selected>Выберите…</option>${f.options.map(o => `<option>${esc(o)}</option>`).join('')}</select>`;
  } else {
    control = `<input name="${name}" id="${name}" type="${f.type || 'text'}"${f.ph ? ` placeholder="${esc(f.ph)}"` : ''}${f.min ? ` min="${f.min}"` : ''}${f.max ? ` max="${f.max}"` : ''}>`;
  }
  return `<div class="frow" data-field="${f.id}" data-check="${f.check || ''}" data-req="${f.req ? 1 : 0}">
    <label for="${name}">${esc(f.label)}${req}</label>${control}<span class="frow__err"></span></div>`;
}

function numberBlock(formId, idx) {
  const cfg = FORMS[formId];
  return `<div class="numblock" data-num="${idx}">
    <div class="numblock__head"><span class="numblock__title">Номер ${idx}</span>
    ${idx > 1 ? '<button class="numblock__remove" type="button">✕ Удалить номер</button>' : ''}</div>
    ${cfg.number.map(f => fieldRow(formId, 'n' + idx, f, idx)).join('')}
  </div>`;
}

function initForms() {
  Object.keys(FORMS).forEach(formId => {
    const form = $(`#form${formId === 'dance' ? 'Dance' : 'Vocal'}`);
    const cfg = FORMS[formId];
    $('[data-common]', form).innerHTML = cfg.common.map(f => fieldRow(formId, 'c', f, 0)).join('');
    const nums = $('[data-numbers]', form);
    nums.innerHTML = numberBlock(formId, 1);
    $('[data-add]', form).addEventListener('click', () => {
      const idx = $$('.numblock', nums).length + 1;
      nums.insertAdjacentHTML('beforeend', numberBlock(formId, idx));
      const block = nums.lastElementChild;
      $('.numblock__remove', block).addEventListener('click', () => {
        block.remove();
        $$('.numblock', nums).forEach((b, i) => { b.dataset.num = i + 1; $('.numblock__title', b).textContent = 'Номер ' + (i + 1); });
      });
      block.scrollIntoView({ behavior: 'smooth', block: 'center' });
      $('input, select', block).focus({ preventScroll: true });
    });
    form.addEventListener('submit', e => { e.preventDefault(); submitForm(formId, form); });
  });
  const tabD = $('#tabDance'), tabV = $('#tabVocal');
  function setTab(vocal) {
    tabD.classList.toggle('is-active', !vocal); tabV.classList.toggle('is-active', vocal);
    tabD.setAttribute('aria-selected', String(!vocal)); tabV.setAttribute('aria-selected', String(vocal));
    $('#formDance').classList.toggle('is-active', !vocal); $('#formDance').hidden = vocal;
    $('#formVocal').classList.toggle('is-active', vocal); $('#formVocal').hidden = !vocal;
    $('.apply__panel').classList.toggle('is-vocal', vocal);
  }
  tabD.addEventListener('click', () => setTab(false));
  tabV.addEventListener('click', () => setTab(true));
}
const RE_PHONE = /^(\+7|8)?[\s(-]*\d{3}[\s)-]*\d{3}[\s-]*\d{2}[\s-]*\d{2}$/;
const RE_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validateRow(row) {
  const ctrl = $('input, select', row);
  const val = ctrl.value.trim();
  const req = row.dataset.req === '1';
  const check = row.dataset.check;
  let err = '';
  if (req && !val) err = ctrl.tagName === 'SELECT' ? 'Выберите значение из списка' : 'Заполните это поле';
  else if (val && check === 'contact' && !RE_PHONE.test(val) && !RE_EMAIL.test(val)) err = 'Укажите корректный телефон или email';
  else if (val && check === 'phone' && !RE_PHONE.test(val)) err = 'Укажите корректный номер телефона';
  else if (val && check === 'url' && !/^https?:\/\/[^\s]+\.[^\s]{2,}/.test(val)) err = 'Ссылка должна начинаться с http:// или https://';
  else if (val && check === 'count') {
    const n = Number(val);
    if (!Number.isInteger(n) || n < 1 || n > 100) err = 'Введите целое число от 1 до 100';
  }
  row.classList.toggle('is-error', Boolean(err));
  $('.frow__err', row).textContent = err;
  return !err;
}

function collectApplication(formId, form) {
  const cfg = FORMS[formId];
  const common = cfg.common.map(f => ({ label: f.label, value: $(`[name="${formId}-c-${f.id}-0"]`, form).value.trim() }));
  const numbers = $$('.numblock', form).map((b, i) => ({
    n: i + 1,
    fields: cfg.number.map(f => ({ label: f.label, value: $(`[name="${formId}-n${i + 1}-${f.id}-${i + 1}"]`, b).value.trim() }))
  }));
  return { direction: cfg.title, common, numbers };
}

let lastApplication = null;

function submitForm(formId, form) {
  let ok = true, firstBad = null;
  $$('.frow', form).forEach(row => {
    if (!validateRow(row)) { ok = false; if (!firstBad) firstBad = row; }
  });
  if (!ok) {
    firstBad.scrollIntoView({ behavior: 'smooth', block: 'center' });
    $('input, select', firstBad).focus({ preventScroll: true });
    return;
  }
  const app = collectApplication(formId, form);
  lastApplication = app;
  $('#modalSummary').innerHTML =
    `<div class="sum-row"><b>Направление:</b> ${esc(app.direction)}</div>` +
    app.common.map(c => `<div class="sum-row"><b>${esc(c.label)}:</b> ${esc(c.value)}</div>`).join('') +
    app.numbers.map(n => `<div class="sum-row"><b>Номер ${n.n}:</b> ${n.fields.filter(f => f.value).map(f => esc(f.value)).join(' · ')}</div>`).join('');
  $('#confirmModal').hidden = false;
  document.body.style.overflow = 'hidden';
  $('#modalClose').focus();
  confettiBurst();
}

function applicationText(app) {
  const lines = [`ЗАЯВКА НА УЧАСТИЕ · IV ВСЕРОССИЙСКИЙ КОНКУРС-ФЕСТИВАЛЬ «НА ПУЛЬСЕ»`, `Направление: ${app.direction}`, `Дата фестиваля: 5 декабря 2026 · СКЦ, г. Крымск, ул. Ленина, 231`, ''];
  app.common.forEach(c => lines.push(`${c.label}: ${c.value}`));
  app.numbers.forEach(n => {
    lines.push('', `--- Номер ${n.n} ---`);
    n.fields.forEach(f => lines.push(`${f.label}: ${f.value || '—'}`));
  });
  lines.push('', `Отправлено: ${new Date().toLocaleString('ru-RU')}`);
  return lines.join('\r\n');
}

function initModal() {
  const modal = $('#confirmModal');
  const close = () => { modal.hidden = true; document.body.style.overflow = ''; };
  $('#modalClose').addEventListener('click', close);
  modal.addEventListener('click', e => { if (e.target === modal) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !modal.hidden) close(); });
  $('#modalDownload').addEventListener('click', () => {
    if (!lastApplication) return;
    const blob = new Blob(['\ufeff' + applicationText(lastApplication)], { type: 'text/plain;charset=utf-8' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'zayavka-' + (lastApplication.direction === 'Хореография' ? 'horeografiya' : 'vokal') + '.txt';
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 4000);
  });
  document.addEventListener('input', e => {
    const row = e.target.closest('.frow');
    if (row && row.classList.contains('is-error')) validateRow(row);
  });
}

function confettiBurst() {
  const canvas = $('#confetti'), ctx = canvas.getContext('2d');
  canvas.width = innerWidth; canvas.height = innerHeight;
  const colors = ['#E60C80', '#15B3AF', '#F39315', '#B5CD24', '#F2C230', '#A6408C', '#2D9CDB'];
  const parts = Array.from({ length: 170 }, () => ({
    x: innerWidth / 2 + (Math.random() - .5) * innerWidth * .5,
    y: innerHeight * .3,
    vx: (Math.random() - .5) * 14, vy: -Math.random() * 13 - 4,
    w: 6 + Math.random() * 8, h: 8 + Math.random() * 8,
    rot: Math.random() * Math.PI, vr: (Math.random() - .5) * .3,
    color: colors[Math.floor(Math.random() * colors.length)]
  }));
  const t0 = performance.now();
  (function frame(t) {
    const el = t - t0;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    parts.forEach(p => {
      p.vy += .32; p.x += p.vx; p.y += p.vy; p.vx *= .99; p.rot += p.vr;
      ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.rot);
      ctx.globalAlpha = Math.max(0, 1 - el / 2800);
      ctx.fillStyle = p.color; ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    });
    if (el < 2800) requestAnimationFrame(frame);
    else ctx.clearRect(0, 0, canvas.width, canvas.height);
  })(t0);
}

document.addEventListener('DOMContentLoaded', () => {
  renderTeam(); renderJury(); renderArchive();
  bindPhotos(document);
  initGallery(); initNav(); initCountdown(); initMap(); initPoloMeta(); initForms(); initModal();
  initReveal();
});
