# QuickSecure Icon Library

**Version:** 1.2.0  
**Last Updated:** October 26, 2025  
**Status:** ✅ Active

---

## Overview

The QuickSecure Icon Library provides a consistent set of product and feature icons used throughout the QuickSecure web application. All icons follow a unified design system with standardized sizing, colors, and styling.

---

## Icon Specifications

### Design Standards

| Property | Value |
|----------|-------|
| **Size** | 48×48 px |
| **ViewBox** | 0 0 100 100 |
| **Color** | `var(--qs-brand-accent)` (#33D9D9) |
| **Fill** | Solid fill (no stroke) |
| **Format** | React SVG components |

### Color Token

All icons use the QuickSecure brand accent color token:
```css
--qs-brand-accent: #33D9D9;
```

This ensures:
- ✅ Consistent branding across all icons
- ✅ Easy theme customization
- ✅ Automatic color updates via design tokens

---

## Available Icons

### Batch 1: Core Product Icons

| Icon | Component | Product | Usage |
|------|-----------|---------|-------|
| 📅 Calendar | `DrillManagementIcon` | Drill Management | Emergency drill scheduling and management |
| ⚠️ Alert Triangle | `PanicButtonIcon` | Panic App | Emergency alert and panic button system |
| 🆔 ID Badge | `VisitorManagementIcon` | Visitor Management | Visitor check-in and badge management |

### Batch 2: Security & Communication Icons

| Icon | Component | Product | Usage |
|------|-----------|---------|-------|
| 🔒 Lock | `RetrofitLockIcon` | Retrofit Locks | Smart lock retrofit and access control |
| 📢 Megaphone | `MassNotificationsIcon` | Mass Notifications | Emergency broadcast and mass alert system |
| 🔗 Network | `NexusSystemIcon` | Nexus Platform | Integrated security platform and hub |

### Batch 3: Advanced Feature Icons

| Icon | Component | Product | Usage |
|------|-----------|---------|-------|
| 🔐 Secure Chat | `AnonymousTipLineIcon` | Anonymous Tip Line | Secure anonymous reporting and tip submission |
| 🎯 Target | `GunshotDetectionIcon` | Gunshot Detection | AI-powered gunshot detection and alert system |
| 🎫 Ticket | `TicketingSystemIcon` | Ticketing System | Issue tracking and support ticket management |

---

## Usage

### Basic Import

```tsx
import {
  // Batch 1
  DrillManagementIcon,
  PanicButtonIcon,
  VisitorManagementIcon,
  
  // Batch 2
  RetrofitLockIcon,
  MassNotificationsIcon,
  NexusSystemIcon,
  
  // Batch 3
  AnonymousTipLineIcon,
  GunshotDetectionIcon,
  TicketingSystemIcon
} from './icons';

function MyComponent() {
  return (
    <div>
      {/* Batch 1 */}
      <DrillManagementIcon />
      <PanicButtonIcon />
      <VisitorManagementIcon />
      
      {/* Batch 2 */}
      <RetrofitLockIcon />
      <MassNotificationsIcon />
      <NexusSystemIcon />
      
      {/* Batch 3 */}
      <AnonymousTipLineIcon />
      <GunshotDetectionIcon />
      <TicketingSystemIcon />
    </div>
  );
}
```

### With Custom Styling

Icons inherit their color from the CSS variable, but you can override:

```tsx
<div style={{ color: 'var(--qs-brand-primary)' }}>
  <DrillManagementIcon />
</div>
```

### Responsive Sizing

Icons are fixed at 48×48 px but can be wrapped for responsive scaling:

```tsx
<div style={{ width: '64px', height: '64px' }}>
  <DrillManagementIcon />
</div>
```

---

## Icon Details

### Drill Management Icon
**Component:** `DrillManagementIcon`  
**File:** `/icons/drill-management.tsx`  
**Product:** Drill Management System  
**Symbol:** Calendar/schedule icon  

**Visual:** Calendar grid with highlighted dates representing scheduled emergency drills.

**Usage Context:**
- Product overview cards
- Feature highlights
- Navigation elements
- Product detail pages

---

### Panic Button Icon
**Component:** `PanicButtonIcon`  
**File:** `/icons/panic-button.tsx`  
**Product:** Panic App  
**Symbol:** Alert triangle with exclamation mark  

**Visual:** Warning triangle symbolizing emergency alerts and critical notifications.

**Usage Context:**
- Emergency feature highlights
- Alert system indicators
- Critical notification badges
- Product overview cards

---

### Visitor Management Icon
**Component:** `VisitorManagementIcon`  
**File:** `/icons/visitor-management.tsx`  
**Product:** Visitor Management System  
**Symbol:** ID badge/credential  

**Visual:** ID badge with photo area and information fields representing visitor credentials.

**Usage Context:**
- Access control features
- Visitor system highlights
- Check-in process indicators
- Security feature cards

---

### Retrofit Lock Icon
**Component:** `RetrofitLockIcon`  
**File:** `/icons/retrofit-lock.tsx`  
**Product:** Retrofit Lock System  
**Symbol:** Padlock with keyhole  

**Visual:** Traditional padlock shape with shackle and keyhole, representing physical security.

**Usage Context:**
- Access control features
- Lock management systems
- Security hardware displays
- Physical security cards

---

### Mass Notifications Icon
**Component:** `MassNotificationsIcon`  
**File:** `/icons/mass-notifications.tsx`  
**Product:** Mass Notification System  
**Symbol:** Megaphone/loudspeaker  

**Visual:** Megaphone broadcasting symbol, representing emergency communications and alerts.

**Usage Context:**
- Emergency broadcast features
- Communication system highlights
- Alert distribution indicators
- Notification feature cards

---

### Nexus System Icon
**Component:** `NexusSystemIcon`  
**File:** `/icons/nexus-system.tsx`  
**Product:** Nexus Central Platform  
**Symbol:** Network hub/interconnected nodes  

**Visual:** Network diagram with central hub and connected nodes, representing integrated systems.

**Usage Context:**
- Platform integration features
- System architecture displays
- Central hub indicators
- Unified platform cards

---

### Anonymous Tip Line Icon
**Component:** `AnonymousTipLineIcon`  
**File:** `/icons/anonymous-tip-line.tsx`  
**Product:** Anonymous Tip Line System  
**Symbol:** Shield with secure chat bubble  

**Visual:** Security shield combined with chat/message bubble, representing secure anonymous communications.

**Usage Context:**
- Anonymous reporting features
- Secure messaging systems
- Tip line interfaces
- Privacy-focused communication tools

---

### Gunshot Detection Icon
**Component:** `GunshotDetectionIcon`  
**File:** `/icons/gunshot-detection.tsx`  
**Product:** Gunshot Detection System  
**Symbol:** Target/crosshair with detection rings  

**Visual:** Targeting crosshair with concentric detection rings, representing AI-powered threat detection.

**Usage Context:**
- Gunshot detection features
- Threat monitoring displays
- Security alert systems
- AI detection indicators

---

### Ticketing System Icon
**Component:** `TicketingSystemIcon`  
**File:** `/icons/ticketing-system.tsx`  
**Product:** Ticketing System  
**Symbol:** Support ticket  

**Visual:** Traditional ticket shape with perforated edges, representing issue tracking and support.

**Usage Context:**
- Support ticket features
- Issue tracking displays
- Help desk systems
- Service request management

---

## Design System Integration

### Color Tokens Used

```css
/* Primary token used by all icons */
--qs-brand-accent: #33D9D9;
```

### Accessibility

- ✅ Icons use semantic SVG markup
- ✅ Color contrast ratio: 4.5:1+ against white backgrounds
- ✅ Can be used with `aria-label` for screen readers

**Example:**
```tsx
<div aria-label="Drill Management">
  <DrillManagementIcon />
</div>
```

---

## File Structure

```
/icons/
├── drill-management.tsx       # Batch 1: Drill Management icon
├── panic-button.tsx          # Batch 1: Panic Button icon
├── visitor-management.tsx    # Batch 1: Visitor Management icon
├── retrofit-lock.tsx         # Batch 2: Retrofit Lock icon
├── mass-notifications.tsx    # Batch 2: Mass Notifications icon
├── nexus-system.tsx          # Batch 2: Nexus System icon
├── anonymous-tip-line.tsx    # Batch 3: Anonymous Tip Line icon
├── gunshot-detection.tsx     # Batch 3: Gunshot Detection icon
├── ticketing-system.tsx      # Batch 3: Ticketing System icon
├── index.ts                  # Central export file
├── IconShowcase.tsx          # Demo/preview component
└── README.md                 # This documentation
```

---

## Adding New Icons

### Guidelines for New Icons

1. **Size:** All icons must be 48×48 px
2. **ViewBox:** Use `0 0 100 100` for consistency
3. **Color:** Use `var(--qs-brand-accent)` for fill
4. **Naming:** Use kebab-case for files, PascalCase for components
5. **Documentation:** Add icon details to this README

### Template

```tsx
/**
 * QuickSecure Icon - [Icon Name]
 * 48×48 px icon component
 * Uses brand accent color
 */

export function [IconName]Icon() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block' }}
    >
      <path
        d="[PATH DATA]"
        fill="var(--qs-brand-accent)"
      />
    </svg>
  );
}
```

### Export Steps

1. Create icon component in `/icons/[icon-name].tsx`
2. Add export to `/icons/index.ts`:
   ```tsx
   export { IconNameIcon } from './icon-name';
   ```
3. Document in this README
4. Test in design system preview

---

## Future Batches

### Planned Icons (Batch 4)

- 📡 Communication Hub Icon
- 🏫 Building Management Icon
- 📊 Analytics Dashboard Icon
- ⚙️ Settings/Configuration Icon
- 📹 Video Surveillance Icon

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| **1.2.0** | Oct 26, 2025 | Added Batch 3 with 3 advanced feature icons |
| **1.1.0** | Oct 26, 2025 | Added Batch 2 with 3 security & communication icons |
| **1.0.0** | Oct 26, 2025 | Initial release with 3 core product icons |

---

## Support

For questions or issues with the icon library:
1. Check this documentation
2. Review the QuickSecure Design System guidelines
3. Contact the design system team

---

**QuickSecure Icon Library**  
Part of QuickSecure Web UI v2.0  
© 2025 QuickSecure
