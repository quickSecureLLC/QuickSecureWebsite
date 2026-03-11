# Figma MCP Server — Tools Reference

Detailed descriptions and usage guidance for each tool provided by the Figma MCP server.

---

## get_design_context

**Purpose:** Primary tool for fetching design information. Returns structured code (React + Tailwind), a screenshot, and contextual hints for a specific Figma node.

**When to use:** Always call this first when implementing a Figma design. Requires a `fileKey` and `nodeId` extracted from a Figma URL.

**Response includes:**
- Generated code representation (React + Tailwind as reference)
- Screenshot of the design node
- Code Connect snippets (if configured) — use the mapped codebase component directly
- Component documentation links — follow for usage context
- Design annotations — follow any notes, constraints, or instructions from the designer
- Design tokens as CSS variables — map to the project's token system
- Raw hex colors / absolute positioning — indicates loosely structured design; rely on screenshot

**Tips:**
- If the response is truncated, use `get_metadata` first to get the node map, then re-fetch specific nodes.
- Treat the output as a representation of design intent, not production-ready code.

---

## get_screenshot

**Purpose:** Retrieve a visual screenshot of a specific Figma node or variant.

**When to use:** After `get_design_context`, to get a visual reference for validation. Also useful when you need to compare multiple variants or states.

**Tips:**
- Use this as the ground truth for visual fidelity checks.
- Request screenshots of different states/variants to ensure complete implementation.

---

## get_metadata

**Purpose:** Returns a high-level map of nodes in a Figma file.

**When to use:**
- When `get_design_context` returns a truncated response
- When you need to understand the overall file structure before diving into specific nodes
- When navigating large, complex Figma files

**Tips:**
- Use this to identify the exact node IDs you need, then call `get_design_context` on specific nodes.

---

## get_figjam

**Purpose:** Retrieve content from FigJam boards — diagrams, flows, architecture maps, sticky notes, and other collaborative content.

**When to use:** When the user provides a `figma.com/board/...` URL. FigJam content is distinct from Figma Design content.

**Tips:**
- FigJam content often represents early-stage ideas and architecture decisions.
- Use the content to inform code structure and organization rather than pixel-perfect implementation.

---

## get_variable_defs

**Purpose:** Extract design token definitions (colors, typography, spacing, etc.) stored as Figma variables.

**When to use:** When setting up a design system or ensuring generated code uses the correct tokens.

**Tips:**
- Map extracted tokens to the project's existing token system.
- Use these definitions to avoid hardcoded values in generated code.

---

## get_code_connect_map

**Purpose:** View existing Code Connect mappings between Figma components and codebase components.

**When to use:** Before implementing a design, to check if components are already mapped to production code.

**Tips:**
- When mappings exist, `get_design_context` will return production component references.
- Check this before creating new components — existing mappings mean you should reuse.

---

## get_code_connect_suggestions

**Purpose:** Discover Figma components that could benefit from Code Connect mappings but aren't yet connected.

**When to use:** When improving Code Connect coverage or auditing component alignment.

---

## add_code_connect_map

**Purpose:** Create a new mapping between a Figma design component and a codebase component.

**When to use:** When a Figma component has a corresponding code component but no Code Connect mapping exists.

**Tips:**
- Ensure the mapping points to the correct file path and component export.
- This improves future `get_design_context` responses for that component.

---

## send_code_connect_mappings

**Purpose:** Push Code Connect mappings from the MCP server back to Figma.

**When to use:** After creating or updating Code Connect mappings via `add_code_connect_map`.

---

## generate_figma_design

**Purpose:** Capture live UI from a web app or site and send it to Figma as editable design layers.

**When to use:** When the user wants to bring their running application's UI into Figma for exploration, alignment, or refinement.

**Requirements:**
- Remote MCP server only (not desktop)
- Currently supported in Claude Code and Codex by OpenAI only

**Workflow:**
1. Start a local server for the app
2. A browser window opens with a capture toolbar
3. Capture pages, elements, and states
4. Receive a link to the created Figma file

---

## create_design_system_rules

**Purpose:** Analyze the current codebase and generate project-specific rules for consistent Figma-to-code translation.

**When to use:** When setting up a new project's Figma integration, or when the user says "create design system rules", "generate rules for my project", or "set up design rules."

**Output covers:**
- Token definitions and component architecture
- Styling approach and asset management
- Icon system and project structure conventions

---

## whoami

**Purpose:** Check the current authentication status and connected Figma account.

**When to use:** When troubleshooting connection issues or verifying the MCP server is properly authenticated.
