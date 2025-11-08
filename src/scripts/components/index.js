/**
 * Component Initializer
 *
 * This file imports and initializes all JavaScript components.
 * Add your component imports and initialization calls here.
 *
 * Pattern:
 * 1. Import component initialization functions
 * 2. Call them in the initComponents() function
 * 3. Export initComponents to be called from main.js
 */

import { initFormHandler } from './form-handler';
import { initLucideIcons } from './lucide-icons';
import { initHeroSlider } from './hero-slider';
import { initBeforeAfterSlider } from './before-after-slider';

/**
 * Initialize all components
 * Called from main.js on DOMContentLoaded
 */
export function initComponents() {
  // Initialize Lucide icons first (required by other components)
  initLucideIcons();

  // Initialize interactive components
  initFormHandler();
  initHeroSlider();
  initBeforeAfterSlider();
}
