/* ============================================================
   Logistik Speed Curier — main.js
   JavaScript comun pentru toate paginile
   ============================================================ */

document.documentElement.classList.add('js');

window.addEventListener('DOMContentLoaded', function () {

  /* --- Hamburger menu --- */
  const menuBtn    = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobileMenu');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', function () {
      mobileMenu.classList.toggle('open');
      const isOpen = mobileMenu.classList.contains('open');
      menuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    document.querySelectorAll('.mobile-menu a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* --- Reveal la scroll (IntersectionObserver) --- */
  const revealItems = document.querySelectorAll('.reveal');

  if (!('IntersectionObserver' in window)) {
    revealItems.forEach(function (el) { el.classList.add('visible'); });
    return;
  }

  const observer = new IntersectionObserver(function (entries, obs) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  revealItems.forEach(function (el) { observer.observe(el); });

  /* --- Cookie banner --- */
  const box = document.getElementById('cookieBox');
  if (box) {
    const saved = localStorage.getItem('logistik_cookie_consent');
    if (!saved) box.classList.add('show');
    document.querySelectorAll('[data-cookie]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        localStorage.setItem('logistik_cookie_consent', btn.getAttribute('data-cookie'));
        box.classList.remove('show');
      });
    });
  }

});
