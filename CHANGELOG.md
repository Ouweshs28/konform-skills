# Changelog

All notable changes to this project are documented here. Legal content changes note the date the law was reviewed.

## 1.0.0 - 2026-10-11

First release. Law reviewed: 11 October 2026.

- `konform-skills` skill: five-step workflow (scope, inventory, evaluate, report, fix) for reviewing website and web-app repositories.
- Mauritius checks (MU-*): Data Protection Act 2017 (incl. the DPO Regulations 2026, GN 117 of 2026, in force 1 January 2027), e-commerce and consumer price rules (2024-2025 amendments for online sales), Electronic Transactions (Amendment) Act 2026 (pending proclamation), Business Registration Act, VAT on foreign digital services and MRA e-invoicing phases, Cybersecurity and Cybercrime Act 2021 (incl. s.23 moderation duty and CII Regulations 2026), ICT Act, copyright, equal opportunities and sector rules (financial services, virtual assets incl. s.34A, gambling and online giveaways, tourism, pharmacy, tobacco and alcohol, real estate, children).
- International checks: EU (GDPR, ePrivacy cookies, consumer law incl. the withdrawal function from 19 June 2026, DSA, EAA, AI Act Art. 50), UK (UK GDPR, PECR as amended by the DUAA 2025, consumer law, Online Safety Act), US (CCPA/CPRA, CalOPPA, COPPA amended rule, CAN-SPAM, ADA), South Africa, India and others.
- Security and accessibility checks mapped to OWASP Top 10:2025, PCI DSS 4.0.1 and WCAG 2.2.
- Repo-scan playbook for 18 stacks, a catalogue of 120+ third-party services and consent tools, remediation patterns.
- Templates: report, privacy notice (English and French), cookie policy and banner wording, legal information page, terms of sale, accessibility statement, breach response plan, security.txt.
- Packaging for `npx skills`, `gh skill`, the Claude Code plugin marketplace and Gemini CLI extensions; CI validation with `skills-ref`.
- `examples/dodo-treats`: an intentionally non-compliant example site with an answer key (`examples/README.md`) to test the skill after changes. The skill was dry-run against it by an independent agent before release.
