# Desktop Profile — Quick Reference

## Current State

**Global Setting:** `profile="Desktop"` (all devices)

---

## Key Points

### ✅ What Works
- Hover effects on ALL devices (desktop, laptop, tablet, mobile)
- Mega-menu hover-intent timing (140ms open, 180ms close)
- Time-based animations with constant seeds
- Scroll-based parallax (no cursor tracking)

### ❌ What's Disabled
- Cursor-follow gradients
- Cursor magnet effects
- Device-adaptive behavior switching
- Touch-specific fallbacks

---

## Code Usage

### Check Current Profile
```typescript
import { useAppSettings } from './components/AppSettings';

const { profile, canHover, enableParallax } = useAppSettings();
// profile === 'Desktop' (always)
// canHover === true (always)
// enableParallax === true (always)
```

### Conditional Features
```typescript
// Cursor effects (disabled in Desktop)
if (enableCursorEffects) {
  // This won't run in Desktop profile
}

// Parallax (enabled in Desktop)
if (enableParallax) {
  // This runs - uses scroll-based parallax
}
```

---

## Animation Standards

### ✅ Do This
```typescript
// Time-based loops
const duration = 3000; // Fixed duration
const seed = 42; // Constant seed
const delay = index * 0.5; // Deterministic delays
```

### ❌ Don't Do This
```typescript
// Random seeds
const seed = Math.random();

// Cursor-tracking
element.style.left = `${mouseX}px`;

// Device detection
if ('ontouchstart' in window) { ... }
```

---

## Hover Behavior

### Mega-Menus
```typescript
const OPEN_DELAY = 140;  // ms - hover to open
const CLOSE_DELAY = 180; // ms - between dropdowns
const LEAVE_DELAY = 220; // ms - when leaving menu
```

### All Devices Get:
- Hover-to-open menus
- Instant preview updates
- Smooth close timing
- Glass morphism effects

---

## Files to Know

| File | Purpose |
|------|---------|
| `/components/AppSettings.tsx` | Profile provider |
| `/App.tsx` | Sets global profile |
| `/components/hooks/useCursorGradient.tsx` | Cursor effects (disabled) |
| `/components/hooks/useParallax.tsx` | Scroll parallax (enabled) |
| `/styles/globals.css` | Desktop tokens |

---

## Testing

### On Laptop
1. Hover nav items → menus open
2. Scroll page → parallax works
3. Hover cards → lift effects work
4. No cursor chasing ✓
5. No unexpected motion ✓

### Expected: Laptop === Desktop

---

## Switching Profiles (Future)

To enable Touch or Reduced:

```typescript
// In App.tsx
<AppSettingsProvider profile="Touch">
  ...
</AppSettingsProvider>
```

**Current:** Only Desktop is active.

---

## Support

See `/INTERACTION_PROFILE_DESKTOP.md` for full documentation.
