/**
 * Lucide Icons Initialization
 *
 * Initializes Lucide icons used throughout Barnes Design Group site
 * Only imports icons that are actually used to minimize bundle size
 */

import { createIcons } from 'lucide';

// Import only the icons used in the site (24 total)
import {
  // Navigation Icons
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Minus,

  // Interactive Elements
  ChevronsLeftRight,
  Hand,

  // Values/Features Icons (About page)
  Star,
  ShieldCheck,
  Medal,
  BadgeCheck,
  Heart,
  Binoculars,
  Palette,
  Handshake,
  Layers,
  Infinity,
  Target,
  Sparkle,
  Sparkles,

  // General Icons
  Check,
  Compass,
  Users,
} from 'lucide';

/**
 * Initialize Lucide icons
 * Converts all elements with data-lucide attribute to SVG icons
 */
export function initLucideIcons() {
  createIcons({
    icons: {
      // Navigation
      ArrowRight,
      ArrowUpRight,
      ChevronLeft,
      ChevronRight,
      Minus,

      // Interactive
      ChevronsLeftRight,
      Hand,

      // Values/Features
      Star,
      ShieldCheck,
      Medal,
      BadgeCheck,
      Heart,
      Binoculars,
      Palette,
      Handshake,
      Layers,
      Infinity,
      Target,
      Sparkle,
      Sparkles,

      // General
      Check,
      Compass,
      Users,
    },
    // Custom attributes for all icons
    attrs: {
      'stroke-width': 2,
    },
    // Name transformation (kebab-case to PascalCase)
    nameAttr: 'data-lucide',
  });
}
