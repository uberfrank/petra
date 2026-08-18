// Petra Canart — Relaxation Montréal
// Mobile nav toggle + contact form handling (static, no backend)

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('navToggle');
  const nav = document.getElementById('primaryNav');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });

    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  const form = document.getElementById('contactForm');
  const note = document.getElementById('formNote');

  if (form && note) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      note.textContent = 'Merci ! Ce site est une démonstration statique — pour une vraie réservation, écris à flow@petra-canart.com.';
      form.reset();
    });
  }
});
