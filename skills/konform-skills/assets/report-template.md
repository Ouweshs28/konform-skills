# Website compliance report: [[Site or repository name]]

| | |
|---|---|
| Repository | [[repo name / path]] at commit [[short SHA, or "not a git repository - files as of YYYY-MM-DD"]] |
| Date | [[YYYY-MM-DD]] |
| Prepared with | `konform-skills` skill [[version]] (law reviewed [[last-reviewed date from SKILL.md]]) by [[agent / model]] |
| Scope | [[whole repository / listed paths]] - static review of source code, templates, content and configuration |
| Jurisdictions assessed | Mauritius (primary); [[EU / UK / US / South Africa / India / none]] |

> **Not legal advice.** This report is an evidence-based technical review that helps you find and fix likely compliance gaps. Laws change and some duties cannot be verified from code. Confirm significant decisions with a Mauritian legal practitioner or the Data Protection Office.

## 1. Executive summary

[[Two or three sentences: what the site does, overall posture, the most important risk.]]

| Critical | High | Medium | Low | Manual checks |
|---|---|---|---|---|
| [[n]] | [[n]] | [[n]] | [[n]] | [[n]] |

Counts are FAIL and PARTIAL **root causes**; manual checks are counted separately.

**Top priorities**

1. [[Finding ID - one-line action]]
2. [[...]]
3. [[...]]

## 2. Context and applicable law

- **Operator:** [[legal name, BRN if found, or "not found in repo"]]. Established in Mauritius: [[yes / no / unknown]].
- **What the site does:** [[e-commerce, bookings, SaaS, content, ...]]
- **Audience signals:** [[currencies, languages, shipping/service countries, phone prefixes, hreflang - with evidence]]
- **Sector signals:** [[financial services, tourism, health, gambling, children, AI features, user content, ...]]
- **Assumptions:** [[anything assumed because it could not be confirmed]]

| Law pack | Applies? | Why (evidence) |
|---|---|---|
| Mauritius: Data Protection Act 2017 | [[Yes]] | [[e.g. operator established in Mauritius (s.3(5)); footer `src/components/Footer.tsx:12`]] |
| Mauritius: e-commerce, consumer, tax | [[Yes/No]] | [[...]] |
| Mauritius: payments | [[Yes/No/Unclear]] | [[...]] |
| Mauritius: cybersecurity and online content, IP, accessibility | Yes | Apply to every site |
| Mauritius: sector rules | [[none / which sectors]] | [[...]] |
| EU (GDPR, ePrivacy, consumer, EAA, AI Act) | [[...]] | [[...]] |
| UK | [[...]] | [[...]] |
| US (CalOPPA, CCPA, COPPA) | [[...]] | [[...]] |
| South Africa / India / other | [[...]] | [[...]] |

## 3. Findings overview

Status: **FAIL** (requirement absent or contradicted), **PARTIAL** (mechanism exists but incomplete). One row per **root cause**, highest severity first; put the other check IDs it fails in the ID column. MANUAL items go to section 6, not here.

| # | ID (also fails) | Finding | Status | Severity | Evidence | Legal basis | Fix (one line) |
|---|---|---|---|---|---|---|---|
| 1 | [[MU-DPA-05 (EU-COOK-01, EU-COOK-02)]] | [[Google Analytics loads before consent]] | FAIL | High | `[[app/layout.tsx:23]]` | [[DPA 2017 s.28, s.23; ePrivacy Art. 5(3)]] | [[Gate GA behind opt-in consent]] |

**Passed:** [[IDs, one line]]. **Not applicable:** [[IDs with a short reason, one line]]. **Not covered by this skill:** [[topics, one line]].

**Roll-ups (not counted again):** MU-DPA-12 = [[worst SEC finding]]; MU-A11Y-01 = [[worst A11Y finding]].

## 4. Detailed findings

Write this block for each **Critical** finding and the **five most important High** findings, highest severity first. Other findings are covered by their one-line fix in section 3.

### [[Severity]] [[ID]]: [[title]]

- **Status:** [[FAIL / PARTIAL]] (also fails: [[other IDs, if any]])
- **Evidence:** `[[path:line]]` - "[[short quote]]"
- **Requirement:** [[what the law requires, in plain words]] ([[citation]])
- **Why it matters:** [[risk to people and to the business; penalty if relevant]]
- **Fix:** [[concrete change: file to edit, what to add or remove]] - effort [[S / M / L]]

## 5. Data inventory

### 5.1 Personal data collected

| Collection point | Data | Purpose | Lawful basis (proposed) | Retention | Recipients | Evidence |
|---|---|---|---|---|---|---|
| [[Contact form]] | [[name, email, phone, message]] | [[answer enquiries]] | [[s.28(1)(b)(i) pre-contract / legitimate interests]] | [[...]] | [[email provider]] | `[[path:line]]` |

### 5.2 Cookies and browser storage

Durations come from the code or the vendor's documentation; write "check on the live site" when unknown.

| Name | Provider | Purpose | Duration | Set before consent? | Evidence |
|---|---|---|---|---|---|
| [[_ga]] | [[Google]] | [[analytics]] | [[2 years]] | [[yes]] | `[[path:line]]` |

### 5.3 Third parties and transfers outside Mauritius

| Service | Data shared | Country | Transfer condition (DPA s.36) | In privacy notice? | Evidence |
|---|---|---|---|---|---|
| [[Google Analytics]] | [[online identifiers, usage]] | [[US]] | [[to be proven to the Commissioner]] | [[no]] | `[[path:line]]` |

## 6. Manual checks

Things the code cannot show (every MANUAL check). Ask the owner to confirm each one; give the check ID and the severity if the answer is "no".

- [ ] Registered as controller (and processor, if applicable) with the Data Protection Office, certificate valid (DPA s.14-18; online register at https://dpo.govmu.org)
- [ ] Data protection officer designated (s.22(2)(e)); from 1 January 2027 a certified staff member, notified to the Office within 14 days, contact details published on the website (GN 117 of 2026)
- [ ] Record of processing operations kept (s.33)
- [ ] DPIA done for high-risk processing such as profiling for targeted ads or AI systems (s.34)
- [ ] Transfers abroad covered: safeguards proven to the Commissioner through the e-DPO portal, or another s.36 condition
- [ ] Written contracts with processors (hosting, email, analytics, CRM, chat) (s.31(4))
- [ ] Breach procedure able to notify the Commissioner within 72 hours (s.25)
- [ ] Tag-manager container, CMS plugins and hosting configuration reviewed (not visible in the repo)
- [ ] [[sector licences, VAT registration and e-invoicing, other items found during the review]]

## 7. Remediation plan

| When | Action | Findings | Effort |
|---|---|---|---|
| Now (this week) | [[Gate trackers behind opt-in consent]] | [[MU-DPA-05, EU-COOK-01]] | [[M]] |
| Next 30 days | [[...]] | [[...]] | [[...]] |
| Next 90 days | [[...]] | [[...]] | [[...]] |

## 7b. What already works

- [[Positive findings with evidence: e.g. HSTS configured in `next.config.js:14`]]

## 8. Limitations

- Static review of the repository at the commit above; the running site may differ (content in a CMS or database, tag-manager containers, hosting headers).
- Keyword and code checks show whether something is present, not whether wording is legally adequate.
- [[Anything you could not access or verify]]

## 9. Sources

[[List every statute, regulation and guidance document cited, with links from the skill's references, and the date the law was last reviewed.]]
