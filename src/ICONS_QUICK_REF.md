# QUICKSECURE ICONS - QUICK REFERENCE

**Version:** 1.2.0 | **Icons:** 9 | **Last Updated:** Oct 26, 2025

---

## AVAILABLE ICONS

### Batch 1: Core Products
| Icon | Component | Import |
|------|-----------|--------|
| 📅 | `DrillManagementIcon` | `import { DrillManagementIcon } from './icons'` |
| ⚠️ | `PanicButtonIcon` | `import { PanicButtonIcon } from './icons'` |
| 🆔 | `VisitorManagementIcon` | `import { VisitorManagementIcon } from './icons'` |

### Batch 2: Security & Communication
| Icon | Component | Import |
|------|-----------|--------|
| 🔒 | `RetrofitLockIcon` | `import { RetrofitLockIcon } from './icons'` |
| 📢 | `MassNotificationsIcon` | `import { MassNotificationsIcon } from './icons'` |
| 🔗 | `NexusSystemIcon` | `import { NexusSystemIcon } from './icons'` |

### Batch 3: Advanced Features
| Icon | Component | Import |
|------|-----------|--------|
| 🔐 | `AnonymousTipLineIcon` | `import { AnonymousTipLineIcon } from './icons'` |
| 🎯 | `GunshotDetectionIcon` | `import { GunshotDetectionIcon } from './icons'` |
| 🎫 | `TicketingSystemIcon` | `import { TicketingSystemIcon } from './icons'` |

---

## QUICK START

```tsx
// 1. Import
import {
  DrillManagementIcon,
  PanicButtonIcon,
  VisitorManagementIcon,
  RetrofitLockIcon,
  MassNotificationsIcon,
  NexusSystemIcon,
  AnonymousTipLineIcon,
  GunshotDetectionIcon,
  TicketingSystemIcon
} from './icons';

// 2. Use
<DrillManagementIcon />
<PanicButtonIcon />
<VisitorManagementIcon />
<RetrofitLockIcon />
<MassNotificationsIcon />
<NexusSystemIcon />
<AnonymousTipLineIcon />
<GunshotDetectionIcon />
<TicketingSystemIcon />
```

---

## SPECS

- **Size:** 48×48 px
- **Color:** `var(--qs-brand-accent)` (#33D9D9)
- **Format:** React SVG components

---

## COMMON PATTERNS

### Feature Card
```tsx
<div className="feature-card">
  <PanicButtonIcon />
  <h4>Instant Alerts</h4>
  <p>One-touch emergency notifications</p>
</div>
```

### Product Grid
```tsx
const products = [
  { icon: DrillManagementIcon, name: 'Drill Management' },
  { icon: PanicButtonIcon, name: 'Panic App' },
  { icon: VisitorManagementIcon, name: 'Visitor Management' },
  { icon: RetrofitLockIcon, name: 'Retrofit Locks' },
  { icon: MassNotificationsIcon, name: 'Mass Notifications' },
  { icon: NexusSystemIcon, name: 'Nexus Platform' },
  { icon: AnonymousTipLineIcon, name: 'Anonymous Tip Line' },
  { icon: GunshotDetectionIcon, name: 'Gunshot Detection' },
  { icon: TicketingSystemIcon, name: 'Ticketing System' }
];

{products.map(p => {
  const Icon = p.icon;
  return <Icon key={p.name} />;
})}
```

---

## FILES

**Batch 1:**
- `/icons/drill-management.tsx` - Drill Management icon
- `/icons/panic-button.tsx` - Panic Button icon
- `/icons/visitor-management.tsx` - Visitor Management icon

**Batch 2:**
- `/icons/retrofit-lock.tsx` - Retrofit Lock icon
- `/icons/mass-notifications.tsx` - Mass Notifications icon
- `/icons/nexus-system.tsx` - Nexus System icon

**Batch 3:**
- `/icons/anonymous-tip-line.tsx` - Anonymous Tip Line icon
- `/icons/gunshot-detection.tsx` - Gunshot Detection icon
- `/icons/ticketing-system.tsx` - Ticketing System icon

**System:**
- `/icons/index.ts` - Central exports
- `/icons/README.md` - Full documentation
- `/icons/IconShowcase.tsx` - Visual demo

---

## TIPS

✅ **DO:**
- Import from `/icons` index
- Use for product/feature highlights
- Wrap with `aria-label` for accessibility

❌ **DON'T:**
- Hard-code icon color
- Resize beyond 48×48 px
- Use for generic UI (use Lucide icons instead)

---

**Full Docs:** `/icons/README.md`  
**Demo:** `<IconShowcase />`
