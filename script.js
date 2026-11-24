const projects = [
  {
    id: 'vrs',
    name: 'VRS Translink',
    category: 'realworld',
    categoryLabel: 'Real-world project',
    role: 'Founding Member · Backend Developer',
    accent: '#7b68c8',
    url: 'http://vrstranslink.com/',
    repo: null,
    description: 'Employee transportation software for organizations, drivers, vendors, and daily commutes.',
    details: 'Contributed to the overall establishment of the platform and worked primarily on backend development. The system supports employee transportation operations through organization, driver, vendor, route, tracking, analytics, and SOS workflows.',
    tags: ['MERN', 'Backend systems', 'Live tracking', 'Logistics'],
    facts: [
      ['Role', 'Founding member — backend-focused'],
      ['Stack', 'MongoDB, Express, React, Node.js'],
      ['Domain', 'Employee transportation and operations'],
    ],
  },
  {
    id: 'mend',
    name: 'Mend Hospitality',
    category: 'realworld',
    categoryLabel: 'Real-world project',
    role: 'Founding Member · Backend Developer',
    accent: '#c05a8e',
    url: 'https://mendhospitality.in/',
    repo: null,
    description: 'A hospitality workforce platform built around verified talent, professional identity, and service quality.',
    details: 'Contributed to the overall establishment of Mend and worked primarily on the backend. The platform connects premium hospitality venues with a verified workforce through ratings, professional history, shift workflows, and an identity layer.',
    tags: ['MERN', 'Platform backend', 'Workforce', 'Professional identity'],
    facts: [
      ['Role', 'Founding member — backend-focused'],
      ['Stack', 'MongoDB, Express, React, Node.js'],
      ['Domain', 'Hospitality workforce and service operations'],
    ],
  },
  {
    id: 'garudx',
    name: 'GarudX',
    category: 'realworld',
    categoryLabel: 'Real-world project',
    role: 'Founding Member · Full-Stack Developer',
    accent: '#c98f2d',
    url: 'https://www.garudx.in/',
    repo: null,
    description: 'A source code security scanner: static analysis, dependency risk, and secret detection in one scan.',
    details: 'GarudX scans uploaded source archives across 36 languages with three engines — per-language static analysis, OSV-based dependency scanning, and secret detection combining GitLeaks signatures with a contextual engine. Findings map to CWE and OWASP with file, line, and fix guidance, and scans produce audit-ready PDF and Excel reports. Self-hosted: deployed and operated on my own server, with no code leaving the premises.',
    tags: ['SAST', 'Security scanning', 'Self-hosted', 'Docker'],
    facts: [
      ['Role', 'Founding member — full-stack'],
      ['Engines', 'Static analysis, dependencies, secrets'],
      ['Deployment', 'Self-hosted on own infrastructure'],
    ],
  },
  {
    id: 'restoqr',
    name: 'Mezora',
    category: 'products',
    categoryLabel: 'My product',
    role: 'Solo Founder · Full-Stack Product Builder',
    accent: '#bf4e24',
    url: 'https://mezora.quibits.in/',
    repo: null,
    description: 'A restaurant operating system built from scratch for Indian restaurants.',
    details: 'Mezora connects the guest, kitchen, counter, stock, and owner in one operational flow. Guests scan a table QR, orders reach the kitchen in real time, the counter settles the bill, and the system carries the data into inventory, GST-ready billing, and reports.',
    tags: ['QR ordering', 'Kitchen display', 'POS', 'GST billing'],
    facts: [
      ['Role', 'Solo founder — built from scratch'],
      ['Focus', 'Product architecture, backend workflows, full-stack delivery'],
      ['Surfaces', 'Guest app, admin console, kitchen display, counter POS'],
    ],
  },
  {
    id: 'appointo',
    name: 'Appointo',
    category: 'products',
    categoryLabel: 'My product',
    role: 'Founder · Full-Stack Product Builder',
    accent: '#3e7d8c',
    url: 'https://appointo.quibits.in/',
    repo: null,
    description: 'One platform for every appointment business: bookings, staff schedules, and waitlists.',
    details: 'Appointo lets appointment-driven businesses take bookings online, manage staff schedules, rescheduling, cancellations and waitlists.',
    tags: ['SaaS', 'Bookings', 'Scheduling'],
    facts: [
      ['Role', 'Founder — built from scratch'],
      ['Focus', 'Booking and scheduling'],
      ['Stage', 'Live demo'],
    ],
  },
  {
    id: 'pagefizz',
    name: 'PageFizz',
    category: 'products',
    categoryLabel: 'My product',
    role: 'Founder · Full-Stack Product Builder',
    accent: '#8a76d1',
    url: 'https://pagefizz.quibits.in/',
    repo: null,
    description: 'QR scan-to-print for print shops and stationery counters.',
    details: 'PageFizz replaces WhatsApp and pen-drive document chaos at print counters: customers scan a QR poster, upload from their phone with no app install, and the job lands in one live queue on the shop\u2019s Windows PC with a job code, sound alert, and print-ready preview.',
    tags: ['QR', 'Print queue', 'Windows app', 'No install'],
    facts: [
      ['Role', 'Founder — built from scratch'],
      ['Flow', 'Scan, upload, print'],
      ['Stage', 'Launched'],
    ],
  },
  {
    id: 'vedicvani',
    name: 'VedicVani',
    category: 'side',
    categoryLabel: 'Side project · open source',
    role: 'Builder · React / Node.js',
    accent: '#c98f2d',
    url: 'https://vedic-vani.vercel.app/',
    repo: 'https://github.com/Omkar-Sonawane-23/VedicVani',
    description: 'A full-stack application for serving and exploring Bhagavad Gita content.',
    details: 'VedicVani uses a React frontend and Node.js backend around structured Bhagavad Gita data, creating a focused content experience with a public open-source codebase.',
    tags: ['React', 'Node.js', 'Content API', 'Open source'],
    facts: [
      ['Role', 'Independent builder'],
      ['Focus', 'Content systems and API-backed UX'],
      ['GitHub', '21 stars · 39 forks · 19 contributors'],
    ],
  },
  {
    id: 'codeglimpse',
    name: 'Codeglimpse+',
    category: 'side',
    categoryLabel: 'Side project · open source',
    role: 'Builder · React / Node.js',
    accent: '#bf4e24',
    url: 'https://realtime-code-editor-brown.vercel.app/',
    repo: 'https://github.com/Omkar-Sonawane-23/realtime-code-editor',
    description: 'A collaborative coding workspace for rooms, chat, execution, presence, and shared thinking.',
    details: 'Codeglimpse+ combines a Monaco-powered editor with real-time collaboration, live chat, user presence, file and tab management, multi-language execution, and a drawing board for teaching and brainstorming.',
    tags: ['React', 'Socket.IO', 'Monaco', 'Collaboration'],
    facts: [
      ['Role', 'Independent builder'],
      ['Focus', 'Real-time product interaction'],
      ['Runtime', 'C/C++, Python, Java, JavaScript'],
    ],
  },
  {
    id: 'openreader',
    name: 'OpenReader',
    category: 'side',
    categoryLabel: 'Side project · open source',
    role: 'Builder · React / Vite',
    accent: '#7b68c8',
    url: 'https://open-reader-five.vercel.app/',
    repo: 'https://github.com/Omkar-Sonawane-23/Open-Reader',
    description: 'A web-native home for interactive storybooks — read linear books or walk branching worlds.',
    details: 'OpenReader pairs a distraction-free reader (book-style pagination that adapts to the screen, reading surfaces, bookmarks, progress that persists locally) with choose-your-path stories that track endings across replays. A custom DOM-measuring pagination engine splits prose into pages that fit the reader\u2019s viewport; no account or device lock-in.',
    tags: ['React', 'Vite', 'Interactive fiction', 'Pagination engine'],
    facts: [
      ['Role', 'Independent builder'],
      ['Focus', 'Reading experience and interactive storytelling'],
      ['Stack', 'React 18, Vite 5, hand-rolled CSS'],
    ],
  },
  {
    id: 'routemap',
    name: 'RouteMap',
    category: 'packages',
    categoryLabel: 'Developer package · open source',
    role: 'Builder · TypeScript / JavaScript',
    accent: '#3e7d8c',
    url: 'https://github.com/Omkar-Sonawane-23/routemap',
    repo: 'https://github.com/Omkar-Sonawane-23/routemap',
    description: 'A static-analysis compiler that helps developers understand Express applications in seconds.',
    details: 'RouteMap resolves the request lifecycle across route, middleware, controller, service, repository, and database layers. It produces queryable metadata, documentation, OpenAPI, Postman collections, dependency graphs, and coverage reporting without runtime instrumentation. Distributed as the @routemap/cli package.',
    tags: ['TypeScript', 'Express', 'Static analysis', 'OpenAPI'],
    facts: [
      ['Role', 'Independent builder'],
      ['Package', '@routemap/cli'],
      ['Output', 'Docs, OpenAPI, Postman, graphs, metadata'],
    ],
  },
  {
    id: 'quibits',
    name: 'Quibits IT Solutions',
    category: 'realworld',
    categoryLabel: 'Professional experience',
    role: 'Software Engineer',
    accent: '#8a76d1',
    url: 'http://quibits.vercel.app/',
    repo: null,
    description: 'Software engineering work across client-facing web, application, and digital solutions.',
    details: 'Worked as a Software Engineer on initiatives spanning development, implementation, and delivery, applying modern web technologies and software-development best practices.',
    tags: ['Software engineering', 'Web development', 'Delivery'],
    facts: [
      ['Period', 'Jul 2024 — Mar 2025'],
      ['Focus', 'Client-facing software initiatives'],
      ['Mode', 'Remote'],
    ],
  },
];

const experience = [
  { date: 'Current', role: 'Product Builder', company: 'Mezora + new launches', type: 'Founder-led', description: 'Building and launching real-world products, starting with a restaurant operations system built from scratch.' },
  { date: 'Jul 2024 — Mar 2025', role: 'Software Engineer', company: 'Quibits IT Solutions', type: 'Professional', description: 'Contributed across software development, implementation, and delivery for client-facing digital solutions.' },
  { date: 'Feb 2023 — Dec 2024', role: 'Technical Team Member', company: 'Ad Astra Official', type: 'Community', description: 'Contributed software-development and cybersecurity expertise to technical projects and initiatives.' },
  { date: 'May 2023 — Aug 2023', role: 'Contributor', company: 'GirlScript Summer of Code', type: 'Open source', description: 'Collaborated with developers to improve open-source project code and features.' },
  { date: 'Mar 2022 — Present', role: 'Professional Freelancer', company: 'Self-employed', type: 'Independent', description: 'Delivered web applications, vulnerability assessments, and cybersecurity solutions for client requirements.' },
];

const commands = [
  { icon: '↘', name: 'Jump to selected work', hint: 'See production systems and builds', action: () => scrollToId('work') },
  { icon: '✦', name: 'Meet Mezora', hint: 'Open the founder-led product', action: () => openProject('restoqr') },
  { icon: '◎', name: 'Toggle theme', hint: 'Switch between dark and light', action: () => toggleTheme() },
  { icon: '✉', name: 'Copy email', hint: 'sonawaneomkar2306@gmail.com', action: () => copyEmail() },
  { icon: '↗', name: 'Open GitHub', hint: 'github.com/Omkar-Sonawane-23', action: () => window.open('https://github.com/Omkar-Sonawane-23', '_blank', 'noopener') },
  { icon: '↑', name: 'Back to top', hint: 'Return to the beginning', action: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
];

const root = document.documentElement;
const projectGrid = document.querySelector('#projectGrid');
const timeline = document.querySelector('#timeline');
const modalShell = document.querySelector('#projectModal');
const paletteShell = document.querySelector('#commandPalette');
const paletteInput = document.querySelector('#paletteInput');
const commandList = document.querySelector('#commandList');
const toast = document.querySelector('#toast');
let activeFilter = 'all';
let toastTimer;

function renderProjects(filter = activeFilter) {
  activeFilter = filter;
  const visible = projects.filter((project) => filter === 'all' || project.category === filter);
  projectGrid.innerHTML = visible.map((project, index) => `
    <article class="project-card reveal is-visible" style="--card-accent: ${project.accent}; --reveal-delay: ${index * 45}ms" data-project="${project.id}" tabindex="0" role="button" aria-label="Open ${project.name} details">
      <div class="card-top">
        <div class="card-eyebrow"><i></i>${project.categoryLabel}</div>
        <h3>${project.name}</h3>
        <p>${project.description}</p>
      </div>
      <div class="card-bottom">
        <span class="card-role">${project.role}</span>
        <div class="tag-list">${project.tags.slice(0, 2).map((tag) => `<span class="tag">${tag}</span>`).join('')}</div>
      </div>
    </article>
  `).join('');

  projectGrid.querySelectorAll('[data-project]').forEach((card) => {
    card.addEventListener('click', () => openProject(card.dataset.project));
    card.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openProject(card.dataset.project);
      }
    });
  });
}

function renderTimeline() {
  timeline.innerHTML = experience.map((item) => `
    <div class="timeline-item">
      <div class="timeline-date">${item.date}</div>
      <div><div class="timeline-role">${item.role}</div><div class="timeline-company">${item.company}</div></div>
      <p class="timeline-description">${item.description}</p>
      <div class="timeline-kind">${item.type}</div>
    </div>
  `).join('');
}

function openProject(id) {
  const project = projects.find((item) => item.id === id);
  if (!project) return;
  document.querySelector('#modalCategory').textContent = project.categoryLabel;
  document.querySelector('#modalTitle').textContent = project.name;
  document.querySelector('#modalRole').textContent = project.role;
  document.querySelector('#modalDescription').textContent = project.details;
  document.querySelector('#modalDetails').innerHTML = project.facts.map(([label, value]) => `<div class="detail-row"><strong>${label}</strong><span>${value}</span></div>`).join('');
  document.querySelector('#modalTags').innerHTML = project.tags.map((tag) => `<span class="tag">${tag}</span>`).join('');
  const link = document.querySelector('#modalLink');
  link.href = project.url;
  link.textContent = project.url.includes('github.com') ? 'Open repository ↗' : 'Visit live ↗';
  const repoLink = document.querySelector('#modalRepo');
  if (project.repo && project.repo !== project.url) {
    repoLink.href = project.repo;
    repoLink.style.display = '';
  } else {
    repoLink.style.display = 'none';
  }
  modalShell.classList.add('is-open');
  modalShell.setAttribute('aria-hidden', 'false');
  document.body.classList.add('is-locked');
  document.querySelector('.modal-close').focus();
}

function closeProject() {
  modalShell.classList.remove('is-open');
  modalShell.setAttribute('aria-hidden', 'true');
  if (!paletteShell.classList.contains('is-open')) document.body.classList.remove('is-locked');
}

function renderCommands(query = '') {
  const normalized = query.trim().toLowerCase();
  const filtered = commands.filter((command) => `${command.name} ${command.hint}`.toLowerCase().includes(normalized));
  commandList.innerHTML = filtered.length ? filtered.map((command, index) => `
    <button class="command-item ${index === 0 ? 'is-selected' : ''}" type="button" data-command-index="${commands.indexOf(command)}">
      <span class="command-icon">${command.icon}</span>
      <span class="command-copy"><span class="command-name">${command.name}</span><span class="command-hint">${command.hint}</span></span>
    </button>
  `).join('') : '<p class="palette-label">No matching commands.</p>';
  commandList.querySelectorAll('[data-command-index]').forEach((button) => button.addEventListener('click', () => runCommand(Number(button.dataset.commandIndex))));
}

function openPalette() {
  closeProject();
  paletteShell.classList.add('is-open');
  paletteShell.setAttribute('aria-hidden', 'false');
  document.body.classList.add('is-locked');
  paletteInput.value = '';
  renderCommands();
  requestAnimationFrame(() => paletteInput.focus());
}

function closePalette() {
  paletteShell.classList.remove('is-open');
  paletteShell.setAttribute('aria-hidden', 'true');
  if (!modalShell.classList.contains('is-open')) document.body.classList.remove('is-locked');
}

function runCommand(index) {
  closePalette();
  commands[index]?.action();
}

function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function toggleTheme() {
  const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
  root.dataset.theme = next;
  localStorage.setItem('omkar-theme', next);
  document.querySelector('meta[name="theme-color"]').setAttribute('content', next === 'dark' ? '#16130f' : '#f7f4ee');
  showToast(`${next === 'dark' ? 'Dark' : 'Light'} mode enabled`);
}

function copyEmail() {
  navigator.clipboard?.writeText('sonawaneomkar2306@gmail.com').then(() => showToast('Email copied to clipboard')).catch(() => showToast('sonawaneomkar2306@gmail.com'));
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('is-visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 2300);
}

function setupReveal() {
  const elements = document.querySelectorAll('.reveal:not(.is-visible)');
  if (!('IntersectionObserver' in window)) {
    elements.forEach((element) => element.classList.add('is-visible'));
    return;
  }
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: .12, rootMargin: '0px 0px -50px' });
  elements.forEach((element) => observer.observe(element));
}

function updateScrollUi() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  document.querySelector('#scrollProgress').style.width = `${scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0}%`;
  document.querySelector('#siteHeader').classList.toggle('is-scrolled', window.scrollY > 18);
}

function setupNavigation() {
  document.querySelectorAll('.desktop-nav a').forEach((link) => link.addEventListener('click', () => document.querySelector('.desktop-nav').classList.remove('is-open')));
  const menu = document.querySelector('.menu-toggle');
  menu.addEventListener('click', () => {
    const nav = document.querySelector('.desktop-nav');
    const open = nav.classList.toggle('is-open');
    menu.setAttribute('aria-expanded', String(open));
  });
  document.querySelector('.theme-toggle').addEventListener('click', toggleTheme);
  document.querySelector('.back-top').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

function setupKeyboard() {
  document.addEventListener('keydown', (event) => {
    if (event.key === '/' && document.activeElement?.tagName !== 'INPUT') {
      event.preventDefault();
      openPalette();
    }
    if (event.key === 'Escape') {
      closeProject();
      closePalette();
    }
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      const items = [...commandList.querySelectorAll('.command-item')];
      if (!items.length || !paletteShell.classList.contains('is-open')) return;
      const current = items.findIndex((item) => item.classList.contains('is-selected'));
      const next = event.key === 'ArrowDown' ? (current + 1) % items.length : (current - 1 + items.length) % items.length;
      items.forEach((item) => item.classList.remove('is-selected'));
      items[next].classList.add('is-selected');
      items[next].scrollIntoView({ block: 'nearest' });
    }
    if (event.key === 'Enter' && paletteShell.classList.contains('is-open')) {
      const selected = commandList.querySelector('.command-item.is-selected');
      if (selected) runCommand(Number(selected.dataset.commandIndex));
    }
  });
}

function setupEvents() {
  document.querySelectorAll('[data-filter]').forEach((button) => button.addEventListener('click', () => {
    document.querySelectorAll('[data-filter]').forEach((item) => item.classList.remove('is-active'));
    button.classList.add('is-active');
    renderProjects(button.dataset.filter);
  }));
  document.querySelectorAll('[data-modal-close]').forEach((item) => item.addEventListener('click', closeProject));
  document.querySelectorAll('[data-palette-close]').forEach((item) => item.addEventListener('click', closePalette));
  document.querySelectorAll('[data-command-open]').forEach((item) => item.addEventListener('click', openPalette));
  paletteInput.addEventListener('input', () => renderCommands(paletteInput.value));
}

function init() {
  const savedTheme = localStorage.getItem('omkar-theme');
  if (savedTheme) root.dataset.theme = savedTheme;
  document.querySelector('#year').textContent = new Date().getFullYear();
  renderProjects();
  renderTimeline();
  setupNavigation();
  setupKeyboard();
  setupEvents();
  setupReveal();
  updateScrollUi();
  window.addEventListener('scroll', updateScrollUi, { passive: true });
}

init();
