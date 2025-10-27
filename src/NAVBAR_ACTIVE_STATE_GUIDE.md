# QS/Header Active State Guide
**Date:** October 25, 2025  
**Component:** `/components/qs/Header.tsx`  
**Status:** ✅ Complete

## Overview

The QS/Header component maintains active state highlighting for top-level navigation items when the current page matches their route. This provides clear visual feedback to users about their current location in the site.

## Active State Specifications

### Visual Styling

When a top-level nav item matches the current page:

```tsx
{
  color: 'var(--navbar-active-color)',      // --qs-primary (#006E6E teal)
  fontVariationSettings: "'wght' 600",       // Semibold weight
  fontSize: '16px',                          // Fixed size (no change)
  lineHeight: '24px',                        // Fixed line height (no change)
  textDecoration: 'none'                     // No underline
}
```

**Key Points:**
- ✅ Color = `var(--qs-primary)` (#006E6E teal)
- ✅ Font weight = 600 (semibold)
- ✅ No underline
- ✅ No size/line-height change
- ✅ Persists while on matching section

## Routing Logic

### isActive() Function

```tsx
const isActive = (section: string) => {
  if (section === 'products') {
    return currentPath.startsWith('/products');
  } else if (section === 'solutions') {
    return currentPath.startsWith('/solutions');
  } else if (section === 'resources') {
    return currentPath.startsWith('/resources');
  } else if (section === 'about') {
    return currentPath === '/about';
  }
  return false;
};
```

### Route Matching Rules

| Nav Item | Route Pattern | Example Paths |
|----------|---------------|---------------|
| **Products** | `/products*` | `/products`, `/products/nexus`, `/products/panic-app` |
| **Solutions** | `/solutions*` | `/solutions`, `/solutions/k12`, `/solutions/multi-site` |
| **Resources** | `/resources*` | `/resources`, `/resources#docs` |
| **About** | `/about` (exact) | `/about` only |

**Note:** Products, Solutions, and Resources use `startsWith()` to match all child routes. About uses exact match.

## Implementation Details

### State Tracking

```tsx
const [currentPath, setCurrentPath] = useState<string>('');

// Track current route for active nav highlighting
useEffect(() => {
  const updatePath = () => {
    setCurrentPath(window.location.hash.slice(1) || '/');
  };
  
  updatePath();
  window.addEventListener('hashchange', updatePath);
  return () => window.removeEventListener('hashchange', updatePath);
}, []);
```

- Uses hash-based routing (`window.location.hash`)
- Updates on `hashchange` event
- Removes leading `#` from hash

### Conditional Styling

Each nav link applies active styling conditionally:

```tsx
// Products example
style={{
  fontVariationSettings: (isProductsDropdownOpen || isActive('products')) 
    ? "'wght' 600" 
    : "'wght' 500",
  color: (isProductsDropdownOpen || isActive('products')) 
    ? 'var(--navbar-active-color)' 
    : '#0E0E0E',
  // ... other styles
}}
```

**Logic:**
- Active if dropdown is open OR route matches
- Ensures visual feedback during both hover and active states

### Hover Interaction

The hover handlers respect active state:

```tsx
onMouseEnter={(e) => {
  e.currentTarget.style.color = 'var(--navbar-active-color)';
  e.currentTarget.style.fontVariationSettings = "'wght' 600";
}}

onMouseLeave={(e) => {
  // Only reset if NOT active
  if (!isProductsDropdownOpen && !isActive('products')) {
    e.currentTarget.style.color = '#0E0E0E';
    e.currentTarget.style.fontVariationSettings = "'wght' 500";
  }
}}
```

**Key Behavior:**
- Hover applies active styling temporarily
- On mouse leave, only reset if item is NOT active
- Active items maintain styling after hover

## CSS Variables

```css
/* Nav text colors */
--navbar-text-color: #0E0E0E;              /* Default near-black */
--navbar-active-color: var(--qs-primary);  /* Active/hover teal (#006E6E) */
```

**Location:** `/styles/globals.css`

## Examples

### Scenario 1: User on Products Page

```
Current URL: #/products/nexus

Active States:
- Products nav item: ✅ Active (teal, weight 600)
- Solutions nav item: ❌ Default (near-black, weight 500)
- Resources nav item: ❌ Default
- About nav item: ❌ Default
```

### Scenario 2: User on Solutions K-12

```
Current URL: #/solutions/k12

Active States:
- Products nav item: ❌ Default
- Solutions nav item: ✅ Active (teal, weight 600)
- Resources nav item: ❌ Default
- About nav item: ❌ Default
```

### Scenario 3: User Hovers Products (while on About page)

```
Current URL: #/about

Initial State:
- About nav item: ✅ Active (teal, weight 600)
- Products nav item: ❌ Default

During Hover:
- About nav item: ✅ Active (still teal, weight 600)
- Products nav item: 🎯 Hover (teal, weight 600, temporary)

After Hover:
- About nav item: ✅ Active (still teal, weight 600)
- Products nav item: ❌ Default (returns to near-black, weight 500)
```

## Testing Checklist

- [ ] Products active on `/products`, `/products/nexus`, etc.
- [ ] Solutions active on `/solutions`, `/solutions/k12`, etc.
- [ ] Resources active on `/resources`
- [ ] About active on `/about` (exact match only)
- [ ] Active state persists during hover
- [ ] Active state persists after mouse leave
- [ ] Non-active items reset after hover
- [ ] Font weight = 600 for active items
- [ ] Color = #006E6E (teal) for active items
- [ ] No underline on active items
- [ ] No size/line-height changes

## Design Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--navbar-text-color` | `#0E0E0E` | Default nav text color |
| `--navbar-active-color` | `var(--qs-primary)` | Active/hover color |
| `--qs-primary` | `#006E6E` | Primary teal brand color |

## Browser Compatibility

- ✅ Chrome/Edge (Chromium)
- ✅ Firefox
- ✅ Safari
- ✅ Mobile browsers

Uses standard hash routing and CSS custom properties with fallbacks.

---

**Last Updated:** October 25, 2025  
**Verified By:** QS Design System Team
