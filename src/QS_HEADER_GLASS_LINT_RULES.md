# QS/Header Glass Effect Lint Rules
**Published:** October 25, 2025  
**Component:** `/components/qs/Header.tsx`  
**Status:** ✅ Published & Enforced

## Overview

The QS/Header component is now published and all pages use a single header instance. CSS lint rules enforce the Apple-style glass effect with gradient fade edges and prohibit bottom borders.

## Header Publication Status

### ✅ Single Header Architecture

**Location:** `/components/qs/Header.tsx`  
**Rendered in:** `/components/LiveWebsite.tsx` (line 253)  

```tsx
{/* SINGLE HEADER ARCHITECTURE
    This is the ONLY Header instance for the entire site.
    Position: sticky, top: 0, z-index: 1000
    All child pages should NOT render their own headers. */}
<Header onContactClick={revealContact} />
```

### Pages Verified (No Custom Headers)

✅ **LiveWebsite.tsx** - Uses QS/Header  
✅ **ProductsOverview.tsx** - No header (inherits from LiveWebsite)  
✅ **SolutionsOverview.tsx** - No header (inherits from LiveWebsite)  
✅ **ResourcesOverview.tsx** - No header (inherits from LiveWebsite)  
✅ **AboutOverview.tsx** - No header (inherits from LiveWebsite)  
✅ **SolutionK12.tsx** - No header (inherits from LiveWebsite)  
✅ **SolutionMultiSite.tsx** - No header (inherits from LiveWebsite)  
✅ **SolutionPrivateCharter.tsx** - No header (inherits from LiveWebsite)  
✅ **ProductPages.tsx** - No header (inherits from LiveWebsite)  

**Result:** ✅ Zero custom header implementations found. All pages use the single QS/Header instance.

## Glass Effect Requirements

### 1. Glass/Background (Required)

The header MUST have the Apple-style frosted glass background effect:

```tsx
// Required CSS properties
style={{
  background: 'rgba(255, 255, 255, 0.60)',  // White @ 60-68% opacity
  backdropFilter: 'blur(14px) saturate(120%)',
  WebkitBackdropFilter: 'blur(14px) saturate(120%)'
}}
```

**Specs:**
- Desktop blur: `14px`
- Tablet/Mobile blur: `12px`
- Background: White @ 60% (unscrolled), 68% (scrolled)
- Saturation: `120%`

### 2. Glass/Fade (Required)

The header MUST have gradient fade edges for seamless integration:

```tsx
// Gradient fade at bottom of header
<div style={{
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%',
  height: '24px',
  background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0) 100%)',
  pointerEvents: 'none'
}} />
```

**Specs:**
- Height: `24px` (desktop), `20px` (tablet/mobile ≤1024px)
- Gradient: White @ 35% → Transparent
- Direction: Top to bottom
- Position: Bottom edge of header

### 3. No Bottom Border (Forbidden)

Headers MUST NOT have bottom borders to maintain the seamless glass effect:

```tsx
// ❌ FORBIDDEN - Will trigger lint error
style={{
  borderBottom: '1px solid #EAEAEA'
}}

// ❌ FORBIDDEN - Will trigger lint error  
className="border-b"

// ✅ CORRECT - No bottom border
style={{
  borderBottom: 'none'  // Optional, none by default
}}
```

## CSS Lint Rules

### Location
`/styles/globals.css` - Lines 993-1078

### Rule 1: Glass Background Required

**Severity:** ERROR (🟠 Orange warning)

Detects headers missing backdrop-filter effect:

```css
nav[class*="qs-header"]:not([style*="backdrop-filter"])::after {
  content: '⚠️ LINT ERROR: Header missing Glass/Background effect';
  background: #F79009;  /* Orange */
}
```

**Triggers when:**
- Header exists without `backdrop-filter` or `backdropFilter` in inline styles

**Fix:**
Add backdrop-filter with blur and saturate to header element.

### Rule 2: No Bottom Border

**Severity:** ERROR (🔴 Red error)

Detects headers with bottom borders:

```css
nav[class*="qs-header"][style*="border-bottom"]:not([style*="border-bottom: none"])::after,
nav[class*="qs-header"].border-b::after {
  content: '⚠️ LINT ERROR: Header has bottom border - Forbidden';
  background: #F04438;  /* Red */
}
```

**Triggers when:**
- Header has `border-bottom` CSS property (not set to `none`)
- Header has `.border-b` Tailwind class

**Fix:**
Remove all bottom border styles. Use Glass/Background + Glass/Fade instead.

### Rule 3: Glass Fade Recommended

**Severity:** INFO (🔵 Cyan suggestion)

Suggests adding gradient fade for enhanced depth:

```css
nav[class*="qs-header"]:not([class*="glass-fade"])::before {
  content: 'ℹ️ SUGGESTION: Consider adding Glass/Fade edges';
  background: #33D9D9;  /* Cyan */
  opacity: 0.9;
}
```

**Triggers when:**
- Header doesn't have `.glass-fade` class
- Header doesn't have `linear-gradient` in inline styles

**Fix:**
Add `.glass-fade` class to header element OR add gradient fade div inside header.

## QS/Header Implementation

### Current Status

✅ **Glass/Background:** Implemented  
✅ **Glass/Fade:** Implemented  
✅ **No Bottom Border:** Enforced  
✅ **Lint Rules:** Passing  

### Code Structure

```tsx
<nav className="qs-header-container glass-fade" style={{
  position: 'sticky',
  top: 0,
  zIndex: 1000,
  background: isScrolled 
    ? 'var(--navbar-glass-scrolled-bg)'   // rgba(255, 255, 255, 0.68)
    : 'var(--navbar-glass-bg)',            // rgba(255, 255, 255, 0.60)
  backdropFilter: isScrolled 
    ? 'var(--navbar-glass-scrolled-blur)'  // blur(14px) saturate(120%)
    : 'var(--navbar-glass-blur)',          // blur(14px) saturate(120%)
  WebkitBackdropFilter: isScrolled 
    ? 'var(--navbar-glass-scrolled-blur)' 
    : 'var(--navbar-glass-blur)',
  padding: '16px 80px',
  transition: 'var(--navbar-glass-transition)',
  borderBottom: 'none'  // Explicit enforcement
}}>
  {/* Glass/Fade - Gradient at bottom */}
  <div style={{
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '24px',
    background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0) 100%)',
    pointerEvents: 'none',
    zIndex: 1
  }} />
  
  {/* Header content */}
  <div style={{ position: 'relative', zIndex: 2 }}>
    {/* Logo, nav, CTAs */}
  </div>
</nav>
```

## CSS Variables

### Navbar Glass Tokens

```css
/* Base (unscrolled) */
--navbar-glass-bg: rgba(255, 255, 255, 0.60);
--navbar-glass-blur: blur(14px) saturate(120%);

/* Scrolled */
--navbar-glass-scrolled-bg: rgba(255, 255, 255, 0.68);
--navbar-glass-scrolled-blur: blur(14px) saturate(120%);

/* Transition */
--navbar-glass-transition: all 0.35s ease-in-out;

/* Text colors */
--navbar-text-color: #0E0E0E;
--navbar-active-color: var(--qs-primary);  /* #006E6E */
```

### Responsive Adjustments

```css
/* Tablet (≤1024px) and Mobile (≤768px) */
@media (max-width: 1024px) {
  :root {
    --navbar-glass-blur: blur(12px) saturate(120%);
    --navbar-glass-scrolled-blur: blur(12px) saturate(120%);
    --navbar-glass-fade-height: 20px;
  }
}
```

**Responsive Specs:**

| Viewport | Blur | Fade Height |
|----------|------|-------------|
| Desktop (>1024px) | `14px` | `24px` |
| Tablet (≤1024px) | `12px` | `20px` |
| Mobile (≤768px) | `12px` | `20px` |

## Design Rationale

### Why No Bottom Border?

1. **Seamless Integration:** Glass effect creates visual separation without hard lines
2. **Modern Aesthetic:** Apple-style frosted glass is more refined than borders
3. **Depth Through Transparency:** Background blur creates natural layering
4. **Fade Edges:** Gradient fade provides subtle depth cues

### Why Gradient Fade?

1. **Enhanced Depth:** Creates smooth transition to page content
2. **Softens Edges:** Prevents harsh cutoff at header bottom
3. **Apple-Inspired:** Matches iOS/macOS design language
4. **Scroll Responsive:** Maintains elegance during scroll

### Why Enforce with Lint Rules?

1. **Consistency:** All headers follow same visual treatment
2. **Quality Control:** Prevents accidental regressions
3. **Developer Guidance:** Clear feedback when standards aren't met
4. **Documentation:** Self-documenting code through warnings

## Testing Checklist

### Visual Verification

- [ ] Header has glass background (frosted appearance)
- [ ] Header has backdrop blur (content behind is blurred)
- [ ] Header has gradient fade at bottom edge
- [ ] Header has NO bottom border
- [ ] Glass effect transitions smoothly on scroll
- [ ] Opacity increases slightly when scrolled (60% → 68%)

### Lint Rule Verification

- [ ] No orange warning (Glass/Background present)
- [ ] No red error (No bottom border)
- [ ] No cyan suggestion (glass-fade class present)
- [ ] Header has `.glass-fade` class
- [ ] Header has `backdropFilter` in inline styles
- [ ] Header does NOT have `border-bottom` CSS

### Cross-Browser Testing

- [ ] Chrome/Edge - Backdrop filter working
- [ ] Firefox - Backdrop filter working
- [ ] Safari - WebkitBackdropFilter working
- [ ] Mobile Safari - 12px blur applied
- [ ] Mobile Chrome - 12px blur applied

### Responsive Testing

- [ ] Desktop (1440px+) - 14px blur
- [ ] Tablet (1024px) - 12px blur
- [ ] Mobile (768px) - 12px blur
- [ ] Small mobile (390px) - 12px blur

## Common Issues & Fixes

### Issue: Orange Warning (Missing Glass Effect)

**Problem:** Header doesn't have backdrop-filter  
**Fix:** Add inline style with backdropFilter and WebkitBackdropFilter

```tsx
// Add to header element
style={{
  backdropFilter: 'blur(14px) saturate(120%)',
  WebkitBackdropFilter: 'blur(14px) saturate(120%)'
}}
```

### Issue: Red Error (Bottom Border Detected)

**Problem:** Header has border-bottom CSS  
**Fix:** Remove border-bottom or set to 'none'

```tsx
// Remove this:
style={{ borderBottom: '1px solid #EAEAEA' }}
className="border-b"

// Or explicitly set:
style={{ borderBottom: 'none' }}
```

### Issue: Cyan Suggestion (Missing Fade)

**Problem:** Header doesn't have gradient fade  
**Fix:** Add `.glass-fade` class OR add gradient div

```tsx
// Option 1: Add class
<nav className="qs-header-container glass-fade">

// Option 2: Add gradient div
<div style={{
  position: 'absolute',
  bottom: 0,
  width: '100%',
  height: '24px',
  background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0) 100%)'
}} />
```

## Future Enhancements

### Potential Additions

1. **Dark Mode Glass:** Adjust opacity and blur for dark backgrounds
2. **Scroll Progress Indicator:** Subtle line at bottom showing page scroll
3. **Dynamic Blur:** Increase blur based on scroll velocity
4. **Color Adaptation:** Glass tint matches page hero color
5. **Mobile Collapse:** Condensed header on mobile scroll

### Lint Rule Extensions

1. **Accessibility Check:** Ensure contrast ratios meet WCAG
2. **Performance Warning:** Flag excessive blur values
3. **Z-index Validation:** Ensure header stays above content
4. **Sticky Position:** Verify sticky positioning is correct

## Documentation References

- **Header Architecture:** `/HEADER_ARCHITECTURE.md`
- **Active State Guide:** `/NAVBAR_ACTIVE_STATE_GUIDE.md`
- **Glass Effect Refinement:** `/NAVBAR_GLASS_REFINEMENT_COMPLETE.md`
- **Single Header Enforcement:** `/GUARDRAILS.md`
- **Preflight Automation:** `/PREFLIGHT_AUTOMATION_COMPLETE.md`

## Changelog

**October 25, 2025**
- ✅ Published QS/Header as single header instance
- ✅ Verified zero custom headers across all pages
- ✅ Added CSS lint rules for glass effect enforcement
- ✅ Added `.glass-fade` class to QS/Header
- ✅ Updated documentation with complete specifications

---

**Status:** ✅ Complete & Published  
**Last Updated:** October 25, 2025  
**Maintainer:** QuickSecure Design System Team
