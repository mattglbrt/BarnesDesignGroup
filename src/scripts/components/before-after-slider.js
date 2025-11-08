/**
 * Before/After Comparison Slider Component
 *
 * Interactive image comparison slider with:
 * - Mouse drag support
 * - Touch support for mobile
 * - Keyboard navigation (arrow keys)
 * - Accessible range input
 * - Smooth position updates
 */

/**
 * Initialize before/after comparison slider
 * Only runs if compare element exists
 */
export function initBeforeAfterSlider() {
  const compare = document.getElementById('compare');
  const afterLayer = document.getElementById('afterLayer');
  const divider = document.getElementById('divider');
  const knob = document.getElementById('knob');
  const range = document.getElementById('compareRange');

  // Guard clause: Exit if compare slider not found
  if (!compare || !afterLayer || !divider || !knob || !range) {
    return;
  }

  let isDragging = false;

  /**
   * Set slider position based on mouse/touch X coordinate
   * Calculates percentage within container bounds
   */
  function setPositionByClientX(clientX) {
    const rect = compare.querySelector('div.relative.w-full').getBoundingClientRect();
    let x = clientX - rect.left;
    x = Math.max(0, Math.min(x, rect.width));
    const pct = (x / rect.width) * 100;
    afterLayer.style.width = pct + '%';
    divider.style.left = pct + '%';
    knob.style.left = pct + '%';
    range.value = pct;
  }

  /**
   * Set slider position by percentage value
   * Used for keyboard and range input control
   */
  function setPositionByPercent(pct) {
    pct = Math.max(0, Math.min(pct, 100));
    afterLayer.style.width = pct + '%';
    divider.style.left = pct + '%';
    knob.style.left = pct + '%';
  }

  /**
   * Start dragging interaction
   * Handles both mouse and touch events
   */
  function startDrag(e) {
    isDragging = true;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    setPositionByClientX(clientX);
    e.preventDefault();
  }

  /**
   * Handle drag movement
   */
  function onMove(e) {
    if (!isDragging) return;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    setPositionByClientX(clientX);
  }

  /**
   * End dragging interaction
   */
  function endDrag() {
    isDragging = false;
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
      setPositionByPercent(parseFloat(range.value) - step);
      range.value = parseFloat(range.value) - step;
    }
    if (e.key === 'ArrowRight') {
      setPositionByPercent(parseFloat(range.value) + step);
      range.value = parseFloat(range.value) + step;
    }
  });

  // Range input sync
  range.addEventListener('input', (e) => {
    setPositionByPercent(parseFloat(e.target.value));
  });
}
