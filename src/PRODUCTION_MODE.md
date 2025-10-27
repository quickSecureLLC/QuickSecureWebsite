# Production Mode - QuickSecure Website

## Overview
The QuickSecure Web UI now supports a **Production Mode** that displays a clean, production-ready website layout without any design system scaffolding.

## Features

### Production Mode
When enabled, Production Mode provides:
- ✅ **Clean Layout**: Removes all design system UI elements
- ✅ **No Scaffolding**: Hides build banners, viewport toggles, tabs, and navigation
- ✅ **Full-Width Responsive**: Website adapts to browser viewport (not fixed to 1440/1024/390px)
- ✅ **QuickSecure Navbar Only**: Shows only the main website navigation
- ✅ **All Interactions Work**: Product overlays, contact reveal, and hover effects remain functional
- ✅ **Easy Toggle**: Floating "Design System" button to return to design system view

### Design System Mode
The default mode that includes:
- Build status banner
- Design system header with library information
- Tab navigation (Foundations, Components, Templates, Pages, Assets, Export)
- Viewport switcher (Desktop 1440 / Tablet 1024 / Mobile 390)
- Grid overlay controls
- "Production View" button for quick access to production mode

## How to Use

### Switching to Production Mode
1. Navigate to the **"00 Live Website"** tab
2. Click the **"Production View"** button in the top-right header
3. The interface instantly switches to clean production layout

### Returning to Design System Mode
1. Click the floating **"Design System"** button in the bottom-right corner
2. You'll return to the full design system view with all tabs and controls

## Technical Implementation

### App.tsx Changes
- Added `isProductionMode` state to toggle between modes
- Production mode renders minimal UI with only the website content
- Design system mode renders full scaffolding with tabs and controls
- Smooth transitions between modes

### LiveWebsite.tsx Changes
- Accepts `isProductionMode` prop to control viewport behavior
- Hides viewport switcher when `isProductionMode={true}`
- Switches from fixed viewport width to full-width (`100%`) in production mode
- All existing functionality (overlays, animations, navigation) preserved

## Responsive Behavior

### Production Mode
- Adapts to actual browser viewport
- No artificial constraints (true responsive)
- Grid system (12 cols, 24px gutter, 80px margins) still applied but hidden
- Perfect for presenting to stakeholders or clients

### Design System Mode
- Fixed viewport widths for precise design review
- Desktop: 1440px
- Tablet: 1024px
- Mobile: 390px
- Grid overlay visible and controllable

## Benefits

1. **Client Presentations**: Show clean website without dev UI
2. **Stakeholder Reviews**: Professional appearance without distractions
3. **Responsive Testing**: Test on actual viewport sizes
4. **Design QA**: Easy switching between production and design system views
5. **Documentation**: Maintains full design system access when needed

## Notes

- Production mode does NOT affect the underlying code or components
- All 12 product overlays work in both modes
- Contact section reveal works in both modes
- Footer and all templates render identically
- Only the surrounding UI scaffolding changes

---

**Version**: 1.0.0  
**Published**: October 2025  
**Status**: ✅ Ready for Production
