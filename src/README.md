# QuickSecure Web UI v2

**✅ LIVE PREVIEW MODE — DEFAULT VIEW (Jan 2025)**

🎬 **App opens in Live Preview** — Clean production canvas without design system frames.  
📐 **Design System access**: Click "DS" button (bottom-right) or press `⌘P` / `Ctrl+P` to toggle.  
✨ **Fluid Typography** — CSS clamp() for smooth responsive scaling across all viewports.  
🎨 **QS Spacing Tokens** — Semantic spacing system (--qs-space-2 through --qs-space-24).  
🏠 **Logo Navigation** — Click QuickSecure logo to return home (no "Home" nav item).  
📋 **Dropdown Navigation** — Hover to open, 150ms delay, 4px overlap, 40×40px hit areas.

📖 **New to the project?** Start with [`QUICK_START.md`](./QUICK_START.md) (2 min read)

A comprehensive, production-ready design system for modern SaaS websites featuring clean UI components, responsive templates, and complete page implementations.

---

## 📦 Library Overview

**Library Name:** QuickSecure Web UI  
**Version:** 2.0.0  
**Published:** January 2025  
**Design Philosophy:** Modern minimal UI with micro animations only  
**Default View:** Live Preview (production canvas)  
**Accessibility:** WCAG 2.1 Level AA compliant  

---

## 🎨 Design System Contents

### 01 Foundations
- **Color System**: Teal primary (#006E6E), cyan secondary (#33D9D9), neutral grays
- **Typography**: Inter font family (400, 600, 700) with 6 type styles (Display → Small)
- **Spacing**: 8-point grid system (8px, 16px, 24px, 32px, 48px, 64px)
- **Motion Specifications**: Hover effects, scroll reveals, focus states
- **QA Checklist**: Complete compliance verification

### 02 Components
Reusable UI components including:
- Navigation (Desktop, Tablet, Mobile variants)
- Buttons (Primary, Secondary, Outline states)
- Cards (Feature, Testimonial, Article, Pricing)
- Forms (Input fields, textareas, contact forms)
- Modals & Overlays
- All components with hover and focus states

### 03 Templates
Responsive layout templates:
- Hero sections (multiple variants)
- Feature grids (2-column, 3-column)
- Testimonial sections
- CTA blocks
- FAQ accordions
- Footer layouts

### 04 Pages
Complete page implementations:
- Home
- Product (12 individual product pages)
- Solutions (Overview + 3 solution types)
- Resources (Overview with case studies, guides, articles)
- About (Overview — NEW: Mission, Team, Timeline, Values)
- Contact

All pages available in:
- Desktop (1440px)
- Tablet (1024px)
- Mobile (390px)

### 05 Assets
- Export specifications
- Component usage guidelines
- Comprehensive export notes

### Export Documentation
Print-ready PDF documentation:
- **Style Sheet**: Color system, typography, spacing, grid
- **Motion Specs**: Animation tokens with CSS equivalents
- **Handoff Notes**: Complete engineering specifications

---

## 🎯 Key Features

### Responsive Design
- **Desktop**: 1440px (12-column grid)
- **Tablet**: 1024px (8-column grid, dropdown nav)
- **Tablet Small**: 768px (2-column layouts)
- **Mobile Large**: 480px (1-column layouts)
- **Mobile**: 390px (hamburger menu)

### Motion System (Global Prototype Settings)
- **Page Transitions**: Smart Animate 300ms ease-in-out
- **Hover Effects**: Buttons lift 4px with shadow-2, 150ms ease-out
- **Link Hover**: Underline with accent color (#33D9D9), 150ms ease-out
- **Scroll Reveals**: Fade-up 400ms with 150ms stagger delays
- **Focus States**: 2px solid #33D9D9 ring with 2px offset
- **Accessibility**: Full prefers-reduced-motion support
- **Consistency**: Same header/footer across all pages for Smart Animate

### Accessibility
- ✅ WCAG AA contrast ratios (4.5:1 minimum)
- ✅ Keyboard navigation with visible focus states
- ✅ Semantic HTML structure
- ✅ Screen reader tested
- ✅ 44×44px minimum touch targets
- ✅ Skip navigation links

### Design Tokens
- **Colors**: 6 locked color variables
- **Spacing**: 8-pt grid (6 token scales)
- **Typography**: 6 text styles (Display, H1-H3, Body, Small)
- **Motion**: 4 animation timing tokens

---

## 📐 Grid System (Responsive)

| Breakpoint     | Max Width | Columns | Gutter | Margin |
|---------------|-----------|---------|--------|--------|
| Desktop       | 1440px    | 12      | 24px   | 80px   |
| Tablet        | 1024px    | 8       | 24px   | 56px   |
| Mobile        | 768px     | 4       | 16px   | 24px   |
| Small Mobile  | 480px     | 4       | 16px   | 16px   |

### Vertical Rhythm
- **Base Grid**: 8px
- **Section Spacing**: 96px (desktop) → 64px (tablet) → 48px/32px (mobile)
- **Hero Spacing**: 160px (desktop) → 120px (tablet) → 96px/80px (mobile)
- **Line Heights**: Snap to multiples of 8px for consistent rhythm

---

## 🎨 Color Palette

| Token          | Value   | Usage                          |
|---------------|---------|--------------------------------|
| Primary       | #006E6E | Brand color, CTAs, links       |
| Secondary     | #33D9D9 | Accents, focus states         |
| Neutral Dark  | #1E1E1E | Headings, body text           |
| Neutral Mid   | #4A4A4A | Secondary text                |
| Neutral Light | #F7F9FA | Backgrounds, surface colors   |
| White         | #FFFFFF | Cards, panels                 |

---

## 📝 Typography System (Fluid Responsive)

**✅ NEW:** Fully responsive typography that scales across all breakpoints with 8px vertical rhythm

### Desktop Typography (1440px)

| Style        | Size  | Font             | Weight  | Line Height | Use Case              |
|--------------|-------|------------------|---------|-------------|-----------------------|
| Display / H1 | 64px  | Emilio Light     | 300     | 80px        | Hero headlines        |
| H2           | 48px  | Emilio Light     | 300     | 64px        | Page titles           |
| H3           | 32px  | Emilio Light     | 300     | 44px        | Section headers       |
| Body Large   | 18px  | Inter Regular    | 400     | 32px        | Hero subheads, intro  |
| Body Medium  | 16px  | Inter Regular    | 400     | 28px        | Paragraph text        |
| Body Small   | 14px  | Inter Regular    | 400     | 24px        | Captions, labels      |
| Nav Item     | 16px  | Inter Medium     | 500     | 24px        | Navigation, buttons   |

### Tablet Typography (1024px)

| Style        | Size  | Line Height |
|--------------|-------|-------------|
| Display / H1 | 48px  | 64px        |
| H2           | 36px  | 52px        |
| H3           | 28px  | 40px        |
| Body Large   | 16px  | 28px        |
| Body Medium  | 15px  | 26px        |

### Mobile Typography (≤768px)

| Style        | Size  | Line Height |
|--------------|-------|-------------|
| Display / H1 | 32px  | 44px        |
| H2           | 24px  | 36px        |
| H3           | 20px  | 32px        |
| Body Large   | 15px  | 26px        |
| Body Medium  | 14px  | 24px        |

### QS Typography Tokens

```css
/* Semantic font tokens */
--qs-font-display: 'Emilio Light', serif; /* Local @font-face */
--qs-font-body: 'Inter', sans-serif;      /* Local @font-face */

/* Font weight tokens */
--qs-font-weight-light: 300;
--qs-font-weight-regular: 400;
--qs-font-weight-medium: 500;
```

### Component Typography Mapping

| Component Type      | Typography Style | QS Tokens                      |
|---------------------|------------------|--------------------------------|
| Headers/Navbars     | Nav Item         | `--qs-font-body` + `medium`   |
| Hero Main Line      | Display / H1     | `--qs-font-display` + `light` |
| Hero Subheadline    | Body Large       | `--qs-font-body` + `regular`  |
| Card Titles         | H3               | `--qs-font-display` + `light` |
| Card Body           | Body Medium      | `--qs-font-body` + `regular`  |
| Buttons             | Nav Item         | `--qs-font-body` + `medium`   |
| Modal Titles        | H3               | `--qs-font-display` + `light` |
| Modal Body          | Body Small       | `--qs-font-body` + `regular`  |
| Form Labels         | Body Small       | `--qs-font-body` + `regular`  |

**Font Families:**  
- **Display**: Emilio Light (serif) - Local @font-face (`/fonts/Emilio-Light.woff2`)  
- **Body**: Inter Variable - Local @font-face (`/fonts/Inter-Variable.woff2`)  

**See:** `TYPOGRAPHY_BRAND_FONTS.md` and `QS_TYPOGRAPHY_TOKENS.md` for complete documentation

---

## 🚀 Animation Tokens (Global Prototype Settings)

### Page Transitions (Smart Animate)
```css
.page-transition {
  transition: opacity 300ms ease-in-out, transform 300ms ease-in-out;
}
```

### Button Hover (Lift 4px + Shadow-2)
```css
.hover-lift {
  transition: transform 150ms ease-out, box-shadow 150ms ease-out;
}
.hover-lift:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.08);
}
```

### Link Hover (Accent Underline)
```css
a::after {
  background-color: #33D9D9;
  transition: width 150ms ease-out;
}
a:hover::after {
  width: 100%;
}
```

### Scroll Reveal (Staggered 150ms)
```css
.fade-up-on-scroll { /* 400ms fade + translateY */ }
.fade-up-on-scroll.delay-150 { transition-delay: 150ms; }
.fade-up-on-scroll.delay-300 { transition-delay: 300ms; }
.fade-up-on-scroll.delay-450 { transition-delay: 450ms; }
```

### Focus State
```css
outline: 2px solid #33D9D9;
outline-offset: 2px;
transition: outline 150ms ease;
```

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  /* All transform animations disabled */
  /* Opacity fades only */
}
```

---

## 📦 Export Documentation

### Available PDFs (Print from Export Docs tab)

1. **QuickSecure_StyleSheet_v1.pdf**
   - Complete color, typography, spacing specifications
   - Visual samples and code references

2. **QuickSecure_MotionSpecs_v1.pdf**
   - Animation tokens with CSS equivalents
   - Timing reference table
   - Accessibility considerations

3. **QuickSecure_HandoffNotes_v1.pdf**
   - Figma variables (Color, Spacing, Type)
   - Responsive breakpoints with media queries
   - Font import instructions
   - WCAG AA compliance specifications
   - Keyboard navigation requirements

---

## 🔒 Locked Base Styles

The following foundational styles are **locked** and should only be modified by the design system team:

- Color tokens (6 core colors)
- Typography scale (6 text styles)
- Spacing system (8-pt grid)
- Motion timing functions
- Grid specifications

See `LOCKED_BASE_STYLES.md` for complete documentation.

---

## 📋 Quality Assurance

### QA Checklist ✅
- ✅ All colors from tokens
- ✅ All text styles from Type System
- ✅ Consistent spacing 8-pt grid
- ✅ Motion within spec (no heavy animations)
- ✅ Responsive variants exist
- ✅ Nav sticky working
- ✅ Focus states visible
- ✅ No rogue layers or fonts

See `QA_Verification_Guide.md` for complete testing procedures.

---

## 📚 Documentation Files

### Core Documentation
- `QUICK_START.md` - **NEW:** ⚡ 30-second quick start guide (START HERE!)
- `HEADER_UPDATE_SUMMARY.md` - **NEW:** 🏠 Header navigation update (logo clickable, no "Home" link)
- `HEADER_DROPDOWN_UPDATE.md` - **NEW:** 📋 Dropdown hover behavior (150ms delay, 4px overlap)
- `NAVIGATION_SPACING_UPDATE.md` - **NEW:** 📐 Navigation spacing & mega menu specifications
- `NAV_SPACING_QUICK_REF.md` - **NEW:** ⚡ Quick reference for nav spacing specs
- `DROPDOWN_BEHAVIOR_DIAGRAM.md` - **NEW:** 📊 Visual diagrams & state machine documentation
- `DROPDOWN_QUICK_REFERENCE.md` - **NEW:** ⚡ Quick reference card for developers
- `CURRENT_STATE.md` - **NEW:** 📊 Current system state & configuration
- `VIEWING_MODES.md` - **NEW:** 🎬 Visual guide to Live Preview + Design System modes
- `LIVE_PREVIEW_MODE.md` - **NEW:** 📖 Complete Live Preview mode guide
- `LIVE_PREVIEW_SUMMARY.md` - **NEW:** ⚡ Implementation summary
- `QS_SPACING_TOKENS_COMPLETE.md` - ✅ QS spacing tokens + clamp() fluid typography
- `CLAMP_TYPOGRAPHY_IMPLEMENTATION.md` - 📐 How CSS clamp() works + implementation guide
- `QS_SPACING_QUICK_REFERENCE.md` - ⚡ Quick reference for spacing utilities
- `FLUID_TYPOGRAPHY_IMPLEMENTATION_COMPLETE.md` - ✅ Responsive typography implementation summary
- `FLUID_TYPOGRAPHY_SYSTEM.md` - ✅ Complete responsive typography guide
- `RESPONSIVE_TYPOGRAPHY_QUICK_REFERENCE.md` - ⚡ Typography quick reference card
- `IMPLEMENTATION_COMPLETE.md` - ✅ Production mode implementation summary
- `PRODUCTION_MODE_QUICK_START.md` - **NEW:** ⚡ Quick start guide (read this first!)
- `PRODUCTION_MODE_LOCKED.md` - **NEW:** ✅ Complete production view & font setup
- `FONT_VERIFICATION_TEST.html` - **NEW:** Standalone font test page
- `PROJECT_STRUCTURE.md` - Complete file organization
- `LOCKED_BASE_STYLES.md` - Protected design tokens
- `DESIGN_SYSTEM_ORGANIZATION.md` - Component hierarchy
- `QA_Verification_Guide.md` - Testing procedures
- `QA_Implementation_Summary.md` - Implementation status
- `Design_System_QA_Status.md` - QA completion tracking
- `Attributions.md` - Third-party resources

### Typography Documentation (QS Tokens v2.0) ✅
- `QS_TYPOGRAPHY_INDEX.md` - **START HERE:** Navigation guide for all typography docs
- `QS_TYPOGRAPHY_1440PX_VERIFICATION.md` - **NEW:** ✅ 1440px desktop preview verification
- `QS_TOKENS_QUICK_REFERENCE.md` - **NEW:** Quick reference card (print-friendly)
- `TYPOGRAPHY_BRAND_FONTS.md` - **UPDATED:** Complete typography guide with QS tokens
- `QS_TYPOGRAPHY_TOKENS.md` - **NEW:** QS tokens architecture & usage guide
- `QS_TOKENS_IMPLEMENTATION_SUMMARY.md` - **NEW:** Implementation summary
- `QS_TYPOGRAPHY_VERIFICATION.md` - **NEW:** Templates & Pages verification report
- `QS_TYPOGRAPHY_RELINK_COMPLETE.md` - **NEW:** ✅ Re-linking completion summary

### Global Standards
- `guidelines/GlobalPrototypeSettings.md` - Animation & interaction specifications
- `guidelines/GlobalDesignStandards.md` - Global spacing & animation utilities
- `guidelines/DynamicElements.md` - Site-wide dynamic elements (parallax, floating icons, reveals, gradients)

---

## 🛠️ Technical Specifications

### Framework
- **React** with TypeScript
- **Tailwind CSS v4.0** (modern CSS variables)
- **Shadcn/ui** components

### Browser Support
- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

### Performance
- Lightweight animations (micro interactions only)
- Optimized font loading (Local WOFF2 files with `display=swap`)
- Semantic HTML for better SEO
- Accessibility-first approach

### Font Setup Required
To enable Emilio Light and Inter Variable fonts:
1. Place `Emilio-Light.woff2` in `/fonts/` directory
2. Place `Inter-Variable.woff2` in `/fonts/` directory
3. See `PRODUCTION_MODE_LOCKED.md` for complete setup instructions

---

## 🎓 Usage Guidelines

### For Designers
1. Navigate through 01-05 sections to explore the design system
2. Use locked base styles for consistency
3. Reference QA Checklist before delivery
4. Export documentation for developer handoff

### For Developers
1. Review **Export Docs** tab for complete specifications
2. Print PDFs for reference documentation
3. Implement responsive breakpoints as specified
4. Respect motion preferences (prefers-reduced-motion)
5. Maintain WCAG AA compliance standards

---

## 📄 License

QuickSecure Design System © 2025  
All rights reserved.

---

## 📞 Support

For questions or feedback about the design system:
- Design Team: design@quicksecure.com
- Developer Support: dev@quicksecure.com

---

**Built with ❤️ by the QuickSecure Design Team**  
*Modern minimal UI with micro animations only*

---

## 🎉 Version History

### v2.0.0 (January 2025) - QS Typography Tokens ✅ COMPLETE
- ✅ **QS Typography Tokens** - Semantic font system with 5 design tokens
- ✅ **Templates Re-linked** - All inline styles replaced with QS classes
- ✅ **Pages Re-linked** - All 20+ pages use QS Typography
- ✅ **Component Typography Mapping** - Standardized typography for 9 component types
- ✅ **Hero Headlines Verified** - Emilio Light 64px / 80px / -1.92px rendering
- ✅ **Body Text Verified** - Inter Regular/Medium rendering across all pages
- ✅ **Navigation Verified** - Inter Medium 16px for all nav/buttons
- ✅ **Documentation Complete** - 6 comprehensive guides (visual + written)
- ✅ **Browser Tested** - Chrome, Firefox, Safari, Edge verified
- ✅ **WCAG AA Compliant** - Proper semantic structure maintained

### v1.0.0 (October 2025) - Initial Release
- Complete design system with 5 main sections
- Desktop, Tablet, and Mobile responsive variants
- 7 complete page implementations
- Comprehensive component library
- Print-ready PDF documentation
- WCAG AA accessibility compliance
- Motion system with reduced motion support

**Status:** ✅ Ready for Development Build (v2.0 - QS Tokens Active)
