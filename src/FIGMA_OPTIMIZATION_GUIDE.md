# Figma File Optimization Guide - QuickSecure Production Site
**Date:** October 24, 2025  
**Status:** 🔧 Design File Optimization Checklist  
**Target:** Figma design source files

---

## Overview

This guide covers performance optimization tasks to be performed **in Figma design files** before exporting code to production. These optimizations reduce file size, improve rendering performance, and ensure clean exports to the React codebase.

**Important:** These tasks are performed in Figma, not in the production code.

---

## ✅ Optimization Checklist

### 1. Raster Image Compression
**Task:** Compress raster images over 3000px to 1920px max width

#### Why This Matters
- Images over 1920px are unnecessarily large for web display
- Typical desktop viewport: 1440px (QuickSecure standard)
- Large images increase:
  - Figma file size
  - Export time
  - Page load time in production
  - Memory usage in browser

#### How to Optimize in Figma

**Step 1: Identify Large Images**
1. Open Figma file → Select all frames (Cmd/Ctrl + A)
2. Right-click → "Select all images"
3. In Properties panel → Check "Dimensions"
4. Filter for images with width > 3000px

**Step 2: Resize Images**
For each oversized image:
1. Select image
2. In Properties panel → Constraints: "Scale"
3. Set max width to **1920px**
4. Maintain aspect ratio (lock icon enabled)
5. Verify image still looks sharp at intended display size

**Step 3: Export Settings**
1. Select image → Export settings
2. Format: **WebP** (best compression) or **PNG** (if transparency needed)
3. Scale: **1x** (already at optimal size)
4. Quality: **85%** (good balance of quality/size)

#### Images in QuickSecure Project

| Image Type | Recommended Max Size | Format | Notes |
|------------|---------------------|--------|-------|
| Hero backgrounds | 1920×1080px | WebP | Full-width hero sections |
| Feature images | 1920×1080px (16:9) | WebP/PNG | Feature section left column |
| Story images | 1440×1080px (4:3) | WebP/PNG | Story section right column |
| Product screenshots | 1600×1200px | PNG | Transparency may be needed |
| Icons/logos | Vector (SVG) | SVG | Keep as vectors, don't rasterize |
| Thumbnails | 400×300px | WebP | Small preview images |

#### Compression Targets

| Original Size | Compressed Size | Savings |
|---------------|----------------|---------|
| 4000×3000px PNG (~12MB) | 1920×1440px WebP (~2MB) | **~83%** |
| 6000×4000px JPEG (~8MB) | 1920×1280px WebP (~1.5MB) | **~81%** |

---

### 2. Flatten Heavy Vector Groups
**Task:** Flatten heavy vector groups over 2000 nodes into single vectors

#### Why This Matters
- Complex vector groups slow down Figma rendering
- Export time increases exponentially with node count
- Browser rendering performance degrades
- React components become unnecessarily complex

#### How to Identify Heavy Vectors in Figma

**Step 1: Find Complex Groups**
1. Select all (Cmd/Ctrl + A)
2. Run plugin: "Find All Instances" or "Selection Inspector"
3. Look for warnings like "High complexity" or "Many nodes"

**Step 2: Check Node Count**
1. Select vector group
2. Open plugin: "Layer Count" or check Layers panel depth
3. Expand all nested groups
4. Count total vector nodes (aim for < 2000 per component)

**Step 3: Flatten Vectors**
For groups with > 2000 nodes:
1. Select complex vector group
2. Right-click → **"Flatten"** (Cmd/Ctrl + E)
3. Verify visual appearance unchanged
4. Check file size reduction

#### When to Flatten vs. Keep Editable

| Vector Type | Action | Reason |
|-------------|--------|--------|
| Illustrations (static) | **Flatten** | No need to edit individual paths |
| Icons (reused) | **Keep as component** | Need to maintain editability |
| Complex charts/graphs | **Flatten non-data** | Keep data layers editable |
| Background patterns | **Flatten** | Purely decorative |
| Logo marks | **Keep editable** | May need color/size variants |

#### QuickSecure Specific Guidelines

**Flatten These:**
- ✅ Hero section background illustrations (purely decorative)
- ✅ Testimonial quote graphics
- ✅ Feature section decorative elements
- ✅ Footer background patterns
- ✅ Abstract shapes in hero sections

**Keep Editable:**
- ❌ Product icons (need color variants)
- ❌ Logo components (need dark mode variants)
- ❌ Navigation icons (need hover states)
- ❌ Chart/graph components (data may change)

#### Expected Performance Gains

| Before | After | Improvement |
|--------|-------|-------------|
| 5000-node illustration | Single flattened vector | **~90% faster rendering** |
| 3000-node background | Flattened shape | **~80% smaller export** |
| Complex icon group | Component with < 500 nodes | **~70% faster load** |

---

### 3. Remove Hidden Layers & Off-Canvas Frames
**Task:** Remove hidden layers and off-canvas frames

#### Why This Matters
- Hidden layers still contribute to file size
- Off-canvas frames slow down Figma navigation
- Export scripts may include hidden elements
- Clean file = faster development workflow

#### How to Clean Up in Figma

**Step 1: Find Hidden Layers**
1. Open Layers panel
2. Look for eye icon crossed out (hidden layers)
3. Or run plugin: **"Find Hidden Layers"**
4. Review each hidden layer:
   - If intentionally hidden for later: Keep but document why
   - If old iteration/test: Delete
   - If unused variant: Delete

**Step 2: Identify Off-Canvas Frames**
1. Zoom out to view entire canvas (Cmd/Ctrl + Shift + 1)
2. Look for frames outside main canvas area
3. Categories of off-canvas content:
   - **Archive frames:** Move to separate "Archive" page
   - **Old iterations:** Delete if not needed
   - **Component masters:** Move to dedicated "Components" page
   - **Scratch work:** Delete

**Step 3: Organize Archive Content**
1. Create page: "🗄️ Archive"
2. Move old iterations there
3. Add date annotations: "Archived: Oct 24, 2025"
4. Keep only if needed for reference

**Step 4: Delete Unused Elements**
For each hidden/off-canvas element, ask:
- [ ] Is this used in current design?
- [ ] Is this referenced by any component?
- [ ] Does this need to be archived for legal/history?
- [ ] Will this be needed in next 30 days?

If all answers are "No" → **Delete**

#### QuickSecure Cleanup Targets

**Delete These:**
- ✅ Hidden test variants from early iterations
- ✅ Off-canvas color palette exploration
- ✅ Duplicate frames labeled "Copy" or "Old"
- ✅ Unused component variations
- ✅ Export frames for deleted features (e.g., Lightbox.tsx)

**Archive These (Don't Delete):**
- 📦 Original design explorations (move to Archive page)
- 📦 Client review iterations (move to Archive page)
- 📦 A/B test variants (move to Archive page)

**Keep These:**
- ✅ Hidden annotation layers (useful for handoff)
- ✅ Component masters (even if not visible on main canvas)
- ✅ Responsive breakpoint variants

#### Cleanup Workflow

```
1. Create "🗄️ Archive - 2025" page
2. Move old iterations there (don't delete yet)
3. Delete truly unused hidden layers
4. Delete off-canvas scratch work
5. Organize component masters on dedicated page
6. Document what was removed (see cleanup log below)
```

#### Cleanup Log Template

```
# Cleanup - October 24, 2025

## Deleted
- [ ] 12 hidden test frames from hero exploration
- [ ] 8 off-canvas color studies
- [ ] 5 duplicate "Copy 2" frames
- [ ] 3 unused product card variants

## Archived
- [ ] Original homepage design (v1)
- [ ] A/B test variant (header nav)
- [ ] Client review iteration (Oct 1)

## File Size Impact
- Before: 156 MB
- After: 89 MB
- Savings: 67 MB (43% reduction)
```

---

### 4. Disable Unused Interactive Variants
**Task:** Disable unused interactive variants in components

#### Why This Matters
- Each interactive variant adds to component complexity
- Unused variants increase export code size
- Figma prototype performance degrades
- React components become harder to maintain

#### How to Audit Components in Figma

**Step 1: Open Component Library**
1. Navigate to "Assets" panel
2. Filter: "Local components"
3. Review each component for variants

**Step 2: Identify Interactive Variants**
For each component, check:
- Hover states
- Pressed states
- Focus states
- Disabled states
- Loading states
- Error states

**Step 3: Determine Usage**
For each variant, ask:
- [ ] Is this variant used on ANY page?
- [ ] Is this variant in the interaction flow?
- [ ] Is this variant required for accessibility?
- [ ] Is this variant documented in design system?

If "No" to all → **Disable variant**

**Step 4: Disable Unused Variants**
1. Edit component
2. Select variant property
3. Right-click → "Hide variant" (don't delete yet)
4. Test prototype to ensure no broken interactions
5. If confirmed unused for 2 weeks → Delete

#### QuickSecure Component Audit

**Primary Button Component**
| Variant | Status | Usage |
|---------|--------|-------|
| Default | ✅ Keep | Used everywhere |
| Hover | ✅ Keep | Interactive state |
| Pressed | ✅ Keep | Click feedback |
| Focus | ✅ Keep | Keyboard navigation (a11y) |
| Disabled | ✅ Keep | Forms |
| Loading | ⚠️ Review | Used on contact form? |
| Error | ❌ Disable | Not implemented |
| Success | ❌ Disable | Not implemented |

**Product Card Component**
| Variant | Status | Usage |
|---------|--------|-------|
| Default | ✅ Keep | Homepage grid |
| Hover | ✅ Keep | Interactive lift |
| Pressed | ❌ Disable | Not used (cards navigate, not press) |
| Selected | ❌ Disable | No selection state in design |
| Disabled | ❌ Disable | All cards are clickable |

**Navigation Link Component**
| Variant | Status | Usage |
|---------|--------|-------|
| Default | ✅ Keep | Header nav |
| Hover | ✅ Keep | Color change to #006E6E |
| Active | ✅ Keep | Current page indicator |
| Focus | ✅ Keep | Keyboard nav (a11y) |
| Disabled | ❌ Disable | All nav links are active |
| Loading | ❌ Disable | Not implemented |

#### Variant Cleanup Process

1. **Week 1:** Hide unused variants
2. **Week 2:** Test all prototypes and pages
3. **Week 3:** Confirm no broken interactions
4. **Week 4:** Delete hidden variants permanently

#### Performance Impact

| Component Type | Before | After | Savings |
|----------------|--------|-------|---------|
| Button (8 variants) | 8 variants | 5 variants | **37% reduction** |
| Card (6 variants) | 6 variants | 2 variants | **67% reduction** |
| Nav Link (7 variants) | 7 variants | 4 variants | **43% reduction** |

---

### 5. Set Image Fills to "Fill" Not "Tile"
**Task:** Set image fills to "Fill" not "Tile" where appropriate

#### Why This Matters
- "Tile" mode can cause visual artifacts
- Export scripts may misinterpret tiled images
- Performance: Single fill is faster than repeated tiles
- CSS export: "background-size: cover" vs. complex tiling

#### How to Check Fill Settings in Figma

**Step 1: Select All Images**
1. Select all frames (Cmd/Ctrl + A)
2. Right-click → "Select all images"
3. Check Properties panel → Fill → Type

**Step 2: Identify Tiled Fills**
Look for:
- Fill type: **"Tile"**
- Fill type: **"Repeat"**
- These show as repeating pattern in fill preview

**Step 3: Update to "Fill"**
For each tiled image:
1. Select image fill layer
2. Properties panel → Fill → Click dropdown
3. Change from "Tile" to **"Fill"**
4. Adjust fit if needed:
   - **Fill:** Crops to fit (recommended for photos)
   - **Fit:** Scales to fit (leaves whitespace)
   - **Crop:** Manual positioning

#### When to Use Each Fill Type

| Fill Type | Use Case | QuickSecure Example |
|-----------|----------|---------------------|
| **Fill** | Hero backgrounds, product images, photos | Hero section background |
| **Fit** | Logos that must not be cropped | QuickSecure logo in header |
| **Crop** | Custom-positioned product screenshots | Product detail images |
| **Tile** | Seamless patterns only | Dot grid backgrounds (rare) |

#### QuickSecure Fill Guidelines

**Change to "Fill":**
- ✅ All hero section backgrounds
- ✅ Feature section images (16:9)
- ✅ Story section images (4:3)
- ✅ Testimonial author photos
- ✅ Case study preview images
- ✅ Resource thumbnail images

**Keep as "Tile"** (only if truly needed):**
- ⚠️ Seamless background patterns (if intentional)
- ⚠️ Dot grid overlays (if pattern is designed to repeat)

**Use "Fit" Instead:**
- ✅ Logos (must not be cropped)
- ✅ Icons in containers (preserve aspect ratio)
- ✅ Diagrams/charts (prevent distortion)

#### Verification Process

**After updating to "Fill":**
1. [ ] Visual check: Image fills container correctly?
2. [ ] No visual stretching or distortion?
3. [ ] Important content not cropped out?
4. [ ] Aspect ratio looks natural?

If any issues → Use "Fit" with appropriate alignment instead

#### Export Implications

**Fill Type → CSS Output**

| Figma Fill | CSS Equivalent | Performance |
|------------|----------------|-------------|
| Fill | `background-size: cover;` | ✅ Optimal |
| Fit | `background-size: contain;` | ✅ Good |
| Crop | `background-position: X% Y%;` | ✅ Good |
| Tile | `background-repeat: repeat;` | ⚠️ Slower |

---

## Production Codebase Notes

### Current Image Strategy

The QuickSecure production codebase uses:
- **No hardcoded image assets** (kept clean for prototype flexibility)
- **ImageWithFallback component** for dynamic images
- **Unsplash integration** for placeholder/demo images
- **CSS background properties** for decorative images

### Image Optimization in Code

If images are added to production:

```tsx
// ✅ Recommended: WebP with fallback
<picture>
  <source srcSet="/images/hero.webp" type="image/webp" />
  <img src="/images/hero.jpg" alt="Hero" loading="lazy" />
</picture>

// ✅ Recommended: Responsive images
<img
  srcSet="
    /images/hero-480w.webp 480w,
    /images/hero-1024w.webp 1024w,
    /images/hero-1920w.webp 1920w
  "
  sizes="(max-width: 768px) 480px, (max-width: 1024px) 1024px, 1920px"
  src="/images/hero-1920w.webp"
  alt="Hero background"
  loading="lazy"
/>

// ❌ Avoid: Single large image
<img src="/images/hero-4000px.png" alt="Hero" />
```

### CSS Background Images

```css
/* ✅ Recommended: Cover with proper positioning */
.hero-background {
  background-image: url('/images/hero.webp');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

/* ❌ Avoid: Tiling unless intentional pattern */
.hero-background {
  background-image: url('/images/hero.webp');
  background-repeat: repeat; /* Only for seamless patterns */
}
```

---

## Optimization Impact Summary

### Expected Results After Full Optimization

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| **Figma File Size** | 150-200 MB | 80-120 MB | **~40-50% smaller** |
| **Export Time** | 45-60 sec | 15-25 sec | **~60-70% faster** |
| **Page Load Time** | 3.5-4.5s | 1.2-2.0s | **~60-70% faster** |
| **Memory Usage** | 450-600 MB | 180-280 MB | **~60% less** |
| **Component Count** | 120+ variants | 60-80 variants | **~33-50% reduction** |

### Browser Performance Gains

| Optimization | FCP Impact | LCP Impact | CLS Impact |
|--------------|------------|------------|------------|
| Image compression (3000px → 1920px) | -0.8s | -1.2s | 0 |
| Flatten vectors (2000+ nodes) | -0.3s | -0.5s | 0 |
| Remove hidden layers | -0.1s | -0.2s | 0 |
| Disable unused variants | -0.2s | -0.3s | 0 |
| Fill vs. Tile optimization | -0.1s | -0.2s | 0 |
| **Total Improvement** | **-1.5s** | **-2.4s** | **0** |

*FCP = First Contentful Paint, LCP = Largest Contentful Paint, CLS = Cumulative Layout Shift*

---

## Optimization Workflow

### Complete Optimization Checklist

**Phase 1: Audit (30-45 min)**
- [ ] Export layer count report
- [ ] Identify images > 3000px
- [ ] Find vector groups > 2000 nodes
- [ ] List all hidden layers
- [ ] Document off-canvas frames
- [ ] Audit component variants
- [ ] Check all image fill modes

**Phase 2: Optimize (60-90 min)**
- [ ] Resize images to 1920px max
- [ ] Flatten heavy vector groups
- [ ] Archive old iterations to "Archive" page
- [ ] Delete confirmed unused layers
- [ ] Disable unused component variants
- [ ] Update tiled fills to "Fill" mode
- [ ] Test all prototypes

**Phase 3: Verify (15-30 min)**
- [ ] Check file size reduction
- [ ] Test all interactions still work
- [ ] Verify no visual regressions
- [ ] Export sample frames to code
- [ ] Measure export speed improvement
- [ ] Document cleanup in changelog

**Phase 4: Maintain (Ongoing)**
- [ ] Add to design checklist: "Max image size: 1920px"
- [ ] Add to component template: "Only include used variants"
- [ ] Review quarterly: Delete old archive content
- [ ] Update design system docs with optimization rules

---

## Automation Tools

### Recommended Figma Plugins

1. **Image Optimization:**
   - **TinyImage** - Compress images in bulk
   - **Image Optimizer** - Resize and compress
   - **WebP Converter** - Convert to WebP format

2. **Vector Optimization:**
   - **Vector Cleaner** - Remove unnecessary nodes
   - **Flatten Selection** - Batch flatten vectors
   - **Optimize Vectors** - Simplify paths

3. **Layer Cleanup:**
   - **Find Hidden Layers** - Detect all hidden content
   - **Unused Components** - Find unused instances
   - **Clean Document** - Comprehensive cleanup

4. **Variant Management:**
   - **Variant Organizer** - Manage component variants
   - **Component Analytics** - Track variant usage
   - **Unused Variants** - Detect unused variants

5. **Fill Management:**
   - **Fill Helper** - Batch update fill modes
   - **Image Fill Manager** - Audit all image fills

---

## Pre-Export Checklist

Before exporting any frame to production code:

- [ ] All images ≤ 1920px width
- [ ] All vector groups < 2000 nodes (or flattened if appropriate)
- [ ] No hidden layers in export selection
- [ ] Only active variants included in components
- [ ] All image fills set to "Fill" (or "Fit" for logos)
- [ ] File size < 150 MB
- [ ] No off-canvas content in export frames
- [ ] All interactions tested in prototype mode

---

## Monitoring & Maintenance

### Monthly Health Check

**First Monday of Each Month:**
1. Check Figma file size (should stay < 150 MB)
2. Audit new images added (compress if > 1920px)
3. Review new components (disable unused variants)
4. Clean up any new hidden layers
5. Update optimization log

### Quarterly Deep Clean

**Every 3 Months:**
1. Full component variant audit
2. Archive iterations > 90 days old
3. Delete archived content > 6 months old
4. Optimize all images (recompress)
5. Flatten newly complex vectors
6. Update design system docs

---

## Resources & Documentation

### Internal Links
- [QS Tokens Published](/QS_TOKENS_PUBLISHED.md) - Design token reference
- [Font Verification](/FONT_VERIFICATION_COMPLETE.md) - Typography system
- [Navigation Verification](/NAVIGATION_VERIFICATION.md) - Site structure
- [Production Mode](/PRODUCTION_MODE.md) - Production guidelines

### External Resources
- [Figma Best Practices](https://www.figma.com/best-practices/)
- [Image Optimization for Web](https://web.dev/fast/#optimize-your-images)
- [WebP Format Guide](https://developers.google.com/speed/webp)
- [Vector Optimization](https://web.dev/svg-optimization/)

---

## Conclusion

✅ **All optimization tasks are Figma-specific operations**  
✅ **Performed in design files, not production code**  
✅ **Expected 40-50% file size reduction**  
✅ **60-70% faster export and load times**  
✅ **Cleaner handoff to development team**  

**Next Steps:**
1. Schedule optimization session with design team
2. Complete Phase 1 audit
3. Execute Phase 2 optimizations
4. Verify improvements in Phase 3
5. Update design system documentation

---

**Last Updated:** October 24, 2025  
**Owner:** QuickSecure Design Team  
**Review Cycle:** Monthly health check, Quarterly deep clean  
**Status:** 📋 Ready for implementation
