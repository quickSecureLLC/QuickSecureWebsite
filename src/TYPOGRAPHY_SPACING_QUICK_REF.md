# TYPOGRAPHY + SPACING - QUICK REFERENCE

**Version:** Option A  
**Last Updated:** October 26, 2025

---

## TYPOGRAPHY QUICK REF

### Headings

```css
H1: 72px / 88px / 300 / -1.5px / --brand-primary (#0E1C2B navy)
H2: 56px / 72px / 300 / -1.5px / --brand-primary (#0E1C2B navy)
H3: 36px / 52px / 300 / -1.5px / --brand-accent (#2B5E9C blue)
H4: 28px / 40px / 300 / -0.25px / --text-secondary (#5B6770 gray)
```

### Body

```css
Body Lg: 18px / 32px / 400 / -0.25px / --text-secondary (#5B6770)
Body Md: 16px / 28px / 400 / -0.25px / --text-secondary (#5B6770)
Body Sm: 14px / 24px / 400 / -0.25px / --text-secondary (#5B6770)
```

### UI

```css
Nav Item: 16px / 24px / 500 / -0.25px / --text-primary (#0E1C2B)
Button/CTA: 15px / 20px / 600 / 0px / --brand-accent (#2B5E9C)
```

---

## FONT FAMILIES

```css
Headings: 'Emilio Light', serif
Body/UI: 'Inter', sans-serif
```

---

## SPACING QUICK REF

### Grid System

```
Base unit: 8px (4px increments)
Section padding: 96px
Hero spacing: 160px
Grid margin: 80px
Grid gutter: 24px
```

### Tokens

```css
--qs-space-2: 8px
--qs-space-4: 16px
--qs-space-8: 32px
--qs-space-12: 48px
--qs-space-16: 64px
--qs-space-24: 96px
```

### Utilities

```css
.mb-qs-4  → margin-bottom: 16px
.py-qs-8  → padding-top/bottom: 32px
.gap-qs-12 → gap: 48px
.section-spacing → margin-bottom: 96px
.container-qs → max-width: 1440px, margins: 80px
```

---

## USAGE

```tsx
// Typography
<h1>Main Heading</h1>        // 72px navy
<h2>Section Heading</h2>     // 56px navy
<h3>Subsection</h3>          // 36px blue
<h4>Small Heading</h4>       // 28px gray
<p>Body text</p>             // 18px gray

// Spacing
<section className="section-spacing">     // 96px bottom margin
<div className="container-qs">            // Max 1440px container
<div className="mb-qs-12 py-qs-8">        // 48px bottom, 32px vertical padding
```

---

## RATIOS

```
Headings: ~120% line height
Body: ~160% line height
Display letter spacing: -1.5px
Body letter spacing: -0.25px
```
