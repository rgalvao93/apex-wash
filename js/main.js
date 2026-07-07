const navToggle = document.getElementById('navToggle');
const siteNav = document.getElementById('siteNav');

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  siteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const fiberPanel = document.getElementById('fiberPanel');

if (fiberPanel && matchMedia('(hover: hover)').matches) {
  fiberPanel.addEventListener('pointermove', (event) => {
    const rect = fiberPanel.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    fiberPanel.style.setProperty('--mx', `${x}%`);
    fiberPanel.style.setProperty('--my', `${y}%`);
    fiberPanel.classList.add('is-tracking');
  });

  fiberPanel.addEventListener('pointerleave', () => {
    fiberPanel.classList.remove('is-tracking');
  });
}
