// ── Mobile nav ─────────────────────────────────────────
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');
if (navToggle) {
  navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));
}

// ── Scroll fade-in ──────────────────────────────────────
const faders = document.querySelectorAll('.fade-in');
if ('IntersectionObserver' in window) {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const siblings = entry.target.parentElement.querySelectorAll('.fade-in');
      let delay = 0;
      siblings.forEach((el, i) => { if (el === entry.target) delay = i * 80; });
      setTimeout(() => entry.target.classList.add('visible'), delay);
      obs.unobserve(entry.target);
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -32px 0px' });
  faders.forEach(el => obs.observe(el));
} else {
  faders.forEach(el => el.classList.add('visible'));
}

// ── Project tabs ────────────────────────────────────────
const tabBtns = document.querySelectorAll('.tab-btn');
if (tabBtns.length) {
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const target = btn.dataset.tab;
      document.querySelectorAll('.tab-panel').forEach(panel => {
        panel.classList.remove('active');
      });
      document.getElementById('tab-' + target).classList.add('active');
    });
  });
}

// ── Publication filters ─────────────────────────────────
const filterBtns = document.querySelectorAll('.filter-btn');
if (filterBtns.length) {
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      document.querySelectorAll('.pub-entry').forEach(entry => {
        if (filter === 'all' || entry.dataset.type === filter) {
          entry.style.display = 'grid';
        } else {
          entry.style.display = 'none';
        }
      });
    });
  });
}

// ── CV sidebar active link on scroll ───────────────────
const cvSections = document.querySelectorAll('.cv-section');
const cvNavLinks = document.querySelectorAll('.cv-nav a');
if (cvSections.length && cvNavLinks.length) {
  const markActive = () => {
    let current = '';
    cvSections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 120) current = s.id;
    });
    cvNavLinks.forEach(a => {
      a.classList.remove('active');
      if (a.getAttribute('href') === '#' + current) a.classList.add('active');
    });
  };
  window.addEventListener('scroll', markActive, { passive: true });
}
