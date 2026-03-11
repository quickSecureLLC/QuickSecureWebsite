# Custom Rules Templates for Figma MCP

Use these templates to create project-level rules that guide the AI toward consistent, high-quality Figma-to-code output.

---

## General-Purpose Rules Template

Add these to your project's CLAUDE.md or equivalent rules file:

```markdown
# Figma MCP Rules

- Always use components from `/path_to_your_design_system` when possible
- Prioritize Figma fidelity to match designs exactly
- Avoid hardcoded values, use design tokens from Figma where available
- Follow WCAG requirements for accessibility
- Add component documentation
- Place UI components in `/path_to_your_design_system`; avoid inline styles unless truly necessary
```

---

## Comprehensive Implementation Rules Template

```markdown
## Figma MCP Integration Rules

These rules define how to translate Figma inputs into code for this project and must be followed for every Figma-driven change.

### Required flow (do not skip)
1. Run get_design_context first to fetch the structured representation for the exact node(s).
2. If the response is too large or truncated, run get_metadata to get the high-level node map and then re-fetch only the required node(s) with get_design_context.
3. Run get_screenshot for a visual reference of the node variant being implemented.
4. Only after you have both get_design_context and get_screenshot, download any assets needed and start implementation.
5. Translate the output (usually React + Tailwind) into this project's conventions, styles and framework. Reuse the project's color tokens, components, and typography wherever possible.
6. Validate against Figma for 1:1 look and behavior before marking complete.

### Implementation rules
- Treat the Figma MCP output (React + Tailwind) as a representation of design and behavior, not as final code style.
- Replace Tailwind utility classes with the project's preferred utilities/design-system tokens when applicable.
- Reuse existing components (e.g., buttons, inputs, typography, icon wrappers) instead of duplicating functionality.
- Use the project's color system, typography scale, and spacing tokens consistently.
- Respect existing routing, state management, and data-fetch patterns already adopted in the repo.
- Strive for 1:1 visual parity with the Figma design. When conflicts arise, prefer design-system tokens and adjust spacing or sizes minimally to match visuals.
- Validate the final UI against the Figma screenshot for both look and behavior.
```

---

## Asset Handling Rules Template

Add to CLAUDE.md:

```markdown
# MCP Servers
## Figma MCP server rules
- The Figma MCP server provides an assets endpoint which can serve image and SVG assets
- IMPORTANT: If the Figma MCP server returns a localhost source for an image or an SVG, use that image or SVG source directly
- IMPORTANT: DO NOT import/add new icon packages, all the assets should be in the Figma payload
- IMPORTANT: do NOT use or create placeholders if a localhost source is provided
```

---

## Prompt Template: Generate Custom Rules for Your Codebase

Use this prompt with your MCP client to generate project-specific rules:

```
Please analyze this codebase thoroughly and provide a comprehensive rules doc
for your use (e.g. CLAUDE.md) on the following aspects to help integrate Figma
designs using the Model Context Protocol:

## Design System Structure

1. **Token Definitions**
   - Where are design tokens (colors, typography, spacing, etc.) defined?
   - What format/structure is used for tokens?
   - Are there any token transformation systems in place?

2. **Component Library**
   - Where are UI components defined?
   - What component architecture is used?
   - Are there any component documentation or storybooks?

3. **Frameworks & Libraries**
   - What UI frameworks are used (React, Vue, etc.)?
   - What styling libraries/frameworks are used?
   - What build system and bundler are used?

4. **Asset Management**
   - How are assets (images, videos, etc.) stored and referenced?
   - What asset optimization techniques are used?
   - Are there any CDN configurations?

5. **Icon System**
   - Where are icons stored?
   - How are icons imported and used in components?
   - Is there an icon naming convention?

6. **Styling Approach**
   - What CSS methodology is used (CSS Modules, Styled Components, etc.)?
   - Are there global styles?
   - How are responsive designs implemented?

7. **Project Structure**
   - What is the overall organization of the codebase?
   - Are there any specific patterns for feature organization?

Provide your analysis as structured markdown with code snippets demonstrating
key patterns. Include file paths where relevant.
```

---

## Framework-Specific Adaptations

### React + CSS Modules
```markdown
- Convert Tailwind classes to CSS Module class names from the project's .module.css files
- Use the project's className utility for conditional class application
- Map Figma component variants to React component props
```

### Vue + Scoped Styles
```markdown
- Convert Tailwind to scoped CSS within <style scoped> blocks
- Use the project's design token CSS custom properties
- Map Figma variants to Vue component props and slots
```

### Svelte
```markdown
- Convert Tailwind to Svelte component-scoped styles
- Use CSS custom properties from the project's theme
- Map Figma interactions to Svelte event handlers and transitions
```

### Next.js / App Router
```markdown
- Determine if components should be Server or Client Components
- Use next/image for image optimization when replacing Figma image assets
- Respect the existing app router file conventions for page layouts
```
