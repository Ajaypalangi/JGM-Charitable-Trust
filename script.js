// ===========================
// JGM CHARITABLE TRUST – JS
// ===========================

document.addEventListener('DOMContentLoaded', function () {

  // ---- Preloader ----
  const preloader = document.getElementById('preloader');
  window.addEventListener('load', () => {
    setTimeout(() => {
      preloader.classList.add('hidden');
    }, 1200);
  });

  // ---- Navbar Scroll Effect ----
  const navbar = document.getElementById('navbar');
  function handleNavScroll() {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', handleNavScroll);
  handleNavScroll();

  // ---- Mobile Hamburger ----
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  // Close nav on link click (mobile)
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
    });
  });

  // ---- Active Nav Link on Scroll ----
  const sections = document.querySelectorAll('section[id]');
  const navLinksAll = document.querySelectorAll('.nav-link');
  function updateActiveLink() {
    let current = '';
    sections.forEach(sec => {
      const sectionTop = sec.getBoundingClientRect().top;
      if (sectionTop <= 120) current = sec.id;
    });
    navLinksAll.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  }
  window.addEventListener('scroll', updateActiveLink);

  // ---- Scroll to Top Button ----
  const scrollTopBtn = document.getElementById('scrollTop');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) scrollTopBtn.classList.add('show');
    else scrollTopBtn.classList.remove('show');
  });
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ---- Counter Animation ----
  function animateCounter(el, target, duration) {
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { start = target; clearInterval(timer); }
      el.textContent = Math.floor(start);
    }, 16);
  }

  let countersStarted = false;
  function startCounters() {
    if (countersStarted) return;
    const statsBar = document.querySelector('.stats-bar');
    if (!statsBar) return;
    const rect = statsBar.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      countersStarted = true;
      document.querySelectorAll('.stat-item').forEach(item => {
        const target = parseInt(item.dataset.target);
        const counter = item.querySelector('.counter');
        animateCounter(counter, target, 1800);
      });
    }
  }
  window.addEventListener('scroll', startCounters);
  startCounters();

  // ---- Scroll Reveal ----
  function addRevealClasses() {
    const revealTargets = document.querySelectorAll(
      '.mvv-card, .program-card, .credential-card, .about-highlights .highlight-item, .gallery-item, .stat-item, .contact-item'
    );
    revealTargets.forEach((el, i) => {
      el.classList.add('reveal');
      el.style.transitionDelay = (i % 4) * 0.1 + 's';
    });
  }
  addRevealClasses();

  function revealOnScroll() {
    document.querySelectorAll('.reveal').forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 60) {
        el.classList.add('visible');
      }
    });
  }
  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();

  // ---- Smooth Scroll for all anchor links ----
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offsetTop = target.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      }
    });
  });

});

// ---- Contact Form Handler ----
function handleContactForm(e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value.trim();

  // Compose WhatsApp message
  const waMessage = encodeURIComponent(
    `*JGM Charitable Trust – Website Inquiry*%0A%0A` +
    `Name: ${name}%0APhone: ${phone}%0ASubject: ${subject}%0A%0AMessage: ${message}`
  );
  const waUrl = `https://wa.me/916302416456?text=${waMessage}`;

  // Show success and open WhatsApp
  const successEl = document.getElementById('formSuccess');
  successEl.style.display = 'flex';
  document.getElementById('contactForm').reset();
  setTimeout(() => { window.open(waUrl, '_blank'); }, 500);
  setTimeout(() => { successEl.style.display = 'none'; }, 5000);
}

// ---- Copy UPI ID ----
function copyUpiId() {
  const upiId = document.getElementById('upiIdText').textContent;
  const copiedMsg = document.getElementById('upiCopied');
  navigator.clipboard.writeText(upiId).then(() => {
    copiedMsg.style.display = 'flex';
    setTimeout(() => { copiedMsg.style.display = 'none'; }, 2500);
  }).catch(() => {
    // Fallback for older browsers
    const ta = document.createElement('textarea');
    ta.value = upiId;
    ta.style.position = 'fixed'; ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    copiedMsg.style.display = 'flex';
    setTimeout(() => { copiedMsg.style.display = 'none'; }, 2500);
  });
}

// ==== LIGHTBOX FUNCTIONALITY ====
document.addEventListener('DOMContentLoaded', function () {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxClose = document.getElementById('lightboxClose');

  if (lightbox) {
    document.querySelectorAll('.gallery-item img').forEach(img => {
      img.addEventListener('click', () => {
        const captionElem = img.closest('.gallery-item').querySelector('.gallery-caption span');
        lightbox.classList.add('active');
        lightboxImg.src = img.src;
        lightboxCaption.textContent = captionElem ? captionElem.textContent : '';
        document.body.style.overflow = 'hidden'; // Disable scroll on body
      });
    });

    const closeLightbox = () => {
      lightbox.classList.remove('active');
      document.body.style.overflow = 'auto'; // Re-enable scroll
    };

    lightboxClose.addEventListener('click', closeLightbox);

    lightbox.addEventListener('click', (e) => {
      if (e.target !== lightboxImg) {
        closeLightbox();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        closeLightbox();
      }
    });
  }
});
