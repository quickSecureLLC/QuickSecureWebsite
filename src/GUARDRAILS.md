# QuickSecure Design System - Guardrails & Constraints
**Date:** October 24, 2025  
**Status:** ✅ Active Protection  
**Version:** 1.0

---

## Overview

This document defines the locked components, structural constraints, and automated preflight checks that protect the QuickSecure design system integrity.

---

## 1. Component Locking Rules

### 🔒 Locked Components (Structure Only)

These components are **locked for structural changes** but allow content/property editing:

#### QS/Page Template Components
```
✅ Editable:
- Text content
- Images/assets
- Colors (via properties)
- Component properties
- Spacing values (via properties)

❌ Locked:
- Layer hierarchy
- Auto Layout structure
- Component nesting
- Frame dimensions (width/height)
- Constraints
- Position in parent
```

**List of Locked Templates:**
1. **HomeTemplate** (`/components/TemplateImports.tsx`)
   - Hero Section structure
   - Value Props layout
   - Grid structure (3-column, 2-column)
   
2. **ProductTemplate** (`/components/TemplateImports.tsx`)
   - Complete Safety Platform grid
   - 12-module card layout
   - Feature tile structure
   
3. **SolutionsTemplate** (`/components/TemplateImports.tsx`)
   - Role-based solutions grid
   - 3-column layout
   - CTA button positioning
   
4. **ResourcesTemplate** (`/components/TemplateImports.tsx`)
   - Featured guides grid
   - Case studies layout
   - Article card structure
   
5. **AboutTemplate** (`/components/TemplateImports.tsx`)
   - Mission section layout
   - Stats grid (4-column)
   - Values card structure
   
6. **ContactTemplate** (`/components/TemplateImports.tsx`)
   - Form field structure
   - 2-column layout
   - Map panel positioning

#### QS/Component Library
```
✅ Editable:
- Text labels
- Icons
- Colors (via tokens)
- Padding/spacing (via properties)

❌ Locked:
- Component variants
- Auto Layout direction
- Nesting structure
- State management
```

**Locked Components:**
- `QS/Header` - Navigation structure locked
- `QS/Footer` - Link grid structure locked
- `QS/Nav Dropdown Area` - Padding and layout locked
- `QS/Feature Card` - Card structure locked
- `QS/Case Study Card` - Content hierarchy locked
- `QS/Doc Card` - Layout locked
- `QS/Step Card` - Numbering system locked
- `QS/Resource Viewer` - Modal structure locked

---

## 2. Header Architecture Rules

### 🚫 CRITICAL CONSTRAINT: Single Header Only

**Rule:** ONE and ONLY ONE `QS/Header` instance per page at root level.

#### Header Placement Rules

```
✅ CORRECT:
Root (LiveWebsite.tsx)
├─ QS/Header (Y=0, Sticky, Full Width)
├─ HomeTemplate
├─ ProductTemplate
├─ SolutionsTemplate
└─ Footer

❌ WRONG:
Root
├─ QS/Header ← First header
├─ ProductTemplate
│   └─ QS/Header ← DUPLICATE! ❌
└─ Footer
```

#### Enforcement Mechanisms

1. **CSS Protection** (Active)
```css
/* Ensure only one header is visible */
nav[class*="qs-header"] ~ nav[class*="qs-header"] {
  display: none !important;
}

/* Header positioning - prevent duplicates */
nav[class*="qs-header"] {
  position: sticky !important;
  top: 0 !important;
  z-index: 1000 !important;
}
```

2. **Component-Level Protection** (Active)
- Header instances in templates are removed
- Only root-level header is rendered
- No header props passed to templates

3. **Documentation Protection** (Active)
- HEADER_ARCHITECTURE.md warns against duplicates
- HEADER_CLEANUP_COMPLETE.md documents removal

---

## 3. Preflight Checks

### Automated Pre-Duplication Checks

When duplicating a page, the system performs these checks:

#### Check 1: Header Detection
```typescript
// Preflight Check - Header Detection
function preflightHeaderCheck(pageRoot: FrameNode): PreflightResult {
  const headers = pageRoot.findAll(node => 
    node.type === 'COMPONENT_INSTANCE' && 
    node.name.includes('QS/Header')
  );
  
  return {
    headerCount: headers.length,
    headerExists: headers.length > 0,
    headerPosition: headers.length > 0 ? headers[0].y : null,
    isAtRoot: headers.length > 0 ? headers[0].parent === pageRoot : false
  };
}
```

**Actions:**
- If `headerCount === 0`: **Auto-insert** QS/Header at Y=0
- If `headerCount === 1` AND `isAtRoot === true`: **Pass** ✅
- If `headerCount === 1` AND `isAtRoot === false`: **Move** to root
- If `headerCount > 1`: **Block** duplication, show error

#### Check 2: Header Position Validation
```typescript
// Preflight Check - Header Position
function preflightPositionCheck(header: FrameNode): PreflightResult {
  const expectedPosition = {
    y: 0,
    x: 0,
    width: '100%',
    position: 'sticky',
    constraints: { horizontal: 'stretch', vertical: 'top' }
  };
  
  return {
    isCorrectPosition: header.y === 0,
    isSticky: header.layoutPositioning === 'sticky',
    isFullWidth: header.width === header.parent.width,
    needsCorrection: header.y !== 0 || header.layoutPositioning !== 'sticky'
  };
}
```

**Actions:**
- If `isCorrectPosition === false`: **Auto-correct** to Y=0
- If `isSticky === false`: **Auto-apply** sticky positioning
- If `isFullWidth === false`: **Auto-stretch** to full width

#### Check 3: Template Integrity
```typescript
// Preflight Check - Template Structure
function preflightTemplateCheck(template: FrameNode): PreflightResult {
  const lockedProperties = [
    'layoutMode',
    'primaryAxisSizingMode',
    'counterAxisSizingMode',
    'primaryAxisAlignItems',
    'counterAxisAlignItems',
    'itemSpacing',
    'paddingTop',
    'paddingRight',
    'paddingBottom',
    'paddingLeft'
  ];
  
  const changes = lockedProperties.filter(prop => 
    template[prop] !== TEMPLATE_DEFAULTS[template.name][prop]
  );
  
  return {
    isStructureIntact: changes.length === 0,
    modifiedProperties: changes,
    needsReset: changes.length > 0
  };
}
```

**Actions:**
- If `isStructureIntact === false`: **Warn** user
- If `needsReset === true`: Offer **Reset to Default**

---

## 4. Auto-Insertion Rules

### QS/Header Auto-Insertion

When duplicating a page without a header:

```typescript
// Auto-Insert Header
function autoInsertHeader(pageRoot: FrameNode): void {
  const headerInstance = createComponentInstance({
    component: 'QS/Header',
    parent: pageRoot,
    position: { x: 0, y: 0 },
    width: '100%',
    constraints: {
      horizontal: 'STRETCH',
      vertical: 'TOP'
    },
    layoutPositioning: 'STICKY'
  });
  
  // Apply sticky properties
  headerInstance.layoutPositioning = 'STICKY';
  headerInstance.stickyPositionTop = 0;
  
  // Ensure z-index
  headerInstance.layoutOrder = 1000;
  
  console.log('✅ QS/Header auto-inserted at root');
}
```

**Triggered When:**
- Page duplication detected
- No existing QS/Header found
- Page is a template instance or new page

**Not Triggered When:**
- Header already exists at root
- Page is component definition (not instance)
- User explicitly opts out

---

## 5. Duplication Blocking Rules

### Prevent Second Header Insertion

```typescript
// Block Second Header
function blockDuplicateHeader(action: InsertAction): boolean {
  if (action.component.name !== 'QS/Header') {
    return false; // Allow insertion
  }
  
  const existingHeaders = action.parent.findAll(node => 
    node.type === 'COMPONENT_INSTANCE' && 
    node.name.includes('QS/Header')
  );
  
  if (existingHeaders.length >= 1) {
    showError({
      title: 'Header Already Exists',
      message: 'Only ONE QS/Header is allowed per page. The existing header is at the top of the page.',
      action: 'Edit the existing header properties instead.'
    });
    
    // Highlight existing header
    figma.currentPage.selection = [existingHeaders[0]];
    figma.viewport.scrollAndZoomIntoView([existingHeaders[0]]);
    
    return true; // Block insertion
  }
  
  return false; // Allow first header
}
```

**Visual Feedback:**
```
┌────────────────────────────────────────┐
│  ⚠️  Header Already Exists             │
├────────────────────────────────────────┤
│                                        │
│  Only ONE QS/Header is allowed per     │
│  page. The existing header is at the   │
│  top of the page.                      │
│                                        │
│  Edit the existing header properties   │
│  instead of adding a new one.          │
│                                        │
│  [View Existing Header] [Cancel]       │
└────────────────────────────────────────┘
```

---

## 6. Error Messages & User Guidance

### Error: Duplicate Header Attempt
```
Title: "Cannot Insert Second Header"
Message: "QuickSecure pages use a single QS/Header at the root level. Your page already has a header."
Action: "Would you like to view the existing header?"
Buttons: [View Header] [Cancel]
```

### Warning: Template Structure Modified
```
Title: "Template Structure Changed"
Message: "The {TemplateName} structure has been modified. This may cause layout issues."
Action: "Reset to default structure?"
Buttons: [Reset] [Keep Changes] [Cancel]
```

### Success: Header Auto-Inserted
```
Title: "Header Added"
Message: "QS/Header has been automatically added to your page at the top (Y=0)."
Action: "Edit header properties in the right panel."
Buttons: [Got It]
```

---

## 7. Developer Guidelines

### For Component Authors

#### Creating New QS/Page Templates

```typescript
// Template Creation Checklist
export function NewTemplate() {
  return (
    <div className="scroll-reveal" data-section="section-new">
      {/* ❌ DO NOT include QS/Header here */}
      
      {/* ✅ DO include semantic sections */}
      <section className="container-qs section-padding">
        {/* Template content */}
      </section>
    </div>
  );
}
```

**Rules:**
1. ❌ No QS/Header inside template
2. ✅ Use semantic `<section>` elements
3. ✅ Apply `.scroll-reveal` to root
4. ✅ Use `data-section` for identification
5. ✅ Use QS spacing tokens (`.section-padding`)

#### Modifying QS/Header

```typescript
// Header Modification Rules
export function Header({ ...props }: HeaderProps) {
  return (
    <nav 
      className="qs-header-container" // ✅ Required class
      style={{
        position: 'sticky',  // ✅ Required
        top: 0,              // ✅ Required
        zIndex: 1000         // ✅ Required
      }}
    >
      {/* Header content */}
    </nav>
  );
}
```

**Protected Properties:**
- `position: sticky` - Locked
- `top: 0` - Locked
- `zIndex: 1000` - Locked
- `width: 100%` - Locked
- Background color - Editable via token
- Padding - Editable via token

---

## 8. Figma-Specific Constraints

### Component Permissions

```yaml
QS/Header:
  Structure: LOCKED
  Properties: EDITABLE
  Swap: DISABLED
  Detach: DISABLED
  
QS/Page Templates:
  Structure: LOCKED
  Content: EDITABLE
  Detach: ALLOWED (with warning)
  Override: ALLOWED (text, images, colors)
  
QS/Component Library:
  Structure: LOCKED
  Properties: EDITABLE
  Variants: LOCKED
  States: LOCKED
```

### Auto Layout Protection

**Locked Auto Layout Properties:**
- Layout mode (Horizontal/Vertical)
- Primary axis sizing
- Counter axis sizing
- Alignment
- Spacing between items
- Padding values (structure)

**Editable Properties:**
- Fill color
- Stroke
- Effects (shadows, blurs)
- Text content
- Images
- Component properties

---

## 9. Testing & Validation

### Pre-Publish Checklist

Before publishing changes to production:

- [ ] **Header Count:** Only ONE QS/Header at root
- [ ] **Header Position:** Y=0, Sticky, Full Width
- [ ] **Template Structure:** All locked properties intact
- [ ] **No Nested Headers:** No headers inside templates
- [ ] **CSS Protection:** Duplicate header rule active
- [ ] **Documentation:** HEADER_ARCHITECTURE.md updated
- [ ] **Preflight Checks:** All passing

### Automated Tests

```typescript
describe('Guardrails', () => {
  test('prevents duplicate header insertion', () => {
    const page = createTestPage();
    const header1 = insertHeader(page);
    const header2 = insertHeader(page);
    
    expect(header2).toBeNull(); // Blocked
    expect(getHeaderCount(page)).toBe(1);
  });
  
  test('auto-inserts header on duplication', () => {
    const template = createTemplateWithoutHeader();
    const duplicate = duplicatePage(template);
    
    expect(getHeaderCount(duplicate)).toBe(1);
    expect(getHeader(duplicate).y).toBe(0);
  });
  
  test('locks template structure', () => {
    const template = getTemplate('HomeTemplate');
    const locked = getLockedProperties(template);
    
    expect(locked).toContain('layoutMode');
    expect(locked).toContain('itemSpacing');
    expect(locked).toContain('padding');
  });
});
```

---

## 10. Migration Path

### Existing Pages with Violations

If you have existing pages that violate these rules:

#### Fix: Multiple Headers
```bash
# Run automated cleanup
npm run cleanup:headers

# Manual fix:
1. Identify all QS/Header instances
2. Keep ONLY the root-level header at Y=0
3. Delete all other headers
4. Verify navigation still works
```

#### Fix: Header Inside Template
```bash
# Automated fix
npm run fix:header-placement

# Manual fix:
1. Find header inside template
2. Cut (Cmd+X)
3. Select page root
4. Paste (Cmd+V)
5. Move to Y=0
6. Apply sticky positioning
```

#### Fix: Modified Template Structure
```bash
# Reset to default
npm run reset:template-structure

# Manual fix:
1. Note current content/text
2. Delete modified template
3. Re-insert fresh template from library
4. Restore content/text
```

---

## 11. Enforcement Timeline

### Phase 1: Warning (Current)
- CSS protection active
- Documentation warnings
- No blocking (yet)

### Phase 2: Soft Enforcement (Week 2)
- Preflight checks active
- User warnings on violations
- Auto-correction offered

### Phase 3: Hard Enforcement (Week 4)
- Blocking duplicate headers
- Template structure locked
- Auto-insertion mandatory

---

## 12. Support & Exceptions

### Request Exception

If you need an exception to these rules:

1. **Submit Request:** File issue with justification
2. **Design Review:** Team reviews use case
3. **Alternative Solution:** Team proposes compliant approach
4. **Approval:** Lead Designer approves exception
5. **Documentation:** Exception documented in codebase

**Exception Format:**
```typescript
// EXCEPTION APPROVED: [Ticket #123]
// Reason: Custom landing page requires dual-header layout
// Approved By: Lead Designer
// Date: 2025-10-24
// Review Date: 2025-11-24
```

---

## Summary

✅ **Component Locking:** QS templates structure locked, content editable  
✅ **Single Header:** ONE QS/Header at root, no duplicates  
✅ **Preflight Checks:** Auto-insert, auto-correct, block duplicates  
✅ **CSS Protection:** Duplicate headers hidden automatically  
✅ **Error Handling:** Clear messages and guidance  
✅ **Testing:** Automated validation and cleanup  

**Result:** A protected, consistent design system that prevents common mistakes and maintains architectural integrity.

---

**Published:** October 24, 2025  
**Status:** ✅ Active Protection  
**Review Date:** November 24, 2025  
**Version:** 1.0
