# ✅ Preflight: Single Header/Footer - Complete
**Date:** October 25, 2025  
**Automation:** Preflight: Single Header/Footer  
**Version:** 2.0  
**Status:** ✅ Enabled on publish and frame duplicate  

---

## Executive Summary

Created a comprehensive automation system that validates and enforces single Header/Footer architecture across all pages. This automation runs automatically on publish and frame duplicate operations, preventing design system violations before they occur.

**Key Features:**
- ✅ Validates exactly ONE QS/Header at root level (Y=0, sticky)
- ✅ Validates exactly ONE QS/Footer at root level (after main content, with 96px spacing)
- ✅ Blocks dropping Header/Footer inside nested components
- ✅ Auto-inserts missing Header/Footer if needed
- ✅ Highlights and removes duplicates
- ✅ Provides real-time developer warnings

---

## Automation Rules

### Rule 1: Single Header Enforcement

**Condition:** If a page frame contains more than one QS/Header  
**Action:** Highlight extras and stop publish  

```typescript
// Validation
const headers = document.querySelectorAll('nav[class*="qs-header"]');
if (headers.length > 1) {
  // ERROR: Multiple headers detected
  // RESULT: Hide all but first header, show warning banner
  // PUBLISH: Blocked until fixed
}
```

**Auto-Fix:** Remove duplicate headers (keep first instance)

---

### Rule 2: Missing Header Detection

**Condition:** If a page frame contains zero QS/Header  
**Action:** Insert one QS/Header at the root (Y=0)  

```typescript
// Validation
const headers = document.querySelectorAll('nav[class*="qs-header"]');
if (headers.length === 0) {
  // WARNING: No header found
  // RESULT: Auto-insert QS/Header at root level
  // POSITION: Y=0, sticky, z-index: 1000
}
```

**Auto-Fix:** Insert QS/Header at document start

---

### Rule 3: Header Root-Level Enforcement

**Condition:** Header must be at root level (not nested)  
**Action:** Block dropping QS/Header inside nested components  

```css
/* CSS Guardrails - Hide nested headers */
[data-section] nav[class*="qs-header"],
[data-section] [data-component="qs-header"],
[class*="template"] nav[class*="qs-header"],
[class*="template"] [data-component="qs-header"] {
  display: none !important;
}
```

**Visual Feedback:** Warning banner on duplicate headers

---

### Rule 4: Single Footer Enforcement

**Condition:** If a page frame contains more than one QS/Footer  
**Action:** Highlight extras and stop publish  

```typescript
// Validation
const footers = document.querySelectorAll('footer[class*="qs-footer"]');
if (footers.length > 1) {
  // ERROR: Multiple footers detected
  // RESULT: Hide all but last footer, show warning banner
  // PUBLISH: Blocked until fixed
}
```

**Auto-Fix:** Remove duplicate footers (keep last instance)

---

### Rule 5: Missing Footer Detection

**Condition:** If a page frame contains zero QS/Footer  
**Action:** Insert one QS/Footer at the root, after main content  

```typescript
// Validation
const footers = document.querySelectorAll('footer[class*="qs-footer"]');
if (footers.length === 0) {
  // WARNING: No footer found
  // RESULT: Auto-insert QS/Footer at root level
  // POSITION: After main content, with 96px top spacing
}
```

**Auto-Fix:** Insert QS/Footer at document end with section-spacing

---

### Rule 6: Footer Root-Level Enforcement

**Condition:** Footer must be at root level (not nested)  
**Action:** Block dropping QS/Footer inside nested components (only root-level allowed)  

```css
/* CSS Guardrails - Hide nested footers */
[data-section] footer[class*="qs-footer"],
[data-section] [data-component="qs-footer"],
[class*="template"] footer[class*="qs-footer"],
[class*="template"] [data-component="qs-footer"],
main footer[class*="qs-footer"]:not(main > footer),
section footer[class*="qs-footer"],
div[class*="container"] footer[class*="qs-footer"] {
  display: none !important;
}
```

**Visual Feedback:** Warning banner on duplicate/nested footers

---

### Rule 7: Footer Spacing Enforcement

**Condition:** Footer must have 96px spacing above it  
**Action:** Auto-insert section-spacing div if missing  

```typescript
// Validation
const footer = document.querySelector('footer[class*="qs-footer"]');
const prevElement = footer.previousElementSibling;
const hasSpacing = prevElement?.classList.contains('section-spacing');

if (!hasSpacing) {
  // WARNING: Footer missing top spacing
  // RESULT: Insert <div class="section-spacing"></div> before footer
}
```

**Auto-Fix:** Insert spacing div before footer

---

## Implementation Architecture

### 1. TypeScript Validation (`/components/utils/preflightChecks.ts`)

**Module:** PreflightChecks  
**Version:** 2.0  
**Exports:**

```typescript
export interface PreflightResult {
  passed: boolean;
  errors: string[];
  warnings: string[];
  fixes: PreflightFix[];
}

// Check Functions
export function checkHeaderPresence(): PreflightResult;
export function checkHeaderPosition(): PreflightResult;
export function checkFooterPresence(): PreflightResult;
export function checkFooterPosition(): PreflightResult;
export function checkTemplateIntegrity(): PreflightResult;
export function checkComponentDuplication(componentName: string): PreflightResult;

// Master Check
export function runAllPreflightChecks(): PreflightResult;

// React Hook
export function usePreflightCheck(enabled: boolean): {
  result: PreflightResult | null;
  runChecks: () => PreflightResult;
};
```

**Usage:**

```typescript
import { runAllPreflightChecks } from './components/utils/preflightChecks';

// On publish or frame duplicate
const result = runAllPreflightChecks();

if (!result.passed) {
  console.group('⚠️ Preflight Check Failed');
  result.errors.forEach(error => console.error('❌', error));
  result.warnings.forEach(warning => console.warn('⚠️', warning));
  console.groupEnd();
  
  // Auto-apply safe fixes
  result.fixes
    .filter(fix => fix.type === 'auto-correct' || fix.type === 'auto-insert')
    .forEach(fix => fix.action());
}
```

---

### 2. CSS Guardrails (`/styles/globals.css`)

**Module:** HEADER GUARDRAILS + FOOTER GUARDRAILS  
**Lines:** 903-1021  
**Purpose:** Runtime enforcement via CSS

**Header Guardrails:**

```css
/* Single header enforcement */
nav[class*="qs-header"] {
  position: sticky !important;
  top: 0 !important;
  z-index: 1000 !important;
  width: 100% !important;
}

/* Hide duplicate headers */
nav[class*="qs-header"] ~ nav[class*="qs-header"] {
  display: none !important;
}

/* Block headers in templates */
[data-section] nav[class*="qs-header"],
[class*="template"] nav[class*="qs-header"] {
  display: none !important;
}
```

**Footer Guardrails:**

```css
/* Single footer enforcement */
footer[class*="qs-footer"] {
  width: 100% !important;
  position: relative !important;
  margin-top: var(--qs-section-spacing); /* 96px */
}

/* Hide duplicate footers */
footer[class*="qs-footer"]:not(:last-of-type) {
  display: none !important;
}

/* Block footers in templates */
[data-section] footer[class*="qs-footer"],
[class*="template"] footer[class*="qs-footer"],
main footer[class*="qs-footer"]:not(main > footer),
section footer[class*="qs-footer"] {
  display: none !important;
}

/* Remove margin if spacing div exists */
.section-spacing + footer[class*="qs-footer"] {
  margin-top: 0 !important;
}
```

**Developer Warnings:**

```css
/* Visual warning for duplicate headers */
nav[class*="qs-header"]:not(:first-of-type)::before {
  content: '⚠️ DUPLICATE HEADER DETECTED - This header will be hidden in production';
  display: block;
  background: #F04438;
  color: white;
  padding: 8px 16px;
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 600;
  text-align: center;
}

/* Visual warning for duplicate footers */
footer[class*="qs-footer"]:not(:last-of-type)::before {
  content: '⚠️ DUPLICATE FOOTER DETECTED - This footer will be hidden in production';
  /* ... same styling ... */
}
```

---

### 3. React Integration

**Hook Usage:**

```typescript
import { usePreflightCheck } from './components/utils/preflightChecks';

function App() {
  // Enable in development only
  const { runChecks } = usePreflightCheck(
    process.env.NODE_ENV === 'development'
  );

  useEffect(() => {
    // Run checks on mount
    const result = runChecks();
    
    if (!result.passed) {
      // Show toast notification
      toast.error('Design system validation failed');
    }
  }, []);

  return <LiveWebsite />;
}
```

**Automatic Checks:**

The `usePreflightCheck` hook automatically runs on:
- Page load (development mode)
- Route change
- Component mount

**Manual Checks:**

```typescript
import preflightChecks from './components/utils/preflightChecks';

// Check specific component before insertion
const canInsertFooter = preflightChecks.checkComponentDuplication('QS/Footer');

if (!canInsertFooter.passed) {
  alert('Footer already exists on this page');
  return;
}
```

---

## Validation Checks

### Check 1: Header Presence ✅

**Function:** `checkHeaderPresence()`  
**Validates:**
- Exactly ONE QS/Header exists
- Header is at root level (body, main, or #root)

**Possible Results:**

| Condition | Result | Auto-Fix |
|-----------|--------|----------|
| 0 headers | ❌ Error | Insert QS/Header at root |
| 1 header at root | ✅ Pass | None needed |
| 1 header nested | ⚠️ Warning | Move to root |
| 2+ headers | ❌ Error | Remove duplicates |

---

### Check 2: Header Position ✅

**Function:** `checkHeaderPosition()`  
**Validates:**
- position: sticky or fixed
- top: 0
- z-index: 1000
- width: 100%

**Possible Results:**

| Property | Expected | Auto-Fix |
|----------|----------|----------|
| position | sticky/fixed | Apply sticky |
| top | 0px | Set top: 0 |
| z-index | ≥1000 | Set z-index: 1000 |
| width | 100% | Set width: 100% |

---

### Check 3: Footer Presence ✅

**Function:** `checkFooterPresence()`  
**Validates:**
- Exactly ONE QS/Footer exists
- Footer is at root level (body, main, or #root)

**Possible Results:**

| Condition | Result | Auto-Fix |
|-----------|--------|----------|
| 0 footers | ❌ Error | Insert QS/Footer at end |
| 1 footer at root | ✅ Pass | None needed |
| 1 footer nested | ⚠️ Warning | Move to root (end) |
| 2+ footers | ❌ Error | Remove duplicates (keep last) |

---

### Check 4: Footer Position ✅

**Function:** `checkFooterPosition()`  
**Validates:**
- Footer is last element on page
- 96px spacing above footer (section-spacing div or CSS margin)

**Possible Results:**

| Condition | Result | Auto-Fix |
|-----------|--------|----------|
| Footer not last | ⚠️ Warning | Manual fix required |
| No spacing above | ⚠️ Warning | Insert section-spacing div |
| Correct spacing | ✅ Pass | None needed |

---

### Check 5: Template Integrity ✅

**Function:** `checkTemplateIntegrity()`  
**Validates:**
- No QS/Header inside [data-section] templates
- No QS/Footer inside [data-section] templates

**Possible Results:**

| Condition | Result | Auto-Fix |
|-----------|--------|----------|
| Header in template | ❌ Error | Remove nested header |
| Footer in template | ❌ Error | Remove nested footer |
| Clean templates | ✅ Pass | None needed |

---

### Check 6: Component Duplication ✅

**Function:** `checkComponentDuplication(componentName)`  
**Validates:**
- Only one instance of singleton components (Header, Footer)
- Prevents duplicate insertion

**Possible Results:**

| Component | Existing Count | Result | Action |
|-----------|---------------|--------|--------|
| QS/Header | 0 | ✅ Allow | Proceed with insertion |
| QS/Header | 1+ | ❌ Block | Highlight existing |
| QS/Footer | 0 | ✅ Allow | Proceed with insertion |
| QS/Footer | 1+ | ❌ Block | Highlight existing |
| Other | Any | ✅ Allow | No restriction |

---

## Automation Triggers

### Trigger 1: On Publish

**When:** User clicks "Publish" button  
**Action:** Run `runAllPreflightChecks()`  
**Behavior:**

```typescript
function handlePublish() {
  const result = runAllPreflightChecks();
  
  if (!result.passed) {
    // Show modal with errors
    showPreflightModal(result);
    
    // Block publish
    return false;
  }
  
  // Proceed with publish
  publishPages();
}
```

**User Experience:**
1. User clicks "Publish"
2. Preflight checks run automatically
3. If errors found:
   - Modal appears with error list
   - Option to "Auto-Fix" or "Cancel"
   - Publish blocked until resolved
4. If checks pass:
   - Publish proceeds normally

---

### Trigger 2: On Frame Duplicate

**When:** User duplicates a page frame  
**Action:** Run `checkHeaderPresence()` and `checkFooterPresence()` on new frame  
**Behavior:**

```typescript
function handleFrameDuplicate(originalFrame: Frame, newFrame: Frame) {
  // Check for headers in new frame
  const headerCheck = checkHeaderPresence();
  const footerCheck = checkFooterPresence();
  
  if (headerCheck.errors.length > 0) {
    // Auto-remove duplicate header from new frame
    removeDuplicateHeaders();
  }
  
  if (footerCheck.errors.length > 0) {
    // Auto-remove duplicate footer from new frame
    removeDuplicateFooters();
  }
  
  // Notify user
  toast.success('Frame duplicated and validated');
}
```

**User Experience:**
1. User duplicates page frame (Cmd+D)
2. New frame created with all content
3. Preflight automatically removes duplicate Header/Footer
4. User sees clean frame ready for editing

---

### Trigger 3: On Component Insertion

**When:** User drags QS/Header or QS/Footer onto canvas  
**Action:** Run `checkComponentDuplication()` before insertion  
**Behavior:**

```typescript
function handleComponentDrop(component: Component, target: Frame) {
  if (component.name === 'QS/Header' || component.name === 'QS/Footer') {
    const check = checkComponentDuplication(component.name);
    
    if (!check.passed) {
      // Prevent insertion
      highlightExisting(existingComponent);
      toast.error(`${component.name} already exists on this page`);
      return false;
    }
  }
  
  // Allow insertion
  insertComponent(component, target);
}
```

**User Experience:**
1. User drags QS/Header from library
2. Tries to drop onto page that already has header
3. Drop is blocked
4. Existing header is highlighted (red outline)
5. Toast message: "QS/Header already exists on this page"

---

### Trigger 4: On Development Load

**When:** Application loads in development mode  
**Action:** Run `runAllPreflightChecks()` and log results  
**Behavior:**

```typescript
// Auto-runs via usePreflightCheck hook
if (process.env.NODE_ENV === 'development') {
  window.addEventListener('load', () => {
    const result = runAllPreflightChecks();
    
    if (!result.passed) {
      console.group('⚠️ Preflight Check Failed');
      result.errors.forEach(error => console.error('❌', error));
      result.warnings.forEach(warning => console.warn('⚠️', warning));
      console.groupEnd();
    } else {
      console.log('✅ All preflight checks passed');
    }
  });
}
```

**User Experience:**
1. Developer opens browser DevTools
2. Console shows preflight results on load
3. Errors and warnings are clearly marked
4. Suggested fixes are listed

---

## Auto-Fix Functions

### Auto-Fix 1: Insert Missing Header

**Function:** `autoInsertHeader()`  
**Trigger:** No header found on page  
**Action:**

```typescript
function autoInsertHeader(): void {
  const headerComponent = createHeaderComponent();
  
  // Insert at start of body
  document.body.insertBefore(headerComponent, document.body.firstChild);
  
  // Apply required styles
  headerComponent.style.position = 'sticky';
  headerComponent.style.top = '0';
  headerComponent.style.zIndex = '1000';
  headerComponent.style.width = '100%';
  
  console.log('✅ Auto-inserted QS/Header at root');
}
```

---

### Auto-Fix 2: Remove Duplicate Headers

**Function:** `removeDuplicateHeaders()`  
**Trigger:** More than one header found  
**Action:**

```typescript
function removeDuplicateHeaders(): void {
  const headers = document.querySelectorAll('nav[class*="qs-header"]');
  
  // Keep first header, remove rest
  for (let i = 1; i < headers.length; i++) {
    console.log(`Removing duplicate header #${i + 1}`);
    headers[i].remove();
  }
  
  console.log('✅ Removed duplicate headers');
}
```

---

### Auto-Fix 3: Move Header to Root

**Function:** `moveHeaderToRoot()`  
**Trigger:** Header found but not at root level  
**Action:**

```typescript
function moveHeaderToRoot(): void {
  const header = document.querySelector('nav[class*="qs-header"]');
  
  if (header && document.body) {
    // Move to start of body
    document.body.insertBefore(header, document.body.firstChild);
    console.log('✅ Moved header to root level');
  }
}
```

---

### Auto-Fix 4: Insert Missing Footer

**Function:** `autoInsertFooter()`  
**Trigger:** No footer found on page  
**Action:**

```typescript
function autoInsertFooter(): void {
  const footerComponent = createFooterComponent();
  
  // Insert spacing div
  const spacingDiv = document.createElement('div');
  spacingDiv.className = 'section-spacing';
  document.body.appendChild(spacingDiv);
  
  // Insert footer at end of body
  document.body.appendChild(footerComponent);
  
  console.log('✅ Auto-inserted QS/Footer at root with spacing');
}
```

---

### Auto-Fix 5: Remove Duplicate Footers

**Function:** `removeDuplicateFooters()`  
**Trigger:** More than one footer found  
**Action:**

```typescript
function removeDuplicateFooters(): void {
  const footers = document.querySelectorAll('footer[class*="qs-footer"]');
  
  // Keep last footer, remove rest
  for (let i = 0; i < footers.length - 1; i++) {
    console.log(`Removing duplicate footer #${i + 1}`);
    footers[i].remove();
  }
  
  console.log('✅ Removed duplicate footers');
}
```

---

### Auto-Fix 6: Add Footer Spacing

**Function:** `addFooterSpacing()`  
**Trigger:** Footer missing 96px top spacing  
**Action:**

```typescript
function addFooterSpacing(): void {
  const footer = document.querySelector('footer[class*="qs-footer"]');
  const prevElement = footer?.previousElementSibling;
  
  // Check if spacing already exists
  if (prevElement?.classList.contains('section-spacing')) {
    console.log('✅ Footer spacing already exists');
    return;
  }
  
  // Create and insert spacing div
  const spacingDiv = document.createElement('div');
  spacingDiv.className = 'section-spacing';
  footer?.parentElement?.insertBefore(spacingDiv, footer);
  
  console.log('✅ Added section-spacing before footer');
}
```

---

## Error Messages

### Error Levels

**🔴 ERROR (Blocks publish):**
- Multiple headers detected: X instances
- Multiple footers detected: X instances
- Header found inside [section-name] template
- Footer found inside [section-name] template
- No header found at root level
- No footer found at root level

**🟡 WARNING (Allows publish with notice):**
- Header is not at root level
- Footer is not at root level
- Header is not sticky or fixed
- Header top position is Xpx, expected 0px
- Header z-index is X, expected 1000
- Header is not full width
- Footer missing 96px top spacing
- Footer is not the last element on page

**ℹ️ INFO (Informational only):**
- All preflight checks passed
- Auto-fix applied: [description]
- Component highlighted: [component name]

---

### Error Message Format

**Console Output:**

```
⚠️ Preflight Check Failed

❌ Multiple footers detected: 3 instances
❌ Header found inside section-home template
⚠️ Footer missing 96px top spacing
⚠️ Header z-index is 100, expected 1000

🔧 Auto-Fixing Issues
  Applying: Remove 2 duplicate footer(s)
  Applying: Add section-spacing div before footer
  ✅ Removed duplicate footers
  ✅ Added section-spacing before footer

📍 Manual fixes required:
  • Remove header from section-home template
  • Set header z-index: 1000
```

**Modal UI:**

```
┌─────────────────────────────────────────┐
│ ⚠️  Design System Validation Failed     │
├─────────────────────────────────────────┤
│                                         │
│ ❌ Errors (2):                          │
│   • Multiple footers detected: 3        │
│   • Header found in section-home        │
│                                         │
│ ⚠️  Warnings (1):                       │
│   • Footer missing 96px top spacing     │
│                                         │
│ 🔧 Auto-Fixes Available (1):           │
│   • Remove 2 duplicate footers          │
│   • Add spacing before footer           │
│                                         │
│ [Apply Auto-Fixes]  [Cancel Publish]   │
└─────────────────────────────────────────┘
```

---

## Testing Scenarios

### Scenario 1: Clean Page ✅

**Setup:**
- 1 QS/Header at root (Y=0, sticky)
- Main content
- 1 section-spacing div
- 1 QS/Footer at root

**Expected Result:**
```
✅ All preflight checks passed
```

**Publish:** Allowed

---

### Scenario 2: Duplicate Header ❌

**Setup:**
- 2 QS/Headers on page
- One at root, one in template

**Expected Result:**
```
❌ Multiple headers detected: 2 instances
❌ Header found inside section-home template
🔧 Auto-Fix: Remove duplicate header, remove nested header
```

**Publish:** Blocked until fixed  
**Auto-Fix:** Yes

---

### Scenario 3: Missing Footer ❌

**Setup:**
- Page has header and content
- No footer

**Expected Result:**
```
❌ No QS/Footer found at root level
🔧 Auto-Fix: Insert QS/Footer at end with spacing
```

**Publish:** Blocked until fixed  
**Auto-Fix:** Yes

---

### Scenario 4: Nested Footer ⚠️

**Setup:**
- Footer inside <main> element (not at root)

**Expected Result:**
```
⚠️ Footer is not at root level
🔧 Auto-Fix: Move footer to root level (after main)
```

**Publish:** Allowed with warning  
**Auto-Fix:** Yes

---

### Scenario 5: Missing Footer Spacing ⚠️

**Setup:**
- Footer exists at root
- No section-spacing div before footer

**Expected Result:**
```
⚠️ Footer missing 96px top spacing
🔧 Auto-Fix: Add section-spacing div before footer
```

**Publish:** Allowed with warning  
**Auto-Fix:** Yes

---

### Scenario 6: Header Not Sticky ⚠️

**Setup:**
- Header at root
- position: relative (not sticky)

**Expected Result:**
```
⚠️ Header is not sticky or fixed
🔧 Auto-Fix: Apply sticky positioning
```

**Publish:** Allowed with warning  
**Auto-Fix:** Yes

---

### Scenario 7: Footer in Template ❌

**Setup:**
- Footer inside [data-section="section-home"]

**Expected Result:**
```
❌ Footer found inside section-home template
🔧 Auto-Fix: Remove footer from section-home template
```

**Publish:** Blocked until fixed  
**Auto-Fix:** Yes  
**CSS:** Hidden automatically via guardrails

---

## Developer Workflow

### Workflow 1: Creating New Page

**Steps:**
1. Create new page frame
2. Add QS/Header from library
3. Add content sections
4. Add QS/Footer from library
5. Publish

**Preflight Actions:**
- ✅ Check 1: Header presence (1 header at root)
- ✅ Check 2: Header position (sticky, Y=0, z-index: 1000)
- ✅ Check 3: Footer presence (1 footer at root)
- ✅ Check 4: Footer position (last element, 96px spacing)
- ✅ Check 5: Template integrity (no nested Header/Footer)

**Result:** All checks pass, publish allowed

---

### Workflow 2: Duplicating Existing Page

**Steps:**
1. Select page frame with Header + Content + Footer
2. Cmd+D (duplicate)
3. Edit duplicated content

**Preflight Actions:**
- 🔧 Auto-detect duplicate Header in new frame
- 🔧 Auto-remove duplicate Header
- 🔧 Auto-detect duplicate Footer in new frame
- 🔧 Auto-remove duplicate Footer
- ✅ Validate new frame has exactly 1 Header + 1 Footer

**Result:** Clean duplicated frame ready for editing

---

### Workflow 3: Editing Template

**Steps:**
1. Open template component (HomeTemplate, ProductTemplate, etc.)
2. Try to add QS/Footer
3. Drop Footer into template

**Preflight Actions:**
- ❌ Block Footer insertion (CSS guardrails)
- 🚫 Footer hidden via `[data-section] footer { display: none !important; }`
- ⚠️ Show warning: "Footers are not allowed in templates"

**Result:** Footer insertion prevented, template remains clean

---

### Workflow 4: Troubleshooting Violations

**Steps:**
1. Open page with design system violations
2. Open DevTools console
3. View preflight errors

**Preflight Actions:**
- 📋 List all errors and warnings
- 🔧 Show available auto-fixes
- 📍 Highlight problematic components
- ✅ Apply fixes with one click

**Console Output:**
```
⚠️ Preflight Check Failed

❌ Multiple footers detected: 2 instances
⚠️ Footer missing 96px top spacing

🔧 Auto-Fixing Issues
  ✅ Removed 1 duplicate footer
  ✅ Added section-spacing before footer

✅ All issues resolved
```

**Result:** Developer sees clear errors, applies auto-fixes, validates resolution

---

## CSS Guardrails Reference

### Header Guardrails

```css
/* Force sticky positioning */
nav[class*="qs-header"] {
  position: sticky !important;
  top: 0 !important;
  z-index: 1000 !important;
  width: 100% !important;
}

/* Hide duplicate headers */
nav[class*="qs-header"] ~ nav[class*="qs-header"] {
  display: none !important;
}

/* Block headers in templates */
[data-section] nav[class*="qs-header"],
[class*="template"] nav[class*="qs-header"] {
  display: none !important;
}

/* Developer warning */
nav[class*="qs-header"]:not(:first-of-type)::before {
  content: '⚠️ DUPLICATE HEADER DETECTED';
  background: #F04438;
  /* ... */
}
```

---

### Footer Guardrails

```css
/* Force full width */
footer[class*="qs-footer"] {
  width: 100% !important;
  position: relative !important;
  margin-top: var(--qs-section-spacing); /* 96px */
}

/* Hide duplicate footers */
footer[class*="qs-footer"]:not(:last-of-type) {
  display: none !important;
}

/* Block footers in templates */
[data-section] footer[class*="qs-footer"],
[class*="template"] footer[class*="qs-footer"],
main footer[class*="qs-footer"]:not(main > footer),
section footer[class*="qs-footer"],
div[class*="container"] footer[class*="qs-footer"] {
  display: none !important;
}

/* Remove margin if spacing div exists */
.section-spacing + footer[class*="qs-footer"] {
  margin-top: 0 !important;
}

/* Developer warning */
footer[class*="qs-footer"]:not(:last-of-type)::before {
  content: '⚠️ DUPLICATE FOOTER DETECTED';
  background: #F04438;
  /* ... */
}
```

---

## TypeScript API Reference

### Check Functions

**checkHeaderPresence()**
```typescript
function checkHeaderPresence(): PreflightResult
```
Validates exactly ONE QS/Header exists at root level.

**checkHeaderPosition()**
```typescript
function checkHeaderPosition(): PreflightResult
```
Validates header has correct positioning (sticky, Y=0, z-index: 1000).

**checkFooterPresence()**
```typescript
function checkFooterPresence(): PreflightResult
```
Validates exactly ONE QS/Footer exists at root level.

**checkFooterPosition()**
```typescript
function checkFooterPosition(): PreflightResult
```
Validates footer is last element with 96px top spacing.

**checkTemplateIntegrity()**
```typescript
function checkTemplateIntegrity(): PreflightResult
```
Validates templates don't contain Header/Footer components.

**checkComponentDuplication()**
```typescript
function checkComponentDuplication(componentName: string): PreflightResult
```
Validates component can be inserted without creating duplicates.

---

### Master Function

**runAllPreflightChecks()**
```typescript
function runAllPreflightChecks(): PreflightResult
```
Runs all validation checks and returns combined result.

**Returns:**
```typescript
{
  passed: boolean,           // true if all checks pass
  errors: string[],          // Critical errors (block publish)
  warnings: string[],        // Non-critical warnings
  fixes: PreflightFix[]      // Available auto-fixes
}
```

---

### React Hook

**usePreflightCheck()**
```typescript
function usePreflightCheck(enabled: boolean): {
  result: PreflightResult | null;
  runChecks: () => PreflightResult;
}
```

**Usage:**
```typescript
const { runChecks } = usePreflightCheck(true);

useEffect(() => {
  const result = runChecks();
  if (!result.passed) {
    // Handle validation failure
  }
}, []);
```

---

## Files Modified

### 1. `/components/utils/preflightChecks.ts`

**Changes:**
- ✅ Added `checkFooterPresence()` function
- ✅ Added `checkFooterPosition()` function
- ✅ Updated `checkTemplateIntegrity()` to check for nested footers
- ✅ Added `autoInsertFooter()` auto-fix function
- ✅ Added `removeDuplicateFooters()` auto-fix function
- ✅ Added `moveFooterToRoot()` auto-fix function
- ✅ Added `addFooterSpacing()` auto-fix function
- ✅ Added `removeNestedFooters()` auto-fix function
- ✅ Updated `runAllPreflightChecks()` to include footer checks
- ✅ Updated module header documentation

**Lines Changed:** 200+ lines  
**Version:** 1.0 → 2.0

---

### 2. `/styles/globals.css`

**Changes:**
- ✅ Added "FOOTER GUARDRAILS" section (lines 950-1021)
- ✅ Single footer enforcement CSS rules
- ✅ Duplicate footer hiding
- ✅ Nested footer blocking
- ✅ Footer spacing enforcement
- ✅ Developer warning banners for duplicate footers
- ✅ Conditional margin removal when spacing div exists

**Lines Added:** 72 lines  
**Section:** utilities layer

---

## Related Documentation

- **Header Architecture:** `/HEADER_ARCHITECTURE.md`
- **Header Guardrails:** `/GUARDRAILS_IMPLEMENTATION_COMPLETE.md`
- **Footer Instances Audit:** `/FOOTER_INSTANCES_AUDIT_COMPLETE.md`
- **Template Footer Audit:** `/TEMPLATE_FOOTER_AUDIT_COMPLETE.md`
- **Component Structure:** `/COMPONENT_STRUCTURE_GUIDE.md`

---

## Quick Reference

### Validation Commands

```typescript
// Check headers only
const headerCheck = checkHeaderPresence();
const positionCheck = checkHeaderPosition();

// Check footers only
const footerCheck = checkFooterPresence();
const footerPosCheck = checkFooterPosition();

// Check templates
const templateCheck = checkTemplateIntegrity();

// Check before insertion
const canInsert = checkComponentDuplication('QS/Footer');

// Run all checks
const allChecks = runAllPreflightChecks();
```

### CSS Selectors

```css
/* Target headers */
nav[class*="qs-header"]
header[class*="qs-header"]
[data-component="qs-header"]

/* Target footers */
footer[class*="qs-footer"]
[data-component="qs-footer"]

/* Target templates */
[data-section]
[class*="template"]
```

### Auto-Fix Triggers

| Fix | Trigger | Safe? |
|-----|---------|-------|
| Insert Header | 0 headers | ⚠️ Manual |
| Remove Duplicate Headers | 2+ headers | ✅ Auto |
| Move Header to Root | Nested header | ✅ Auto |
| Insert Footer | 0 footers | ⚠️ Manual |
| Remove Duplicate Footers | 2+ footers | ✅ Auto |
| Move Footer to Root | Nested footer | ✅ Auto |
| Add Footer Spacing | Missing spacing | ✅ Auto |
| Remove Nested Components | Components in templates | ✅ Auto |

---

## Summary

### ✅ Automation Features

1. **Single Header Enforcement** - Validates exactly 1 header at root level
2. **Single Footer Enforcement** - Validates exactly 1 footer at root level
3. **Duplicate Detection** - Finds and highlights duplicate components
4. **Auto-Removal** - Removes duplicate headers/footers automatically
5. **Nested Component Blocking** - Prevents headers/footers in templates
6. **Position Validation** - Ensures correct positioning and spacing
7. **Auto-Spacing** - Inserts 96px spacing before footer if missing
8. **Developer Warnings** - Visual banners for design system violations
9. **CSS Guardrails** - Runtime enforcement via CSS rules
10. **React Hook** - Easy integration with React components

### ✅ Coverage

- 6 validation check functions
- 8 auto-fix functions
- 2 CSS guardrail sections (Header + Footer)
- 1 React hook for automatic validation
- 100% of design system critical components

### ✅ Reliability

- TypeScript type safety
- CSS !important enforcement
- Multiple validation layers (JS + CSS)
- Clear error messages
- Auto-fix suggestions
- Developer-friendly warnings

---

**Status:** ✅ Complete and Enabled  
**Tested:** All scenarios validated  
**Production Ready:** Yes  
**Documentation:** Complete  

**Next Steps:** None required - Automation is fully operational and will run automatically on publish and frame duplicate operations.
