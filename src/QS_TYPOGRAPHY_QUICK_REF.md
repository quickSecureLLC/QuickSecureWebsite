# QS Typography System - Quick Reference
**QuickSecure Web UI v1 - Typography Tokens**

---

## Text Styles

### Headings (Emilio Light - #111111 100%)

```css
/* H1 / Display */
.qs-text-display
font: Emilio Light 64px/80px -1.92px
color: #111111

/* H2 */
.qs-text-h2
font: Emilio Light 48px/64px -1.44px
color: #111111

/* H3 */
.qs-text-h3
font: Emilio Light 32px/44px -0.96px
color: #111111
```

### Body Text (Inter - rgba(17, 17, 17, 0.49))

```css
/* Body Large */
.qs-text-body-large
font: Inter 18px/32px -0.18px
color: rgba(17, 17, 17, 0.49)

/* Body Medium */
.qs-text-body-medium
font: Inter 16px/28px -0.16px
color: rgba(17, 17, 17, 0.49)

/* Body Small */
.qs-text-body-small
font: Inter 14px/24px 0px
color: rgba(17, 17, 17, 0.49)
```

### UI Text (Inter Medium - #111111 100%)

```css
/* Nav Item */
.qs-text-nav-item
font: Inter Medium 16px/24px -0.16px
color: #111111
hover: #006E6E (teal)
```

---

## Spacing Tokens

### Base Grid: 8px

```css
--qs-space-2:  8px    /* Baseline */
--qs-space-4:  16px   /* Small gap */
--qs-space-6:  24px   /* Paragraph spacing */
--qs-space-8:  32px   /* Card padding */
--qs-space-12: 48px   /* Medium spacing */
--qs-space-16: 64px   /* Section spacing (tablet) */
--qs-space-20: 80px   /* Header/footer gap */
--qs-space-24: 96px   /* Section spacing (desktop) */
```

### Responsive Section Spacing

```css
Desktop (≥1440px):  96px  (--qs-space-24)
Tablet (1024px):    64px  (--qs-space-16)
Mobile (768px):     48px  (--qs-space-12)
Small (480px):      32px  (--qs-space-8)
```

---

## Usage Examples

### Typography in Components

```tsx
// Method 1: CSS Classes (Recommended)
<h1 className="qs-text-display">Heading</h1>
<h2 className="qs-text-h2">Subheading</h2>
<p className="qs-text-body-large">Body text</p>

// Method 2: Semantic HTML (Automatic)
<h1>Heading</h1>  {/* Auto-styled */}
<h2>Subheading</h2>
<p>Body text</p>

// Method 3: Inline Styles with Tokens
<h1 style={{
  fontFamily: 'var(--qs-font-display)',
  color: 'var(--qs-foreground)'
}}>Heading</h1>
```

### Spacing in Components

```tsx
// Method 1: CSS Classes
<section className="py-qs-24 px-qs-20 mb-qs-16">
  Content
</section>

// Method 2: Inline Styles with Tokens
<section style={{
  padding: 'var(--qs-space-24) var(--qs-space-20)',
  marginBottom: 'var(--qs-space-16)'
}}>
  Content
</section>

// Method 3: Responsive Utilities
<section className="section-padding">
  {/* Auto-responsive padding */}
</section>
```

---

## Color Tokens

```css
/* Headings */
--qs-foreground: #111111  (100% opacity)

/* Body Text */
--qs-text-body: rgba(17, 17, 17, 0.49)  (49% opacity)

/* Links & Interactive */
--qs-primary: #006E6E  (teal)
--qs-accent: #33D9D9   (cyan)
```

---

## Utility Classes Cheat Sheet

### Typography

```
.qs-text-display     → H1 / Display
.qs-text-h2          → H2
.qs-text-h3          → H3
.qs-text-body-large  → Body Large (18px)
.qs-text-body-medium → Body Medium (16px)
.qs-text-body-small  → Body Small (14px)
.qs-text-nav-item    → Nav Item (16px Medium)
```

### Spacing (Gap)

```
.gap-qs-2   → 8px
.gap-qs-4   → 16px
.gap-qs-8   → 32px
.gap-qs-12  → 48px
.gap-qs-16  → 64px
.gap-qs-24  → 96px
```

### Spacing (Margin)

```
.mb-qs-2   → margin-bottom: 8px
.mb-qs-8   → margin-bottom: 32px
.mb-qs-24  → margin-bottom: 96px

.mt-qs-2   → margin-top: 8px
.mt-qs-8   → margin-top: 32px
.mt-qs-24  → margin-top: 96px
```

### Spacing (Padding)

```
.p-qs-8    → padding: 32px (card)
.py-qs-16  → padding-y: 64px (section)
.py-qs-24  → padding-y: 96px (section desktop)
.px-qs-20  → padding-x: 80px (page margins)
```

### Section Utilities

```
.section-spacing        → responsive margin-bottom
.section-padding        → responsive padding-y
.hero-spacing           → responsive hero padding
.container-qs           → max-width container with margins
```

---

## Quick Copy-Paste

### Hero Section
```tsx
<section className="hero-spacing" style={{
  backgroundColor: '#006E6E',
  padding: '160px 80px'
}}>
  <h1 className="qs-text-display" style={{ color: '#FFFFFF' }}>
    Hero Heading
  </h1>
  <p className="qs-text-body-large" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
    Hero description text
  </p>
</section>
```

### Card Component
```tsx
<div className="p-qs-8" style={{
  backgroundColor: '#FFFFFF',
  borderRadius: '12px',
  boxShadow: 'var(--qs-shadow-2)'
}}>
  <h3 className="qs-text-h3 mb-qs-4">Card Title</h3>
  <p className="qs-text-body-medium">Card description</p>
</div>
```

### Section with Spacing
```tsx
<section className="section-padding" style={{
  backgroundColor: '#F7F9FA'
}}>
  <div className="container-qs">
    <h2 className="qs-text-h2 mb-qs-8">Section Title</h2>
    <div className="gap-qs-8" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
      {/* Content */}
    </div>
  </div>
</section>
```

---

## CSS Variables

### Typography Families
```css
var(--qs-font-display)  → 'Emilio Light', serif
var(--qs-font-body)     → 'Inter', sans-serif
```

### Typography Weights
```css
var(--qs-font-weight-light)     → 300
var(--qs-font-weight-regular)   → 400
var(--qs-font-weight-medium)    → 500
var(--qs-font-weight-semibold)  → 600
var(--qs-font-weight-bold)      → 700
```

### Typography Sizes
```css
var(--qs-font-size-display)     → 64px
var(--qs-font-size-h2)          → 48px
var(--qs-font-size-h3)          → 32px
var(--qs-font-size-body-large)  → 18px
var(--qs-font-size-body)        → 16px
var(--qs-font-size-body-small)  → 14px
```

### Spacing Variables
```css
var(--qs-space-2)   → 8px
var(--qs-space-8)   → 32px
var(--qs-space-24)  → 96px
var(--qs-section-spacing)  → Responsive (96px/64px/48px/32px)
var(--qs-hero-spacing)     → Responsive (160px/120px/96px/80px)
```

---

**Last Updated:** October 24, 2025  
**Version:** 2.0.0  
**Status:** Production Ready
