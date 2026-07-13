document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const mobileNav = document.querySelector('.site-nav--mobile');
  if (toggle && mobileNav) {
    toggle.addEventListener('click', () => {
      const isOpen = mobileNav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  document.addEventListener('click', (e) => {
    document.querySelectorAll('.nav-dropdown[open]').forEach((el) => {
      if (!el.contains(e.target)) el.removeAttribute('open');
    });
  });

  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(contactForm);
      const name = data.get('name') || '';
      const phone = data.get('phone') || '';
      const email = data.get('email') || '';
      const situation = data.get('situation') || '';
      const timeline = data.get('timeline') || '';
      const subject = `Free Assessment Request from ${name}`;
      const body =
        `Name: ${name}\n` +
        `Phone: ${phone}\n` +
        `Email: ${email}\n` +
        `Preferred timeline: ${timeline}\n\n` +
        `Situation:\n${situation}`;
      window.location.href =
        `mailto:AssistedLivingFinder@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
  }
});
