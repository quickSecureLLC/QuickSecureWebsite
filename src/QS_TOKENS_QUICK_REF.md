# QS Tokens Quick Reference

**Version**: 2.0.0 | **Date**: October 24, 2025 | **Status**: ✅ Published

---

## 🎨 Colors

```css
/* Primary */
--qs-primary: #006E6E
--qs-primary-foreground: #FFFFFF
--qs-primary-hover: #005555

/* Secondary/Accent */
--qs-secondary: #33D9D9
--qs-accent: #33D9D9

/* Neutrals */
--qs-surface: #FFFFFF
--qs-foreground: #1E1E1E
--qs-muted: #F7F9FA
--qs-muted-foreground: #4A4A4A
--qs-border: rgba(0, 0, 0, 0.1)

/* Semantic */
--qs-success: #12B76A
--qs-error: #F04438
--qs-warning: #F79009
--qs-info: #33D9D9
```

---

## ✍️ Typography

```css
/* Fonts */
--qs-font-display: 'Emilio Light', serif    /* H1-H3 */
--qs-font-body: 'Inter', sans-serif         /* Body/UI */

/* Weights */
--qs-font-weight-light: 300       /* Display */
--qs-font-weight-regular: 400     /* Body */
--qs-font-weight-medium: 500      /* Nav/Buttons */

/* Sizes (Desktop 1440px) */
--qs-font-size-display: 64px      /* H1 */
--qs-font-size-h2: 48px           /* H2 */
--qs-font-size-h3: 32px           /* H3 */
--qs-font-size-h4: 20px           /* H4 */
--qs-font-size-body-large: 18px   /* Body Large */
--qs-font-size-body: 16px         /* Body Medium */
--qs-font-size-body-small: 14px   /* Body Small */
```

---

## 📏 Spacing (8px Grid)

```css
--qs-space-1: 4px      /* Micro */
--qs-space-2: 8px      /* XS */
--qs-space-3: 12px     /* SM */
--qs-space-4: 16px     /* Base */
--qs-space-6: 24px     /* MD */
--qs-space-8: 32px     /* LG */
--qs-space-12: 48px    /* 2XL */
--qs-space-16: 64px    /* 4XL */
--qs-space-24: 96px    /* 6XL */
--qs-space-32: 128px   /* 7XL */
```

---

## 🔘 Radius

```css
--qs-radius-sm: 4px       /* Tags, badges */
--qs-radius-md: 8px       /* Buttons, inputs */
--qs-radius-lg: 12px      /* Cards */
--qs-radius-xl: 16px      /* Featured cards */
--qs-radius-full: 9999px  /* Pills, avatars */
```

---

## 🌑 Shadows

```css
--qs-shadow-1: 0 1px 2px 0 rgba(0,0,0,0.05)     /* Subtle */
--qs-shadow-2: 0 4px 12px 0 rgba(0,0,0,0.08)    /* Default */
--qs-shadow-3: 0 8px 16px -4px ...              /* Medium */
--qs-shadow-4: 0 12px 24px -8px ...             /* High */
```

---

## 📐 Layout

```css
/* Responsive Section Spacing */
Desktop (1440px): 96px
Tablet (1024px):  64px
Mobile (768px):   48px
Small (480px):    32px

/* Container */
--qs-container-max-width: 1440px
--qs-grid-columns: 12
```

---

## 🛠️ Utility Classes

### Colors
```css
.text-qs-primary, .text-qs-accent, .text-qs-muted
.bg-qs-surface, .bg-qs-accent
.border-qs, .border-qs-accent
```

### Spacing
```css
.gap-qs-2, .gap-qs-4, .gap-qs-8, .gap-qs-12
.mb-qs-4, .mt-qs-8, .p-qs-6
.section-spacing, .hero-spacing
.container-qs
```

### Typography
```css
.text-display, .text-h2, .text-h3
.text-body-large, .text-body-medium
.text-nav-item
```

---

## 📖 Quick Examples

### Button
```tsx
style={{
  backgroundColor: 'var(--qs-primary)',
  color: 'var(--qs-primary-foreground)',
  padding: 'var(--qs-space-3) var(--qs-space-6)',
  borderRadius: 'var(--qs-radius-md)',
  boxShadow: 'var(--qs-shadow-2)',
}}
```

### Card
```tsx
style={{
  padding: 'var(--qs-space-8)',
  borderRadius: 'var(--qs-radius-lg)',
  border: '1px solid var(--qs-border)',
  boxShadow: 'var(--qs-shadow-1)',
}}
```

### Heading
```tsx
style={{
  fontFamily: 'var(--qs-font-display)',
  fontSize: 'var(--qs-font-size-h2)',
  fontWeight: 'var(--qs-font-weight-light)',
}}
```

---

**Total**: 71 QS Tokens | **Location**: `/styles/globals.css`
