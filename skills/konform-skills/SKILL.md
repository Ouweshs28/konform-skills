---
name: konform-skills
description: Check a website or web-app repo for legal compliance with Mauritian law (Data Protection Act 2017) and GDPR, privacy, cookie, consumer, accessibility and security rules; report and fix gaps.
license: MIT
compatibility: Works in any agent that can read and search files (Claude Code, GitHub Copilot, Cursor, Codex, Gemini CLI, Antigravity, Windsurf, OpenCode, Kiro and others). No scripts, installs or network access required.
metadata:
  author: Ouweshs28
  version: "1.0.0"
  last-reviewed: "2026-10-11"
  primary-jurisdiction: Mauritius
  homepage: https://github.com/Ouweshs28/konform-skills
---

# Konform: website compliance for Mauritius and beyond

Review the **source code repository** of a website or web app for legal compliance, **Mauritian law first**, then the foreign laws that apply to its audience. You read code, templates, content and configuration, gather evidence with `path:line` references, explain each gap in plain language with its legal basis, and fix it when the user agrees.

> **Not legal advice.** This skill helps developers find and fix likely gaps with evidence. It does not replace a Mauritian legal practitioner or the Data Protection Office. Say this once in every report.

## When to use

- "Is my site compliant?", "check this repo for the Data Protection Act / GDPR", "review our cookie banner, privacy policy or terms", "what laws apply to my Mauritian e-commerce site?", "prepare for the Data Protection Office", "fix our compliance issues".
- Before launch; before adding analytics, ads, chat, AI or payments; when expanding to EU, UK or US customers.

Do not use it for live penetration testing, tax filing or drafting contracts unrelated to the website. If the user only gives a URL and no code, explain that this skill reviews repositories and ask for the repo (or review only what they paste).

## Workflow

Follow the steps in order. Load reference files only when a step needs them.

### Step 1: Scope

Read [references/scoping.md](references/scoping.md). Decide which law packs apply and why:

1. **Mauritius** applies when the operator is established in Mauritius or uses equipment there (DPA 2017 s.3(5)), or sells to consumers in Mauritius.
2. **Foreign packs** (EU incl. Réunion and Mayotte, UK, US, South Africa, India...) apply when the site targets or monitors people there.
3. **Sector packs** (financial services, virtual assets, gambling, tourism, health, real estate, children, user content, AI) apply when the site's activity triggers them.

Find the facts in the repo first (footer, legal pages, currencies, locales, shipping zones). Ask the user only for what the code cannot tell you: the legal entity, target countries, and whether they want a report only or fixes too. State every assumption.

### Step 2: Inventory the repository

Read [references/repo-scan-playbook.md](references/repo-scan-playbook.md) and [references/third-party-services.md](references/third-party-services.md). Build an evidence inventory **before** judging anything:

- stack, hosting and data locations;
- legal pages (privacy, cookies, terms, legal notice, returns, accessibility) and footer links;
- every data collection point and the fields collected, including special categories and children's data;
- cookies and browser storage, and whether anything non-essential runs before consent;
- third-party services and the countries they send data to;
- the consent mechanism and how trackers are gated;
- security configuration (HTTPS, headers, cookie flags, password hashing, secrets, logging);
- rights handling, retention, marketing e-mails/SMS, AI features, payments and invoices.

Use your own search and read tools. Exclude dependencies and build output. In a monorepo, focus on the public-facing apps and the shared packages they import. Record `path:line` for everything.

### Step 3: Evaluate

Run the checks for every applicable pack:

1. [references/checks-mauritius.md](references/checks-mauritius.md) (data protection) - always first.
2. [references/checks-mauritius-business.md](references/checks-mauritius-business.md) - its e-commerce and tax sections when the site sells or shows prices; its content, IP and accessibility sections always; its sector sections only when Step 1 found the sector.
3. [references/checks-international.md](references/checks-international.md) - only the sections marked applicable in Step 1.
4. [references/checks-security-accessibility.md](references/checks-security-accessibility.md) - always.

Give each check a status and a severity (definitions below). To write the fix line of each finding, use [references/remediation-patterns.md](references/remediation-patterns.md) (reading it is fine in report-only mode). Open [references/mauritius-law-digest.md](references/mauritius-law-digest.md) only when you need more legal detail than a check gives.

### Step 4: Report

Write the report with [assets/report-template.md](assets/report-template.md), save it as `compliance-report.md` at the repo root (or where the user asks; if you cannot write files, put it in the chat), and give a short summary in chat: counts by severity and the top three actions. Answer in the user's language (English or French; Kreol Morisien if asked); keep the official English titles of Mauritian statutes.

### Step 5: Fix (only with the user's approval)

Offer to fix findings, highest severity first. Use [references/remediation-patterns.md](references/remediation-patterns.md) and the templates in `assets/` (privacy notice in English and French, cookie policy, legal notice, terms of sale, accessibility statement, breach response plan, security.txt). Make small, reviewable changes that follow the project's conventions, then re-run the affected checks and update the report.

## Rules

1. **Evidence or nothing.** Every finding cites `path:line` (or quotes the text) or states what was searched and not found.
2. **Never invent law.** Cite only provisions from the reference files. If something is not covered, say "not covered by this skill" and recommend checking with the regulator; do not guess section numbers, dates or fines.
3. **Separate law from good practice.** Label recommendations that are not legal requirements.
4. **MANUAL is a valid answer.** Content in a CMS or database, tag-manager containers, hosting settings and organisational duties (registration, DPO, records, contracts, DPIA, breach procedure) cannot be seen in code: list them as MANUAL with the question to ask.
5. **Never fabricate company facts.** Use `[[placeholders]]` for BRN, addresses, DPO details, vendors and retention periods in generated documents.
6. **Protect secrets and personal data.** Mask any secret you find; do not copy real customer data into the report.
7. **Read-only until approved.** During Steps 1-4 do not modify project files, install packages or run the app; the only file you create is the report.
8. **Be proportionate.** A brochure site with a contact form is not a bank: scale severity to the data and the audience.

## Mauritius essentials

The checks most often failed by Mauritian sites. Details and more checks in `checks-mauritius.md` and `checks-mauritius-business.md`.

| Check | Requirement (Data Protection Act 2017 unless stated) |
|---|---|
| MU-DPA-01, 02 | A privacy notice, available where data is collected, covering the s.23(2) items: controller and DPO contact, purposes, recipients, voluntary or mandatory, rights (access, rectification, erasure, restriction, objection, withdrawal of consent), automated decisions, retention, complaint to the Data Protection Commissioner, transfers abroad. |
| MU-DPA-03, 04 | A lawful basis for each purpose (s.28); consent that is a clear affirmative act, provable (s.24(1)), withdrawable at any time (s.24(2)). No pre-ticked boxes. |
| MU-DPA-05 | Online identifiers are personal data (s.2). Analytics, advertising and other non-essential trackers only after opt-in, with a cookie notice. |
| MU-DPA-06, 07 | Parental consent below 16 (s.30); special categories (health, religion, ethnic origin or "community", biometrics, offences...) only under s.29. |
| MU-DPA-09, 10 | Working channels for access (written, free, one month), rectification, erasure and objection; marketing opt-out honoured at once (s.40). No portability right in Mauritius. |
| MU-DPA-11 | Every foreign service (hosting, analytics, e-mail, CRM, AI) is a transfer: disclose it and meet s.36 (proof of safeguards to the Commissioner, or another condition). |
| MU-DPA-12 | Security of processing, including encryption and testing (s.31); written processor contracts (s.31(4)). |
| MU-DPA-13, 14 | Registration with the Data Protection Office (s.14; certificate valid 3 years, s.16(3), renewal s.18); a designated DPO (s.22(2)(e)) whose contact details must be on the website from 1 January 2027 (GN 117 of 2026). |
| MU-DPA-17 | Breaches notified to the Commissioner within 72 hours (s.25). |
| MU-ECOM-01 | Legal name and BRN on order confirmations, invoices and receipts (Business Registration Act 2002 s.14; Companies Act 2001 s.38); show them on the site too. |
| MU-ECOM-02 | All-in prices in rupees with VAT status (inclusive, zero or nil), compulsory charges included, foreign-currency disclosures (Consumer Protection (Price and Supplies Control) Act 1998 ss.2, 7, 7B). |
| MU-ECOM-03 to 05 | Terms, returns and warranty information before purchase; no misleading "no refunds" (Fair Trading Act 1979 s.4; Code Civil hidden-defects guarantee); review-and-correct step and order acknowledgement (Electronic Transactions Act, s.14C pending). |
| MU-ECOM-06, 07 | VAT invoices and MRA e-invoicing (turnover over Rs 40 million since 1 Sept 2026); "was" prices based on the 30-day lowest price; online giveaways need a gambling (lottery) licence. |
| MU-CYB-03 | User content: report and takedown process; moderate "undesirable content" flagged by the authorities (Cybersecurity and Cybercrime Act 2021 s.23). |
| MU-SECT-* | Licences and advertising rules for financial services, crypto (no soliciting Mauritians without a licence), gambling, tourism, medicines, tobacco/vapes (no online sales) and alcohol. |

Penalties under the DPA 2017 are criminal: up to Rs 200,000 and 5 years' imprisonment (s.43).

## Status and severity

| Status | Meaning |
|---|---|
| FAIL | Requirement absent or contradicted, with evidence |
| PARTIAL | A mechanism exists but is incomplete (e.g. a notice missing some items) |
| MANUAL | Cannot be decided from the repository; say what to check |
| PASS | Evidence that it is met |
| N/A | Does not apply (say why) |

| Severity | Use for |
|---|---|
| Critical | Likely serious harm or offence now: personal data sent over plain HTTP, exposed secrets or personal data, card data handled insecurely, a child-directed service without parental consent, special-category data exposed or used for automated decisions |
| High | Clear breach of a specific legal requirement: trackers before consent, no privacy notice, pre-ticked consent, special-category data without a s.29 ground, no DPO contact, unlicensed regulated activity |
| Medium | Partial compliance or missing information that a regulator would flag |
| Low | Good practice or minor gaps |

Also use **NOT COVERED** for topics outside this skill (see "Not covered (yet)"): say so and suggest who to ask.

**Counting.** Report each **root cause once**, under its main ID, and list the other IDs it fails (e.g. one stub privacy notice: "MU-DPA-02, also MU-DPA-01, MU-DPA-21"; trackers before consent: "MU-DPA-05, also EU-COOK-01, EU-COOK-02"). A grouped finding takes the **highest** severity of its IDs. Roll-up checks (MU-DPA-12 from SEC-*, MU-A11Y-01 from A11Y-*) cite the underlying IDs and are not counted again. Severity totals count FAIL and PARTIAL root causes; MANUAL items are listed and counted separately. For technical facts you cannot confirm from the repo or the references (e.g. a library version with a known vulnerability), say how to verify them (e.g. `npm audit`).

## Output

- `compliance-report.md` following `assets/report-template.md`: executive summary, applicable law with reasons, findings table, detailed findings (evidence, requirement, impact, fix), data inventory (personal data, cookies, third parties and transfers), MANUAL checklist, remediation plan, limitations, sources and the law-review date (`metadata.last-reviewed`).
- **Keep it proportionate.** The findings table lists FAIL and PARTIAL root causes; MANUAL items go to the manual checklist; PASS and N/A are one line each. Write a full detail block for each Critical finding and the five most important High findings; every other finding keeps its one-line fix in the table. A small site's report should stay around 200-300 lines.
- A short chat summary. Offer Step 5.

## Not covered (yet)

Say "not covered by this skill" and suggest asking the relevant regulator or a legal practitioner for: food safety, labelling and allergen rules; merchant credit, buy-now-pay-later and hire purchase; employment law beyond candidate data; broadcasting and telecoms licensing; professional advertising rules (e.g. medical and legal professions); export controls and sanctions. Contributions welcome.

## Reference files

| File | Use it for |
|---|---|
| [references/scoping.md](references/scoping.md) | Deciding which law packs and sector rules apply |
| [references/repo-scan-playbook.md](references/repo-scan-playbook.md) | Where to look in each stack and what to search for |
| [references/third-party-services.md](references/third-party-services.md) | Recognising trackers, widgets, SDKs and consent tools; opt-in need; vendor country (run its search patterns, then look up the services you found) |
| [references/checks-mauritius.md](references/checks-mauritius.md) | Mauritian data protection checks (MU-DPA-*) |
| [references/checks-mauritius-business.md](references/checks-mauritius-business.md) | Mauritian e-commerce, tax, content, IP, accessibility and sector checks |
| [references/checks-international.md](references/checks-international.md) | EU, UK, US, South Africa, India and others |
| [references/checks-security-accessibility.md](references/checks-security-accessibility.md) | SEC-* and A11Y-* checks |
| [references/remediation-patterns.md](references/remediation-patterns.md) | Code fixes for common findings |
| [references/mauritius-law-digest.md](references/mauritius-law-digest.md) | Optional: section-by-section Mauritian law, penalties and sources |
