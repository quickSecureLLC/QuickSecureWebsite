# Preflight: Single Header/Footer - Quick Reference

**Status:** ✅ Enabled  
**Triggers:** Publish, Frame Duplicate, Component Insertion  
**Auto-Fix:** Enabled for safe operations  

---

## Rules

| # | Rule | Action | Auto-Fix |
|---|------|--------|----------|
| 1 | More than 1 QS/Header | Highlight extras, block publish | ✅ Remove duplicates |
| 2 | Zero QS/Header | Insert at root (Y=0) | ⚠️ Manual |
| 3 | Header not at root | Block nested headers | ✅ Move to root |
| 4 | More than 1 QS/Footer | Highlight extras, block publish | ✅ Remove duplicates |
| 5 | Zero QS/Footer | Insert at root (after main) | ⚠️ Manual |
| 6 | Footer not at root | Block nested footers | ✅ Move to root |
| 7 | Footer missing spacing | Insert spacing div | ✅ Add spacing |

---

## Quick Commands

### Run All Checks
```typescript
import { runAllPreflightChecks } from './components/utils/preflightChecks';

const result = runAllPreflightChecks();
// Returns: { passed, errors, warnings, fixes }
```

### Check Before Insert
```typescript
import { checkComponentDuplication } from './components/utils/preflightChecks';

const canInsert = checkComponentDuplication('QS/Footer');
if (!canInsert.passed) {
  alert('Footer already exists');
}
```

### React Hook
```typescript
import { usePreflightCheck } from './components/utils/preflightChecks';

const { runChecks } = usePreflightCheck(true);
```

---

## CSS Guardrails

### Header
```css
/* Single header - hide duplicates */
nav[class*="qs-header"] ~ nav[class*="qs-header"] {
  display: none !important;
}

/* Block in templates */
[data-section] nav[class*="qs-header"] {
  display: none !important;
}
```

### Footer
```css
/* Single footer - hide duplicates */
footer[class*="qs-footer"]:not(:last-of-type) {
  display: none !important;
}

/* Block in templates */
[data-section] footer[class*="qs-footer"],
main footer[class*="qs-footer"]:not(main > footer),
section footer[class*="qs-footer"] {
  display: none !important;
}

/* Enforce 96px spacing */
footer[class*="qs-footer"] {
  margin-top: var(--qs-section-spacing);
}

/* Remove margin if spacing div exists */
.section-spacing + footer[class*="qs-footer"] {
  margin-top: 0 !important;
}
```

---

## Validation Checks

| Check | Function | Result |
|-------|----------|--------|
| Header presence | `checkHeaderPresence()` | Exactly 1 at root |
| Header position | `checkHeaderPosition()` | Sticky, Y=0, z:1000 |
| Footer presence | `checkFooterPresence()` | Exactly 1 at root |
| Footer position | `checkFooterPosition()` | Last element, 96px spacing |
| Template integrity | `checkTemplateIntegrity()` | No nested Header/Footer |
| Component duplication | `checkComponentDuplication(name)` | Prevent duplicates |

---

## Error Codes

**🔴 ERROR (Blocks Publish):**
- Multiple headers/footers detected
- Header/Footer found inside template
- No header/footer at root level

**🟡 WARNING (Allows Publish):**
- Header/Footer not at root level
- Header not sticky/fixed
- Footer missing 96px spacing
- Footer not last element

**✅ PASS:**
- All checks passed

---

## Auto-Fix Actions

| Action | Trigger | Safe |
|--------|---------|------|
| Insert Header | 0 headers | ⚠️ |
| Remove Duplicate Headers | 2+ headers | ✅ |
| Move Header to Root | Nested | ✅ |
| Insert Footer | 0 footers | ⚠️ |
| Remove Duplicate Footers | 2+ footers | ✅ |
| Move Footer to Root | Nested | ✅ |
| Add Footer Spacing | Missing | ✅ |

---

## Developer Workflow

### On Publish
1. Preflight checks run automatically
2. Errors shown in modal
3. "Auto-Fix" or "Cancel" options
4. Publish blocked if errors

### On Frame Duplicate
1. Duplicate created
2. Duplicate Header/Footer auto-removed
3. Clean frame ready

### On Component Drop
1. Check if singleton exists
2. Block if duplicate
3. Highlight existing component

---

## Files

**Validation:** `/components/utils/preflightChecks.ts`  
**CSS Guardrails:** `/styles/globals.css` (lines 903-1021)  
**Documentation:** `/PREFLIGHT_AUTOMATION_COMPLETE.md`  

---

## Quick Test

```typescript
// Development console
import preflightChecks from './components/utils/preflightChecks';

const result = preflightChecks.runAllPreflightChecks();
console.log(result);

// Expected output:
// { passed: true/false, errors: [], warnings: [], fixes: [] }
```

---

**Status:** ✅ Fully Operational  
**Version:** 2.0  
**Last Updated:** October 25, 2025
