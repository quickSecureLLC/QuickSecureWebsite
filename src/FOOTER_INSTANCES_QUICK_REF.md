# QS/Footer Instances - Quick Reference

**Status:** ✅ Audit Complete  
**Total Instances:** 9 (1 per page frame)  
**Duplicates:** 0  
**Nested Footers:** 0  

---

## Footer Placement Pattern

```tsx
export function PageComponent() {
  return (
    <>
      {/* Page content sections */}
      <section>{/* Content */}</section>
      
      {/* Spacer 96px - REQUIRED */}
      <div className="section-spacing"></div>

      {/* QS Footer - LAST ELEMENT */}
      <Footer />
    </>
  );
}
```

---

## Rules (Figma-Equivalent)

1. **Exactly ONE Footer per page frame** ✅
2. **Footer at ROOT level** (not inside sections) ✅
3. **Footer is LAST element** in layer list ✅
4. **96px top margin** (`section-spacing` class) ✅
5. **Width = Fill container** (handled by Footer) ✅
6. **Y = Auto** (end of page Auto Layout) ✅

---

## Footer Instances by Page

| Page | File | Line | Status |
|------|------|------|--------|
| Home | LiveWebsite.tsx | 353 | ✅ |
| Products Overview | ProductsOverview.tsx | 556 | ✅ |
| Product Details (×12) | ProductPages.tsx | 100 | ✅ |
| Solutions Overview | SolutionsOverview.tsx | 1290 | ✅ |
| K-12 Schools | SolutionK12.tsx | 943 | ✅ |
| Multi-Site | SolutionMultiSite.tsx | 952 | ✅ |
| Private/Charter | SolutionPrivateCharter.tsx | 952 | ✅ |
| Resources Overview | ResourcesOverview.tsx | 354 | ✅ |
| About Overview | AboutOverview.tsx | 300 | ✅ |

**Total:** 9 instances ✅

---

## Spacing Tokens

```css
/* 96px top margin (responsive) */
.section-spacing {
  margin-bottom: var(--qs-section-spacing);
}

/* Desktop: 96px */
/* Tablet: 64px */
/* Mobile: 48px */
/* Small: 32px */
```

---

## Verification Commands

```bash
# Count Footer instances
grep -c "<Footer" components/*.tsx

# Find all Footer locations
grep -n "<Footer" components/*.tsx

# Check for nested Footers (should return empty)
grep -B5 "<Footer" components/*.tsx | grep "<section"
```

---

## ✅ All Requirements Met

- [x] Single Footer per page (9 pages, 9 Footers)
- [x] Root-level placement (no nesting)
- [x] Last element in page
- [x] 96px top margin
- [x] Uses canonical QS/Footer
- [x] Fill container width
- [x] Auto Y positioning

---

**Last Audit:** October 25, 2025  
**Documentation:** `/FOOTER_INSTANCES_AUDIT_COMPLETE.md`
