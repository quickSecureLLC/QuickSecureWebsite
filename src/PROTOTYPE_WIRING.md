# Prototype Wiring Documentation
**Date:** October 24, 2025  
**Component:** QS/Header Navigation  
**Status:** ✅ Complete - All Routes Connected

---

## Navigation Structure (All Breakpoints)

### Top-Level Labels

All top-level navigation items are clickable and navigate to their respective overview pages:

| Label | Destination | Frame Name |
|-------|-------------|------------|
| **Logo** | `#/` | Home |
| **Products** | `#/products` | Products — Overview |
| **Solutions** | `#/solutions` | Solutions — Overview |
| **Resources** | `#/resources` | Resources — Overview |
| **About** | `#/about` | About — Overview |

---

## Dropdown Links

### Products Dropdown (5 Items)

Hover over "Products" reveals dropdown with 5 key products:

| Link Name | Destination | Frame Name |
|-----------|-------------|------------|
| **Nexus** | `#/products/nexus` | /products/nexus |
| **Panic App** | `#/products/panic-app` | /products/panic-app |
| **Retrofit Locks** | `#/products/retrofit-locks` | /products/retrofit-locks |
| **Gunshot Detection** | `#/products/gunshot-detection` | /products/gunshot-detection |
| **Ticketing** | `#/products/ticketing` | /products/ticketing |

**Behavior:**
- Hover reveals dropdown (150ms delay)
- Click top-level "Products" → Navigate to `#/products`
- Click dropdown item → Navigate to specific product page
- Dropdown closes on click or mouse leave (150ms delay)

---

### Solutions Dropdown (3 Items)

Hover over "Solutions" reveals dropdown with 3 solution types:

| Link Name | Destination | Frame Name |
|-----------|-------------|------------|
| **K-12 Schools** | `#/solutions/k12` | /solutions/k12 |
| **Multi-Site Organizations** | `#/solutions/multi-site` | /solutions/multi-site |
| **Private & Charter Schools** | `#/solutions/private-charter` | /solutions/private-charter |

**Behavior:**
- Hover reveals dropdown (150ms delay)
- Click top-level "Solutions" → Navigate to `#/solutions`
- Click dropdown item → Navigate to specific solution page
- Dropdown closes on click or mouse leave (150ms delay)

---

### Resources Dropdown (4 Items)

Hover over "Resources" reveals dropdown with 4 resource types:

| Link Name | Destination | Frame Name |
|-----------|-------------|------------|
| **Docs** | `#/resources/docs` | /resources/docs |
| **Case Studies** | `#/resources/case-studies` | /resources/case-studies |
| **Blog** | `#/resources/blog` | /resources/blog |
| **FAQ** | `#/resources/faq` | /resources/faq |

**Behavior:**
- Hover reveals dropdown (150ms delay)
- Click top-level "Resources" → Navigate to `#/resources`
- Click dropdown item → Navigate to specific resource section
- Dropdown closes on click or mouse leave (150ms delay)

---

## Interaction Patterns

### Desktop (≥1024px)

**Hover Behavior:**
- Products/Solutions/Resources: Color changes to `var(--qs-primary)` (#006E6E)
- About: Color changes to `var(--qs-primary)` (#006E6E)
- Transition: 180ms ease-out (color only)
- No font weight change (constant `'wght' 500`)
- No bottom borders or underlines

**Click Behavior:**
- Top-level links: Navigate to overview page
- Dropdown links: Navigate to specific page
- Logo: Navigate to home (`#/`)

**Dropdown Timing:**
- Open: Instant on hover
- Close: 150ms delay after mouse leave
- Prevents accidental close on quick mouse movements

---

### Tablet (768px - 1023px)

**Same as Desktop:**
- Identical hover states
- Identical dropdown behavior
- Responsive padding adjustments

---

### Mobile (≤767px)

**Hamburger Menu:**
- Tap hamburger icon → Opens mobile menu
- Full-width accordion menu
- Touch-friendly 48px min-height

**Accordion Behavior:**
- Products: Tap to expand (5 items)
- Solutions: Tap to expand (3 items)
- Resources: Tap to expand (4 items)
- About: Direct link (no accordion)

**Close Behavior:**
- Tap outside menu → Closes menu
- Tap any link → Closes menu and navigates

---

## Hash-Based Routing

All navigation uses hash-based routing for single-page application behavior:

### Route Format
```
#/[section]/[page]
```

### Examples
```
#/                           → Home (all templates)
#/products                   → Products Overview
#/products/nexus             → QuickSecure Nexus Product Page
#/solutions                  → Solutions Overview
#/solutions/k12              → K-12 Schools Solution Page
#/resources                  → Resources Overview
#/resources/docs             → Resources with Docs tab active
#/about                      → About Overview
```

### Browser Navigation
- **Back button:** Returns to previous page
- **Forward button:** Navigates to next page
- **Scroll position:** Resets to top on route change
- **Page transitions:** 300ms Smart Animate fade

---

## Component Implementation

### Header Component (`/components/qs/Header.tsx`)

```tsx
const products = [
  { id: 'nexus', name: 'Nexus', path: '#/products/nexus' },
  { id: 'panic-app', name: 'Panic App', path: '#/products/panic-app' },
  { id: 'retrofit-locks', name: 'Retrofit Locks', path: '#/products/retrofit-locks' },
  { id: 'gunshot-detection', name: 'Gunshot Detection', path: '#/products/gunshot-detection' },
  { id: 'ticketing', name: 'Ticketing', path: '#/products/ticketing' }
];

const solutions = [
  { id: 'k12', name: 'K-12 Schools', path: '#/solutions/k12' },
  { id: 'multi-site', name: 'Multi-Site Organizations', path: '#/solutions/multi-site' },
  { id: 'private-charter', name: 'Private & Charter Schools', path: '#/solutions/private-charter' }
];

const resources = [
  { id: 'docs', name: 'Docs', path: '#/resources/docs' },
  { id: 'case-studies', name: 'Case Studies', path: '#/resources/case-studies' },
  { id: 'blog', name: 'Blog', path: '#/resources/blog' },
  { id: 'faq', name: 'FAQ', path: '#/resources/faq' }
];
```

### LiveWebsite Component (`/components/LiveWebsite.tsx`)

```tsx
const productPages: Record<string, React.ReactNode> = {
  '/products/nexus': <QuickSecureNexusPage />,
  '/products/panic-app': <PanicButtonAppPage />,
  '/products/retrofit-locks': <ManualLockPage />,
  '/products/gunshot-detection': <AIGunshotDetectionPage />,
  '/products/ticketing': <TicketingSystemPage />
};

const overviewPages: Record<string, React.ReactNode> = {
  '/products': <ProductsOverview />,
  '/solutions': <SolutionsOverview />,
  '/resources': <ResourcesOverview />,
  '/about': <AboutOverview />
};
```

---

## Accessibility

### Keyboard Navigation
- **Tab:** Navigate through top-level items
- **Enter/Space:** Activate link or open dropdown
- **Arrow keys:** Navigate within dropdown (browser default)
- **Escape:** Close dropdown (browser default)

### Screen Readers
- `aria-haspopup="true"` on dropdown triggers
- `aria-expanded` states for mobile accordions
- Semantic HTML (`<nav>`, `<a>`, `<button>`)
- Clear link text (no ambiguous labels)

### Focus States
- 2px teal outline (`var(--qs-accent)`)
- Visible on all interactive elements
- WCAG AA compliant

---

## Testing Checklist

### Desktop Navigation
- [x] Logo → Home (`#/`)
- [x] Products (click) → Products Overview (`#/products`)
- [x] Products (hover) → Dropdown appears (5 items)
- [x] Products > Nexus → Product page (`#/products/nexus`)
- [x] Products > Panic App → Product page (`#/products/panic-app`)
- [x] Products > Retrofit Locks → Product page (`#/products/retrofit-locks`)
- [x] Products > Gunshot Detection → Product page (`#/products/gunshot-detection`)
- [x] Products > Ticketing → Product page (`#/products/ticketing`)
- [x] Solutions (click) → Solutions Overview (`#/solutions`)
- [x] Solutions (hover) → Dropdown appears (3 items)
- [x] Solutions > K-12 Schools → Solution page (`#/solutions/k12`)
- [x] Solutions > Multi-Site → Solution page (`#/solutions/multi-site`)
- [x] Solutions > Private & Charter → Solution page (`#/solutions/private-charter`)
- [x] Resources (click) → Resources Overview (`#/resources`)
- [x] Resources (hover) → Dropdown appears (4 items)
- [x] Resources > Docs → Resources with docs tab (`#/resources/docs`)
- [x] Resources > Case Studies → Resources with case studies tab (`#/resources/case-studies`)
- [x] Resources > Blog → Resources with blog tab (`#/resources/blog`)
- [x] Resources > FAQ → Resources with FAQ tab (`#/resources/faq`)
- [x] About (click) → About Overview (`#/about`)

### Mobile Navigation
- [x] Hamburger icon → Opens menu
- [x] Products accordion → Expands (5 items)
- [x] Solutions accordion → Expands (3 items)
- [x] Resources accordion → Expands (4 items)
- [x] About link → Navigates to about page
- [x] Tap outside → Closes menu
- [x] Tap link → Closes menu and navigates

### Browser Navigation
- [x] Back button → Returns to previous page
- [x] Forward button → Navigates to next page
- [x] Direct URL → Loads correct page
- [x] Refresh → Maintains current page

---

## Figma Prototype Settings

### Trigger: Click
- **Logo** → Navigate to: Home
- **Products** → Navigate to: /products
- **Solutions** → Navigate to: /solutions
- **Resources** → Navigate to: /resources
- **About** → Navigate to: /about

### Trigger: Hover (Desktop/Tablet Only)
- **Products** → Open dropdown overlay (150ms delay)
- **Solutions** → Open dropdown overlay (150ms delay)
- **Resources** → Open dropdown overlay (150ms delay)

### Dropdown Link: Click
- **Nexus** → Navigate to: /products/nexus
- **Panic App** → Navigate to: /products/panic-app
- **Retrofit Locks** → Navigate to: /products/retrofit-locks
- **Gunshot Detection** → Navigate to: /products/gunshot-detection
- **Ticketing** → Navigate to: /products/ticketing
- **K-12 Schools** → Navigate to: /solutions/k12
- **Multi-Site Organizations** → Navigate to: /solutions/multi-site
- **Private & Charter Schools** → Navigate to: /solutions/private-charter
- **Docs** → Navigate to: /resources/docs
- **Case Studies** → Navigate to: /resources/case-studies
- **Blog** → Navigate to: /resources/blog
- **FAQ** → Navigate to: /resources/faq

### Transition: Smart Animate
- **Duration:** 300ms
- **Easing:** Ease In-Out
- **Layers:** Matched by name (auto)

---

## URL Structure

### Home
```
https://quicksecure.com/
↓ becomes
https://quicksecure.com/#/
```

### Products
```
https://quicksecure.com/products
↓ becomes
https://quicksecure.com/#/products

https://quicksecure.com/products/nexus
↓ becomes
https://quicksecure.com/#/products/nexus
```

### Solutions
```
https://quicksecure.com/solutions
↓ becomes
https://quicksecure.com/#/solutions

https://quicksecure.com/solutions/k12
↓ becomes
https://quicksecure.com/#/solutions/k12
```

### Resources
```
https://quicksecure.com/resources
↓ becomes
https://quicksecure.com/#/resources

https://quicksecure.com/resources/docs
↓ becomes
https://quicksecure.com/#/resources/docs
```

### About
```
https://quicksecure.com/about
↓ becomes
https://quicksecure.com/#/about
```

---

## Summary

✅ **All navigation routes connected**  
✅ **Top-level labels clickable**  
✅ **Dropdown links functional**  
✅ **Logo returns to home**  
✅ **Browser back/forward supported**  
✅ **Mobile accordion menu working**  
✅ **Keyboard accessible**  
✅ **Screen reader compatible**

**Total Routes:** 18
- 1 Home route
- 1 Products overview
- 5 Product detail pages
- 1 Solutions overview
- 3 Solution detail pages
- 1 Resources overview
- 4 Resource section pages
- 1 About overview

**Hover States:** Color-only (#006E6E teal), 180ms ease-out  
**Dropdown Timing:** 150ms delay on close  
**Page Transitions:** 300ms Smart Animate fade  
**Mobile Menu:** Full-width accordion with 48px touch targets

---

**Last Updated:** October 24, 2025  
**Status:** ✅ Production Ready  
**Next Review:** User testing and analytics
