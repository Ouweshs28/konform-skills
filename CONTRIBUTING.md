# Contributing to konform-skills

Thank you for helping Mauritian developers ship compliant websites. Everything in this repository is **plain Markdown**: no code to build, no scripts to run. If you can edit a table, you can contribute.

## What you can contribute

| You want to... | Edit |
|---|---|
| Report a new or amended law, regulation or official guidance | `references/mauritius-law-digest.md` (Mauritius) or `references/checks-international.md`, plus the related check |
| Add or improve a check | `references/checks-mauritius.md` (data protection), `references/checks-mauritius-business.md` (e-commerce, tax, content, sectors), `references/checks-international.md` or `references/checks-security-accessibility.md` |
| Add a tracker, widget, SDK or consent tool | `references/third-party-services.md` (one table row) |
| Add a framework or search pattern | `references/repo-scan-playbook.md` |
| Add a fix for a stack (Laravel, Django, WordPress, Shopify...) | `references/remediation-patterns.md` |
| Improve a template or add a translation (French, Kreol Morisien) | `assets/` |
| Change how the agent works | `SKILL.md` (keep it under 500 lines) |

All paths above are inside `skills/konform-skills/`. Not sure? Open an issue first.

## Rules for legal content

1. **Cite an official source** for every legal statement: the Act or regulation (with section numbers) or the regulator's own publication. Good Mauritian sources: `dataprotection.govmu.org`, `mauritiusassembly.govmu.org`, `attorneygeneral.govmu.org`, `mitci.govmu.org`, `mra.mu`, `fscmauritius.org`, `bom.mu`, `icta.mu`, `cert-mu.govmu.org`, `gra.govmu.org`, `commerce.govmu.org`, `companies.govmu.org`, `govmu.org`.
2. **Mark secondary sources.** If you only have a law-firm article or news report, write *(unverified)* next to the statement and link it.
3. **Never guess section numbers.** If you are not sure, say so in the PR.
4. **Say when it applies.** State commencement dates and, for laws not yet in force, write "(from DD Month YYYY)" or "(pending)".
5. **Update the review date.** Change `metadata.last-reviewed` in `SKILL.md` and the "Law reviewed" line of the file you edited.
6. **Requirement vs good practice.** Keep the distinction explicit: the report must not present good practice as a legal duty.
7. **Plain English.** Short sentences; explain acronyms once; quote the law only where wording matters.

## Rules for checks

- Check IDs (`MU-DPA-05`, `EU-COOK-01`, `SEC-06`...) are **stable**: reports and users refer to them. Never renumber. To retire a check, keep the heading and mark it "Deprecated - see X".
- New checks follow the format used in the file you are editing: *Applies when*, *Requirement* (with citation), *Look for in the repo*, *Fail if*, *Severity*, *Fix*.
- Severity scale: Critical, High, Medium, Low (definitions in `SKILL.md`).
- The skill reviews **source code in a repository**. Write checks that an agent can verify by reading files, or mark them MANUAL with the question to ask the owner.

## Skill format rules

The skill follows the open [Agent Skills specification](https://agentskills.io/specification) so it works in Claude Code, GitHub Copilot, Cursor, Codex, Gemini CLI, Antigravity and others:

- Frontmatter uses only `name`, `description`, `license`, `compatibility`, `metadata` (string values) and `allowed-tools`.
- `name` must equal the folder name (`konform-skills`).
- Keep `description` at **200 characters or fewer** (claude.ai limit) and free of `<` and `>`.
- Keep `SKILL.md` under 500 lines; put details in `references/` and link them with relative paths one level deep.

## Testing your change

1. Install your local copy into an agent, for example: `npx skills add ./ --skill konform-skills` from the repository root, or copy `skills/konform-skills` into `.agents/skills/` (or `.claude/skills/` for Claude Code) of a test project.
2. Open the example project [`examples/dodo-treats`](examples/dodo-treats) in your agent and ask the prompt in [`examples/README.md`](examples/README.md), then compare the report with its answer key. For a new check, also try a small project that triggers it.
3. Check that the report cites your new content correctly.

The CI workflow validates the skill with the official `skills-ref` validator (`agentskills validate`), checks the description length and verifies relative links. You do not need to run anything locally.

## Pull request checklist

- [ ] Official source linked for each legal statement (or marked *unverified*)
- [ ] Section numbers checked against the official text
- [ ] Commencement date stated for new or pending rules
- [ ] "Law reviewed" dates updated
- [ ] Check IDs unchanged (new IDs only appended)
- [ ] `SKILL.md` still under 500 lines, description 200 characters or fewer

## Disclaimer

Contributions are informational and are not legal advice. By contributing you agree to license your contribution under the MIT License of this repository.
