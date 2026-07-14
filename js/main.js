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

const revealPanels = document.querySelectorAll('.mask-reveal');

if (matchMedia('(hover: hover)').matches) {
  revealPanels.forEach((panel) => {
    panel.addEventListener('pointermove', (event) => {
      const rect = panel.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      panel.style.setProperty('--mx', `${x}%`);
      panel.style.setProperty('--my', `${y}%`);
      panel.classList.add('is-tracking');
    });

    panel.addEventListener('pointerleave', () => {
      panel.classList.remove('is-tracking');
    });
  });
}
