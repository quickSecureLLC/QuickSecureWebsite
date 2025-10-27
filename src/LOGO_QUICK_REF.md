# QUICKSECURE LOGO - QUICK REFERENCE

**Version:** 1.0.0 | **Variants:** 4 | **Max Width:** 160px | **Last Updated:** Oct 26, 2025

---

## AVAILABLE VARIANTS

| Variant | Component | Color | Use Case |
|---------|-----------|-------|----------|
| **Primary** | `LogoPrimary` | #006E6E (brand primary) | Light backgrounds |
| **Accent** | `LogoAccent` | #2B5E9C (blue) | Light backgrounds (alt) |
| **Cream** | `LogoCream` | #F5F6F4 (cream) | Dark backgrounds |
| **Black** | `LogoBlack` | #000000 (black) | Very light backgrounds |

---

## QUICK START

```tsx
// 1. Import
import { LogoPrimary, LogoCream } from './logo';

// 2. Use
// Light background (header)
<LogoPrimary />

// Dark background (footer)
<LogoCream />
```

---

## COMMON PATTERNS

### Header (Light Background)

```tsx
import { LogoPrimary } from './logo';

<nav className="bg-white">
  <a href="/" aria-label="QuickSecure Home">
    <LogoPrimary />
  </a>
</nav>
```

### Footer (Dark Background)

```tsx
import { LogoCream } from './logo';

<footer style={{ backgroundColor: '#1E1E1E' }}>
  <LogoCream />
</footer>
```

### Custom Color

```tsx
import { Logo } from './logo';

<Logo color="#FF5733" />
```

### Custom Size

```tsx
import { LogoPrimary } from './logo';

<LogoPrimary style={{ maxWidth: '120px' }} />
```

---

## SPECS

| Property | Value |
|----------|-------|
| **Max Width** | 160px |
| **Height** | auto |
| **Format** | SVG |
| **ViewBox** | 0 0 120 140 |

---

## COLOR VALUES

```css
Primary:  #006E6E  /* var(--qs-brand-primary) */
Accent:   #2B5E9C  /* Accent blue */
Cream:    #F5F6F4  /* Light cream */
Black:    #000000  /* Pure black */
```

---

## ACCESSIBILITY

```tsx
// Add aria-label for screen readers
<div aria-label="QuickSecure Logo">
  <LogoPrimary />
</div>

// Or in a link
<a href="/" aria-label="QuickSecure Home">
  <LogoPrimary />
</a>
```

---

## FILES

- `/logo/Logo.tsx` - Base component
- `/logo/primary.tsx` - Primary variant
- `/logo/accent.tsx` - Accent variant
- `/logo/cream.tsx` - Cream variant
- `/logo/black.tsx` - Black variant
- `/logo/index.ts` - Central exports
- `/logo/LogoShowcase.tsx` - Demo component
- `/logo/README.md` - Full documentation

---

## SHOWCASE

```tsx
import { LogoShowcase } from './logo';

<LogoShowcase />
```

View all variants, usage examples, and design specifications.
