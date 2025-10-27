# Guardrails - Quick Reference Card
**QuickSecure Design System**  
**Date:** October 24, 2025

---

## 🔒 Component Locking

### Locked Components (Structure Only)

| Component | Structure | Content | Properties |
|-----------|-----------|---------|------------|
| **QS/Header** | 🔒 Locked | ✅ Editable | ✅ Editable |
| **QS/Footer** | 🔒 Locked | ✅ Editable | ✅ Editable |
| **QS/Nav Dropdown** | 🔒 Locked | ✅ Editable | ✅ Editable |
| **Page Templates** | 🔒 Locked | ✅ Editable | ✅ Editable |
| **Feature Cards** | 🔒 Locked | ✅ Editable | ✅ Editable |

**Structure = Layout, Auto Layout, Nesting, Constraints**  
**Content = Text, Images, Colors**  
**Properties = Component variants, spacing tokens**

---

## 🚫 Single Header Rule

### ONE Header Per Page

```
✅ CORRECT:
Root
├─ QS/Header (Y=0, Sticky)
├─ HomeTemplate
├─ ProductTemplate
└─ Footer

❌ WRONG:
Root
├─ QS/Header ← First
├─ ProductTemplate
│   └─ QS/Header ← DUPLICATE!
└─ Footer
```

**Rule:** Only ONE `QS/Header` at root level, NEVER inside templates.

---

## 🔍 Preflight Checks (Auto-Run)

### What Gets Checked

1. **Header Count**
   - 0 headers → Auto-insert at Y=0
   - 1 header → Validate position
   - 2+ headers → Remove duplicates

2. **Header Position**
   - Must be at Y=0
   - Must be sticky/fixed
   - Must be full width
   - Must have z-index: 1000

3. **Template Integrity**
   - No headers inside templates
   - Structure unchanged
   - Auto Layout intact

4. **Component Duplication**
   - Block duplicate headers
   - Block duplicate footers
   - Warn before insertion

---

## 🔧 Auto-Fixes

### Automatic Corrections

| Issue | Auto-Fix |
|-------|----------|
| No header found | Insert QS/Header at Y=0 |
| Header wrong position | Move to Y=0 |
| Not sticky | Apply sticky positioning |
| Wrong z-index | Set to 1000 |
| Duplicate headers | Remove all but first |
| Header in template | Remove from template |

**Auto-fixes run:** On page load (dev), on duplication, on violation

---

## ⚠️ Error Messages

### Duplicate Header Attempt
```
Cannot Insert Second Header

QuickSecure pages use a single QS/Header 
at the root level. Your page already has 
a header.

[View Existing Header] [Cancel]
```

### Header Auto-Inserted
```
Header Added

QS/Header has been automatically added 
to your page at the top (Y=0).

Edit header properties in the right panel.

[Got It]
```

---

## 📋 Developer Checklist

### Before Publishing

- [ ] Only ONE QS/Header at root
- [ ] Header at Y=0, sticky, full width
- [ ] No headers inside templates
- [ ] Template structure unchanged
- [ ] CSS protection active
- [ ] Preflight checks passing

### Creating New Templates

```tsx
// ✅ DO
export function NewTemplate() {
  return (
    <div data-section="section-new">
      {/* Content here */}
    </div>
  );
}

// ❌ DON'T
export function NewTemplate() {
  return (
    <div>
      <Header /> {/* ❌ No header in templates! */}
      {/* Content here */}
    </div>
  );
}
```

---

## 🛡️ CSS Protection (Active)

```css
/* Hide duplicate headers */
nav[class*="qs-header"] ~ nav[class*="qs-header"] {
  display: none !important;
}

/* Block headers in templates */
[data-section] nav[class*="qs-header"] {
  display: none !important;
}

/* Visual warning (dev only) */
nav[class*="qs-header"]:not(:first-of-type)::before {
  content: '⚠️ DUPLICATE HEADER';
  background: red;
  color: white;
}
```

---

## 🔑 Key Rules

1. **ONE header per page** (at root)
2. **NO headers in templates**
3. **Structure locked** (content editable)
4. **Auto-fixes enabled** (dev mode)
5. **Preflight checks** (on duplication)

---

## 📚 Full Documentation

- **GUARDRAILS.md** - Complete rules and checks
- **HEADER_ARCHITECTURE.md** - Single header architecture
- **preflightChecks.ts** - Automated validation

---

**Status:** ✅ Active Protection  
**Version:** 1.0  
**Published:** October 24, 2025
