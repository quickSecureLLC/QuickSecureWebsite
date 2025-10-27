# QuickSecure Component Structure Guide
**Visual Reference for Correct Page Architecture**  
**Date:** October 24, 2025

---

## Correct Page Structure

```
┌─────────────────────────────────────────────────────────────┐
│  ROOT (LiveWebsite.tsx)                                     │
│  Background: #F7F9FA                                        │
│  Max Width: 1440px                                          │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌───────────────────────────────────────────────────────┐ │
│  │  QS/Header                                            │ │
│  │  Y: 0 | Position: Sticky | Z-index: 1000             │ │
│  │  Width: 100%                                          │ │
│  │                                                       │ │
│  │  [Logo] [Products ▼] [Solutions ▼] [Resources ▼]    │ │
│  │         [About] [Contact Sales] [Get a Demo]         │ │
│  └───────────────────────────────────────────────────────┘ │
│                                                             │
│  ┌───────────────────────────────────────────────────────┐ │
│  │  Template: HomeTemplate                               │ │
│  │  data-section="section-home"                          │ │
│  │                                                       │ │
│  │  ┌─────────────────────────────────────────────────┐ │ │
│  │  │  Hero Section                                   │ │ │
│  │  │  Padding: 80px 80px                             │ │ │
│  │  │  Max Width: 1200px                              │ │ │
│  │  └─────────────────────────────────────────────────┘ │ │
│  │                                                       │ │
│  │  ┌─────────────────────────────────────────────────┐ │ │
│  │  │  Value Props (3 columns)                        │ │ │
│  │  │  Gap: 32px                                      │ │ │
│  │  └─────────────────────────────────────────────────┘ │ │
│  └───────────────────────────────────────────────────────┘ │
│                                                             │
│  <-- 96px vertical spacing -->                             │
│                                                             │
│  ┌───────────────────────────────────────────────────────┐ │
│  │  Template: ProductTemplate                            │ │
│  │  data-section="section-product"                       │ │
│  │                                                       │ │
│  │  ┌─────────────────────────────────────────────────┐ │ │
│  │  │  Complete Safety Platform                       │ │ │
│  │  │  12 Product Cards (4x3 grid)                    │ │ │
│  │  └─────────────────────────────────────────────────┘ │ │
│  └───────────────────────────────────────────────────────┘ │
│                                                             │
│  <-- 96px vertical spacing -->                             │
│                                                             │
│  ┌───────────────────────────────────────────────────────┐ │
│  │  Template: SolutionsTemplate                          │ │
│  │  data-section="section-solutions"                     │ │
│  └───────────────────────────────────────────────────────┘ │
│                                                             │
│  <-- 96px vertical spacing -->                             │
│                                                             │
│  ┌───────────────────────────────────────────────────────┐ │
│  │  Template: ResourcesTemplate                          │ │
│  │  data-section="section-resources"                     │ │
│  └───────────────────────────────────────────────────────┘ │
│                                                             │
│  <-- 96px vertical spacing -->                             │
│                                                             │
│  ┌───────────────────────────────────────────────────────┐ │
│  │  Template: AboutTemplate                              │ │
│  │  data-section="section-about"                         │ │
│  └───────────────────────────────────────────────────────┘ │
│                                                             │
│  <-- 96px vertical spacing -->                             │
│                                                             │
│  ┌───────────────────────────────────────────────────────┐ │
│  │  QS/Footer                                            │ │
│  │  Background: #1E1E1E                                  │ │
│  │  Width: 100%                                          │ │
│  └───────────────────────────────────────────────────────┘ │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## ❌ Common Mistakes

### Mistake 1: Header Inside Template

```
❌ WRONG:

┌─────────────────────────────────────┐
│  ROOT                               │
├─────────────────────────────────────┤
│  ┌───────────────────────────────┐ │
│  │  Template: HomeTemplate       │ │
│  │                               │ │
│  │  ┌─────────────────────────┐ │ │
│  │  │  QS/Header  ← WRONG!    │ │ │ ← Header INSIDE template
│  │  └─────────────────────────┘ │ │
│  │                               │ │
│  │  Content here...              │ │
│  └───────────────────────────────┘ │
└─────────────────────────────────────┘

⚠️ Issue: Header will be duplicated/hidden
✅ Fix: Move header to root, outside template
```

### Mistake 2: Multiple Headers

```
❌ WRONG:

┌─────────────────────────────────────┐
│  ROOT                               │
├─────────────────────────────────────┤
│  ┌───────────────────────────────┐ │
│  │  QS/Header #1  ← First        │ │ ← This one shows
│  └───────────────────────────────┘ │
│                                     │
│  ┌───────────────────────────────┐ │
│  │  Template: HomeTemplate       │ │
│  └───────────────────────────────┘ │
│                                     │
│  ┌───────────────────────────────┐ │
│  │  QS/Header #2  ← DUPLICATE!   │ │ ← This one HIDDEN by CSS
│  └───────────────────────────────┘ │
└─────────────────────────────────────┘

⚠️ Issue: Second header hidden, navigation broken
✅ Fix: Remove second header, use only one at root
```

### Mistake 3: Header Not at Root

```
❌ WRONG:

┌─────────────────────────────────────┐
│  ROOT                               │
├─────────────────────────────────────┤
│  ┌───────────────────────────────┐ │
│  │  Container Div                │ │
│  │                               │ │
│  │  ┌─────────────────────────┐ │ │
│  │  │  QS/Header  ← NESTED!   │ │ │ ← Not at root level
│  │  └─────────────────────────┘ │ │
│  └───────────────────────────────┘ │
└─────────────────────────────────────┘

⚠️ Issue: Header might not stick properly
✅ Fix: Move header to direct child of root
```

---

## ✅ Correct Template Structure

### HomeTemplate

```tsx
export function HomeTemplate() {
  return (
    <div className="scroll-reveal" data-section="section-home">
      {/* NO HEADER HERE */}
      
      <section style={{ padding: '80px 80px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Hero content */}
        </div>
      </section>
      
      <section style={{ padding: '80px 80px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Value props */}
        </div>
      </section>
    </div>
  );
}
```

### ProductTemplate

```tsx
export function ProductTemplate({ onNavigate }: Props) {
  return (
    <div className="scroll-reveal" data-section="section-product">
      {/* NO HEADER HERE */}
      
      <section style={{ padding: '96px 80px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Product grid */}
        </div>
      </section>
    </div>
  );
}
```

---

## 🔧 Locked Properties

### QS/Header (Locked)

```css
/* These cannot be changed */
position: sticky;         /* 🔒 Locked */
top: 0;                   /* 🔒 Locked */
z-index: 1000;            /* 🔒 Locked */
width: 100%;              /* 🔒 Locked */

/* Auto Layout */
display: flex;            /* 🔒 Locked */
align-items: center;      /* 🔒 Locked */
justify-content: space-between; /* 🔒 Locked */
padding: 16px 80px;       /* 🔒 Locked */
```

```css
/* These can be changed */
background-color: ...;    /* ✅ Editable via token */
border-bottom: ...;       /* ✅ Editable */
box-shadow: ...;          /* ✅ Editable */
```

### Page Templates (Locked Structure)

```css
/* Locked Properties */
display: grid;            /* 🔒 Locked */
grid-template-columns: ...; /* 🔒 Locked */
gap: ...;                 /* 🔒 Locked (via property) */
padding: ...;             /* 🔒 Locked (via property) */
width: 100%;              /* 🔒 Locked */
```

```tsx
/* Editable Content */
<h1>Title</h1>           {/* ✅ Text editable */}
<img src="..." />        {/* ✅ Image swappable */}
<p style={{ color: ... }}> {/* ✅ Color editable */}
```

---

## 📐 Spacing System

### Vertical Rhythm (96px)

```
Template 1
    ↓
  96px gap (var(--qs-space-24))
    ↓
Template 2
    ↓
  96px gap
    ↓
Template 3
```

### Section Padding

```
Desktop (1440px):  80px horizontal, 96px vertical
Tablet (1024px):   56px horizontal, 64px vertical
Mobile (768px):    40px horizontal, 48px vertical
Small (480px):     24px horizontal, 32px vertical
```

---

## 🎯 Component Hierarchy

### Root Level (LiveWebsite.tsx)

```
LiveWebsite
├─ QS/Header ✅ (ONE instance only)
├─ HomeTemplate
├─ ProductTemplate
├─ SolutionsTemplate
├─ ResourcesTemplate
├─ AboutTemplate
├─ ContactTemplate
└─ QS/Footer ✅ (ONE instance only)
```

### Template Level (e.g., HomeTemplate.tsx)

```
HomeTemplate
├─ Hero Section
│  ├─ Container (max-width: 1200px)
│  │  ├─ Heading
│  │  ├─ Subheading
│  │  └─ CTA Buttons
│  └─ Hero Image
└─ Value Props Section
   └─ Container (max-width: 1200px)
      ├─ Card 1
      ├─ Card 2
      └─ Card 3
```

---

## 🔍 How to Check Your Structure

### Visual Inspection

1. **Open** your page in Figma/Browser
2. **Look** for QS/Header at the very top
3. **Count** headers (should be exactly 1)
4. **Check** header is NOT inside any template
5. **Verify** header is sticky on scroll

### Code Inspection

```tsx
// ✅ CORRECT
<div className="size-full">
  <Header />  {/* ONE header at root */}
  <HomeTemplate />
  <ProductTemplate />
  <Footer />
</div>

// ❌ WRONG
<div className="size-full">
  <HomeTemplate>
    <Header />  {/* Header INSIDE template */}
    {/* content */}
  </HomeTemplate>
</div>
```

### Browser DevTools

```bash
# Open Console
# Run preflight check
const result = runAllPreflightChecks();
console.log(result);

# Expected output:
✅ All preflight checks passed
```

---

## 🛠️ Quick Fixes

### Fix: Remove Duplicate Header

1. Find duplicate header in code/Figma
2. Delete second header instance
3. Refresh page
4. Verify single header at top

### Fix: Move Header to Root

1. Cut header from template (Cmd+X)
2. Select root container
3. Paste at top (Cmd+V)
4. Move to Y=0
5. Apply sticky positioning

### Fix: Template Structure Reset

1. Delete modified template
2. Re-insert from component library
3. Restore text/image content
4. Verify structure matches default

---

## Summary Checklist

- [ ] ONE QS/Header at root level (Y=0)
- [ ] Header is sticky positioned
- [ ] NO headers inside templates
- [ ] Templates use `data-section` attribute
- [ ] 96px vertical spacing between templates
- [ ] All templates in correct order
- [ ] ONE QS/Footer at bottom
- [ ] Preflight checks passing

---

**Status:** ✅ Structure Guide Complete  
**Published:** October 24, 2025  
**Version:** 1.0
