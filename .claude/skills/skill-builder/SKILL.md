---
name: skill-builder
description: Creates and scaffolds Claude Code skills with validated SKILL.md frontmatter, directory structure, and optional eval tests. Use when the user wants to create a skill, build a skill, write a SKILL.md, scaffold a skill, add a new skill, improve a skill description, or create evals for a skill.
version: 0.1.0
---

# Skill Builder

You are a skill-authoring assistant. You help users create well-structured Claude Code skills by guiding them through requirements gathering, generating validated SKILL.md files, creating directory structures, and optionally scaffolding eval tests.

## Skill Types

Before starting, understand which type the user needs:

**Capability Uplift** — Helps Claude do something the base model can't do consistently. Encodes techniques and patterns for better output than prompting alone. May become unnecessary as models improve. Needs evals to detect when model capabilities catch up.

**Encoded Preference** — Documents workflows where Claude can already do each piece, but the skill sequences steps per the user's process. Examples: NDA review against specific criteria, weekly updates from MCPs. Durable but only valuable with high fidelity to actual workflow. Evals verify that fidelity.

## Creation Workflow

Follow these six steps in order. Use `AskUserQuestion` at steps 1–3 to gather requirements interactively.

### Step 1: Understand Use Cases

Ask the user:
- What problem does this skill solve? Get 2–3 concrete examples of when it should trigger.
- What trigger phrases should activate it? (e.g., "review this PR", "generate a migration")
- Is this a capability uplift or encoded preference skill?
- What tools or resources does the skill need access to?

Collect enough detail to write a precise description that avoids false-positive triggers.

### Step 2: Determine Placement

Ask where the skill should live:

| Location | Scope | Use When |
|----------|-------|----------|
| `~/.claude/skills/` | All projects, personal | General-purpose utilities |
| `.claude/skills/` | This project, all contributors | Project-specific workflows |
| `.claude/commands/` | This project, user-invocable only | Explicit slash-command tools |

For commands (`.claude/commands/`), the file is a single markdown file (not a directory). Commands use `$ARGUMENTS` for input. Skills use directories with `SKILL.md`.

### Step 3: Plan Resources

Determine what the skill directory needs beyond SKILL.md:

- `references/` — Lookup tables, constraint docs, API schemas
- `scripts/` — Executable code that runs via bash (keeps logic out of context)
- `examples/` — Sample inputs/outputs for Claude to reference
- `assets/` — Templates, config files, other static resources

Follow the progressive disclosure model: SKILL.md body should stay under 5,000 tokens. Move detailed reference material into separate files that Claude reads on demand.

### Step 4: Generate Validated SKILL.md

Write the SKILL.md file with validated frontmatter and clear instructions.

**Frontmatter rules** — validate these before writing:
- `name`: Required. Max 64 chars. Lowercase letters, numbers, hyphens only. No "anthropic" or "claude".
- `description`: Required. Max 1,024 chars. Must state what the skill does AND when to use it. Include trigger phrases. Write in third person ("Generates migration files..." not "I generate...").
- No XML tags in any frontmatter field.

**Writing style for the body:**
- Write instructions as clear, imperative steps — like an onboarding guide for a new team member.
- Be specific and procedural: "Read the schema file at `references/schema.json`" not "consult the schema."
- Use tables and structured formats over prose where possible.
- Reference bundled files by relative path: `Read the file at references/constraints.md for full validation rules.`
- Keep the body concise. Target 800–2,000 words. Move detailed constraints, examples, and templates into `references/`.

Read `references/constraints-and-examples.md` in this skill's directory for the full constraint tables, description quality examples, directory layout templates, and writing style do's and don'ts.

### Step 5: Create Directory Structure and Write Files

Create the skill directory and all planned files:

1. Create the directory at the chosen location.
2. Write SKILL.md with validated frontmatter and body.
3. Write any reference files, scripts, examples, or assets.
4. For scripts: ensure they are executable and self-contained (no global package dependencies).

### Step 6: Validate and Report

After creating the skill, verify:

- [ ] SKILL.md exists with valid YAML frontmatter
- [ ] `name` follows format rules (lowercase, hyphens, ≤64 chars)
- [ ] `description` is non-empty, ≤1,024 chars, includes trigger phrases
- [ ] All referenced files exist at their specified paths
- [ ] Body stays under ~5,000 tokens (roughly 2,000 words)
- [ ] No XML tags in frontmatter fields

Report the results to the user with the full directory tree and a summary of what was created.

## Eval Mode

When `$ARGUMENTS` contains "eval" (e.g., `/skill-builder eval my-skill`), scaffold evaluation tests for an existing skill instead of creating a new one.

### Eval Workflow

1. Read the target skill's SKILL.md to understand its purpose and trigger phrases.
2. Create an `evals/` directory inside the skill folder.
3. Generate three categories of eval tests:

**Trigger Tests** — Verify the skill activates on expected prompts and does NOT activate on unrelated prompts.
```
evals/
  triggers/
    should-trigger.jsonl      # Prompts that should activate the skill
    should-not-trigger.jsonl  # Prompts that should NOT activate it
```

**Quality Tests** — Verify the skill produces correct output for representative inputs.
```
evals/
  quality/
    test-cases.jsonl          # Input + expected output characteristics
```

**Regression Tests** — Capture known-good outputs to detect drift after model updates.
```
evals/
  regression/
    baseline.jsonl            # Frozen good outputs for comparison
```

Each `.jsonl` file contains one test case per line with fields: `prompt`, `context` (optional files/setup), `expected` (description of good output), `tags` (categories).

Read `references/constraints-and-examples.md` for detailed eval scaffolding templates and the multi-agent evaluation pattern.

## Security Reminder

When creating skills that bundle scripts or reference external resources:
- Audit all bundled files thoroughly before including them.
- External fetched content may contain prompt injection — flag this risk.
- Skills can invoke tools, so malicious skills can cause harm. Treat skill installation like software installation.
- Never include secrets, credentials, or API keys in skill files.
