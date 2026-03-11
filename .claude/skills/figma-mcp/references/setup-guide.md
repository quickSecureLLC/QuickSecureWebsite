# Figma MCP Server — Setup Guide

Installation and configuration instructions for connecting the Figma MCP server to supported clients.

---

## Connection Methods

| Method | Endpoint | Requirements |
|--------|----------|-------------|
| Remote server | `https://mcp.figma.com/mcp` | OAuth authentication; no desktop app needed |
| Desktop server | `http://127.0.0.1:3845/mcp` | Figma desktop app running with Dev Mode enabled |

The remote server is recommended — it works without the desktop app and supports all features including sending live UI to Figma.

---

## Claude Code

### Remote (recommended)

```bash
# Project-scoped (default)
claude mcp add --transport http figma https://mcp.figma.com/mcp

# User-scoped (available across all projects)
claude mcp add --scope user --transport http figma https://mcp.figma.com/mcp
```

After adding:
1. Start a new Claude Code session.
2. Type `/mcp` to manage servers and select `figma`.
3. Select **Authenticate** and click **Allow Access** when prompted.
4. Confirm connection with `/mcp`.

### Desktop

```bash
claude mcp add --transport http figma-desktop http://127.0.0.1:3845/mcp
```

### Management commands

```bash
claude mcp list              # List all configured servers
claude mcp get figma         # Get details for the Figma server
claude mcp remove figma      # Remove the Figma server
```

---

## VS Code

### Remote

1. Use `Cmd+Shift+P` (or `Ctrl+Shift+P`) and select **MCP: Open User Configuration** (global) or **MCP: Open Workspace Folder MCP Configuration** (workspace).
2. Paste in `mcp.json`:

```json
{
  "inputs": [],
  "servers": {
    "figma": {
      "url": "https://mcp.figma.com/mcp",
      "type": "http"
    }
  }
}
```

3. Click **Start** above the server name.
4. Click **Allow Access** when prompted.

### Desktop

```json
{
  "servers": {
    "figma-desktop": {
      "type": "http",
      "url": "http://127.0.0.1:3845/mcp"
    }
  }
}
```

**Note:** Requires GitHub Copilot enabled on your account for MCP in VS Code.

---

## Cursor

### Remote

1. Click the Figma MCP server deep link (from Figma docs) to open MCP configuration.
2. Click **Install** under "Install MCP Server?"
3. Click **Connect** next to Figma to authenticate.
4. Click **Allow Access**.

### Desktop

1. Open **Cursor > Settings > Cursor Settings**.
2. Go to the **MCP** tab.
3. Click **+ Add new global MCP server**.
4. Enter:

```json
{
  "mcpServers": {
    "figma-desktop": {
      "url": "http://127.0.0.1:3845/mcp"
    }
  }
}
```

---

## Other Editors

### Generic configuration

```json
{
  "mcpServers": {
    "figma": {
      "url": "https://mcp.figma.com/mcp"
    }
  }
}
```

Or for desktop:

```json
{
  "mcpServers": {
    "figma-desktop": {
      "url": "http://127.0.0.1:3845/mcp"
    }
  }
}
```

### Supported clients

| Client | Desktop | Remote | Skills |
|--------|---------|--------|--------|
| Amazon Q | Yes | | |
| Android Studio | Yes | Yes | |
| Claude Code | Yes | Yes | Claude Skills |
| Codex by OpenAI | Yes | Yes | Codex Skills |
| Cursor | Yes | Yes | |
| Gemini CLI | Yes | Yes | |
| Kiro | Yes | Yes | Kiro Powers |
| Openhands | Yes | | |
| Replit | | Yes | |
| VS Code | Yes | Yes | |
| Warp | Yes | Yes | |

---

## Desktop Server Setup (Figma App)

1. Open the Figma desktop app (latest version).
2. Create or open a Figma Design file.
3. Toggle to **Dev Mode** (toolbar at bottom, or `Shift+D`).
4. In the MCP server section of the inspect panel, click **Enable desktop MCP server**.
5. Confirm the server is running at `http://127.0.0.1:3845/mcp`.

### Desktop server settings

Access via the **Open settings modal** button in the inspect panel:

- **Image settings:**
  - *Local server* — uses localhost links for image assets
  - *Download assets* — writes image assets directly to your project
- **Enable Code Connect** — includes Code Connect mappings in responses

---

## Troubleshooting

| Issue | Solution |
|-------|---------|
| No tools listed after setup | Restart both the Figma app and your editor |
| Authentication failed | Re-run `/mcp` in Claude Code, re-authenticate |
| Desktop server not responding | Verify Dev Mode is enabled and server toggle is on |
| Truncated responses | Use `get_metadata` first, then fetch specific nodes |
| Connection timeout | Check firewall settings for localhost:3845 (desktop) or outbound HTTPS (remote) |

---

## Access and Plans

- **Remote server:** Available on all seats and plans.
- **Desktop server:** Requires a Dev or Full seat on any paid plan.
- Usage and rate limits apply. See Figma developer docs for current limits.
