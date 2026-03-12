# QuickSecure Brand Guide — Design Tokens & Patterns

Single source of truth for the marketing site's visual system.

---

## Color Tokens

| Token | Hex | CSS Variable | Tailwind Class | Usage |
|---|---|---|---|---|
| navy | `#070B16` | `--color-navy` | `bg-navy`, `text-navy` | Primary brand navy. Footer bg, button text, logo dark mode |
| yellow | `#D7D128` | `--color-yellow` | `bg-yellow` | Primary CTA button background, text selection highlight |
| blue | `#2E75D4` | `--color-blue` | `text-blue` | Accent links (CTALink muted variant, stub page links) |
| surface | `#1A1F2E` | `--color-surface` | `bg-surface`, `border-surface` | Page background, section backgrounds, card borders |
| surface-raised | `#10182E` | `--color-surface-raised` | `bg-surface-raised` | Card backgrounds (LottieCard), sits above surface |
| white | `#FFFFFF` | `--color-white` | `text-white`, `bg-white` | Body text, headings, borders via `white/XX` opacity |

### Rules
- **Never use raw hex in components.** Always reference tokens via Tailwind classes.
- White with opacity: use `text-white/70`, `border-white/10`, etc.
- Selection highlight: yellow bg + navy text (set in `@layer base`).

---

## Typography

| Property | Value |
|---|---|
| Primary font | `Satoshi` (variable, 100-900) via `--font-primary` |
| Mono font | `GT Standard Mono` (500) via `--font-mono` |
| Heading weight | `400` (set in `@layer base`) |
| Heading line-height | `leading-[0.9]` (tight) |

### White Text Opacity Scale
| Opacity | Usage |
|---|---|
| `text-white` (100%) | Headings, primary body text |
| `text-white/70` | Hero subtext, secondary descriptions |
| `text-white/60` | Section subheadings, footer column titles, security descriptions |
| `text-white/50` | Card descriptions, section subtitle lines |

---

## Border System

| Pattern | Value | Usage |
|---|---|---|
| Card border | `border border-surface` | LottieCard outer border |
| Decorative border | `border border-white/10` | Use case cards, security card |
| Divider | `divide-white/20` | Security features list |
| Hero image border | `md:border-t md:border-b md:border-l border-white/10` | Hero screenshot |

### Border Radius
| Tailwind | Pixels | Usage |
|---|---|---|
| `rounded-lg` | 8px | LottieCard |
| `rounded-xl` | 12px | Use case images, security card, hero image (left side) |
| `rounded-full` | pill | Buttons, nav links |

---

## Hover States

| Context | Class |
|---|---|
| Buttons & nav CTAs | `hover:opacity-60` |
| Text links (footer, etc.) | `hover:opacity-70` |

---

## Spacing Patterns

### Container Gutter
```
px-5 sm:px-12 md:px-30
```
Used in `Container.tsx`, `Header.tsx`. Footer uses `px-8 sm:px-16 md:px-30`.

### Section Vertical Padding (standard)
```
py-20 sm:py-24 md:py-28
```
Used in UseCases, ProductShowcase. Equals 80px / 96px / 112px.

### Section Gap Pattern
| Scale | Tailwind | Pixels | Common Uses |
|---|---|---|---|
| xs | `gap-1.5` | 6px | Heading + subtitle pairs |
| sm | `gap-2` | 8px | List items, footer links |
| md | `gap-3` | 12px | Heading + description inside cards |
| base | `gap-4` | 16px | Nav links, grid gaps, section header to content |
| lg | `gap-5` | 20px | Card internal spacing, CTA groups |
| xl | `gap-6` | 24px | Hero content blocks |

### Card Grid Gaps
```
gap-4
```
Standard for all card grids (FeatureGrid, ProductShowcase).

---

## Component Quick Reference

| Component | Key Classes |
|---|---|
| `Button` primary | `bg-yellow text-navy rounded-full hover:opacity-60` |
| `Button` outline | `border border-white/20 text-white bg-transparent rounded-full hover:opacity-60` |
| `CTALink` muted | `text-blue hover:opacity-60` |
| `CTALink` light | `text-white hover:opacity-70` |
| `LottieCard` | `rounded-lg border border-surface bg-surface-raised` |
| Footer | `bg-navy` |
| Header | `bg-surface` |
