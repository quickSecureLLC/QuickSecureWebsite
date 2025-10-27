# Figma File Organization Guide - QuickSecure Production Site
**Date:** October 24, 2025  
**Status:** 🎯 File Structure Optimization  
**Objective:** Single production page with clean, editable components

---

## Overview

This guide provides step-by-step instructions for reorganizing the QuickSecure Figma file into a single, clean "Production Site" page while preserving all design system tokens, fonts, and reusable components.

**Key Principles:**
- ✅ Keep only ONE working page: "Production Site"
- ✅ Remove all unused design/export/system pages
- ✅ Preserve QS Tokens, Fonts, and Styles (lightweight, feed everything)
- ✅ Keep QS/Header and QS/Footer as linked components (editable in place)
- ✅ Maintain Auto Layout and variable bindings (fully editable)
- ✅ Keep only ONE instance of each component (delete duplicates)

---

## Phase 1: Page Consolidation

### ✅ Pages to KEEP

**1. Production Site (Main Page)**
- This is your ONLY working page
- Contains the live, production-ready website
- All frames are editable
- Components are linked but can be edited in place

**2. 🎨 Design System (Optional - For Tokens/Styles Only)**
- Keep ONLY if it contains:
  - QS Color Tokens (variables)
  - QS Typography Tokens (text styles)
  - QS Spacing Tokens (variables)
  - QS Component Library (master components)
- If tokens are stored elsewhere, this page can be deleted

### ❌ Pages to DELETE

Remove all pages that are NOT "Production Site":

- ❌ **Export** - All export pages (code already exported)
- ❌ **Design System Documentation** - Not needed for production work
- ❌ **Wireframes** - Historical, not needed
- ❌ **Old Iterations** - Archive or delete
- ❌ **Client Review** - Historical, not needed
- ❌ **Archive** - Delete after confirming nothing is referenced
- ❌ **Playground / Scratch** - Delete test frames
- ❌ **Components Library** - If duplicates exist on Production Site

**How to Delete Pages:**
1. Right-click on page name in sidebar
2. Select "Delete page"
3. Confirm deletion
4. Repeat for all non-essential pages

---

## Phase 2: Component Cleanup

### ✅ Keep QS/Header and QS/Footer as Linked Components

**Current State:**
- QS/Header and QS/Footer are component instances
- They appear on every page/frame

**Desired State:**
- Components remain linked (get updates from master)
- BUT are fully editable in place on Production Site
- No locked properties

**How to Configure:**

1. **Locate Master Components:**
   - Open Assets panel (Cmd/Opt + 2)
   - Search for "QS/Header" and "QS/Footer"
   - Note where the master components are stored

2. **Ensure Masters Are NOT Locked:**
   - Select master QS/Header component
   - In right panel → uncheck "Lock" if checked
   - Repeat for QS/Footer

3. **Configure Instances on Production Site:**
   - Select any QS/Header instance
   - Right-click → "Component properties"
   - Ensure NO properties are locked
   - Ensure Auto Layout is enabled (should show blue outline)
   - Test: Try editing text/colors - should work

4. **Detach from Master (If Needed):**
   - If you need FULL editability without component sync:
     - Select QS/Header instance
     - Right-click → "Detach instance"
     - Component becomes a regular frame
     - You lose updates from master, but gain full control

**Recommended Approach:**
- **Keep linked** if header/footer are consistent across all pages
- **Detach** if you need page-specific customizations

### ✅ Delete Duplicate Component Instances

**Problem:**
- Multiple instances of the same component on Production Site
- Increases file size and confusion

**Solution:**
1. Select all frames on Production Site (Cmd/Ctrl + A)
2. Run plugin: **"Select Similar Instances"** or **"Find Duplicate Instances"**
3. Review duplicates:
   - Keep ONE instance per unique layout/page
   - Delete extras
4. For components used across multiple frames:
   - Keep ONE instance per frame
   - Delete duplicates within the same frame

**How to Find Duplicates Manually:**
1. Expand all frames in Layers panel
2. Look for duplicate layer names:
   - "Product Card" and "Product Card Copy"
   - "Feature Section" and "Feature Section 2"
3. Select duplicate → Delete

**Expected Cleanup:**
- 12 product cards → Keep all 12 (unique products)
- 3 solution pages → Keep all 3 (unique pages)
- Duplicate headers → Delete, keep only 1 per frame
- Duplicate footers → Delete, keep only 1 per frame

---

## Phase 3: Preserve Design Tokens & Styles

### ✅ QS Tokens - DO NOT DELETE

**Essential Tokens to Keep:**

**1. Color Variables (Variables Panel)**
- `--qs-primary` (#006E6E)
- `--qs-secondary` (#33D9D9)
- `--qs-accent` (#33D9D9)
- `--qs-surface` (#FFFFFF)
- `--qs-foreground` (#1E1E1E)
- `--qs-muted` (#F7F9FA)
- `--qs-border` (rgba(0, 0, 0, 0.1))
- `--qs-success`, `--qs-error`, `--qs-warning`, `--qs-info`

**2. Spacing Variables (Variables Panel)**
- `--qs-space-2` (8px)
- `--qs-space-4` (16px)
- `--qs-space-8` (32px)
- `--qs-space-12` (48px)
- `--qs-space-16` (64px)
- `--qs-space-24` (96px)
- `--qs-space-32` (128px)

**3. Typography Variables (Text Styles)**
- Display/H1 - Emilio Light 64px
- H2 - Emilio Light 48px
- H3 - Emilio Light 32px
- H4 - Inter Medium 20px
- Body Large - Inter Regular 18px
- Body Medium - Inter Regular 16px
- Body Small - Inter Regular 14px
- Nav Item - Inter Medium 16px

**4. Effect Styles (Effects Panel)**
- Shadow 1 - `0 1px 2px 0 rgba(0, 0, 0, 0.05)`
- Shadow 2 - `0 4px 12px 0 rgba(0, 0, 0, 0.08)`
- Shadow 3 - `0 8px 16px -4px rgba(0, 0, 0, 0.15)`
- Shadow 4 - `0 12px 24px -8px rgba(0, 0, 0, 0.2)`

**How to Verify Tokens Are Preserved:**
1. Open Variables panel (Cmd/Opt + Return)
2. Check all color and spacing variables are present
3. Open Text Styles panel (Cmd/Opt + T)
4. Check all 8 text styles are present
5. Open Effects panel
6. Check all 4 shadow styles are present

**These are LIGHTWEIGHT and feed everything - DO NOT DELETE**

### ✅ Fonts - DO NOT DELETE

**Essential Font Files:**
- **Emilio Light** - Display font for headings
- **Inter Variable** - Body font for UI and content

**How to Verify Fonts:**
1. Open any text layer
2. Font dropdown should show:
   - Emilio Light (weight 300)
   - Inter (weights 100-900 variable)
3. If missing, re-upload font files

**Font Files Location (for re-upload if needed):**
- `/fonts/Emilio-Light.woff2`
- `/fonts/Inter-Variable.woff2`

---

## Phase 4: Ensure Auto Layout & Variable Bindings Stay Intact

### ✅ Auto Layout Verification

**What is Auto Layout?**
- Figma's responsive layout system
- Frames automatically resize based on content
- Essential for responsive design

**How to Verify Auto Layout:**
1. Select any frame on Production Site
2. Right panel should show:
   - Blue "Auto Layout" badge
   - Padding values (e.g., 64px)
   - Gap values (e.g., 32px)
   - Direction: Horizontal/Vertical
3. If missing, re-apply:
   - Select frame
   - Shift + A (Add Auto Layout)
   - Set padding, gap, direction

**Frames That MUST Have Auto Layout:**
- ✅ QS/Header (horizontal, gap: 32px)
- ✅ QS/Footer (vertical, gap: 48px)
- ✅ Hero Section (vertical, gap: 24px, padding: 160px)
- ✅ Feature Section (vertical, gap: 48px, padding: 96px)
- ✅ Product Card (vertical, gap: 16px, padding: 24px)
- ✅ CTA Button (horizontal, gap: 8px, padding: 16px 32px)

**How to Preserve Auto Layout When Cleaning:**
- ❌ Don't flatten frames with Auto Layout
- ❌ Don't convert to absolute positioning
- ✅ Keep blue Auto Layout badge visible
- ✅ Test: Resize content, frame should adapt

### ✅ Variable Bindings Verification

**What are Variable Bindings?**
- Design tokens linked to element properties
- E.g., Button fill color → `--qs-primary` variable
- Changes to variable update all bound elements

**How to Verify Variable Bindings:**
1. Select any element (e.g., primary button)
2. Check Fill property in right panel
3. Should show purple variable icon 🟣 next to color
4. Hover over icon → shows variable name (e.g., `--qs-primary`)

**Elements That MUST Have Variable Bindings:**

**Color Bindings:**
- Primary buttons → `--qs-primary` (fill)
- Secondary buttons → `--qs-secondary` (fill)
- Text headings → `--qs-foreground` (fill)
- Background surfaces → `--qs-surface` (fill)
- Borders → `--qs-border` (stroke)

**Spacing Bindings:**
- Section padding → `--qs-space-24` (96px)
- Card gaps → `--qs-space-8` (32px)
- Button padding → `--qs-space-4` (16px)

**Typography Bindings:**
- H1 elements → "Display/H1" text style
- H2 elements → "H2" text style
- Body text → "Body Large" text style
- Nav links → "Nav Item" text style

**How to Restore Lost Bindings:**
1. Select element with missing binding
2. Click color/spacing property
3. Click 🎨 icon → "Apply variable"
4. Select correct variable from list
5. Repeat for all unbound properties

### ✅ Every Frame Remains Editable

**Goal:**
- No locked frames
- No locked layers
- All properties editable

**How to Unlock Everything:**
1. Select all on Production Site (Cmd/Ctrl + A)
2. Right-click → "Unlock all"
3. In right panel → uncheck "Lock" if present
4. Test: Try editing any text, color, spacing

**Frames That Should Be Editable:**
- ✅ Hero Section - Edit headline, description, CTA
- ✅ Feature Cards - Edit icon, title, description
- ✅ Product Cards - Edit all content
- ✅ Footer - Edit links, legal text
- ✅ Header - Edit nav links, logo

**Exception: Protected Elements (Optional)**
- If you want to prevent accidental edits:
  - Lock only MASTER components (not instances)
  - Lock only decorative background elements
  - Keep all content editable

---

## Phase 5: File Organization Best Practices

### ✅ Single Page Structure

**Production Site Page - Recommended Layout:**

```
📄 Production Site
  ├── 🏠 Homepage
  │   ├── QS/Header (instance)
  │   ├── Hero Section
  │   ├── Complete Safety Platform (12 cards)
  │   ├── Solutions Overview
  │   ├── Resources Overview
  │   ├── About Overview
  │   └── QS/Footer (instance)
  │
  ├── 📦 Product Pages (Hash-based Routes)
  │   ├── Access Control Page (#access-control)
  │   ├── Visitor Management Page (#visitor-management)
  │   ├── ... (12 total product pages)
  │   └── Each with: QS/Header + Content + QS/Footer
  │
  ├── 🎯 Solution Pages (Hash-based Routes)
  │   ├── K-12 Schools (#k12-schools)
  │   ├── Multi-Site Organizations (#multi-site)
  │   └── Private & Charter Schools (#private-charter)
  │
  └── ℹ️ Info Pages (Hash-based Routes)
      ├── About (#about)
      └── Resources (#resources)
```

**Frame Naming Convention:**
- Use clear, hierarchical names
- Match code route names
- Examples:
  - ✅ "Homepage - Desktop 1440px"
  - ✅ "Product - Access Control (#access-control)"
  - ✅ "Solution - K12 Schools (#k12-schools)"
  - ❌ "Frame 1"
  - ❌ "Copy of Homepage"

### ✅ Layer Organization

**Recommended Layer Structure:**
```
📄 Production Site
  └── 🖼️ Homepage Frame
      ├── 📌 QS/Header (component instance)
      ├── 📦 Section - Hero
      │   ├── Background (locked)
      │   ├── Content
      │   │   ├── Headline
      │   │   ├── Description
      │   │   └── CTA Buttons
      │   └── Decorative Elements (locked)
      ├── 📦 Section - Products
      │   ├── Section Header
      │   └── Product Grid (12 cards)
      ├── 📦 Section - Solutions
      ├── 📦 Section - Resources
      ├── 📦 Section - About
      └── 📌 QS/Footer (component instance)
```

**Naming Best Practices:**
- Use prefixes for organization:
  - `📌` for pinned components (header/footer)
  - `📦` for major sections
  - `🎨` for decorative elements
  - `🔒` for locked/protected layers
- Use Auto Layout for all sections
- Group related elements

---

## Phase 6: Component Library Consolidation

### ✅ Keep Only ONE Instance of Each Component

**Component Audit Checklist:**

**1. Identify All Components**
- Open Assets panel (Cmd/Opt + 2)
- Filter: "Local components"
- Review list of all components

**2. Find Duplicate Instances**
For each component:
- Search for component name in Layers panel
- Count instances
- Keep ONE, delete extras

**3. Components to Audit:**

| Component Name | Expected Count | Action |
|----------------|----------------|--------|
| QS/Header | 1 per page | Keep all (19 pages = 19 instances) |
| QS/Footer | 1 per page | Keep all (19 pages = 19 instances) |
| Product Card | 12 total | Keep all 12 (unique products) |
| Feature Card | Variable | Keep all (different features) |
| CTA Button | Variable | Keep all (different CTAs) |
| Step Card | Variable | Keep all (different steps) |
| Case Study Card | Variable | Keep all (different case studies) |
| Doc Card | Variable | Keep all (different resources) |

**4. Delete Duplicate Instances:**
- If you find "Product Card Copy" or "Product Card 2":
  - Verify it's truly a duplicate (same content)
  - Delete if duplicate
  - Keep if unique content

**5. Master Components Location:**
- Option 1: Keep on separate "Components" page
- Option 2: Move masters off-canvas on Production Site
- Option 3: Use Figma's component library feature

**Recommended: Component Library Approach**
1. Create "🎨 Components" page (optional)
2. Move all master components there
3. Use instances on Production Site
4. This keeps Production Site clean

---

## Phase 7: Verification Checklist

### ✅ Final Verification Steps

**Before/After Comparison:**

| Metric | Before | After Target |
|--------|--------|--------------|
| **Pages** | 10-15 pages | 1-2 pages (Production + Components) |
| **File Size** | 150-200 MB | 80-120 MB |
| **Component Instances** | 300+ instances | 100-150 instances (no duplicates) |
| **Frames** | 100+ frames | 19-30 frames (production routes) |
| **Hidden Layers** | 50+ hidden | 0 hidden |
| **Locked Elements** | Variable | Only backgrounds (optional) |

**Checklist - Verify Each Item:**

**1. Page Structure**
- [ ] Only "Production Site" page exists (+ optional Components page)
- [ ] All other pages deleted (Export, Archive, Wireframes, etc.)
- [ ] All frames on Production Site are visible
- [ ] No off-canvas frames (except component masters)

**2. Components**
- [ ] QS/Header exists as master component
- [ ] QS/Footer exists as master component
- [ ] Both are editable in place on Production Site
- [ ] All component instances are visible (not hidden)
- [ ] No duplicate instances of same component

**3. Design Tokens**
- [ ] All color variables present (10+ variables)
- [ ] All spacing variables present (7+ variables)
- [ ] All text styles present (8 styles)
- [ ] All effect styles present (4 shadows)
- [ ] Fonts loaded: Emilio Light + Inter Variable

**4. Auto Layout & Bindings**
- [ ] All sections have Auto Layout (blue badge visible)
- [ ] All frames resize correctly when content changes
- [ ] Color properties show purple variable icon 🟣
- [ ] Spacing properties bound to variables
- [ ] Text styles applied to all text elements

**5. Editability**
- [ ] No locked frames (except intentional backgrounds)
- [ ] All text is editable
- [ ] All colors can be changed
- [ ] All spacing can be adjusted
- [ ] Component instances can be edited in place

**6. File Performance**
- [ ] File size reduced by ~40-50%
- [ ] Layers panel loads quickly (< 2 seconds)
- [ ] Canvas panning is smooth (no lag)
- [ ] Export time reduced (test one frame)

---

## Phase 8: Production Workflow

### ✅ Working with the Clean File

**Daily Workflow:**
1. Open "Production Site" page
2. Select frame to edit (e.g., Homepage)
3. Edit content directly:
   - Text: Click to edit
   - Colors: Select element → change fill
   - Spacing: Adjust Auto Layout padding/gap
4. Changes propagate to linked components
5. Export code when ready

**Making Changes to Header/Footer:**
1. Option A: Edit instance directly
   - Changes apply to that instance only
   - Other instances unchanged
2. Option B: Edit master component
   - Open Components page (or find master)
   - Edit master QS/Header
   - Changes apply to ALL instances
   - Use this for global updates

**Adding New Pages:**
1. Duplicate existing frame (e.g., Homepage)
2. Rename to new route name
3. Edit content
4. QS/Header and QS/Footer auto-included
5. Export to code

**Updating Design Tokens:**
1. Open Variables panel
2. Select variable (e.g., `--qs-primary`)
3. Change value
4. ALL bound elements update instantly
5. No need to manually update each element

---

## Phase 9: Export & Code Sync

### ✅ Keeping Figma ↔ Code in Sync

**Current Code Structure:**
```
/App.tsx → Entry point
/components/LiveWebsite.tsx → Main website component
/components/qs/Header.tsx → QS/Header component
/components/qs/Footer.tsx → QS/Footer component
/components/ProductPages.tsx → All 12 product pages
/components/Solution*.tsx → 3 solution pages
/styles/globals.css → All QS tokens (71 variables)
```

**Design → Code Workflow:**

**When You Update Design:**
1. Make changes in Figma (Production Site page)
2. Select frame to export
3. Use Figma Dev Mode → Copy code
4. Paste into corresponding React component
5. Verify tokens are bound (use var(--qs-*))

**When You Update Code:**
1. Make changes in React component
2. Update corresponding Figma frame to match
3. Keep both in sync for accurate handoff

**Token Sync (Critical):**
- Figma variables → CSS custom properties
- Must match exactly:
  - Figma: `--qs-primary` = #006E6E
  - CSS: `--qs-primary: #006E6E;`
- If you change in Figma, update globals.css
- If you change in CSS, update Figma variable

---

## Troubleshooting

### ❓ Common Issues After Cleanup

**Issue: "Auto Layout is broken"**
- **Cause:** Deleted parent frame with Auto Layout
- **Fix:** Re-apply Auto Layout (Shift + A) to parent frame

**Issue: "Variable bindings are missing"**
- **Cause:** Deleted variable or unbound during cleanup
- **Fix:** Re-apply variable binding (click property → Apply variable)

**Issue: "Components not updating"**
- **Cause:** Instance detached from master
- **Fix:** Re-link instance to master (right-click → "Restore instance")

**Issue: "File is still large after cleanup"**
- **Cause:** Hidden images or embedded fonts
- **Fix:** 
  1. Run plugin: "Find Hidden Layers" → Delete
  2. Check for embedded images > 1920px
  3. Compress images (see FIGMA_OPTIMIZATION_GUIDE.md)

**Issue: "Can't edit component instance"**
- **Cause:** Master component is locked
- **Fix:** Unlock master component (select master → uncheck Lock)

**Issue: "Lost design tokens"**
- **Cause:** Deleted Variables panel or library
- **Fix:** 
  1. Check if variables exist (Cmd/Opt + Return)
  2. If missing, re-create from globals.css reference
  3. Or restore from File → Version history

---

## Maintenance Schedule

### 📅 Weekly Maintenance

**Every Monday:**
- [ ] Review Production Site page
- [ ] Delete any new duplicates created during week
- [ ] Verify no hidden layers added
- [ ] Check file size (should stay < 120 MB)

### 📅 Monthly Deep Clean

**First Monday of Each Month:**
- [ ] Audit all component instances (delete duplicates)
- [ ] Verify all variable bindings intact
- [ ] Test Auto Layout on all frames
- [ ] Export sample frame to verify code sync
- [ ] Update this documentation if workflow changes

---

## Quick Reference Commands

### Figma Keyboard Shortcuts

| Action | Shortcut | Use |
|--------|----------|-----|
| Add Auto Layout | `Shift + A` | Make frame responsive |
| Open Variables | `Cmd/Opt + Return` | View design tokens |
| Open Text Styles | `Cmd/Opt + T` | View typography |
| Lock/Unlock | `Cmd/Ctrl + Shift + L` | Lock elements |
| Detach Instance | `Cmd/Opt + B` | Break from master |
| Select Similar | `Cmd/Opt + Click` | Find duplicates |
| Delete | `Backspace/Delete` | Remove elements |
| Duplicate | `Cmd/Ctrl + D` | Copy frame |

### Figma Plugins for Cleanup

| Plugin | Use Case |
|--------|----------|
| **Find Hidden Layers** | Detect all hidden elements |
| **Select Similar Instances** | Find duplicate components |
| **Clean Document** | Comprehensive cleanup |
| **Component Analytics** | Track component usage |
| **Unused Components** | Find unused masters |

---

## Success Metrics

### ✅ You've Succeeded When:

**File Structure:**
- ✅ Only 1-2 pages exist (Production Site + optional Components)
- ✅ All frames are visible and accessible
- ✅ No off-canvas clutter
- ✅ Clear, hierarchical layer names

**Components:**
- ✅ QS/Header and QS/Footer are linked but editable
- ✅ Zero duplicate instances
- ✅ All component instances are used

**Design Tokens:**
- ✅ All 71 tokens present and bound
- ✅ Fonts loaded correctly
- ✅ Variables feed all elements

**Performance:**
- ✅ File size < 120 MB
- ✅ Layers panel loads instantly
- ✅ Smooth canvas navigation
- ✅ Export time < 30 seconds

**Editability:**
- ✅ All frames are unlocked
- ✅ All content is editable
- ✅ Auto Layout works correctly
- ✅ Changes propagate to instances

---

## Conclusion

This reorganization creates a **single, clean production file** with:
- ✅ One working page (Production Site)
- ✅ Preserved design tokens and styles
- ✅ Linked but editable components
- ✅ No duplicates or clutter
- ✅ Full editability maintained
- ✅ Auto Layout and variable bindings intact

**Result:** A lean, fast, production-ready Figma file that perfectly mirrors the codebase.

---

**Last Updated:** October 24, 2025  
**Owner:** QuickSecure Design Team  
**Next Review:** Weekly Monday cleanup  
**Status:** 📋 Ready to execute
