# QS/Header Glass Effect - Quick Reference
**Published:** October 25, 2025 | **Status:** ✅ Enforced

## Single Header Rule

✅ **ONE header for entire site** → `/components/qs/Header.tsx`  
✅ **Rendered in** → `/components/LiveWebsite.tsx` line 253  
❌ **No custom headers** in any child pages

## Required Glass Effect

### 1. Glass/Background (Required)
```tsx
backdropFilter: 'blur(14px) saturate(120%)'
background: 'rgba(255, 255, 255, 0.60)'
```

### 2. Glass/Fade (Required)
```tsx
className="glass-fade"
// OR
<div style={{
  background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0) 100%)',
  height: windowWidth <= 1024 ? '20px' : '24px'  // Responsive
}} />
```

### 3. No Bottom Border (Forbidden)
```tsx
❌ borderBottom: '1px solid...'
❌ className="border-b"
✅ borderBottom: 'none'
```

## Lint Warnings

| Color | Severity | Issue | Fix |
|-------|----------|-------|-----|
| 🟠 Orange | ERROR | Missing backdrop-filter | Add glass background |
| 🔴 Red | ERROR | Has bottom border | Remove border |
| 🔵 Cyan | INFO | Missing glass-fade | Add .glass-fade class |

## CSS Variables

```css
--navbar-glass-bg: rgba(255, 255, 255, 0.60);
--navbar-glass-blur: blur(14px) saturate(120%);
--navbar-glass-scrolled-bg: rgba(255, 255, 255, 0.68);
--navbar-glass-fade-height: 24px;  /* 20px on tablet/mobile */
```

## Responsive

- **Desktop (>1024px):** 14px blur, 24px fade
- **Tablet (≤1024px):** 12px blur, 20px fade
- **Mobile (≤768px):** 12px blur, 20px fade

## Code Template

```tsx
<nav className="qs-header-container glass-fade" style={{
  position: 'sticky',
  top: 0,
  zIndex: 1000,
  background: 'var(--navbar-glass-bg)',
  backdropFilter: 'var(--navbar-glass-blur)',
  WebkitBackdropFilter: 'var(--navbar-glass-blur)',
  borderBottom: 'none'
}}>
  {/* Glass fade gradient - responsive height */}
  <div style={{
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: windowWidth <= 1024 ? '20px' : '24px',
    background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0) 100%)',
    pointerEvents: 'none'
  }} />
  
  {/* Header content */}
</nav>
```

---
**Full Docs:** `/QS_HEADER_GLASS_LINT_RULES.md`
