# Barnes Design Group - Design System & Styles Guide

**Last Updated:** 2025-01-08
**Client:** Barnes Design Group (Architecture Firm - Church Specialization)
**Design Philosophy:** Minimalist, sophisticated, image-forward architectural aesthetic

---

## Table of Contents

1. [Design Philosophy](#design-philosophy)
2. [Color System](#color-system)
3. [Typography](#typography)
4. [Spacing & Layout](#spacing--layout)
5. [Component Patterns](#component-patterns)
6. [Interactive Elements](#interactive-elements)
7. [Responsive Design](#responsive-design)
8. [Animation & Transitions](#animation--transitions)

---

## Design Philosophy

### Core Aesthetic Principles

**Minimalist Sophistication**
- Clean, uncluttered layouts with generous whitespace
- Focus on high-quality architectural photography
- Subtle depth cues through shadows and borders
- Professional services branding for church architecture

**Hierarchy & Clarity**
- Clear visual hierarchy with consistent heading scales
- Eyebrow labels for context and category identification
- Strong typography contrast between display and body text
- Image-forward layouts that let projects speak for themselves

**Architectural Character**
- Emphasis on light, materials, and space
- Before/after comparisons to showcase transformation
- Portfolio presentations with sticky navigation
- Values-driven messaging reflecting faith-based mission

---

## Color System

### Primary Palette

**Neutrals (Grayscale System)**
```css
neutral-50:  #fafafa  /* Very light backgrounds */
neutral-100: #f5f5f5  /* Card backgrounds, subtle fills */
neutral-200: #e5e5e5  /* Borders, dividers */
neutral-300: #d4d4d4  /* Hover borders */
neutral-500: #737373  /* Muted text, eyebrows */
neutral-600: #525252  /* Secondary text */
neutral-700: #404040  /* Body text on light */
neutral-800: #262626  /* Strong emphasis */
neutral-900: #171717  /* Primary text, headings */
```

**Foundation Colors**
```css
white:       #ffffff  /* Pure white for backgrounds, buttons */
black:       #0a0a0a  /* Near-black for overlays, text */
```

### Opacity Overlays

**White Overlays** (on dark backgrounds)
```css
white/95  /* Primary CTAs on dark hero images */
white/90  /* Button backgrounds, high contrast elements */
white/85  /* Hero subtitle text */
white/80  /* Navigation links, secondary elements */
white/50  /* Pagination dots inactive state */
white/40  /* Overlay backgrounds */
white/30  /* Subtle overlays */
white/20  /* Border accents on glass buttons */
white/15  /* Very subtle hover states */
white/10  /* Minimal background tints */
```

**Black Overlays** (on light backgrounds or images)
```css
black/60  /* Strong gradient overlays (bottom) */
black/50  /* Mid-strength gradient overlays (top) */
black/40  /* Gradient top sections */
black/30  /* Subtle image darkening */
black/20  /* Gradient middle sections */
black/10  /* Minimal gradient sections */
black/5   /* Very subtle rings and borders */
black/8   /* Subtle shadow rings on cards */
```

### Usage Guidelines

**Backgrounds:**
- Page background: `bg-neutral-50` (light gray)
- Section backgrounds: `bg-white` (pure white)
- Card backgrounds: `bg-white` with `ring-1 ring-black/5`
- Overlay backgrounds: `bg-neutral-900/30` or gradient combinations

**Text:**
- Headings: `text-neutral-900` or `text-white` (on dark)
- Body text: `text-neutral-700` or `text-neutral-800`
- Muted text: `text-neutral-600`
- Eyebrows/labels: `text-neutral-500`
- On dark backgrounds: `text-white/90`, `text-white/85`, `text-white/80`

**Borders:**
- Default: `border-neutral-200`
- Hover: `border-neutral-300` ’ `border-neutral-900`
- Subtle depth: `ring-1 ring-black/5` or `ring-black/8`
- On dark: `border-white/20` or `border-white/30`

---

## Typography

### Font Families

**Primary (Body & UI)**
```css
font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial;
```
- Clean, modern sans-serif
- Used for all body text, navigation, buttons, labels
- Applied at body level in base.twig

**Display (Hero Headings)**
```css
font-family: 'Playfair Display', ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif;
```
- Elegant serif for large hero headings
- Used sparingly for maximum impact
- Applied inline on hero h1 elements

### Type Scale

**Eyebrow Labels** (Category identifiers)
```css
text-[11px] tracking-[0.14em] uppercase font-medium
/* Examples: "ARCHITECTS", "PORTFOLIO", "OUR VISION" */
Color: text-neutral-500 (light bg) or text-white/80 (dark bg)
```

**Body Text**
```css
text-base (16px) sm:text-lg (18px)
leading-relaxed
text-neutral-700 or text-neutral-800
```

**Headings**

**Hero/Display (h1)**
```css
text-4xl sm:text-6xl lg:text-7xl
font-semibold
tracking-tight
leading-[1.04]
font-family: Playfair Display (inline style)
```

**Section Headings (h2)**
```css
text-4xl sm:text-5xl lg:text-6xl
font-semibold
tracking-tight
leading-[1.06]
```

**Sub-headings (h3)**
```css
text-3xl sm:text-4xl lg:text-5xl
font-semibold
tracking-tight
leading-[1.06]
```

**Card Titles (h4)**
```css
text-2xl sm:text-3xl lg:text-4xl
font-semibold
tracking-tight
```

**Small Headings**
```css
text-lg font-semibold tracking-tight  /* Value card titles */
text-base sm:text-lg font-semibold    /* Smaller card headings */
```

**Stats/Numbers**
```css
text-3xl sm:text-4xl font-semibold tracking-tight
```

### Font Weights

- `font-medium` - Eyebrow labels, button text
- `font-semibold` - All headings, emphasized text
- `font-normal` - Body text (default)

### Letter Spacing

- `tracking-[0.14em]` - Eyebrow labels (extra wide)
- `tracking-tight` - All headings (tighter than normal)
- `tracking-normal` - Body text (default)

### Line Heights

- `leading-[1.04]` - Display/hero headings (very tight)
- `leading-[1.06]` - Section headings (tight)
- `leading-relaxed` - Body text paragraphs (comfortable reading)
- `leading-normal` - Default for UI elements

---

## Spacing & Layout

### Container System

**Max Width Container**
```html
<div class="max-w-7xl mx-auto px-6 sm:px-8">
  <!-- Content -->
</div>
```
- `max-w-7xl` (1280px) - Primary content container
- `mx-auto` - Center horizontally
- `px-6 sm:px-8` - Responsive horizontal padding

**Content Width Constraints**
```html
<div class="max-w-3xl">  <!-- ~48rem / 768px for readable text -->
<div class="max-w-4xl">  <!-- ~56rem / 896px for hero text -->
<div class="max-w-2xl">  <!-- ~42rem / 672px for narrow content -->
```

### Section Spacing

**Standard Section Padding**
```css
py-20 sm:py-24 lg:py-28
/* Vertical: 80px ’ 96px ’ 112px responsive */
```

**Reduced Section Padding** (for tighter sections)
```css
py-16 sm:py-20 lg:py-24
/* Vertical: 64px ’ 80px ’ 96px responsive */
```

**Hero Sections**
```css
pt-40 pb-24  /* Top heavy for header clearance */
```

### Grid Systems

**Two-Column Layout**
```html
<div class="grid md:grid-cols-12 gap-12 lg:gap-16 items-center">
  <div class="md:col-span-6"><!-- Left --></div>
  <div class="md:col-span-6"><!-- Right --></div>
</div>
```

**Asymmetric Layout** (Sticky sidebar)
```html
<div class="grid md:grid-cols-12 gap-12 lg:gap-16">
  <aside class="md:col-span-5">
    <div class="md:sticky md:top-24"><!-- Sticky content --></div>
  </aside>
  <div class="md:col-span-7"><!-- Main content --></div>
</div>
```

**Value Cards Grid**
```html
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
  <!-- Cards -->
</div>
```

**Team Grid**
```html
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:grid-cols-5">
  <!-- Team members -->
</div>
```

### Common Gaps

- `gap-2` - Pagination dots, icon spacing
- `gap-3` - List item spacing
- `gap-4` - Small card grids, footer links
- `gap-5` - Value cards, standard card grids
- `gap-6` - Team cards, larger spacing
- `gap-7` - Navigation items
- `gap-8` - Stats grid
- `gap-12 lg:gap-16` - Two-column layouts

---

## Component Patterns

### Buttons

**Primary CTA** (Dark background)
```html
<a href="#" class="inline-flex items-center gap-2 h-11 px-5 rounded-full bg-white/95 text-neutral-900 text-sm hover:bg-white transition shadow-sm">
  Button Text
  <i data-lucide="arrow-up-right" class="w-4 h-4"></i>
</a>
```

**Primary CTA** (Light background)
```html
<a href="#" class="inline-flex items-center gap-2 h-11 px-5 rounded-full bg-white text-neutral-900 text-sm hover:bg-neutral-100 transition shadow-sm border border-white/20">
  Button Text
  <i data-lucide="arrow-up-right" class="w-4 h-4"></i>
</a>
```

**Secondary Button** (Outlined)
```html
<a href="#" class="inline-flex items-center h-11 px-5 gap-2 rounded-full border border-neutral-300 bg-white text-sm hover:border-neutral-900 hover:shadow-sm transition">
  <span class="inline-flex h-5 w-5 items-center justify-center rounded-full border border-neutral-300">
    <i data-lucide="minus" class="w-3.5 h-3.5"></i>
  </span>
  Button Text
  <i data-lucide="arrow-right" class="w-4 h-4"></i>
</a>
```

**Header CTA** (Glassmorphism)
```html
<a href="#" class="inline-flex items-center gap-2 h-10 px-4 rounded-full bg-white/90 backdrop-blur text-neutral-900 text-sm hover:bg-white transition border border-white/20">
  Button Text
  <i data-lucide="arrow-up-right" class="w-3.5 h-3.5"></i>
</a>
```

**Icon Button** (Navigation)
```html
<button class="inline-flex items-center justify-center h-12 w-12 rounded-full bg-white/80 backdrop-blur border border-white/30 text-neutral-900 hover:bg-white transition">
  <i data-lucide="chevron-left" class="w-5 h-5"></i>
</button>
```

### Cards

**Project Card**
```html
<article class="group">
  <div class="text-[11px] tracking-[0.14em] uppercase text-neutral-500 font-medium">
    Category
  </div>
  <h4 class="mt-2 text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight">
    Project Title
  </h4>
  <a href="#" class="mt-5 block overflow-hidden rounded-2xl ring-1 ring-black/5 bg-neutral-100">
    <img src="..." alt="..." class="w-full h-[300px] sm:h-[420px] object-cover transition duration-500 group-hover:scale-[1.03]" />
  </a>
  <div class="mt-3 flex items-center justify-between text-sm text-neutral-600">
    <span>Location</span>
    <span class="inline-flex items-center gap-1 text-neutral-900 font-medium">
      View Project
      <i data-lucide="arrow-right" class="w-4 h-4"></i>
    </span>
  </div>
</article>
```

**Value Card** (Grid)
```html
<div class="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
  <div class="flex items-center justify-between">
    <div class="text-xs font-medium text-neutral-500">01</div>
    <i data-lucide="shield-check" class="w-4.5 h-4.5 text-neutral-700"></i>
  </div>
  <div class="mt-3 text-lg font-semibold tracking-tight">
    Title
  </div>
  <p class="mt-1.5 text-neutral-700 text-sm">
    Description text.
  </p>
</div>
```

**Team Member Card**
```html
<div class="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
  <img src="..." alt="..." class="aspect-[4/3] w-full rounded-xl border border-neutral-200 object-cover" />
  <div class="mt-4">
    <div class="text-lg font-semibold tracking-tight">Name</div>
    <div class="text-sm text-neutral-600">Title</div>
  </div>
</div>
```

---

## Best Practices

### DO's

 Use `max-w-7xl mx-auto px-6 sm:px-8` for all content containers
 Apply `tracking-tight` to all headings
 Use `rounded-2xl` for large cards, `rounded-xl` for small cards
 Include `ring-1 ring-black/5` on card images for subtle depth
 Add `transition` to all interactive elements
 Use eyebrow labels for categories
 Apply `group` class for coordinated hover effects
 Scale typography and spacing responsively

### DON'Ts

L Don't use colors outside the neutral palette
L Don't use `px` or `py` without responsive variants
L Don't mix border radii
L Don't use hard shadows (use `shadow-sm` sparingly)
L Don't forget `alt` text on images
L Don't use Playfair Display on body text

---

**Questions or Suggestions?**
Refer to this guide when building new pages or components to maintain design consistency across the Barnes Design Group website.
