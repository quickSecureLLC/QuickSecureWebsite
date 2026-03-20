---
name: stat-card
description: >-
  Generates branded QuickSecure stat cards as standalone HTML files for LinkedIn
  posts and social media. Use when the user says "stat card", "create a stat card",
  "LinkedIn stat card", "social media card", "make a stat graphic", or asks to
  create a visual with statistics for sharing.
---

# Stat Card Generator

Generate branded QuickSecure stat cards as standalone HTML files for LinkedIn posts and social media graphics. The output is a single HTML file the user opens in a browser and screenshots.

## Workflow

### Step 1: Gather Content

Ask the user for these inputs (use AskUserQuestion if not provided):

| Field | Required | Description |
|-------|----------|-------------|
| Title | Yes | Main headline (e.g., "Give Every Student a Voice") |
| Subtitle | No | 1-2 sentence supporting text below the title |
| Stats | Yes | 3-5 stat items, each with a number and label |
| Source | No | Attribution line for the footer |
| Context lines | No | Optional italic subtext on individual stat tiles |
| Emphasized words | No | Words within labels to highlight in white (wrap in `<em>`) |

### Step 2: Choose Bento Layout

Arrange stats in an asymmetric bento grid. The grid uses 3 columns with these tile types:

| Tile Type | CSS Class | Spans | Number Size | Best For |
|-----------|-----------|-------|-------------|----------|
| Tall | `tile tall` + `grid-row: 1 / 3` | 1 col, 2 rows | 64px | Hero stat, biggest number |
| Wide | `tile wide` | 2 cols, 1 row | 64px | Stat with context line |
| Standard | `tile` | 1 col, 1 row | 48px | Supporting stats |

Default layout pattern (4 stats):
- Row 1-2 left: tall tile (hero stat)
- Row 1 middle: standard tile
- Row 1 right: standard tile
- Row 2 middle+right: wide tile

For 3 stats: one wide top, two standard below. For 5 stats: tall left, 2 standard right top, wide bottom spanning 2, or adjust as needed.

### Step 3: Generate the HTML

Read the template at `assets/template.html` for the complete HTML structure and CSS.

Apply the user's content to the template:
1. Set the title text inside `.title`
2. Set the subtitle inside `.subtitle` (omit the element if none provided)
3. Build bento tiles with appropriate classes (`tall`, `wide`, or standard)
4. Add optional `.top-label` (uppercase category tag), `.context` (italic subtext)
5. Wrap emphasized words in `<em>` tags within `.label`
6. Set source text in the footer

### Step 4: Write and Serve

1. Write the HTML file to `design/stat-card/` with a descriptive filename (e.g., `tip-line-stats.html`)
2. Serve it using Python HTTP server: `python -m http.server <port> --directory <project-root>`
3. Give the user the URL to preview

## Design Tokens

| Token | Value | Usage |
|-------|-------|-------|
| Card bg | `#070B16` | Main card background |
| Card border | `0.9px solid rgba(255,255,255,0.1)` | Outer card border |
| Card radius | `12px` | Outer card corners |
| Card padding | `40px` | Inner padding |
| Tile bg | `#10182E` | Stat tile background |
| Tile border | `0.9px solid rgba(255,255,255,0.08)` | Tile border |
| Tile radius | `10px` | Tile corners |
| Tile padding | `24px` | Tile inner padding |
| Yellow | `#D7D128` | Stat numbers, accent line |
| White | `#ffffff` | Title, emphasized words |
| Gray label | `#8e919e` | Stat labels, subtitle |
| Dark gray | `#565a66` | Italic context lines |
| Top label | `rgba(255,255,255,0.25)` | Uppercase category tags |
| Source label | `#b0b3bc` | "Sources:" prefix |
| Font | Satoshi Variable | All text |
| Grain opacity | `0.55` | SVG noise overlay |
| Body bg | `#0e1118` | Page background (behind card) |

## Rules

- Keep the design flat: no gradients, no glows, no shadows on numbers
- Grain texture overlay on the main card only (not individual tiles)
- QuickSecure shield icon goes top-right, inline with the title (no brand name text)
- Yellow accent line (40px wide, 3px tall) between subtitle and bento grid
- Footer separated by a thin top border (`rgba(255,255,255,0.06)`)
- Shorten large numbers for punch: "500k+" not "500,000+", "10k+" not "10,000+"
- Font path: `../../public/fonts/Satoshi-Variable.woff2` (relative from `design/stat-card/`)
