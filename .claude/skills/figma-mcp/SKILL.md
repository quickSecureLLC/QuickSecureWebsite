---
name: figma-mcp
description: >-
  Comprehensive workflow for the Figma MCP server. Covers design-to-code
  implementation, Code Connect component mapping, FigJam and Make resource
  retrieval, sending live UI to Figma, URL parsing, and server setup. Use when
  the user mentions Figma MCP, asks to implement a Figma design, wants to
  connect Figma components to code, references figma.com URLs, says "get design
  context", "capture UI to Figma", "code connect", "design system rules", or
  asks about Figma MCP server configuration and setup.
---

# Figma MCP Workflow

Use the Figma MCP server tools to bridge Figma designs and your codebase. This skill encodes the recommended sequences, tool calls, and best practices from official Figma documentation.

## URL Parsing

Extract `fileKey` and `nodeId` from Figma URLs before calling any tool:

| URL Pattern | Extract |
|-------------|---------|
| `figma.com/design/:fileKey/:fileName?node-id=:nodeId` | Use `fileKey`; convert `-` to `:` in `nodeId` |
| `figma.com/design/:fileKey/branch/:branchKey/:fileName` | Use `branchKey` as `fileKey` |
| `figma.com/make/:makeFileKey/:makeFileName` | Use `makeFileKey` |
| `figma.com/board/:fileKey/:fileName` | FigJam file — use `get_figjam` |

## Design-to-Code Workflow

Follow these steps in order for every Figma-driven implementation:

### Step 1: Fetch design context

Call `get_design_context` with the extracted `fileKey` and `nodeId`. This returns structured code (React + Tailwind), a screenshot, and contextual hints.

If the response is truncated or too large, call `get_metadata` first to get the node map, then re-fetch only the specific node(s) needed.

### Step 2: Get visual reference

Call `get_screenshot` for the node variant being implemented. Use this screenshot as the ground truth for visual fidelity validation.

### Step 3: Adapt output to the project

The MCP output is a **reference**, not final code. Apply the project-specific translation rules below to adapt it.

### Step 4: Handle assets

- If the MCP server returns a localhost source for an image or SVG, use that source directly.
- Do NOT import new icon packages — all assets should come from the Figma payload.
- Do NOT create placeholders when a localhost source is provided.
- SVG icons are inlined directly (not from icon libraries).
- Use `currentColor` with `fill` or `stroke` for themeable SVGs.

Read `references/tools-reference.md` for complete tool descriptions and parameters.

### Step 5: Validate

Compare the final UI against the Figma screenshot for 1:1 visual and behavioral parity. When conflicts arise between design tokens and exact pixel values, prefer design-system tokens and adjust minimally.

---

## Project-Specific Translation Rules

These rules encode the conventions established in this codebase. Apply them to ALL Figma MCP output.

### Color Token Mapping

Map Figma hex values to the project's design tokens defined in `src/app/globals.css` via `@theme inline`. **Never leave raw hex values in output.**

| Figma Hex | Token | Tailwind Class |
|-----------|-------|---------------|
| #070B16 | `primary-red` / `dark` / `black` | `text-primary-red`, `bg-dark`, `text-black` |
| #10182E | `dark-navy` | `text-dark-navy`, `bg-dark-navy` |
| #2E75D4 | `accent-blue` | `text-accent-blue`, `bg-accent-blue` |
| #D7D128 | `brand-yellow` | `text-brand-yellow`, `bg-brand-yellow` |
| #6C757D | `pale-sky` | `text-pale-sky`, `bg-pale-sky` |
| #F1F3F5 | `light-gray` | `bg-light-gray`, `text-light-gray` |
| #1A1F2E | `page-bg` | `bg-page-bg` |
| #FDFDE5 | `amour` | `bg-amour`, `text-amour` |
| #FFFFFF | `white` | `text-white`, `bg-white` |

For opacity variants, use Tailwind's `/` syntax: `text-white/50`, `text-white/70`, `border-white/10`.

### Reusable Components — Use Instead of Regenerating

Before creating new elements, check if an existing component covers the need:

#### `Button` (`src/components/ui/Button.tsx`)
- Variants: `"primary"` (yellow bg `#D7D128`, navy text `#070B16`) | `"outline"` (border-white/20, transparent bg, white text)
- Sizes: `"sm"` | `"md"`
- Polymorphic: renders as `<a>` when `href` provided, `<button>` otherwise
- Style: `rounded-full`, `hover:opacity-60`
- Usage: `<Button href="/contact" size="md">Request demo</Button>`

#### `CTALink` (`src/components/ui/CTALink.tsx`)
- Variants: `"light"` (white) | `"dark"` | `"muted"` (blue)
- Sizes: `"sm"` | `"md"`
- Appends arrow (`→`) automatically
- Usage: `<CTALink href="/learn" variant="light" size="md">Learn more</CTALink>`

#### `Container` (`src/components/ui/Container.tsx`)
- Full-width, no max-width, responsive padding: `px-5 sm:px-12 md:px-30`
- Wrap ALL page sections in this for consistent layout
- Usage: `<Container><section>...</section></Container>`

#### `QuickSecureLogo` (`src/components/ui/QuickSecureLogo.tsx`)
- Colors: `"dark"` (#070B16 navy) | `"light"` (white, for dark backgrounds)
- Horizontal SVG logo with shield icon + wordmark
- Usage: `<QuickSecureLogo color="light" />`

### Typography Rules

Use explicit pixel values for all text sizing — **never Tailwind presets** like `text-xl` or `text-2xl`. Default text color is `text-white` (dark theme). All headings use `leading-[0.9]` and `font-weight: 400`.

- **H1**: `text-[28px] sm:text-[32px] lg:text-[36px] leading-[0.9] tracking-[-0.72px] text-white`
- **H2**: `text-[22px] sm:text-[24px] lg:text-[27px] leading-[0.9] tracking-[-0.54px] text-white`
- **H3/Card titles**: `text-[16px] leading-[24px] tracking-[0.16px] text-white`
- **Body**: `text-[15px] lg:text-[16px] leading-[24px] text-white/70`
- **Subtitles**: Same size as heading but `text-white/50`
- **Nav links**: `text-[14px] leading-[16.8px] text-white`

### Card Patterns

All cards follow this dark-theme convention:
```
rounded-[8px] border border-white/10 bg-white/5 overflow-hidden
```

Card images use:
```
<div className="relative aspect-[4/3]">
  <Image src={...} alt={...} fill className="object-cover" sizes="..." />
</div>
```

### Component Conventions

- **Imports**: Use path aliases — `@/components/...`, `@/lib/...`, `@/types/...`
- **Class merging**: Use `cn()` from `@/lib/utils` for all conditional/merged class names
- **Types**: Component-local types stay inline
- **Client vs Server**: Only add `"use client"` when component uses hooks or browser APIs. Section components are server components by default.
- **Data arrays**: Define nav links, feature lists, steps as `const` outside the component function
- **Images**: Always use `next/image` with proper `alt`, `width`/`height` or `fill` props
- **Hover states**: Use `hover:opacity-60` for buttons/links, not color changes
- **Borders**: Use `border border-white/10` as the standard border style

### File Placement

- New reusable primitives → `src/components/ui/`
- New page sections → `src/components/sections/`
- New layout components → `src/components/layout/`
### Responsive Design

- Mobile-first using breakpoints: `sm:` (768px), `md:` (1024px), `lg:` (1440px)
- Flex layouts switch: `flex-col lg:flex-row`
- Grid columns scale: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`
- Page is full-width (no max-width), layout controlled via `Container` padding

### Accessibility

- `aria-label` on interactive elements, `aria-expanded` on toggles
- `aria-hidden="true"` on decorative SVGs and icons
- Semantic HTML: `<header>`, `<nav>`, `<section>`, `<footer>`
- Named landmarks: `aria-label="Main navigation"`

---

## Code Connect Workflow

Code Connect maps Figma design components to codebase components, improving AI output quality.

1. Call `get_code_connect_map` to see existing component mappings.
2. Call `get_code_connect_suggestions` to discover unmapped components that could benefit from connection.
3. Use `add_code_connect_map` to create new mappings between Figma components and code files.
4. Use `send_code_connect_mappings` to push mappings back to Figma.

When Code Connect is configured, `get_design_context` returns production component references instead of raw generated code, improving consistency and token efficiency.

## FigJam Resources

For FigJam boards (`figma.com/board/...`), call `get_figjam` with the `fileKey`. This returns content from diagrams, flows, and architecture maps that can inform code generation.

## Make Resources

For Make files (`figma.com/make/...`), the MCP server indexes the underlying code. Fetch project context to:

- Reuse prototype code directly in production
- Reference design patterns and component logic
- Extend prototypes with real data

## Sending Live UI to Figma

Available with the remote MCP server in Claude Code and Codex only.

1. Prompt: "Start a local server for my app and capture the UI in a new Figma file."
2. Follow the steps provided — a browser window opens with a capture toolbar.
3. Capture pages, elements, and states of the web app.
4. Signal completion to receive a link to the created Figma file.

Use `generate_figma_design` to send rendered UI to Figma Design as editable layers.

## Design System Rules

Call `create_design_system_rules` to analyze the current codebase and generate project-specific rules for consistent Figma-to-code translation. This produces guidance around:

- Token definitions and component architecture
- Styling approach and asset management
- Icon system and project structure conventions

Read `references/custom-rules-templates.md` for example rules and a prompt template for generating custom rules.

## Server Setup

Read `references/setup-guide.md` for installation instructions covering:

- Remote server (`https://mcp.figma.com/mcp`) — no desktop app required
- Desktop server (`http://127.0.0.1:3845/mcp`) — runs through Figma desktop app
- Client-specific configuration for Claude Code, VS Code, Cursor, and others

### Quick Setup (Claude Code)

**Remote (recommended):**
```
claude mcp add --transport http figma https://mcp.figma.com/mcp
```

Add `--scope user` to make it available across all projects.

**Desktop:**
```
claude mcp add --transport http figma-desktop http://127.0.0.1:3845/mcp
```

## Variable Definitions

Call `get_variable_defs` to extract design tokens (colors, typography, spacing) defined as Figma variables. Use these to align generated code with the project's token system.

## Tool Quick Reference

| Tool | Purpose |
|------|---------|
| `get_design_context` | Primary tool — fetch structured code + screenshot for a node |
| `get_screenshot` | Get visual reference for a specific node |
| `get_metadata` | High-level node map for large files |
| `get_figjam` | Retrieve FigJam board content |
| `get_variable_defs` | Extract design token definitions |
| `get_code_connect_map` | View existing Code Connect mappings |
| `get_code_connect_suggestions` | Discover unmapped components |
| `add_code_connect_map` | Create new component mappings |
| `send_code_connect_mappings` | Push mappings to Figma |
| `generate_figma_design` | Send live UI to Figma |
| `create_design_system_rules` | Generate project-specific rules |
| `whoami` | Check authentication status |
