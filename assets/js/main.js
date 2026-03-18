// Mobile nav
const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.getElementById('site-nav');
if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const open = siteNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
  });
}

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Basic client-side form guard (optional)
const form = document.querySelector('form[name="order-request"]');
if (form) {
  form.addEventListener('submit', (e) => {
    const hp = form.querySelector('input[name="website"]');
    if (hp && hp.value.trim() !== '') {
      e.preventDefault(); // likely a bot
    }
  });
}
