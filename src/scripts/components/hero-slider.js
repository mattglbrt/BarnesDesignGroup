/**
 * Hero Slider Component
 *
 * Handles the full-screen hero image slider with:
 * - Previous/Next navigation
 * - Dot pagination
 * - Keyboard navigation (arrow keys)
 * - Circular navigation (wraps around)
 */

/**
 * Initialize hero slider
 * Only runs if slides are found on the page
 */
export function initHeroSlider() {
  const slides = Array.from(document.querySelectorAll('[data-slide]'));
  const prev = document.querySelector('[data-hero-prev]');
  const next = document.querySelector('[data-hero-next]');
  const dots = Array.from(document.querySelectorAll('[data-dot]'));

  // Guard clause: Exit if no slides found
  if (!slides.length || !prev || !next || !dots.length) {
    return;
  }

  let index = 0;

  /**
   * Update dot styling to show active slide
   * Active dot: 18px width, full white
   * Inactive dots: 10px width, 50% white
   */
  function setActiveDot(i) {
    dots.forEach((d, di) => {
      if (di === i) {
        d.classList.remove('bg-white/50');
        d.classList.add('bg-white');
        d.style.width = '18px';
        d.style.borderRadius = '9999px';
      } else {
        d.classList.add('bg-white/50');
        d.classList.remove('bg-white');
        d.style.width = '10px';
        d.style.borderRadius = '9999px';
      }
    });
  }

  /**
   * Show slide at index with circular navigation
   * Updates opacity for smooth crossfade
   */
  function showSlide(i) {
    index = (i + slides.length) % slides.length;
    slides.forEach((img, idx) => {
      img.style.opacity = idx === index ? '1' : '0';
    });
    setActiveDot(index);
  }

  // Event listeners
  prev.addEventListener('click', () => showSlide(index - 1));
  next.addEventListener('click', () => showSlide(index + 1));
  dots.forEach((d, i) => d.addEventListener('click', () => showSlide(i)));

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') showSlide(index - 1);
    if (e.key === 'ArrowRight') showSlide(index + 1);
  });

  // Initialize first slide
  showSlide(0);
}
