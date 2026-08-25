/* ============================================
   HAPPY BIRTHDAY KA NENA — SCRIPT
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  initStars();
  initOpening();
  initMusic();
  initGallery();
  initScrollReveal();
  initShootingStars();
  initFloatingOrbs();
  initHeroParticles();
  initHeroPhotoSparkles();
});

/* ---------- MOBILE DETECTION ---------- */
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 768;

/* ---------- CELESTIAL PALETTES ---------- */
const GLOW_COLORS = [
  'rgba(240, 194, 127, 0.9)', // Warm celestial gold
  'rgba(248, 180, 200, 0.9)', // Angelic soft pink
  'rgba(155, 143, 245, 0.9)', // Dreamy lavender
  'rgba(126, 200, 227, 0.9)', // Celestial cyan
  'rgba(255, 255, 255, 0.95)',// Diamond white
  'rgba(253, 212, 228, 0.85)',// Light rose
];

/* ---------- RICH STARS GENERATION ---------- */
function initStars() {
  const openingContainer = document.getElementById('opening-stars-container');
  const globalContainer = document.getElementById('global-stars');
  const closingContainer = document.getElementById('closing-stars-container');
  const dustContainer = document.getElementById('celestial-dust-container');

  // Reduce counts on mobile for performance
  const m = isMobile ? 0.4 : 1;

  // Dense, thickened stars for Opening Screen
  if (openingContainer) {
    generateRichStars(openingContainer, {
      dots:     Math.floor(220 * m),
      sparkles: Math.floor(30  * m),
      halos:    Math.floor(15  * m),
      dust:     Math.floor(40  * m)
    });
  }

  // Persistent Everywhere Stars covering the entire website
  if (globalContainer) {
    generateRichStars(globalContainer, {
      dots:     Math.floor(280 * m),
      sparkles: Math.floor(35  * m),
      halos:    Math.floor(18  * m),
      dust:     Math.floor(50  * m)
    });
  }

  // Dense, thickened stars for Closing Section
  if (closingContainer) {
    generateRichStars(closingContainer, {
      dots:     Math.floor(160 * m),
      sparkles: Math.floor(25  * m),
      halos:    Math.floor(12  * m),
      dust:     Math.floor(35  * m)
    });
  }

  // Global floating celestial dust
  if (dustContainer) {
    generateCelestialDust(dustContainer, Math.floor(40 * m));
  }
}

function generateRichStars(container, config) {
  if (!container) return;

  const fragment = document.createDocumentFragment();

  // 1. Classic Dot Stars with Glowing Halos
  for (let i = 0; i < (config.dots || 100); i++) {
    const star = document.createElement('div');
    star.className = 'star dot';

    const size = Math.random() * 3 + 1.2;
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const duration = Math.random() * 3 + 1.8;
    const delay = Math.random() * 5;
    const color = GLOW_COLORS[Math.floor(Math.random() * GLOW_COLORS.length)];
    const minOp = (Math.random() * 0.25 + 0.15).toFixed(2);
    const maxOp = (Math.random() * 0.35 + 0.65).toFixed(2);

    star.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${x}%;
      top: ${y}%;
      --duration: ${duration}s;
      --delay: ${delay}s;
      --glow-color: ${color};
      --min-op: ${minOp};
      --max-op: ${maxOp};
    `;
    fragment.appendChild(star);
  }

  // 2. Four-Point Sparkle Cross Stars ✨
  for (let i = 0; i < (config.sparkles || 20); i++) {
    const sparkle = document.createElement('div');
    sparkle.className = 'star sparkle-star';

    const size = Math.random() * 14 + 10;
    const x = Math.random() * 96 + 2;
    const y = Math.random() * 96 + 2;
    const duration = Math.random() * 3.5 + 2.5;
    const delay = Math.random() * 4;
    const color = GLOW_COLORS[Math.floor(Math.random() * GLOW_COLORS.length)];

    sparkle.style.cssText = `
      --size: ${size}px;
      left: ${x}%;
      top: ${y}%;
      --duration: ${duration}s;
      --delay: ${delay}s;
      --glow-color: ${color};
    `;
    fragment.appendChild(sparkle);
  }

  // 3. Giant Celestial Halo Stars (Beacons)
  for (let i = 0; i < (config.halos || 10); i++) {
    const halo = document.createElement('div');
    halo.className = 'star halo-star';

    const size = Math.random() * 4.5 + 3.5;
    const x = Math.random() * 94 + 3;
    const y = Math.random() * 94 + 3;
    const duration = Math.random() * 4 + 3;
    const delay = Math.random() * 4;
    const color = GLOW_COLORS[Math.floor(Math.random() * GLOW_COLORS.length)];

    halo.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${x}%;
      top: ${y}%;
      --duration: ${duration}s;
      --delay: ${delay}s;
      --glow-color: ${color};
    `;
    fragment.appendChild(halo);
  }

  // 4. Micro Celestial Stardust
  for (let i = 0; i < (config.dust || 20); i++) {
    const dust = document.createElement('div');
    dust.className = 'celestial-dust';

    const size = Math.random() * 2.5 + 1;
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const duration = Math.random() * 6 + 5;
    const delay = Math.random() * 5;
    const color = GLOW_COLORS[Math.floor(Math.random() * GLOW_COLORS.length)];

    dust.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${x}%;
      top: ${y}%;
      --duration: ${duration}s;
      --delay: ${delay}s;
      --dust-color: ${color};
    `;
    fragment.appendChild(dust);
  }

  container.appendChild(fragment);
}

function generateCelestialDust(container, count) {
  if (!container) return;
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < count; i++) {
    const dust = document.createElement('div');
    dust.className = 'celestial-dust';

    const size = Math.random() * 2.5 + 1;
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const duration = Math.random() * 7 + 6;
    const delay = Math.random() * 6;
    const color = GLOW_COLORS[Math.floor(Math.random() * GLOW_COLORS.length)];

    dust.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${x}%;
      top: ${y}%;
      --duration: ${duration}s;
      --delay: ${delay}s;
      --dust-color: ${color};
    `;
    fragment.appendChild(dust);
  }
  container.appendChild(fragment);
}

/* ---------- OPENING SCREEN ---------- */
function initOpening() {
  const opening = document.getElementById('opening');
  const btn = document.querySelector('.opening-btn');

  if (!opening || !btn) return;

  document.body.classList.add('no-scroll');

  // Spawn opening shooting stars periodically while in opening screen
  const openingShootingInterval = setInterval(() => {
    if (opening.classList.contains('hidden')) {
      clearInterval(openingShootingInterval);
      return;
    }
    const container = opening.querySelector('.opening-shooting-stars');
    if (container) spawnShootingStar(container, { minTail: 140, maxTail: 220 });
  }, 2200);

  // Initial opening shooting stars
  setTimeout(() => {
    const container = opening.querySelector('.opening-shooting-stars');
    if (container) spawnShootingStar(container, { minTail: 150, maxTail: 240 });
  }, 600);

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    clearInterval(openingShootingInterval);
    dismissOpening();
  });

  opening.addEventListener('click', () => {
    clearInterval(openingShootingInterval);
    dismissOpening();
  });
}

function dismissOpening() {
  const opening = document.getElementById('opening');
  if (!opening || opening.classList.contains('hidden')) return;

  opening.classList.add('hidden');
  document.body.classList.remove('no-scroll');

  // Start music
  const audio = document.getElementById('bg-music');
  if (audio) {
    audio.volume = 0.5;
    audio.play().catch(() => {
      // autoplay blocked, user can use music button
    });
    const musicBtn = document.getElementById('music-toggle');
    if (musicBtn) {
      musicBtn.classList.add('playing');
    }
  }

  // Show music button
  setTimeout(() => {
    const musicBtn = document.getElementById('music-toggle');
    if (musicBtn) musicBtn.classList.add('visible');
  }, 600);

  // Trigger confetti
  setTimeout(() => {
    createConfetti();
  }, 600);

  // Remove opening from DOM after transition
  setTimeout(() => {
    opening.remove();
  }, 1400);
}

/* ---------- MUSIC CONTROL ---------- */
function initMusic() {
  const musicBtn = document.getElementById('music-toggle');
  const audio = document.getElementById('bg-music');

  if (!musicBtn || !audio) return;

  musicBtn.addEventListener('click', () => {
    if (audio.paused) {
      audio.play().catch(() => {});
      musicBtn.textContent = '🎵';
      musicBtn.classList.add('playing');
    } else {
      audio.pause();
      musicBtn.textContent = '🔇';
      musicBtn.classList.remove('playing');
    }
  });

  audio.addEventListener('ended', () => {
    audio.currentTime = 0;
    audio.play().catch(() => {});
  });
}

/* ---------- CONFETTI ---------- */
function createConfetti() {
  const container = document.getElementById('confetti-container');
  if (!container) return;

  const colors = [
    '#f0c27f', // gold
    '#f8b4c8', // pink
    '#6b5ce7', // purple
    '#7ec8e3', // blue
    '#ffffff', // white
    '#9b8ff5', // light purple
    '#fdd4e4', // light pink
  ];

  const shapes = ['rect', 'circle'];
  const count = isMobile ? 50 : 120;

  for (let i = 0; i < count; i++) {
    const piece = document.createElement('div');
    const shape = shapes[Math.floor(Math.random() * shapes.length)];
    piece.classList.add('confetti-piece', shape);

    const size = Math.random() * 8 + 5;
    const x = Math.random() * 100;
    const color = colors[Math.floor(Math.random() * colors.length)];
    const fallDuration = Math.random() * 2 + 2.5;
    const delay = Math.random() * 1.5;
    const drift = (Math.random() - 0.5) * 140;
    const spinDeg = Math.random() * 720 + 360;

    piece.style.cssText = `
      left: ${x}%;
      --size: ${size}px;
      --color: ${color};
      --fall-duration: ${fallDuration}s;
      --delay: ${delay}s;
      --drift: ${drift}px;
      --spin: ${spinDeg}deg;
      background: ${color};
    `;

    container.appendChild(piece);
  }

  setTimeout(() => {
    container.innerHTML = '';
  }, 5500);
}

/* ---------- GALLERY CAROUSEL ---------- */
/* ---------- GALLERY CROSS-FADE ---------- */
function initGallery() {
  const track = document.querySelector('.gallery-track');
  const slides = document.querySelectorAll('.gallery-slide');
  const prevBtn = document.querySelector('.gallery-prev');
  const nextBtn = document.querySelector('.gallery-next');
  const dotsContainer = document.querySelector('.gallery-dots');

  if (!track || slides.length === 0) return;

  let currentIndex = 0;
  const totalSlides = slides.length;

  // Set initial active slide
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === 0);
  });

  if (dotsContainer) {
    slides.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.classList.add('gallery-dot');
      if (i === 0) dot.classList.add('active');
      dot.setAttribute('aria-label', `Foto ${i + 1}`);
      dot.addEventListener('click', () => goToSlide(i, true));
      dotsContainer.appendChild(dot);
    });
  }

  const AUTOPLAY_DELAY = 10000; // 10 seconds per photo

  function resetAutoplay() {
    clearInterval(autoplayInterval);
    autoplayInterval = setInterval(() => {
      goToSlide(currentIndex + 1);
    }, AUTOPLAY_DELAY);
  }

  function goToSlide(index, isManual = false) {
    let nextIndex = index;
    if (nextIndex < 0) nextIndex = totalSlides - 1;
    if (nextIndex >= totalSlides) nextIndex = 0;

    if (nextIndex === currentIndex && isManual) return;

    // Transition slides
    slides[currentIndex]?.classList.remove('active');
    currentIndex = nextIndex;
    slides[currentIndex]?.classList.add('active');

    // Update dots
    const dots = dotsContainer?.querySelectorAll('.gallery-dot');
    dots?.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentIndex);
    });

    if (isManual) {
      resetAutoplay();
    }
  }

  if (prevBtn) prevBtn.addEventListener('click', () => goToSlide(currentIndex - 1, true));
  if (nextBtn) nextBtn.addEventListener('click', () => goToSlide(currentIndex + 1, true));

  let touchStartX = 0;
  let touchEndX = 0;

  track.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  track.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        goToSlide(currentIndex + 1, true);
      } else {
        goToSlide(currentIndex - 1, true);
      }
    }
  }, { passive: true });

  let autoplayInterval = setInterval(() => {
    goToSlide(currentIndex + 1);
  }, AUTOPLAY_DELAY);

  const wrapper = document.querySelector('.gallery-wrapper');
  if (wrapper) {
    wrapper.addEventListener('mouseenter', () => clearInterval(autoplayInterval));
    wrapper.addEventListener('mouseleave', () => {
      resetAutoplay();
    });
    wrapper.addEventListener('touchstart', () => clearInterval(autoplayInterval), { passive: true });
  }
}

/* ---------- SCROLL REVEAL (TWO-WAY CONTINUOUS) ---------- */
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');

  if (!reveals.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        } else {
          // Re-trigger animation when scrolled out and back in
          entry.target.classList.remove('revealed');
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -30px 0px',
    }
  );

  reveals.forEach((el) => observer.observe(el));
}

/* ---------- SHOOTING STARS (MULTI-LAYER & THICK) ---------- */
function initShootingStars() {
  const globalContainer = document.getElementById('global-shooting-stars');
  const closingContainer = document.getElementById('closing-shooting-stars');

  // On mobile, spawn less frequently
  const globalInterval  = isMobile ? 7000  : 3800;
  const closingInterval = isMobile ? 5000  : 2000;

  // Global periodic shooting star across any current section
  if (globalContainer) {
    setInterval(() => {
      spawnShootingStar(globalContainer, { minTail: 120, maxTail: 200 });
    }, globalInterval);

    setTimeout(() => spawnShootingStar(globalContainer, { minTail: 140, maxTail: 220 }), 1500);
  }

  // Closing section shooting stars
  if (closingContainer) {
    setInterval(() => {
      spawnShootingStar(closingContainer, { minTail: 160, maxTail: 260 });
    }, closingInterval);

    if (!isMobile) {
      setTimeout(() => spawnShootingStar(closingContainer, { minTail: 180, maxTail: 280 }), 500);
      setTimeout(() => spawnShootingStar(closingContainer, { minTail: 150, maxTail: 240 }), 1200);
    }
  }
}

function spawnShootingStar(container, options = {}) {
  if (!container) return;

  const star = document.createElement('div');
  star.classList.add('shooting-star');

  const startX = Math.random() * 60;
  const startY = Math.random() * 60;
  const duration = Math.random() * 1 + 1.4;
  const tailLength = Math.random() * ((options.maxTail || 200) - (options.minTail || 120)) + (options.minTail || 120);
  const angle = Math.random() * 20 - 45; // -45deg to -25deg
  const color = GLOW_COLORS[Math.floor(Math.random() * GLOW_COLORS.length)];

  star.style.cssText = `
    left: ${startX}%;
    top: ${startY}%;
    --tail-length: ${tailLength}px;
    --shoot-duration: ${duration}s;
    --angle: ${angle}deg;
    --star-color: ${color};
  `;

  container.appendChild(star);

  setTimeout(() => {
    star.remove();
  }, duration * 1000 + 200);
}

/* ---------- FLOATING ANGELIC ORBS (CLOSING SECTION) ---------- */
function initFloatingOrbs() {
  const container = document.getElementById('floating-orbs-container');
  if (!container) return;

  const count = isMobile ? 7 : 18;
  for (let i = 0; i < count; i++) {
    const orb = document.createElement('div');
    orb.className = 'celestial-orb';

    const size = Math.random() * 16 + 8;
    const x = Math.random() * 90 + 5;
    const bottom = Math.random() * 40 - 20;
    const duration = Math.random() * 6 + 7;
    const delay = Math.random() * 6;
    const color = GLOW_COLORS[Math.floor(Math.random() * GLOW_COLORS.length)];

    orb.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${x}%;
      bottom: ${bottom}%;
      --duration: ${duration}s;
      --delay: ${delay}s;
      --orb-color: ${color};
    `;

    container.appendChild(orb);
  }
}

/* ---------- HERO PARTICLES ---------- */
function initHeroParticles() {
  const container = document.querySelector('.hero-bg-particles');
  if (!container) return;

  const heroParticleCount = isMobile ? 12 : 35;
  for (let i = 0; i < heroParticleCount; i++) {
    const particle = document.createElement('div');
    particle.classList.add('bg-particle');

    const size = Math.random() * 3.5 + 1.2;
    const x = Math.random() * 100;
    const duration = Math.random() * 8 + 5;
    const delay = Math.random() * 6;
    const drift = (Math.random() - 0.5) * 80;
    const color = GLOW_COLORS[Math.floor(Math.random() * GLOW_COLORS.length)];

    particle.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${x}%;
      bottom: -10px;
      background: ${color};
      box-shadow: 0 0 8px ${color};
      animation-duration: ${duration}s;
      animation-delay: ${delay}s;
      --drift: ${drift}px;
    `;

    container.appendChild(particle);
  }
}

/* ---------- DYNAMIC HERO PHOTO SPARKLES ---------- */
function initHeroPhotoSparkles() {
  const container = document.getElementById('hero-sparkles-container');
  if (!container) return;

  const count = isMobile ? 8 : 16;
  const radius = 135; // px distance from center of photo ring

  for (let i = 0; i < count; i++) {
    const angle = (i / count) * (Math.PI * 2);
    // Center is 50% + cos/sin * radius
    const sparkle = document.createElement('div');
    const isCross = i % 2 === 0;

    if (isCross) {
      sparkle.className = 'star sparkle-star';
      const size = Math.random() * 10 + 12;
      sparkle.style.setProperty('--size', `${size}px`);
    } else {
      sparkle.className = 'star dot';
      const size = Math.random() * 3 + 2;
      sparkle.style.width = `${size}px`;
      sparkle.style.height = `${size}px`;
    }

    const duration = Math.random() * 2 + 2;
    const delay = Math.random() * 3;
    const color = GLOW_COLORS[Math.floor(Math.random() * GLOW_COLORS.length)];

    // Calculate position
    const offsetX = Math.cos(angle) * radius;
    const offsetY = Math.sin(angle) * radius;

    sparkle.style.left = `calc(50% + ${offsetX}px)`;
    sparkle.style.top = `calc(50% + ${offsetY}px)`;
    sparkle.style.setProperty('--duration', `${duration}s`);
    sparkle.style.setProperty('--delay', `${delay}s`);
    sparkle.style.setProperty('--glow-color', color);

    container.appendChild(sparkle);
  }
}
