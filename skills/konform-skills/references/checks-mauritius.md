# Mauritius checks: data protection

Run these first, for every site in the Mauritius pack (`scoping.md`). **Law reviewed: 11 October 2026.** Citations are to the Data Protection Act 2017 (DPA) unless stated; more detail, penalties and sources are in `mauritius-law-digest.md` (open it only when you need more than the check says). E-commerce, tax, content, accessibility and sector checks are in `checks-mauritius-business.md`. Letters A-N refer to the inventory in `repo-scan-playbook.md`.

Each check gives: the **requirement** and its legal basis, what to **look for** in the repository, when it **fails**, the default **severity**, and the **fix**. "Fails if" describes non-compliance: use **FAIL** when the requirement is absent or contradicted, **PARTIAL** when a mechanism exists but is incomplete (e.g. a notice missing some items). Items marked *(pending)* are enacted but not confirmed in force; report them as "upcoming" good practice, not as breaches.

## Data protection (MU-DPA)

### MU-DPA-01: Privacy notice published and reachable

- **Requirement:** people must be informed **at the time their data is collected** (s.23(2)); processing must be transparent (s.21(a)).
- **Look for:** B (a privacy page and a footer link on every page), C (a short notice or link next to every form, sign-up, checkout and chat).
- **Fails if:** no privacy notice; notice not linked site-wide; a form collects personal data with no notice or link nearby.
- **Severity:** High (Medium if the only data collected is a contact e-mail and a notice exists elsewhere).
- **Fix:** publish a notice from `assets/privacy-notice-template.md` (French: `privacy-notice-template.fr.md`); link it in the footer and beside each form (`remediation-patterns.md` §3).

### MU-DPA-02: Privacy notice content

- **Requirement:** the notice covers s.23(2)(a)-(k): controller identity and contact, its representative and **any data protection officer** (a); purposes (b); intended recipients (c); whether supplying data is **voluntary or mandatory** (d); the right to **withdraw consent** (e); rights of access, rectification, restriction, erasure and **objection** (f); **automated decisions** and profiling with their logic and consequences (g); **storage period** (h); the right to **complain to the Data Protection Commissioner** (i); **transfers abroad** and the protection afforded (j); anything else needed for fairness (k). The right to object must be brought **explicitly** to people's attention (s.40(4)). The Office also recommends stating the lawful basis.
- **Look for:** B - read the whole notice and tick each item; note where it is vague ("we may share with partners").
- **Fails if:** applicable items are missing or misleading (PARTIAL when a few items are missing; FAIL when most are missing or the notice misstates the law). Do **not** require a data-portability right (it does not exist in the DPA); require it only when the GDPR applies.
- **Severity:** Medium (High if four or more items are missing).
- **Fix:** add the missing items; one notice can serve the DPA and the GDPR (template has both).

### MU-DPA-03: Lawful basis for each purpose

- **Requirement:** every processing operation needs one of the s.28(1) bases: consent; contract or pre-contract steps; legal obligation; vital interests; public functions; **legitimate interests** unless unwarranted given the harm to the person; research. Processing without a basis is an offence (s.28(2)).
- **Look for:** C, F, J, K - map each purpose (orders, contact, newsletter, analytics, ads, CV handling, AI) to a basis.
- **Fails if:** a purpose has no plausible basis (e.g. sharing customer lists with partners without consent; tracking for ads on "legitimate interests").
- **Severity:** High for purposes without any basis; Medium for an undocumented but plausible basis.
- **Fix:** document the basis per purpose in the notice and the record of processing; switch to consent where needed.

### MU-DPA-04: Valid consent

- **Requirement:** consent is a "freely given specific, informed and unambiguous indication ... by a statement or a clear affirmative action" (s.2). The controller **bears the burden of proof** (s.24(1)); it can be withdrawn at any time (s.24(2)); bundling unnecessary consent with a contract undermines it (s.24(3)). The Office's guidance: unbundled from terms, active opt-in (**pre-ticked boxes are not valid**), granular, named, documented.
- **Look for:** C (checkbox default states, consent wording, whether marketing consent is a separate optional box), D/G (where consent is stored, with timestamp and wording), withdrawal paths (unsubscribe, cookie settings, account settings).
- **Fails if:** pre-ticked or required marketing box; consent hidden in the terms; "by using this site you agree"; no record of consent; no way to withdraw.
- **Severity:** High.
- **Fix:** unticked, optional, purpose-specific checkboxes; store consent records; add withdrawal links (`remediation-patterns.md` §3).

### MU-DPA-05: Cookies, trackers and similar technologies

- **Requirement:** online identifiers (cookie IDs, device IDs, IP addresses) are personal data (s.2 "data subject"). Tracking therefore needs a lawful basis (s.28) and notice (s.23), and usually a transfer condition (s.36). Mauritius has **no cookie-specific law yet** (E-Privacy Regulations are only planned), but advertising, cross-site tracking and session replay are hard to justify without consent, and people can object at any time (s.40). Use opt-in consent to the Office's standard for every non-essential tracker. EU/UK visitors make prior consent a legal requirement (EU-COOK-01, UK-01).
- **Look for:** E, F, G - trackers in global layouts, tag managers, cookies set on first render, consent tool configuration, gating of scripts, behaviour on "Reject".
- **Fails if:** analytics/advertising/session-replay scripts or cookies load before opt-in; a banner that only informs; no cookie information.
- **Severity:** High.
- **Fix:** gate trackers behind consent (`remediation-patterns.md` §1), click-to-load embeds (§2), cookie policy (`assets/cookie-policy-template.md`).

### MU-DPA-06: Children's data

- **Requirement:** "No person shall process the personal data of a child below the age of 16 years unless consent is given by the child's parent or guardian" (s.30(1)), with every reasonable effort to **verify** that consent (s.30(2)). This applies to all processing, not only online services. Contracts with minors (under 18) are voidable under the Code Civil (art. 1123).
- **Look for:** A, C, N - services aimed at or likely used by children (schools, kids' activities, games, education), date-of-birth or age fields, sign-up flows without age checks, child photos.
- **Fails if:** a child-directed service collects data without a parental-consent flow; ads or profiling aimed at children. A site that is not aimed at children and shows no sign of collecting their data: PASS or N/A (an age statement in the notice is good practice, Low).
- **Severity:** Critical for child-directed services without parental consent; High for other processing of under-16s' data without it.
- **Fix:** age screening plus verified parental consent (`remediation-patterns.md` §10); no profiling or ads for children.

### MU-DPA-07: Special categories of personal data

- **Requirement:** racial or ethnic origin, political opinion or adherence, religious or philosophical beliefs, trade union membership, physical or mental health, sexual orientation, practices or preferences, genetic or biometric data, offences and criminal proceedings (s.2) may be processed only under s.29(1). Offence: s.29(3). No automated evaluation may be based on them (s.38(3)). The Act's wording on how a s.28 basis and the s.29(1) conditions combine is ambiguous (see `mauritius-law-digest.md` §1.9): in practice rely on the person's **explicit, specific consent** together with a clear need, or on a clearly applicable s.29(1)(c)-(d) condition (e.g. legal claims, health care under professional secrecy, vital interests). For everyday needs such as food allergies for an order, ask only what is needed to prepare the product safely, make it optional, explain why, protect it, and delete it after delivery.
- **Look for:** C, D - fields such as health, allergies, disability, religion, "community" (in Mauritius often a proxy for ethnicity or religion), photos for face recognition, fingerprints, certificate of character, CV uploads that invite such details.
- **Fails if:** special-category data collected without explicit consent or another s.29 ground, without extra safeguards, or without a clear need.
- **Severity:** High (Critical if exposed, collected at scale, or used for automated decisions).
- **Fix:** remove unnecessary fields; explicit, separate consent; encryption and restricted access (SEC-14); DPIA (MU-DPA-16).

### MU-DPA-08: Data minimisation and accuracy

- **Requirement:** data must be "adequate, relevant and limited to what is necessary" and accurate (s.21(c)-(d)); collect only what is needed for a lawful purpose (s.23(1)).
- **Look for:** C, D - required fields that the purpose does not need (NIC or passport number for a newsletter, date of birth or gender for a contact form), copies of identity documents, excessive logging.
- **Fails if:** fields clearly exceed the purpose, especially identity numbers or document scans.
- **Severity:** Medium (High for national identity numbers or ID scans without a legal need).
- **Fix:** remove or make fields optional; explain why any identity number is required.

### MU-DPA-09: Rights of data subjects

- **Requirement:** **access** on written request, free, within one month (extendable once by one month) (s.37); **rectification**, **erasure** and **restriction** (s.39); **objection** in writing at any time (s.40); rights may be exercised by a parent, guardian or authorised person (s.41). The Office recommends self-service portals and an automated way to object for online services. There is **no data-portability right** under the DPA.
- **Look for:** I - account settings (edit, delete, export), unsubscribe, a privacy contact address, documented request handling.
- **Fails if:** no channel to exercise rights; deletion impossible; requests sent to an unmonitored address.
- **Severity:** Medium.
- **Fix:** a privacy contact and request procedure; account deletion and data download (`remediation-patterns.md` §8).

### MU-DPA-10: Direct marketing

- **Requirement:** marketing by e-mail, SMS or WhatsApp needs a lawful basis (consent is the safe one) and people can object at any time; after an objection to direct marketing the data "shall no longer be processed for that purpose" (s.40(2)-(3)). Direct marketing is "the communication of any advertising or marketing material which is directed to any particular individual" (s.40(5)). Mauritius has no separate anti-spam law; misleading or harmful messages can also breach the ICT Act s.46 and consumer law.
- **Look for:** J - marketing sends, newsletter sign-up, unsubscribe link and handling, suppression list, `List-Unsubscribe` headers, purchased lists.
- **Fails if:** marketing without consent or opt-out; unsubscribe missing or not honoured; contact lists bought or scraped.
- **Severity:** High.
- **Fix:** separate opt-in, unsubscribe in every message, honour opt-outs permanently (`remediation-patterns.md` §8).

### MU-DPA-11: Transfers outside Mauritius

- **Requirement:** personal data may leave Mauritius only if the controller or processor has **provided the Commissioner with proof of appropriate safeguards** (s.36(1)(a), done through the e-DPO portal), or with the person's **explicit consent** after being told the risks, or when necessary for a contract with or in the interest of the person, legal claims, vital interests, public interest provided by law, or (narrowly) compelling legitimate interests (s.36(1)(b)-(d)). Prior authorisation is needed where safeguards cannot be provided (s.35(1)). The notice must disclose transfers (s.23(2)(j)). There is no adequacy list.
- **Look for:** D (hosting and database regions), F (every foreign service: analytics, e-mail, CRM, chat, AI APIs, payment, CDN), privacy notice wording.
- **Fails if:** foreign services are used and transfers are not disclosed; no evidence of a s.36 condition (usually MANUAL).
- **Severity:** Medium (High for special-category data or large volumes).
- **Fix:** list recipients and countries in the notice; file transfer safeguards through the e-DPO portal; prefer regions and vendors with strong contractual safeguards.

### MU-DPA-12: Security of processing

- **Requirement:** appropriate measures against unauthorised access, loss and destruction, including **pseudonymisation and encryption**, ongoing confidentiality, integrity, availability and resilience, timely restoration after incidents, and **regular testing** (s.31(1)-(2)); staff awareness (s.31(6)).
- **Look for:** H and all SEC-* checks in `checks-security-accessibility.md`.
- **Fails if:** any Critical or High SEC finding.
- **Severity:** inherit the worst SEC finding. This is a roll-up: cite the SEC IDs here but do not count it again in the severity totals.
- **Fix:** see SEC-* fixes.

### MU-DPA-13: Registration with the Data Protection Office

- **Requirement:** "no person shall act as controller or processor unless he or it is registered with the Commissioner" (s.14). Certificates last 3 years (s.16(3)); renew at least 3 months before expiry (s.18(1)); notify changes within 14 days (s.17). Fees: Rs 1,000 / 1,500 / 2,500 by headcount (GN 152 of 2020). Online only, via https://dpo.govmu.org.
- **Look for:** not visible in code. Some sites state a registration number in the notice or footer.
- **Status:** MANUAL - ask whether the organisation (and any processor role it has, e.g. an agency hosting client data) is registered and the certificate is current; suggest checking the public register (https://dpo.govmu.org/dpoPortal/registerList.jsf).
- **Severity if not registered:** High (offence under s.43).

### MU-DPA-14: Data protection officer

- **Requirement:** every controller designates "an officer responsible for data protection compliance issues" (s.22(2)(e)) and gives the DPO's contact details at collection (s.23(2)(a)). **From 1 January 2027** (GN 117 of 2026): the DPO must be a certified staff member, be notified to the Office within 14 days, and the controller "shall publish the contact details of the data protection officer ... where applicable, on the website" (reg 8(1)); breach of reg 3(4) or 8(1) is an offence (reg 9).
- **Look for:** B (privacy notice, footer, contact page), A (DPO e-mail such as `dpo@`).
- **Fails if:** no DPO contact in the notice; from 2027, no DPO contact on the website.
- **Severity:** High.
- **Fix:** publish the DPO's contact details in the notice and footer (`remediation-patterns.md` §7); confirm designation and certification (MANUAL).

### MU-DPA-15: Record of processing operations

- **Requirement:** every controller and processor keeps a record of processing (s.33): purposes, categories of people and data, recipients (including abroad), transfers and safeguards, erasure time limits, verification mechanisms. Template on the Office's website.
- **Status:** usually MANUAL; check `docs/` for a record or data map. Your inventory (report section 5) is a good starting point: offer it.
- **Severity if missing:** Medium.

### MU-DPA-16: Data protection impact assessment

- **Requirement:** a DPIA before processing likely to result in a high risk (s.34): systematic and extensive profiling with significant effects, large-scale special-category data, large-scale monitoring of public areas. The Office's high-risk list includes **monitoring online buying behaviour for targeted advertising**, **matching website data with marketing databases** and **AI-based systems**. High residual risk requires prior consultation (s.35(2)).
- **Look for:** F, K - ad-targeting pixels with audience building, session replay, recommendation or scoring engines, AI features, health or biometric data.
- **Status:** MANUAL (DPIAs are documents), but flag the triggers you found.
- **Severity if a trigger exists and no DPIA is known:** Medium (High for special categories or AI decisions).

### MU-DPA-17: Personal data breaches

- **Requirement:** notify the Commissioner without undue delay and where feasible **within 72 hours** of becoming aware of **any** personal data breach (s.25(1)), with the details in s.25(3), and document it (s.25(4)); tell affected people without undue delay when there is a high risk (s.26). Processors must alert the controller (s.25(2)).
- **Look for:** I - incident runbook, `SECURITY.md`, breach contacts. The technical side (logging and alerting) is SEC-16: report a shared root cause once.
- **Fails if:** no incident procedure or contact (usually MANUAL: ask).
- **Severity:** Medium (MANUAL for the organisational part).
- **Fix:** adopt `assets/breach-response-plan.md`; log security events.

### MU-DPA-18: Processors and vendors

- **Requirement:** choose processors offering sufficient guarantees, under a **written contract** obliging them to act only on instructions and to apply the security obligations (s.31(4)); a processor exceeding instructions becomes a controller (s.31(5)).
- **Look for:** F - every vendor that stores or processes personal data (hosting, e-mail, CRM, chat, forms, analytics, AI).
- **Status:** MANUAL - list the vendors found and ask whether contracts or data processing terms are in place.
- **Severity if missing:** Medium.

### MU-DPA-19: Retention and deletion

- **Requirement:** keep data no longer than necessary (s.21(e)); destroy data once the purpose has lapsed and tell processors (s.27); state the storage period (s.23(2)(h)).
- **Look for:** D (soft-delete only, no clean-up), I (scheduled deletion jobs), logs and backups retention, abandoned carts, CVs of rejected candidates.
- **Fails if:** data kept indefinitely with no rule; retention periods missing from the notice.
- **Severity:** Medium.
- **Fix:** define retention per data type; scheduled deletion or anonymisation.

### MU-DPA-20: Automated decisions, profiling and AI

- **Requirement:** people may not be subject to a decision based **solely** on automated processing, including profiling, that produces legal effects or similarly significant effects, unless necessary for a contract, authorised by law or based on explicit consent, with safeguards (s.38(1)-(2), (5)); never based on special categories (s.38(3)); disclose the logic and consequences (s.23(2)(g)). Mauritius has no AI law: the National AI Strategy and the FAIR Guidelines (MITCI, April 2026) are voluntary.
- **Look for:** K - credit, insurance, recruitment or fraud scoring; automatic rejections; chatbots; what personal data is sent to AI providers.
- **Fails if:** significant automated decisions without human review or disclosure; personal data sent to AI vendors without notice, basis or transfer condition.
- **Severity:** High for significant automated decisions; Medium for undisclosed AI processing.
- **Fix:** human review, notice wording, AI disclosure (`remediation-patterns.md` §9), DPIA.

### MU-DPA-21: Outdated or wrong legal references

- **Requirement:** notices must not mislead (s.21(a); s.23(2)(k)).
- **Look for:** B - mentions of the **Data Protection Act 2004** (repealed by the DPA 2017), the **Computer Misuse and Cybercrime Act 2003** (repealed by the Cybersecurity and Cybercrime Act 2021), the **Prize Competitions Act** (repealed by the Gambling Regulatory Authority Act), the EU-US **Privacy Shield** or **Safe Harbor**, Directive 95/46/EC, a GDPR "data portability" promise presented as Mauritian law.
- **Severity:** Medium (Low for a stray reference).
- **Fix:** update to current law.

## Sources

- Data Protection Act 2017 (consolidated, includes s.3(8)): https://mitci.govmu.org/mitci/wp-content/uploads/2025/05/Data-Protection-Act-2017.pdf ; Data Protection Office copy: https://dataprotection.govmu.org/Documents/DPA_2017.pdf
- Data Protection (Fees) Regulations 2020, GN 152 of 2020: https://dataprotection.govmu.org/Pages/The%20Law/152%20The%20Data%20Protection%20Fees%20Regulations%202020.pdf
- Data Protection (Designation, Tasks and Position of Data Protection Officers) Regulations 2026, GN 117 of 2026: https://mitci.govmu.org/mitci/wp-content/uploads/2026/06/117_The-Data-Protection_Designation-Tasks-and-Position-of-Data-Protection-Officers_Reg.pdf
- Data Protection Office: https://dataprotection.govmu.org ; e-DPO portal and public register: https://dpo.govmu.org
- Introductory Guide to the DPA 2017 (consent guidance): https://dataprotection.govmu.org/Pages/Downloads/Publications%20and%20Guidelines/Guidelines.pdf
- High-risk processing list (DPIA): https://dataprotection.govmu.org/Documents/Documents%20and%20Forms%20-%20Homepage/HIGH%20RISK%20PROCESSING%20OPERATIONS.PDF