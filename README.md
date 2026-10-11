# konform-skills 🇲🇺

**Konform** (Kreol Morisien for *compliant*) is an open-source **AI agent skill** that reviews your website or web-app **code** for legal compliance: **Mauritian law first** (Data Protection Act 2017 and more), then the international rules that apply to your visitors (GDPR, cookies, consumer law, accessibility, security).

It works with Claude Code, GitHub Copilot, Cursor, OpenAI Codex, Gemini CLI, Google Antigravity, Windsurf, OpenCode, Kiro, Junie and any agent that supports the open [Agent Skills](https://agentskills.io) format. It is plain Markdown: no scripts, no installs, no data leaves your machine except through your own agent.

[![Validate skills](https://github.com/Ouweshs28/konform-skills/actions/workflows/validate.yml/badge.svg)](https://github.com/Ouweshs28/konform-skills/actions/workflows/validate.yml)
[![skills.sh](https://skills.sh/b/Ouweshs28/konform-skills)](https://skills.sh/Ouweshs28/konform-skills)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

> **Not legal advice.** Konform helps developers find and fix likely compliance gaps with evidence. Confirm important decisions with a Mauritian legal practitioner or the [Data Protection Office](https://dataprotection.govmu.org).

## What it does

Ask your agent *"Is this site compliant?"* and the `konform-skills` skill will:

1. **Scope**: work out which laws apply (Mauritius, plus EU/Réunion, UK, US, South Africa, India...) from your code: currencies, locales, shipping zones, trackers, legal pages.
2. **Inventory** the repository: forms and the personal data they collect, cookies, trackers and SDKs, consent handling, data transfers abroad, security configuration, legal pages.
3. **Evaluate** it against 100+ checks, each with its legal basis (e.g. *DPA 2017 s.23(2)(i)*).
4. **Report**: write `compliance-report.md` with `path:line` evidence, severity, the law, and the fix.
5. **Fix** (with your approval): consent gating, privacy notice (English and French), cookie policy, security headers, form wording, footer details and more.

## What it checks

**Mauritius (primary)**

- Data Protection Act 2017: privacy notice items (s.23), lawful basis and consent (ss.24, 28), children under 16 (s.30), special categories (s.29), security (s.31), transfers abroad (s.36), rights (ss.37-41), breach notification within 72 hours (s.25), registration with the Data Protection Office (s.14), data protection officer (s.22 and the DPO Regulations 2026: DPO contact on your website from 1 January 2027).
- E-commerce, consumer protection, business identification, VAT and MRA e-invoicing, cybersecurity and cybercrime, ICT Act, copyright, accessibility and equal opportunities, and sector rules (financial services, virtual assets, gambling, tourism, health, real estate, children).

**International (when your audience triggers it)**

- EU: GDPR, ePrivacy cookie consent (CNIL / EDPB standards), Consumer Rights Directive (incl. the withdrawal button required since 19 June 2026), Digital Services Act, European Accessibility Act, AI Act transparency.
- UK: UK GDPR, PECR as amended by the Data (Use and Access) Act 2025, consumer law, Online Safety Act.
- US: CalOPPA, CCPA/CPRA and state privacy laws, COPPA, CAN-SPAM, ADA.
- South Africa (POPIA, ECTA), India (DPDP Act and Rules), and quick notes for Canada, Brazil, Kenya, Nigeria, Seychelles and Madagascar.

**Technical baseline**: HTTPS and security headers, cookie flags, password storage, secrets, PII in logs, OWASP Top 10:2025, PCI DSS 4.0.1 for payment pages, WCAG 2.2 AA accessibility.

## Install

### Any agent (recommended)

```bash
npx skills add Ouweshs28/konform-skills
```

The [skills CLI](https://github.com/vercel-labs/skills) asks which agents to install for (Claude Code, Copilot, Cursor, Codex, Gemini CLI, Antigravity, Windsurf, OpenCode, Kiro, Junie, Cline, Roo, Goose, Amp, Zed, Trae...). Add `-g` to install for your user instead of the current project, or `-a <agent>` to pick one, e.g. `npx skills add Ouweshs28/konform-skills -a claude-code`.

With the GitHub CLI (2.90+): `gh skill install Ouweshs28/konform-skills konform-skills`.

### Agent-specific options

| Agent | Install |
|---|---|
| **Claude Code** | `/plugin marketplace add Ouweshs28/konform-skills` then `/plugin install konform@konform-skills`, or copy the skill folder to `.claude/skills/` (project) or `~/.claude/skills/` (user) |
| **GitHub Copilot** (VS Code, CLI, coding agent) | Copy to `.github/skills/` or `.agents/skills/` (project), or `~/.copilot/skills/` (user) |
| **Cursor** | Copy to `.agents/skills/` or `.cursor/skills/` (project), or `~/.cursor/skills/` (user) |
| **OpenAI Codex** | Copy to `.agents/skills/` (project) or `~/.agents/skills/` (user) |
| **Gemini CLI** | `gemini extensions install https://github.com/Ouweshs28/konform-skills`, or copy to `.agents/skills/` / `.gemini/skills/` |
| **Google Antigravity** | Copy to `.agents/skills/` in your workspace, or to the global skills folder (`~/.gemini/config/skills/`; older versions use `~/.gemini/antigravity/skills/`) |
| **Windsurf / Devin Desktop** | Copy to `.agents/skills/` or `.windsurf/skills/` |
| **OpenCode, Cline, Roo Code, Goose, Amp, Junie, Zed** | Copy to `.agents/skills/` (each also has its own folder, see its docs) |
| **Kiro** | Copy to `.kiro/skills/` (project) or `~/.kiro/skills/` (user) |
| **Claude.ai / Claude Desktop** | Zip the `skills/konform-skills` folder (the folder must be the zip's root), then *Customize > Skills > Upload a skill* (code execution must be enabled) |
| **Anything else** | Ask your agent: *"Read `skills/konform-skills/SKILL.md` from https://github.com/Ouweshs28/konform-skills and follow it to audit this repo."* |

"Copy" means copying the folder `skills/konform-skills` so that you end up with `<skills-folder>/konform-skills/SKILL.md`.

## Use

Open your website's repository in your agent and ask, for example:

- *"Check this repo for compliance with Mauritian law."*
- *"Is our cookie banner compliant? We have visitors from Réunion and France."*
- *"Audit our privacy policy and forms against the Data Protection Act 2017."*
- *"We're adding Google Analytics and a WhatsApp chat button - what do we need to change?"*
- *"Fix the critical and high findings from compliance-report.md."*
- *"Vérifie la conformité de ce site à la loi mauricienne et au RGPD."*

Most agents also let you call the skill explicitly: `/konform-skills` (Claude Code, Copilot, Cursor, Antigravity, Kiro), `/konform:konform-skills` (Claude Code plugin), or `$konform-skills` (Codex).

### Example findings

| Severity | ID | Finding | Evidence | Legal basis |
|---|---|---|---|---|
| High | MU-DPA-05 | Google Analytics and Meta Pixel load on every page before any consent | `app/layout.tsx:18-31` | DPA 2017 ss.2, 23, 28; ePrivacy Art. 5(3) for EU visitors |
| High | MU-DPA-14 | No data protection officer contact in the privacy notice or footer | `app/privacy/page.mdx` | DPA 2017 ss.22(2)(e), 23(2)(a); GN 117 of 2026 reg 8(1) from 1 Jan 2027 |
| High | MU-DPA-04 | Newsletter box pre-ticked on the contact form | `components/ContactForm.tsx:57` | DPA 2017 ss.2, 24 |
| Medium | MU-DPA-11 | Hosting (US), analytics (US) and chat (unverified location) not disclosed as transfers | `package.json`, `vercel.json` | DPA 2017 ss.23(2)(j), 36 |
| Medium | SEC-04 | No Content-Security-Policy | `next.config.js` | DPA 2017 s.31 |

## How it is built

```text
skills/konform-skills/
├── SKILL.md                          # the workflow the agent follows
├── references/                       # loaded only when needed
│   ├── scoping.md                    # which laws apply
│   ├── repo-scan-playbook.md         # where to look in each stack, what to search for
│   ├── third-party-services.md       # trackers, widgets, SDKs, consent tools
│   ├── checks-mauritius.md           # MU-DPA-* data protection checks
│   ├── checks-mauritius-business.md  # MU-ECOM, MU-CYB, MU-IP, MU-A11Y, MU-SECT checks
│   ├── checks-international.md       # EU, UK, US, ZA, IN ... checks
│   ├── checks-security-accessibility.md
│   ├── mauritius-law-digest.md       # section-by-section Mauritian law, with sources
│   └── remediation-patterns.md       # code fixes per stack
└── assets/                           # report and document templates (EN + FR)
```

Everything is Markdown, following the [Agent Skills specification](https://agentskills.io/specification), so one folder works across agents. The repository also ships a Claude Code plugin marketplace (`.claude-plugin/marketplace.json`), a Gemini CLI extension manifest (`gemini-extension.json`) and an intentionally non-compliant example site with an answer key ([`examples/`](examples/README.md)) to test the skill.

## Contributing

Laws change and Mauritius deserves great open tooling. Contributions are plain Markdown edits: new laws or guidance, checks, tracker signatures, framework patterns, translations (French, Kreol Morisien) and templates. Please cite official sources. See [CONTRIBUTING.md](CONTRIBUTING.md).

## Disclaimer

This project provides general information to help with technical compliance work. It is not legal advice, may be incomplete or out of date, and does not create a lawyer-client relationship. Law reviewed: **11 October 2026**.

## License

[MIT](LICENSE)
