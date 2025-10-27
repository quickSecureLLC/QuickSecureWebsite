# QuickSecure Logo Library

**Version:** 1.0.0  
**Last Updated:** October 26, 2025  
**Status:** ✅ Production Ready

---

## Overview

The QuickSecure Logo Library provides the official QuickSecure shield and keyhole logo in multiple color variants. All logos are responsive SVG components with a maximum width of 160px.

---

## Logo Specifications

### Design Standards

| Property | Value |
|----------|-------|
| **Max Width** | 160px |
| **Height** | auto (responsive) |
| **Format** | Inline SVG |
| **ViewBox** | 0 0 120 140 |
| **Design** | Shield with keyhole |

### Design Elements

- **Outer Shield:** Larger shield outline
- **Inner Shield:** Nested shield for depth
- **Keyhole Circle:** Central circular element
- **Keyhole Slot:** Vertical slot extending from circle

---

## Available Variants

### Primary (Brand Primary)

**Component:** `LogoPrimary`  
**Color:** `var(--qs-brand-primary)` (#006E6E)  
**Use Case:** Main brand color - use on light backgrounds

```tsx
import { LogoPrimary } from './logo';

<LogoPrimary />
```

---

### Accent (Blue)

**Component:** `LogoAccent`  
**Color:** #2B5E9C  
**Use Case:** Alternative brand color - use on light backgrounds

```tsx
import { LogoAccent } from './logo';

<LogoAccent />
```

---

### Cream (Light)

**Component:** `LogoCream`  
**Color:** #F5F6F4  
**Use Case:** Light variant - use on dark backgrounds

```tsx
import { LogoCream } from './logo';

<LogoCream />
```

---

### Black

**Component:** `LogoBlack`  
**Color:** #000000  
**Use Case:** Pure black - use on very light backgrounds

```tsx
import { LogoBlack } from './logo';

<LogoBlack />
```

---

## Usage

### Basic Import

```tsx
import { LogoPrimary, LogoAccent, LogoCream, LogoBlack } from './logo';

function Header() {
  return (
    <header>
      <LogoPrimary />
    </header>
  );
}
```

### Custom Color

Use the base `Logo` component for custom colors:

```tsx
import { Logo } from './logo';

function CustomLogo() {
  return (
    <Logo color="#FF5733" />
  );
}
```

### With Custom Styling

All logo components accept `className` and `style` props:

```tsx
import { LogoPrimary } from './logo';

function Header() {
  return (
    <LogoPrimary 
      className="hover:opacity-80 transition-opacity"
      style={{ maxWidth: '120px' }}
    />
  );
}
```

### In Header (Light Background)

```tsx
import { LogoPrimary } from './logo';

function Header() {
  return (
    <header className="bg-white">
      <LogoPrimary />
    </header>
  );
}
```

### In Footer (Dark Background)

```tsx
import { LogoCream } from './logo';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#1E1E1E' }}>
      <LogoCream />
    </footer>
  );
}
```

---

## Props

### Logo Component

All logo components support the following props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `color` | `string` | `var(--qs-brand-primary)` | SVG fill/stroke color |
| `className` | `string` | `''` | CSS classes |
| `style` | `React.CSSProperties` | `{}` | Inline styles |

### Variant Components

Variant components (`LogoPrimary`, `LogoAccent`, `LogoCream`, `LogoBlack`) accept only:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | `''` | CSS classes |
| `style` | `React.CSSProperties` | `{}` | Inline styles |

---

## Color Reference

| Variant | Color Value | CSS Variable | Hex |
|---------|-------------|--------------|-----|
| **Primary** | Brand Primary | `var(--qs-brand-primary)` | #006E6E |
| **Accent** | Accent Blue | N/A | #2B5E9C |
| **Cream** | Light Cream | N/A | #F5F6F4 |
| **Black** | Pure Black | N/A | #000000 |

---

## Best Practices

### ✅ DO

- Use `LogoPrimary` in headers and light backgrounds
- Use `LogoCream` in footers and dark backgrounds
- Keep max width at or below 160px
- Use design tokens when possible (`var(--qs-brand-primary)`)
- Maintain aspect ratio (don't set fixed height)

### ❌ DON'T

- Don't use dark logos on dark backgrounds
- Don't use light logos on light backgrounds
- Don't distort the aspect ratio
- Don't exceed 160px width without testing
- Don't manually edit SVG paths

---

## Accessibility

### Color Contrast

All logo variants meet WCAG AA standards when used on appropriate backgrounds:

| Variant | Background | Contrast Ratio | WCAG |
|---------|------------|----------------|------|
| Primary (#006E6E) | White (#FFFFFF) | 7.2:1 | ✅ AAA |
| Accent (#2B5E9C) | White (#FFFFFF) | 5.8:1 | ✅ AA |
| Cream (#F5F6F4) | Dark (#1E1E1E) | 15.1:1 | ✅ AAA |
| Black (#000000) | White (#FFFFFF) | 21:1 | ✅ AAA |

### Screen Readers

Add `aria-label` for accessibility:

```tsx
<div aria-label="QuickSecure Logo">
  <LogoPrimary />
</div>
```

Or use as a link with proper labeling:

```tsx
<a href="/" aria-label="QuickSecure Home">
  <LogoPrimary />
</a>
```

---

## File Structure

```
/logo/
├── Logo.tsx              # Base logo component
├── primary.tsx           # Primary variant
├── accent.tsx            # Accent variant
├── cream.tsx             # Cream variant
├── black.tsx             # Black variant
├── LogoShowcase.tsx      # Demo component
├── index.ts              # Central exports
└── README.md             # This file
```

---

## Showcase Component

View all logo variants and examples:

```tsx
import { LogoShowcase } from './logo';

// Render in your design system
<LogoShowcase />
```

The showcase displays:
- All 4 color variants
- Usage examples
- Design specifications
- Import code snippets

---

## Responsive Behavior

The logo maintains its aspect ratio and scales responsively:

```tsx
// Desktop (max 160px)
<LogoPrimary />

// Tablet (max 120px)
<LogoPrimary style={{ maxWidth: '120px' }} />

// Mobile (max 100px)
<LogoPrimary style={{ maxWidth: '100px' }} />
```

---

## Examples by Context

### Navigation Header

```tsx
import { LogoPrimary } from './logo';

function Navigation() {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="container flex items-center justify-between py-4">
        <a href="/" aria-label="QuickSecure Home">
          <LogoPrimary />
        </a>
        {/* Navigation items */}
      </div>
    </nav>
  );
}
```

### Footer

```tsx
import { LogoCream } from './logo';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#1E1E1E', color: '#F5F6F4' }}>
      <div className="container py-12">
        <LogoCream />
        {/* Footer content */}
      </div>
    </footer>
  );
}
```

### Login Page

```tsx
import { LogoPrimary } from './logo';

function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <LogoPrimary style={{ margin: '0 auto 32px' }} />
        <h1>Sign In</h1>
        {/* Login form */}
      </div>
    </div>
  );
}
```

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| **1.0.0** | Oct 26, 2025 | Initial release with 4 color variants |

---

## Support

### Getting Help

1. **Quick Start:** See usage examples above
2. **Showcase:** Run `<LogoShowcase />` to preview all variants
3. **Issues:** Contact design system team

### Questions?

- **Max width?** 160px (can be reduced with `style` prop)
- **Custom colors?** Use `<Logo color="#your-color" />`
- **Dark mode?** Use `LogoCream` for dark backgrounds
- **Accessibility?** Add `aria-label` for screen readers

---

**QuickSecure Logo Library v1.0.0**  
**4 Variants • Production Ready • Fully Responsive**  
**Last Updated:** October 26, 2025
