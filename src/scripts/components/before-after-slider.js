/**
 * Before/After Comparison Slider Component
 *
 * Interactive image comparison slider with:
 * - Mouse drag support
 * - Touch support for mobile
 * - Keyboard navigation (arrow keys)
 * - Accessible range input
 * - Smooth position updates with requestAnimationFrame
 */

/**
 * Initialize before/after comparison slider
 * Only runs if compare element exists
 */
export function initBeforeAfterSlider() {
  const compare = document.querySelector('.compare-slider');

  // Guard clause: Exit if compare slider not found
  if (!compare) {
    return;
  }

  const afterLayer = compare.querySelector('[data-compare-after]');
  const divider = compare.querySelector('[data-compare-divider]');
  const knob = compare.querySelector('[data-compare-knob]');
  const range = compare.querySelector('[data-compare-range]');

  // Guard clause: Exit if any required element is missing
  if (!afterLayer || !divider || !knob || !range) {
    return;
  }

  let isDragging = false;
  let currentPercent = 50;
  let animationFrameId = null;

  /**
   * Update DOM elements with current position
   * Uses requestAnimationFrame for smooth rendering
   */
  function updatePosition(pct) {
    currentPercent = Math.max(0, Math.min(pct, 100));

    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
    }

    animationFrameId = requestAnimationFrame(() => {
      afterLayer.style.width = currentPercent + '%';
      divider.style.left = currentPercent + '%';
      knob.style.left = currentPercent + '%';
      range.value = currentPercent;
      knob.setAttribute('aria-valuenow', Math.round(currentPercent));
    });
  }

  /**
   * Set slider position based on mouse/touch X coordinate
   * Calculates percentage within container bounds
   */
  function setPositionByClientX(clientX) {
    const rect = compare.querySelector('[data-compare-inner]').getBoundingClientRect();
    let x = clientX - rect.left;
    x = Math.max(0, Math.min(x, rect.width));
    const pct = (x / rect.width) * 100;
    updatePosition(pct);
  }

  /**
   * Set slider position by percentage value
   * Used for keyboard and range input control
   */
  function setPositionByPercent(pct) {
    updatePosition(pct);
  }

  /**
   * Start dragging interaction
   * Handles both mouse and touch events
   */
  function startDrag(e) {
    isDragging = true;
    document.body.style.cursor = 'ew-resize';
    document.body.style.userSelect = 'none';

    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    setPositionByClientX(clientX);
    e.preventDefault();
  }

  /**
   * Handle drag movement
   */
  function onMove(e) {
    if (!isDragging) return;

    e.preventDefault();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    setPositionByClientX(clientX);
  }

  /**
   * End dragging interaction
   */
  function endDrag() {
    if (isDragging) {
      isDragging = false;
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    }
  }

  // Initialize to 50% position
  setPositionByPercent(50);

  // Mouse event listeners
  compare.addEventListener('mousedown', startDrag);
  window.addEventListener('mousemove', onMove);
  window.addEventListener('mouseup', endDrag);

  // Touch event listeners
  compare.addEventListener('touchstart', startDrag, { passive: false });
  window.addEventListener('touchmove', onMove, { passive: false });
  window.addEventListener('touchend', endDrag);

  // Keyboard navigation on knob
  knob.addEventListener('keydown', (e) => {
    const step = 2; // percent per keypress
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      setPositionByPercent(currentPercent - step);
    }
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      setPositionByPercent(currentPercent + step);
    }
  });

  // Range input sync
  range.addEventListener('input', (e) => {
    setPositionByPercent(parseFloat(e.target.value));
  });
}
