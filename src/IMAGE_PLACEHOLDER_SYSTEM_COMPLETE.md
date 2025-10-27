# IMAGE PLACEHOLDER NAMING SYSTEM — COMPLETE ✅

**Status**: Implemented  
**Date**: October 26, 2025  
**Component**: `/components/PlaceholderImage.tsx`

## Overview
Implemented a standardized image placeholder system across the entire QuickSecure website with consistent naming convention and centered labels.

---

## Component Created

### `/components/PlaceholderImage.tsx`
Reusable component for all image placeholders with:
- **Background**: `#E5E7EB` (light gray)
- **Border radius**: `8px`
- **Text style**:
  - Font: Inter (body font)
  - Size: 16px
  - Weight: Medium (500)
  - Color: `var(--qs-text-muted)`
  - Opacity: 60%
  - Alignment: Centered vertically & horizontally

**Usage**:
```tsx
<PlaceholderImage 
  name="QuickSecure-Nexus-1"
  aspectRatio="16/9"
  style={{ borderRadius: '20px' }}
/>
```

---

## Placeholder Locations by Page

### 1. **About Page** (`/components/AboutOverview.tsx`)
- **QuickSecure-About-1**: Mission section image (16:9 ratio)
  - Location: Section 2️⃣ "Our Mission" — right column
  - Aspect ratio: 16:9
  - Replaces: Unsplash team collaboration image

### 2. **Resources Page** (`/components/ResourcesOverview.tsx`)
- **QuickSecure-Resources-Featured**: Blog featured article image
  - Location: Blog tab — featured article (top)
  - Aspect ratio: Custom (min-height 400px)
  
- **QuickSecure-Resources-1 through 6**: Blog article thumbnails
  - Location: Blog tab — 3-column grid
  - Height: 200px fixed
  - Articles:
    1. "5 Best Practices for Emergency Drill Management"
    2. "New AI Threat Detection Features Released"
    3. "FERPA Compliance: What School IT Teams Need to Know"
    4. "Case Study: How Metro Charter Cut Response Time by 75%"
    5. "Understanding Multi-Factor Authentication for Schools"
    6. "The ROI of Integrated Safety Systems"

### 3. **Product Pages** (`/components/ProductPages.tsx`)
Each product has **two** placeholder slots:

#### Nexus System
- **QuickSecure-QuickSecureNexus-1**: Feature section image (16:9, 720px height)
- **QuickSecure-QuickSecureNexus-2**: Story section image (4:3 ratio)

#### Panic App
- **QuickSecure-PanicApp-1**: Feature section image
- **QuickSecure-PanicApp-2**: Story section image

#### Retrofit Locks (Manual Lock)
- **QuickSecure-ManualLock-1**: Feature section image
- **QuickSecure-ManualLock-2**: Story section image

#### Gunshot Detection
- **QuickSecure-GunshotDetection-1**: Feature section image
- **QuickSecure-GunshotDetection-2**: Story section image

#### Ticketing System
- **QuickSecure-TicketingSystem-1**: Feature section image
- **QuickSecure-TicketingSystem-2**: Story section image

#### Drill Management
- **QuickSecure-DrillManagement-1**: Feature section image
- **QuickSecure-DrillManagement-2**: Story section image

#### AI-Powered Insights
- **QuickSecure-AI-PoweredInsights-1**: Feature section image
- **QuickSecure-AI-PoweredInsights-2**: Story section image

#### Visitor Management
- **QuickSecure-VisitorManagement-1**: Feature section image
- **QuickSecure-VisitorManagement-2**: Story section image

#### Mass Notifications
- **QuickSecure-MassNotifications-1**: Feature section image
- **QuickSecure-MassNotifications-2**: Story section image

#### Floor Plan View
- **QuickSecure-FloorPlanView-1**: Feature section image
- **QuickSecure-FloorPlanView-2**: Story section image

#### Electronic Lock
- **QuickSecure-ElectronicLock-1**: Feature section image
- **QuickSecure-ElectronicLock-2**: Story section image

#### Anonymous Tip Line
- **QuickSecure-AnonymousTipLine-1**: Feature section image
- **QuickSecure-AnonymousTipLine-2**: Story section image

---

## Naming Convention

**Format**: `QuickSecure-[SectionName]-[Number]`

**Rules**:
1. Prefix always: `QuickSecure-`
2. Section name: Product name or page section (no spaces, CamelCase)
3. Number: Sequential (1, 2, 3, etc.) within the same section
4. Examples:
   - `QuickSecure-Nexus-1`
   - `QuickSecure-Resources-Featured`
   - `QuickSecure-About-1`

---

## Styling Specifications

### Placeholder Container
```css
backgroundColor: #E5E7EB
borderRadius: 8px (default, can be overridden)
display: flex
alignItems: center
justifyContent: center
```

### Label Text
```css
fontFamily: var(--qs-type-family-body)  /* Inter */
fontSize: 16px
fontWeight: var(--qs-type-weight-medium)  /* 500 */
lineHeight: auto
color: var(--qs-text-muted)
opacity: 0.6
textAlign: center
userSelect: none
pointerEvents: none
```

---

## Implementation Notes

### Props
- `name` (required): Placeholder label text
- `width`: Container width (default: '100%')
- `height`: Container height (default: 'auto')
- `aspectRatio`: CSS aspect ratio (e.g., '16/9', '4/3')
- `style`: Additional inline styles (merged with defaults)
- `className`: Additional CSS classes

### Features
- **Non-interactive**: Labels cannot be selected or clicked
- **Flexible sizing**: Supports width, height, and aspect ratio
- **Style override**: Custom styles can be passed via `style` prop
- **Responsive**: Adapts to parent container

---

## Files Updated

1. ✅ **Created**: `/components/PlaceholderImage.tsx`
2. ✅ **Updated**: `/components/AboutOverview.tsx`
   - Imported `PlaceholderImage`
   - Replaced Unsplash image with `QuickSecure-About-1`
3. ✅ **Updated**: `/components/ResourcesOverview.tsx`
   - Imported `PlaceholderImage`
   - Replaced featured blog image
   - Replaced all 6 blog article thumbnails
4. ✅ **Updated**: `/components/ProductPages.tsx`
   - Imported `PlaceholderImage`
   - Updated `FeatureSection` to use placeholders
   - Updated `StorySection` to use placeholders
   - Dynamically generates placeholder names from product names

---

## Total Placeholders

- **About**: 1 placeholder
- **Resources**: 7 placeholders (1 featured + 6 articles)
- **Products**: 24 placeholders (12 products × 2 images each)
- **Total**: **32 placeholders** across the site

---

## QA Checklist

- [x] Placeholder component created with correct styling
- [x] All text labels use 16px, Medium weight, 60% opacity
- [x] Text color uses `var(--qs-text-muted)`
- [x] Background color is `#E5E7EB`
- [x] Border radius is 8px by default
- [x] Labels are centered both vertically and horizontally
- [x] Labels are non-interactive (no hover, click, or select)
- [x] Consistent naming convention across all pages
- [x] Sequential numbering within sections
- [x] Product pages generate unique names dynamically
- [x] All placeholder frames retain their size and shape
- [x] Responsive behavior maintained

---

## Future Upload Process

When uploading images to replace placeholders:

1. **Identify**: Use the placeholder name to know which slot to fill
2. **Match specs**: 
   - Product Feature images: 1920×1080px (16:9)
   - Product Story images: 4:3 ratio recommended
   - Blog featured: Flexible (min-height 400px)
   - Blog articles: 400×250px recommended
   - About: 800px width minimum (16:9)
3. **Replace**: Upload image and update the component to use actual image instead of placeholder

---

## Notes

- Placeholder system provides clear visual hierarchy during development
- Naming convention makes it easy to identify which content slot each placeholder represents
- System is extensible: new pages can use the same `PlaceholderImage` component
- User-facing labels help content teams know exactly what to upload where
- All placeholders follow QS design token standards for consistency
