# Skill Builder — Constraints, Examples, and Templates

Reference material for the skill-builder skill. Read this file when you need detailed validation rules, description examples, directory templates, or eval scaffolding patterns.

---

## Frontmatter Constraint Tables

### Required Fields

| Field | Type | Constraints |
|-------|------|-------------|
| `name` | string | Required. Max 64 chars. Pattern: `[a-z0-9-]+`. Cannot contain "anthropic" or "claude". Cannot contain XML tags. |
| `description` | string | Required. Max 1,024 chars. Non-empty. Cannot contain XML tags. Must describe BOTH what the skill does AND when to trigger it. |

### Optional Fields

| Field | Type | Notes |
|-------|------|-------|
| `version` | string | Semver recommended (e.g., `0.1.0`) |

### Invocation Control

| Setting | Effect |
|---------|--------|
| Default (no flags) | Model can auto-trigger based on description match; user can invoke via `/skill-name` |
| User-invocable only | Skill only runs when user explicitly calls `/skill-name`; model never auto-triggers |
| `$ARGUMENTS` | In user-invocable skills, contains everything after the slash command name |

---

## Description Quality

The description is the most important field — it controls when the skill triggers. A bad description causes false positives (triggering when irrelevant) or false negatives (not triggering when needed).

### Good Descriptions

```yaml
description: >-
  Generates database migration files from schema changes. Use when
  the user says "create migration", "add a column", "change schema",
  or modifies a model file and asks to update the database.
```
- States what it does (generates migration files)
- States when to use it (trigger phrases + contextual triggers)
- Third person, specific

```yaml
description: >-
  Reviews pull requests for security vulnerabilities, focusing on
  OWASP Top 10. Use when the user says "security review", "check
  for vulnerabilities", "audit this PR", or asks about XSS, CSRF,
  injection, or authentication issues.
```
- Clear domain (security review)
- Explicit trigger phrases
- Lists specific topics that should match

### Bad Descriptions

```yaml
# Too vague — will trigger on unrelated coding tasks
description: Helps with code

# Too broad — will trigger on any database question
description: Database helper tool for working with databases

# Missing trigger phrases — model can't match user intent
description: Processes files and generates output

# First person — should be third person
description: I help you write better tests for your code
```

### Description Tuning Checklist

When refining a description:
1. List 5–10 prompts that SHOULD trigger the skill.
2. List 5–10 prompts that should NOT trigger it.
3. Check: does the description contain enough keywords to match the "should" list?
4. Check: is the description narrow enough to exclude the "should not" list?
5. Include the most common trigger phrases verbatim in the description.

---

## Directory Layout Templates

### Minimal (instructions only)

```
my-skill/
└── SKILL.md
```

Use for simple skills that encode a preference or short workflow with no external data.

### Standard (with references)

```
my-skill/
├── SKILL.md
└── references/
    ├── constraints.md
    └── api-schema.json
```

Use when the skill needs lookup tables, validation rules, or schemas that would bloat SKILL.md.

### Complete (with scripts, examples, and evals)

```
my-skill/
├── SKILL.md
├── references/
│   ├── constraints.md
│   └── templates/
│       └── output-template.md
├── scripts/
│   ├── validate.py
│   └── transform.sh
├── examples/
│   ├── input-sample.json
│   └── expected-output.json
└── evals/
    ├── triggers/
    │   ├── should-trigger.jsonl
    │   └── should-not-trigger.jsonl
    ├── quality/
    │   └── test-cases.jsonl
    └── regression/
        └── baseline.jsonl
```

Use for complex capability-uplift skills that need deterministic operations, reference data, and quality tracking.

---

## Command vs Skill Format

| Aspect | Skill (`.claude/skills/`) | Command (`.claude/commands/`) |
|--------|--------------------------|------------------------------|
| Structure | Directory with `SKILL.md` | Single `.md` file |
| Auto-trigger | Yes, via description matching | No — user-invocable only |
| Input | No `$ARGUMENTS` (unless user-invocable) | `$ARGUMENTS` from slash command |
| Resources | Can bundle files in subdirectories | Self-contained single file |
| Scope | User-level or project-level | Project-level only |

### When to use a Command instead of a Skill

- The action should ONLY run when explicitly requested (never auto-trigger)
- The workflow is simple enough to fit in a single file
- The skill needs `$ARGUMENTS` as its primary input mechanism
- It's a project-specific utility, not a general pattern

---

## Writing Style Rules

### Do

- Write in imperative mood: "Read the config file" not "You should read the config file"
- Be specific about file paths: "Read `references/schema.json`" not "check the schema"
- Use numbered steps for sequential workflows
- Use tables for structured comparisons and constraint lists
- Keep SKILL.md body under 2,000 words (≈5,000 tokens)
- Start with a one-sentence purpose statement
- Group related instructions under clear headings

### Don't

- Don't use first person ("I will help you...")
- Don't use vague language ("consider doing", "you might want to")
- Don't repeat information — reference files instead
- Don't embed large code blocks in SKILL.md — put them in `scripts/` or `examples/`
- Don't add meta-commentary about the skill itself ("This skill is designed to...")
- Don't include optional features the user didn't ask for

### Word Count Targets

| Section | Target |
|---------|--------|
| SKILL.md total body | 800–2,000 words |
| Purpose statement | 1–2 sentences |
| Each workflow step | 50–150 words |
| Reference files | No limit (loaded on demand) |

---

## Progressive Disclosure Guidelines

Skills use a three-level loading model to minimize context window consumption:

| Level | When Loaded | Token Cost | Content |
|-------|------------|------------|---------|
| Level 1: Metadata | Always (at startup) | ~100 tokens | `name` and `description` from YAML frontmatter |
| Level 2: Instructions | When triggered | Under 5,000 tokens | SKILL.md body |
| Level 3: Resources | As needed during execution | Effectively unlimited | Bundled files read via bash |

### Applying This to Skill Design

1. **Frontmatter** — Keep the description precise and keyword-rich. This is the only part loaded for every conversation.
2. **SKILL.md body** — Include the core workflow and decision logic. Reference files by path instead of inlining content.
3. **Bundled files** — Put detailed constraints, large examples, templates, schemas, and scripts here. Claude reads them only when needed.

### Dynamic Context Injection

Reference bundled files explicitly in SKILL.md so Claude knows they exist:

```markdown
Read `references/api-schema.json` for the full API specification.
Run `bash scripts/validate.sh` to check the output format.
See `examples/good-output.md` for a reference implementation.
```

---

## Eval Scaffolding Templates

### Trigger Test Format (`should-trigger.jsonl`)

Each line is a JSON object:
```json
{"prompt": "help me create a new skill", "expected_trigger": true, "tags": ["creation", "explicit"]}
{"prompt": "I want to build a skill for code review", "expected_trigger": true, "tags": ["creation", "domain-specific"]}
{"prompt": "write a SKILL.md for my linting tool", "expected_trigger": true, "tags": ["creation", "explicit-artifact"]}
```

### Non-Trigger Test Format (`should-not-trigger.jsonl`)

```json
{"prompt": "help me fix this bug in my React component", "expected_trigger": false, "tags": ["unrelated", "coding"]}
{"prompt": "what skills do I have installed?", "expected_trigger": false, "tags": ["meta", "listing"]}
{"prompt": "create a new React component", "expected_trigger": false, "tags": ["creation", "wrong-domain"]}
```

### Quality Test Format (`test-cases.jsonl`)

```json
{"prompt": "create a skill that reviews PRs for security issues", "context": {}, "expected": "Creates a skill directory with SKILL.md containing valid frontmatter, security-focused description with trigger phrases, and step-by-step review workflow", "tags": ["creation", "security"]}
{"prompt": "scaffold evals for my migration-helper skill", "context": {"skill_path": ".claude/skills/migration-helper/"}, "expected": "Creates evals/ directory with trigger, quality, and regression test files specific to migration workflows", "tags": ["eval", "scaffolding"]}
```

### Regression Baseline Format (`baseline.jsonl`)

```json
{"prompt": "create a simple skill for formatting markdown tables", "output_hash": "abc123", "output_snapshot": "...", "model_version": "claude-opus-4-6", "timestamp": "2026-03-04T00:00:00Z", "tags": ["creation", "simple"]}
```

### Multi-Agent Evaluation Pattern

For robust testing, use independent agents that each get clean context:

1. **Runner agents** — Execute evals in parallel, each with isolated context and token/timing metrics.
2. **Comparator agents** — Run A/B comparisons: skill version vs. no skill, or version A vs. version B. Judge outputs without knowing which version produced them.
3. **Metrics to track**: eval pass rate, elapsed time per eval, token usage per eval.

Benefits:
- Prevents cross-contamination from accumulated context
- Catches quality regressions after model updates
- Detects when base model capabilities have outgrown a capability-uplift skill

---

## Platform Considerations

### Runtime Environment

| Platform | Network | Package Install | Notes |
|----------|---------|-----------------|-------|
| Claude Code | Full access | Local only (no global) | Filesystem-based skill loading |
| Claude API | No access | Pre-configured only | Requires beta headers |
| Claude.ai | Varies by settings | No | Zip upload via Settings > Features |

### Sharing Scope

| Platform | Scope |
|----------|-------|
| Claude Code (user) | `~/.claude/skills/` — Personal, all projects |
| Claude Code (project) | `.claude/skills/` — Project-wide, all contributors |
| Claude API | Workspace-wide |
| Claude.ai | Individual user only |

---

## Security Checklist for New Skills

Before finalizing any skill:

- [ ] All bundled scripts reviewed for correctness and safety
- [ ] No secrets, credentials, or API keys in any file
- [ ] External data sources flagged as potential prompt injection vectors
- [ ] Tool invocations in the workflow are appropriate and scoped
- [ ] Scripts don't install global packages or modify system state
- [ ] File paths don't reference locations outside the skill's intended scope
