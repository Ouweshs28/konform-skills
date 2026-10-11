# AGENTS.md

Instructions for AI coding agents working **on** this repository. (To **use** the skill on another project, see the README.)

## What this repository is

`konform-skills` packages Agent Skills that audit website and web-app **repositories** for legal compliance, with Mauritius as the primary jurisdiction. The main skill lives in `skills/konform-skills/`:

- `SKILL.md`: the workflow the agent follows (scope, inventory, evaluate, report, fix).
- `references/`: knowledge loaded on demand (law digests, checklists, repo-scan playbook, third-party services, remediation patterns).
- `assets/`: templates (report, privacy notice EN/FR, cookie policy, legal notice, terms, accessibility statement, breach plan, security.txt).

Packaging for different agents: `.claude-plugin/marketplace.json` (Claude Code / Copilot CLI plugin marketplace), `gemini-extension.json` (Gemini CLI extension), `skills/` (discovered by `npx skills` and `gh skill`). `examples/dodo-treats/` is an intentionally non-compliant test project; `examples/README.md` holds its answer key. Keep both in sync when you add or renumber checks.

## Conventions

- **Markdown only.** Do not add scripts, build steps or dependencies to the skill. Contributors must be able to edit everything in a text editor.
- **Legal accuracy first.** Every legal statement needs a citation from an official source. Never invent or "correct" section numbers from memory; if unsure, mark the statement *(unverified)* and flag it.
- **Stable IDs.** Never renumber check IDs (`MU-DPA-05`, `EU-COOK-01`, `SEC-06`...). Append new ones.
- **Frontmatter:** only `name`, `description`, `license`, `compatibility`, `metadata`, `allowed-tools`. `name` equals the folder name; `description` at most 200 characters with no `<` or `>`.
- **Size:** `SKILL.md` under 500 lines; reference files linked one level deep with relative paths.
- **Dates:** update `metadata.last-reviewed` in `SKILL.md` and the "Law reviewed" lines when legal content changes.
- **Language:** clear, plain English. Templates may have French versions (`*.fr.md`).

## Validation

CI (`.github/workflows/validate.yml`) runs:

```bash
uvx --from skills-ref agentskills validate skills/konform-skills
```

plus a description-length check and an offline Markdown link check. Run the first command locally if `uv` is available (or `pip install skills-ref` and run `agentskills validate ...`).

## Using the skill without skill support

If an agent does not support Agent Skills, it can still use this one: read `skills/konform-skills/SKILL.md` and follow it, opening the referenced files when the workflow says so.
