# PHASE 2 TOKENS - QUICK REFERENCE

**QuickSecure Web UI v2.0** | Last Updated: October 26, 2025

---

## 🎨 BRAND COLORS

```css
/* Primary Brand */
--qs-brand-primary: #006E6E;              /* Teal primary */
--qs-brand-primary-fg: #FFFFFF;           /* White on teal */
--qs-brand-primary-hover: #005555;        /* Hover state */

/* Accent Brand */
--qs-brand-accent: #33D9D9;               /* Cyan accent */
--qs-brand-accent-fg: #1E1E1E;            /* Dark on cyan */
```

**Usage:**
```css
.button-primary {
  background: var(--qs-brand-primary);
  color: var(--qs-brand-primary-fg);
}

.icon-accent {
  color: var(--qs-brand-accent);
}
```

---

## 📝 TEXT COLORS

```css
/* Light Background */
--qs-text-primary: #111111;               /* Headings, 100% opacity */
--qs-text-secondary: rgba(17,17,17,0.49); /* Body, 49% opacity */
--qs-text-muted: #4A4A4A;                 /* Disabled/muted */

/* Dark Background */
--qs-text-on-dark: #FFFFFF;               /* White on dark */
```

**Usage:**
```css
h1 {
  color: var(--qs-text-primary);
}

p {
  color: var(--qs-text-secondary);
}

.footer-text {
  color: var(--qs-text-on-dark);
}
```

---

## 🎭 SURFACES

```css
/* Backgrounds */
--qs-bg: #FFFFFF;                         /* Global background */
--qs-panel: #F7F9FA;                      /* Cards/panels */
--qs-surface-dark: #1E1E1E;               /* Dark backgrounds */

/* Borders */
--qs-border: rgba(0, 0, 0, 0.1);          /* Light border */
--qs-border-dark: rgba(255,255,255,0.24); /* Dark border */
```

**Usage:**
```css
.card {
  background: var(--qs-panel);
  border: 1px solid var(--qs-border);
}

.footer {
  background: var(--qs-surface-dark);
  border-top: 1px solid var(--qs-border-dark);
}
```

---

## ✅ SEMANTIC COLORS

```css
--qs-success: #12B76A;                    /* Success green */
--qs-error: #F04438;                      /* Error red */
--qs-warning: #F79009;                    /* Warning orange */
```

**Usage:**
```css
.alert-success {
  border-left: 4px solid var(--qs-success);
}

.alert-error {
  border-left: 4px solid var(--qs-error);
}
```

---

## 🔤 TYPOGRAPHY - FAMILIES

```css
--qs-type-family-display: 'Emilio Light', serif;  /* Headings */
--qs-type-family-body: 'Inter', sans-serif;       /* Body/UI */
```

**Usage:**
```css
h1, h2, h3 {
  font-family: var(--qs-type-family-display);
}

p, button, label {
  font-family: var(--qs-type-family-body);
}
```

---

## 🔤 TYPOGRAPHY - WEIGHTS

```css
--qs-type-weight-light: 300;
--qs-type-weight-regular: 400;
--qs-type-weight-medium: 500;
--qs-type-weight-semibold: 600;
--qs-type-weight-bold: 700;
```

**Usage:**
```css
h1 {
  font-weight: var(--qs-type-weight-light);
}

button {
  font-weight: var(--qs-type-weight-medium);
}

strong {
  font-weight: var(--qs-type-weight-semibold);
}
```

---

## 🔤 TYPOGRAPHY - SIZES

```css
--qs-type-display-size: 64px;             /* H1 */
--qs-type-h2-size: 48px;                  /* H2 */
--qs-type-h3-size: 32px;                  /* H3 */
--qs-type-h4-size: 20px;                  /* H4 */
--qs-type-body-lg-size: 18px;             /* Body Large */
--qs-type-body-size: 16px;                /* Body */
--qs-type-body-sm-size: 14px;             /* Body Small */
```

**Usage:**
```css
h1 {
  font-size: var(--qs-type-display-size);
}

p {
  font-size: var(--qs-type-body-lg-size);
}
```

---

## 📏 SPACING (8px Grid)

```css
--qs-space-2: 8px;                        /* 2 × 4px */
--qs-space-4: 16px;                       /* 4 × 4px */
--qs-space-8: 32px;                       /* 8 × 4px */
--qs-space-12: 48px;                      /* 12 × 4px */
--qs-space-16: 64px;                      /* 16 × 4px */
--qs-space-24: 96px;                      /* 24 × 4px */
```

**Usage:**
```css
.section {
  padding: var(--qs-space-16) 0;         /* 64px vertical */
  gap: var(--qs-space-8);                /* 32px gap */
}
```

---

## 🔲 RADIUS

```css
--qs-radius-sm: 4px;
--qs-radius-md: 8px;
--qs-radius-lg: 12px;
--qs-radius-xl: 16px;
--qs-radius-full: 9999px;
```

**Usage:**
```css
.card {
  border-radius: var(--qs-radius-lg);
}

.button {
  border-radius: var(--qs-radius-md);
}

.avatar {
  border-radius: var(--qs-radius-full);
}
```

---

## 🌑 SHADOWS

```css
--qs-shadow-1: 0 1px 2px 0 rgba(0,0,0,0.05);
--qs-shadow-2: 0 4px 12px 0 rgba(0,0,0,0.08);
--qs-shadow-3: 0 8px 16px -4px rgba(0,0,0,0.15), 0 4px 8px -2px rgba(0,0,0,0.1);
--qs-shadow-4: 0 12px 24px -8px rgba(0,0,0,0.2), 0 6px 12px -4px rgba(0,0,0,0.12);
```

**Usage:**
```css
.card {
  box-shadow: var(--qs-shadow-2);
}

.modal {
  box-shadow: var(--qs-shadow-4);
}
```

---

## 🔄 BACKWARD COMPATIBILITY

All Phase 1 tokens still work via compatibility layer:

```css
/* ✅ PHASE 1 - Still works */
color: var(--qs-secondary);
font-family: var(--qs-font-display);
font-weight: var(--qs-font-weight-medium);

/* ✅ PHASE 2 - New semantic naming */
color: var(--qs-brand-accent);
font-family: var(--qs-type-family-display);
font-weight: var(--qs-type-weight-medium);
```

**Both work identically.** Use Phase 2 for new code, keep Phase 1 in existing code.

---

## 🚀 COMMON PATTERNS

### Button Primary
```css
.button-primary {
  background: var(--qs-brand-primary);
  color: var(--qs-brand-primary-fg);
  font-family: var(--qs-type-family-body);
  font-weight: var(--qs-type-weight-medium);
  padding: var(--qs-space-4) var(--qs-space-8);
  border-radius: var(--qs-radius-md);
}

.button-primary:hover {
  background: var(--qs-brand-primary-hover);
  box-shadow: var(--qs-shadow-2);
}
```

### Card Component
```css
.card {
  background: var(--qs-panel);
  border: 1px solid var(--qs-border);
  border-radius: var(--qs-radius-lg);
  padding: var(--qs-space-8);
  box-shadow: var(--qs-shadow-1);
}

.card-title {
  font-family: var(--qs-type-family-display);
  font-size: var(--qs-type-h3-size);
  font-weight: var(--qs-type-weight-light);
  color: var(--qs-text-primary);
  margin-bottom: var(--qs-space-4);
}

.card-body {
  font-family: var(--qs-type-family-body);
  font-size: var(--qs-type-body-lg-size);
  color: var(--qs-text-secondary);
}
```

### Section Spacing
```css
.section {
  padding-top: var(--qs-section-spacing);    /* 96px */
  padding-bottom: var(--qs-section-spacing); /* 96px */
  max-width: var(--qs-container-max-width);  /* 1440px */
  margin: 0 auto;
}
```

---

## 📋 CHEAT SHEET

| Need | Token |
|------|-------|
| **Brand teal** | `--qs-brand-primary` |
| **Brand cyan** | `--qs-brand-accent` |
| **Heading text** | `--qs-text-primary` |
| **Body text** | `--qs-text-secondary` |
| **White background** | `--qs-bg` |
| **Gray panel** | `--qs-panel` |
| **Border** | `--qs-border` |
| **Display font** | `--qs-type-family-display` |
| **Body font** | `--qs-type-family-body` |
| **Light weight** | `--qs-type-weight-light` |
| **Medium weight** | `--qs-type-weight-medium` |
| **H1 size** | `--qs-type-display-size` |
| **H2 size** | `--qs-type-h2-size` |
| **Body size** | `--qs-type-body-lg-size` |
| **16px spacing** | `--qs-space-4` |
| **32px spacing** | `--qs-space-8` |
| **96px spacing** | `--qs-space-24` |
| **Card radius** | `--qs-radius-lg` |
| **Card shadow** | `--qs-shadow-2` |

---

## ❓ WHEN TO USE WHAT

### Colors

**Use `--qs-brand-*` for:**
- Primary buttons
- Brand elements (logo, icons)
- CTAs and accent elements
- Links (active/hover states)

**Use `--qs-text-*` for:**
- Any text content
- Headings, paragraphs, labels
- Icons when representing text

**Use `--qs-bg / --qs-panel` for:**
- Page backgrounds
- Card backgrounds
- Section backgrounds

### Typography

**Use `--qs-type-family-display` for:**
- H1, H2, H3 headings
- Hero titles
- Large display text

**Use `--qs-type-family-body` for:**
- Paragraphs
- Labels, buttons, inputs
- All UI text

**Use `--qs-type-{element}-size` for:**
- Explicit font sizing
- Responsive scaling
- Component-specific sizes

### Spacing

**Use `--qs-space-*` for:**
- Padding, margins, gaps
- Component spacing
- Grid gaps

**Use `--qs-section-spacing` for:**
- Vertical section spacing (responsive)
- Top/bottom page margins

---

**Quick Tip:** Type `--qs-brand-` in your IDE to see all brand colors, `--qs-text-` for text colors, `--qs-type-` for typography!

---

**End of Quick Reference**
