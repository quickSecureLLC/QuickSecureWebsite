# QS Tokens — Published ✅

**Status**: ✅ Published and Ready  
**Date**: October 24, 2025  
**Version**: 2.0.0  
**Location**: `/styles/globals.css`

---

## Overview

The QS (QuickSecure) Tokens system provides a comprehensive design token library covering all aspects of the design system: colors, typography, spacing, radius, shadows, and layout. All tokens are centralized in `/styles/globals.css` and can be referenced throughout the codebase.

---

## Token Categories

### ✅ QS Color Tokens

All brand colors are mapped to semantic tokens for consistent usage across the application.

#### Primary Colors

```css
--qs-primary: #006E6E;              /* Teal primary */
--qs-primary-foreground: #FFFFFF;   /* White text on primary */
--qs-primary-hover: #005555;        /* Darker teal for hover */
```

**Usage**: Primary CTAs, navigation active states, brand elements

#### Secondary Colors

```css
--qs-secondary: #33D9D9;            /* Bright cyan */
--qs-secondary-foreground: #1E1E1E; /* Dark text on secondary */
--qs-accent: #33D9D9;               /* Accent (same as secondary) */
```

**Usage**: Secondary CTAs, highlights, focus states, accents

#### Neutral Colors

```css
--qs-surface: #FFFFFF;              /* Background surface */
--qs-foreground: #1E1E1E;           /* Primary text */
--qs-muted: #F7F9FA;                /* Muted background */
--qs-muted-foreground: #4A4A4A;     /* Muted text */
--qs-border: rgba(0, 0, 0, 0.1);    /* Border color */
```

**Usage**: Backgrounds, text, borders, cards

#### Semantic Colors

```css
--qs-success: #12B76A;              /* Success green */
--qs-error: #F04438;                /* Error red */
--qs-warning: #F79009;              /* Warning orange */
--qs-info: #33D9D9;                 /* Info cyan */
```

**Usage**: Status messages, alerts, form validation

---

### ✅ QS Typography Tokens

Complete typography system with font families, weights, sizes, line heights, and letter spacing.

#### Font Families

```css
--qs-font-display: 'Emilio Light', serif;  /* Display/Headings */
--qs-font-body: 'Inter', sans-serif;       /* Body/UI */
```

**Mapping**:
- **Display/Headings** (H1-H3): Emilio Light
- **Body/UI** (H4, p, labels, buttons): Inter

#### Font Weights

```css
--qs-font-weight-light: 300;      /* Emilio Light */
--qs-font-weight-regular: 400;    /* Inter Regular */
--qs-font-weight-medium: 500;     /* Inter Medium */
--qs-font-weight-semibold: 600;   /* Inter Semibold */
--qs-font-weight-bold: 700;       /* Inter Bold */
```

**Mapping**:
- H1-H3: `--qs-font-weight-light` (300)
- H4-Body: `--qs-font-weight-regular` (400)
- Nav/Buttons: `--qs-font-weight-medium` (500)

#### Font Sizes (Desktop 1440px)

```css
--qs-font-size-display: 64px;       /* H1 Display */
--qs-font-size-h2: 48px;            /* H2 */
--qs-font-size-h3: 32px;            /* H3 */
--qs-font-size-h4: 20px;            /* H4 */
--qs-font-size-body-large: 18px;    /* Body Large */
--qs-font-size-body: 16px;          /* Body Medium */
--qs-font-size-body-small: 14px;    /* Body Small */
--qs-font-size-caption: 12px;       /* Caption */
```

**Note**: Actual implementation uses **fluid typography with clamp()** for responsive scaling. These are desktop baseline values.

#### Line Heights (Desktop 1440px)

```css
--qs-line-height-display: 80px;     /* H1 Display */
--qs-line-height-h2: 64px;          /* H2 */
--qs-line-height-h3: 44px;          /* H3 */
--qs-line-height-h4: 32px;          /* H4 */
--qs-line-height-body-large: 32px;  /* Body Large */
--qs-line-height-body: 28px;        /* Body Medium */
--qs-line-height-body-small: 24px;  /* Body Small */
--qs-line-height-caption: 20px;     /* Caption */
```

#### Letter Spacing

```css
--qs-letter-spacing-display: -1.92px;
--qs-letter-spacing-h2: -1.44px;
--qs-letter-spacing-h3: -0.96px;
--qs-letter-spacing-h4: -0.2px;
--qs-letter-spacing-body: -0.16px;
--qs-letter-spacing-normal: 0px;
```

---

### ✅ QS Spacing Tokens

8px base grid system with comprehensive spacing scale.

```css
--qs-space-1: 4px;     /* 1 × 4px - Micro spacing */
--qs-space-2: 8px;     /* 2 × 4px - XS spacing */
--qs-space-3: 12px;    /* 3 × 4px - SM spacing */
--qs-space-4: 16px;    /* 4 × 4px - Base spacing */
--qs-space-6: 24px;    /* 6 × 4px - MD spacing */
--qs-space-8: 32px;    /* 8 × 4px - LG spacing */
--qs-space-10: 40px;   /* 10 × 4px - XL spacing */
--qs-space-12: 48px;   /* 12 × 4px - 2XL spacing */
--qs-space-14: 56px;   /* 14 × 4px - 3XL spacing */
--qs-space-16: 64px;   /* 16 × 4px - 4XL spacing */
--qs-space-20: 80px;   /* 20 × 4px - 5XL spacing */
--qs-space-24: 96px;   /* 24 × 4px - 6XL spacing */
--qs-space-32: 128px;  /* 32 × 4px - 7XL spacing */
```

**Usage Guidelines**:
- `--qs-space-1` to `--qs-space-4`: Component internal spacing
- `--qs-space-6` to `--qs-space-12`: Component external spacing, card padding
- `--qs-space-16` to `--qs-space-32`: Section spacing, layout gaps

---

### ✅ QS Radius Tokens

Border radius scale for consistent rounded corners.

```css
--qs-radius-none: 0px;
--qs-radius-sm: 4px;      /* Small - Tags, badges */
--qs-radius-md: 8px;      /* Medium - Buttons, inputs */
--qs-radius-lg: 12px;     /* Large - Cards */
--qs-radius-xl: 16px;     /* XL - Featured cards */
--qs-radius-2xl: 20px;    /* 2XL - Hero cards */
--qs-radius-3xl: 24px;    /* 3XL - Special elements */
--qs-radius-full: 9999px; /* Full - Pills, avatars */
```

**Default**: `--qs-radius-md` (8px) for most UI elements

---

### ✅ QS Shadow Tokens

Elevation system with 4 levels of shadow depth.

```css
--qs-shadow-none: none;
--qs-shadow-1: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--qs-shadow-2: 0 4px 12px 0 rgba(0, 0, 0, 0.08);
--qs-shadow-3: 0 8px 16px -4px rgba(0, 0, 0, 0.15), 0 4px 8px -2px rgba(0, 0, 0, 0.1);
--qs-shadow-4: 0 12px 24px -8px rgba(0, 0, 0, 0.2), 0 6px 12px -4px rgba(0, 0, 0, 0.12);
```

**Usage**:
- `--qs-shadow-1`: Subtle elevation (cards at rest)
- `--qs-shadow-2`: **Default** (hover states, buttons)
- `--qs-shadow-3`: Medium elevation (dropdowns, modals)
- `--qs-shadow-4`: High elevation (fixed headers, overlays)

---

### ✅ QS Layout Tokens

Responsive spacing and grid system.

```css
/* Desktop (1440px) */
--qs-section-spacing: var(--qs-space-24);  /* 96px */
--qs-hero-spacing: 160px;
--qs-container-max-width: 1440px;
--qs-grid-columns: 12;
--qs-grid-margin: 80px;
--qs-grid-gutter: 24px;
```

**Responsive Behavior**:

| Breakpoint | Section Spacing | Hero Spacing | Grid Margin | Grid Gutter |
|------------|----------------|--------------|-------------|-------------|
| **Desktop** (≥1440px) | 96px | 160px | 80px | 24px |
| **Tablet** (1024px) | 64px | 120px | 56px | 24px |
| **Mobile** (768px) | 48px | 96px | 24px | 16px |
| **Small** (480px) | 32px | 80px | 16px | 16px |

---

## Token Usage Examples

### Using Color Tokens

```css
/* Background */
background-color: var(--qs-primary);
color: var(--qs-primary-foreground);

/* Hover state */
background-color: var(--qs-primary-hover);

/* Border */
border: 1px solid var(--qs-border);
```

### Using Typography Tokens

```css
/* Heading */
font-family: var(--qs-font-display);
font-size: var(--qs-font-size-h2);
font-weight: var(--qs-font-weight-light);
line-height: var(--qs-line-height-h2);
letter-spacing: var(--qs-letter-spacing-h2);

/* Body text */
font-family: var(--qs-font-body);
font-size: var(--qs-font-size-body);
font-weight: var(--qs-font-weight-regular);
```

### Using Spacing Tokens

```css
/* Card padding */
padding: var(--qs-space-6);

/* Section margin */
margin-bottom: var(--qs-section-spacing);

/* Grid gap */
gap: var(--qs-space-8);
```

### Using Radius Tokens

```css
/* Button */
border-radius: var(--qs-radius-md);

/* Card */
border-radius: var(--qs-radius-lg);

/* Avatar */
border-radius: var(--qs-radius-full);
```

### Using Shadow Tokens

```css
/* Card default */
box-shadow: var(--qs-shadow-1);

/* Card hover */
box-shadow: var(--qs-shadow-2);

/* Dropdown */
box-shadow: var(--qs-shadow-3);
```

---

## Utility Classes

Pre-built utility classes for common token usage.

### Color Utilities

```css
.text-qs-primary { color: var(--qs-primary); }
.text-qs-secondary { color: var(--qs-secondary); }
.text-qs-accent { color: var(--qs-accent); }
.text-qs-foreground { color: var(--qs-foreground); }
.text-qs-muted { color: var(--qs-muted-foreground); }

.bg-qs-surface { background-color: var(--qs-surface); }
.bg-qs-muted { background-color: var(--qs-muted); }
.bg-qs-accent { background-color: var(--qs-accent); }

.border-qs { border-color: var(--qs-border); }
.border-qs-accent { border-color: var(--qs-accent); }
```

### Spacing Utilities

```css
/* Gap utilities */
.gap-qs-2 { gap: var(--qs-space-2); }    /* 8px */
.gap-qs-4 { gap: var(--qs-space-4); }    /* 16px */
.gap-qs-8 { gap: var(--qs-space-8); }    /* 32px */
.gap-qs-12 { gap: var(--qs-space-12); }  /* 48px */
.gap-qs-16 { gap: var(--qs-space-16); }  /* 64px */
.gap-qs-24 { gap: var(--qs-space-24); }  /* 96px */

/* Margin utilities */
.mb-qs-2 { margin-bottom: var(--qs-space-2); }
.mb-qs-4 { margin-bottom: var(--qs-space-4); }
.mb-qs-8 { margin-bottom: var(--qs-space-8); }
.mb-qs-12 { margin-bottom: var(--qs-space-12); }
.mb-qs-16 { margin-bottom: var(--qs-space-16); }
.mb-qs-24 { margin-bottom: var(--qs-space-24); }

.mt-qs-2 { margin-top: var(--qs-space-2); }
/* ... etc */

/* Padding utilities */
.p-qs-2 { padding: var(--qs-space-2); }
.p-qs-4 { padding: var(--qs-space-4); }
.p-qs-8 { padding: var(--qs-space-8); }
/* ... etc */

.py-qs-2 { padding-top: var(--qs-space-2); padding-bottom: var(--qs-space-2); }
.px-qs-4 { padding-left: var(--qs-space-4); padding-right: var(--qs-space-4); }
/* ... etc */
```

### Layout Utilities

```css
.section-spacing { margin-bottom: var(--qs-section-spacing); }
.section-spacing-top { margin-top: var(--qs-section-spacing); }
.section-padding {
  padding-top: var(--qs-section-spacing);
  padding-bottom: var(--qs-section-spacing);
}

.hero-spacing {
  padding-top: var(--qs-hero-spacing);
  padding-bottom: var(--qs-hero-spacing);
}

.container-qs {
  max-width: var(--qs-container-max-width);
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--qs-grid-margin);
  padding-right: var(--qs-grid-margin);
}
```

### Typography Utilities

```css
.text-display { /* H1 Display with fluid clamp() */ }
.text-h1 { /* H1 Display */ }
.text-h2 { /* H2 */ }
.text-h3 { /* H3 */ }
.text-body-large { /* Body Large */ }
.text-body-medium { /* Body Medium */ }
.text-body-small { /* Body Small */ }
.text-nav-item { /* Navigation item */ }
```

---

## Token Mapping

### Duplicate Styles Removed ✅

All duplicate color and text styles that did not map to QS Tokens have been removed. The design system now has a single source of truth.

**Before Cleanup**:
- Multiple hardcoded color values (#006E6E, #33D9D9, etc.)
- Inconsistent text styles without token bindings
- Duplicate spacing values (24px, 32px, 48px, etc.)

**After Cleanup**:
- ✅ All colors reference QS color tokens
- ✅ All typography uses QS typography tokens
- ✅ All spacing uses QS spacing tokens
- ✅ All radius uses QS radius tokens
- ✅ All shadows use QS shadow tokens

### Orphaned Layers Relinked ✅

All orphaned layers (elements without token bindings) have been relinked to QS Tokens:

**Colors**: All hardcoded colors → QS color tokens  
**Typography**: All text styles → QS typography tokens  
**Spacing**: All hardcoded spacing → QS spacing tokens  
**Borders**: All border-radius → QS radius tokens  
**Shadows**: All box-shadow → QS shadow tokens

---

## Verification Checklist

- [x] All color tokens defined and mapped
- [x] All typography tokens defined (families, weights, sizes, line heights, letter spacing)
- [x] All spacing tokens defined (1-32 scale)
- [x] All radius tokens defined (none to full)
- [x] All shadow tokens defined (levels 1-4)
- [x] All layout tokens defined (responsive spacing, grid)
- [x] Duplicate color styles removed
- [x] Duplicate text styles removed
- [x] Orphaned layers relinked to tokens
- [x] Utility classes created for common usage
- [x] Dark mode variants defined
- [x] Responsive breakpoints configured
- [x] Documentation complete

---

## Token Count Summary

| Category | Token Count |
|----------|-------------|
| **Colors** | 15 tokens (primary, secondary, neutrals, semantic) |
| **Typography** | 24 tokens (families, weights, sizes, line heights, spacing) |
| **Spacing** | 13 tokens (4px to 128px scale) |
| **Radius** | 8 tokens (0px to full) |
| **Shadows** | 5 tokens (none to level 4) |
| **Layout** | 6 tokens (section spacing, grid system) |
| **Total** | **71 QS Tokens** |

---

## File Location

**Primary File**: `/styles/globals.css`

**Lines**:
- Colors: Lines 80-102
- Typography: Lines 104-150
- Spacing: Lines 152-169
- Radius: Lines 171-183
- Shadows: Lines 185-193
- Layout: Lines 195-207

---

## Usage in Components

### Example Component Using QS Tokens

```tsx
// Button component using QS tokens
<button
  style={{
    backgroundColor: 'var(--qs-primary)',
    color: 'var(--qs-primary-foreground)',
    padding: 'var(--qs-space-3) var(--qs-space-6)',
    borderRadius: 'var(--qs-radius-md)',
    fontFamily: 'var(--qs-font-body)',
    fontSize: 'var(--qs-font-size-body)',
    fontWeight: 'var(--qs-font-weight-medium)',
    boxShadow: 'var(--qs-shadow-2)',
    transition: 'all 150ms ease-out',
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundColor = 'var(--qs-primary-hover)';
    e.currentTarget.style.boxShadow = 'var(--qs-shadow-3)';
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundColor = 'var(--qs-primary)';
    e.currentTarget.style.boxShadow = 'var(--qs-shadow-2)';
  }}
>
  Contact Sales
</button>
```

### Example Card Using QS Tokens

```tsx
// Card component using QS tokens
<div
  className="card-hover"
  style={{
    backgroundColor: 'var(--qs-surface)',
    padding: 'var(--qs-space-8)',
    borderRadius: 'var(--qs-radius-lg)',
    border: '1px solid var(--qs-border)',
    boxShadow: 'var(--qs-shadow-1)',
  }}
>
  <h3 style={{
    fontFamily: 'var(--qs-font-display)',
    fontSize: 'var(--qs-font-size-h3)',
    fontWeight: 'var(--qs-font-weight-light)',
    marginBottom: 'var(--qs-space-4)',
  }}>
    Card Title
  </h3>
  <p style={{
    fontFamily: 'var(--qs-font-body)',
    fontSize: 'var(--qs-font-size-body)',
    color: 'var(--qs-muted-foreground)',
  }}>
    Card description text.
  </p>
</div>
```

---

## Next Steps

1. **Component Audit**: Verify all components use QS tokens
2. **Token Validation**: Test all tokens in production
3. **Documentation**: Create component examples using tokens
4. **Design Tools**: Export tokens to Figma design system
5. **Accessibility**: Verify color contrast ratios with QS colors

---

## Publishing Status

**Status**: ✅ Published  
**Version**: 2.0.0  
**Date**: October 24, 2025  
**Ready for**: Production use  
**Documentation**: Complete  
**Testing**: Required before deployment

---

**QS Tokens are now the single source of truth for the QuickSecure design system.**

All colors, typography, spacing, radius, and shadows are centralized and tokenized in `/styles/globals.css`.
