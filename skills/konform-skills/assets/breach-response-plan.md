<!--
Personal data breach response plan for a Mauritian organisation running a website or app.
Basis: Data Protection Act 2017 ss.25-26 (Commissioner within 72 hours for EVERY breach; individuals if high risk),
Cybersecurity and Cybercrime Act 2021 (critical information infrastructure reporting, s.35; voluntary CERT-MU reporting),
GDPR Arts 33-34 if EU/UK people are affected. Adapt names and contacts; keep it where the team can find it (e.g. SECURITY.md or docs/).
Not legal advice.
-->

# Personal data breach response plan

A **personal data breach** is "a breach of security leading to the accidental or unlawful destruction, loss, alteration, unauthorised disclosure of, or access to, personal data" (DPA 2017 s.2). Examples: a hacked database, a leaked spreadsheet, an e-mail sent to the wrong person, a lost laptop, ransomware, a misconfigured storage bucket.

## Roles

| Role | Name | Contact |
|---|---|---|
| Incident lead | [[...]] | [[...]] |
| Data protection officer | [[...]] | [[...]] |
| Technical lead / hosting | [[...]] | [[...]] |
| Management sign-off | [[...]] | [[...]] |
| Communications | [[...]] | [[...]] |

## Timeline

The 72-hour clock starts when you **become aware** of the breach.

### 0-4 hours: contain

- Stop the leak: revoke keys and sessions, close the exposed bucket or endpoint, isolate affected systems, recall misdirected e-mails.
- Preserve evidence: logs, screenshots, timestamps. Do not wipe systems before collecting evidence.
- Open a breach record (template below) and alert the DPO.

### 4-48 hours: assess

- What data, how many people and records, which categories (special categories? children? financial data? passwords?).
- What could happen to the people affected (identity theft, fraud, discrimination, distress)? Was the data encrypted with keys that were not compromised?
- Is a processor involved? Processors must alert the controller without undue delay (s.25(2)).

### Within 72 hours: notify the Data Protection Commissioner

- **Every** personal data breach is notified, without undue delay and where feasible within 72 hours (s.25(1)(a)) - unlike the GDPR there is no "unlikely to result in a risk" exemption.
- Use the breach notification e-form on the e-DPO portal (https://dpo.govmu.org).
- Include (s.25(3)): the nature of the breach, categories and approximate number of people and records; the DPO's or contact point's details; the measures recommended to address the breach and mitigate its effects.
- If you notify later than 72 hours, give the reasons for the delay (s.25(1)(b)). Information can be provided in phases.

### Without undue delay: tell the people affected (if high risk)

- Required when the breach is likely to result in a **high risk** to their rights and freedoms (s.26(1)), in clear and plain language (s.26(2)): what happened, likely consequences, what you are doing, what they should do (change passwords, watch bank statements), and a contact point.
- Not required if the data was protected (e.g. strong encryption), later measures removed the high risk, or individual messages would be disproportionate - then make a public communication instead (s.26(3)).

### Other notifications (if they apply)

- **CERT-MU** (voluntary, technical help): MAUCORS https://maucors.govmu.org, incident@cert.govmu.org, hotline 800 2378.
- **Police (Cybercrime Unit)** for criminal attacks such as extortion or intrusion.
- **Critical information infrastructure** owners: report incidents affecting national security, public safety or the public interest under the Cybersecurity and Cybercrime Act 2021 s.35.
- **EU/UK**: if the GDPR or UK GDPR applies, notify the competent supervisory authority within 72 hours unless the breach is unlikely to result in a risk (GDPR Art. 33), and individuals if high risk (Art. 34).
- **Payment cards**: inform your acquirer/payment provider immediately.
- Insurers, banks, partners and clients under contract.

### After the incident

- Fix the root cause; check whether the same weakness exists elsewhere.
- Update this plan, train staff, and record lessons learned.

## Breach record (keep one per breach, even if minor - s.25(4))

| Field | Entry |
|---|---|
| Date and time discovered / occurred | |
| How it was discovered | |
| Description | |
| Data and people affected (categories, approximate numbers) | |
| Likely consequences | |
| Containment and remedial actions | |
| Commissioner notified (date, reference) or reason for delay | |
| Individuals informed (date, how) or reason not | |
| Other notifications | |
| Lessons learned / follow-up actions | |
