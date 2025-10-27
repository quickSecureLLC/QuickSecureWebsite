# QS/Footer - Quick Reference

**Component:** QS/Footer  
**Version:** 1.0.0  
**Status:** ✅ Published  

---

## Import

```tsx
import { Footer } from './components/qs/Footer';
// or
import { Footer } from './components/qs';
```

---

## Usage

```tsx
<Footer />
<Footer className="custom-class" />
```

---

## Sections

| Section | Content |
|---------|---------|
| **Brand** | Logo, tagline, social media (LinkedIn, Twitter, Facebook, Instagram) |
| **Products** | QuickSecure Nexus, Drill Management, Panic Button, Visitor Management |
| **Company** | About Us, Careers, Press, Contact |
| **Contact** | Email, Phone, Address |
| **Legal** | Copyright, Privacy Policy, Terms of Service, Cookies |

---

## QS Tokens

### Spacing (8px grid):
```css
--qs-space-2: 8px     /* Icon gaps */
--qs-space-3: 12px    /* Social icons */
--qs-space-4: 16px    /* Section margins */
--qs-space-6: 24px    /* Legal links */
--qs-space-8: 32px    /* Grid (tablet) */
--qs-space-16: 64px   /* Grid (desktop) */
--qs-space-20: 80px   /* Horizontal padding */
```

### Colors:
```css
--qs-primary: #006E6E   /* Logo background */
--qs-accent: #33D9D9    /* Hover states */
Background: #1E1E1E     /* Dark footer */
Text: #E0E0E0          /* Links, body */
Headings: #FFFFFF      /* Section titles */
```

### Typography:
```css
--qs-font-body: 'Inter'
--qs-font-weight-regular: 400   /* Body */
--qs-font-weight-semibold: 600  /* Headings */
--qs-font-weight-bold: 700      /* Brand */
.qs-text-body-small             /* All links */
```

---

## Responsive

| Breakpoint | Layout | Padding |
|------------|--------|---------|
| Desktop (≥769px) | 4 columns | 64px/80px/32px |
| Tablet (≤768px) | 2 columns | 48px/40px/24px |
| Mobile (≤480px) | 1 column | 32px/24px/16px |

---

## Interactions

- **Links:** Teal hover (#33D9D9), 150ms transition
- **Social:** Lift 2px + teal background on hover
- **No underlines:** Uses `.no-underline-hover`

---

## Accessibility

✅ Semantic `<footer>`  
✅ ARIA labels on social icons  
✅ Keyboard navigation  
✅ WCAG AAA contrast  

---

## File Location

```
/components/qs/Footer.tsx
```

---

## Published

**Date:** October 25, 2025  
**Library:** QuickSecure Web UI v1  
**Documentation:** `/QS_FOOTER_PUBLISHED.md`
