# International checks

Load only the sections that `scoping.md` marked as applicable (jump to their headings; you do not need the whole file). Mauritius checks (`checks-mauritius.md`, `checks-mauritius-business.md`) always come first. Status of the law: **11 October 2026**. Items marked *(unverified)* come from secondary sources; say so in the report. Use FAIL when a requirement is absent or contradicted and PARTIAL when a mechanism exists but is incomplete.

Each check lists: when it applies, what the law requires, what to look for in the repo (letters refer to the inventory in `repo-scan-playbook.md`), the default severity if it fails, and the fix.

## European Union (incl. France, Réunion and Mayotte)

Réunion and Mayotte are EU outermost regions (TFEU Arts 349 and 355(1)): EU law applies there in full, so serving customers in Réunion means serving the EU.

### EU-GDPR-01: Does the GDPR apply, and is an EU representative named?

- **Applies when** (GDPR Art. 3(2)): the site **offers goods or services to people in the EU** or **monitors their behaviour** in the EU.
  - Targeting factors (EDPB Guidelines 3/2018): an EU country named; tourism activity aimed at EU residents; EU addresses/phone numbers (+33, +262) or `.fr/.re/.eu` domains; travel directions from the EU; EU customer testimonials; **a currency other than the one used in the trader's country** (EUR prices); delivery to the EU. Mere accessibility is not enough (Recital 23). French or English alone is a weak signal in Mauritius.
  - Monitoring: behavioural advertising, cookie or fingerprint tracking, profiling, location-based marketing.
- **Requirement:** a non-EU controller covered by Art. 3(2) must designate in writing a **representative in the EU** (Art. 27) unless processing is occasional, low-risk and involves no large-scale special-category data. Ongoing EU sales are not "occasional". Name the representative in the privacy notice (Art. 13(1)(a)).
- **Repo evidence:** A (EUR prices, shipping zones, locales `fr-FR`/`fr-RE`, hreflang), F (ad pixels, analytics), B (privacy notice text).
- **Severity if missing:** High (Art. 27 breaches can reach EUR 10 million or 2% of turnover).
- **Fix:** document the applicability analysis; appoint and name an EU representative; add GDPR sections to the notice (see `assets/privacy-notice-template.md`).

### EU-GDPR-02: Privacy notice content (Arts 12-14)

- **Requirement** on top of the Mauritian s.23(2) items: legal basis **for each purpose** and the legitimate interests relied on; the EU representative; recipients; **transfers and safeguards**; retention; rights including **data portability**; the right to complain to a **supervisory authority** (e.g. CNIL); automated decisions; source of data not collected from the person (Art. 14). Concise, intelligible, easily accessible (Art. 12).
- **Repo evidence:** B (read the notice), C (just-in-time notices at forms).
- **Severity:** Medium (High if no notice at all).
- **Fix:** add the missing items; keep one notice that satisfies both the DPA 2017 and the GDPR.

### EU-GDPR-03: Consent, children and rights handling

- **Consent** (Arts 4(11), 7): freely given, specific, informed, unambiguous; provable; as easy to withdraw as to give; not bundled with terms.
- **Children** (Art. 8), age below which parental consent is needed for information-society services: 13 (BE, DK, EE, FI, LV, MT, PT, SE), 14 (AT, BG, CY, IT, LT, ES), 15 (CZ, FR, GR, SI), 16 (HR, DE, HU, IE, LU, NL, PL, RO, SK). Mauritius itself uses 16 (DPA s.30), which also satisfies every EU threshold.
- **Rights** (Arts 12, 15-22): answer within one month (extendable by two); portability for data given on consent or contract.
- **Repo evidence:** C (checkboxes, age fields), G (consent logs), I (deletion/export features).
- **Severity:** High for invalid consent or children's data; Medium for missing rights tooling.

### EU-GDPR-04: Accountability duties

- Processor contracts (Art. 28), records of processing (Art. 30), security (Art. 32), breach notice to the authority within **72 hours** (Art. 33) and to individuals if high risk (Art. 34), DPIA for high-risk processing (Art. 35), DPO where core activities involve large-scale monitoring or special data (Art. 37).
- **Repo evidence:** I (incident docs, records), H (security). Mostly MANUAL.
- **Note:** the EU "Digital Omnibus" proposals (96-hour, high-risk-only breach notices; cookie rules moved into the GDPR as Arts 88a-88b) were **not adopted** as of 11 Oct 2026. Audit against current law.

### EU-GDPR-05: International transfers

- Mauritius has **no EU adequacy decision**. Collecting data directly from EU users is not itself a transfer (EDPB Guidelines 05/2021), but a Mauritian processor working for an EU client (call centres, BPO, software houses) receives transfers that need **standard contractual clauses** or another Chapter V tool. Onward transfers to the US need the EU-US Data Privacy Framework or SCCs.
- **Repo evidence:** F (vendors), D (hosting regions). Mostly MANUAL (contracts).
- **Severity:** Medium (High for large-scale or sensitive data).

### EU-COOK-01: Prior consent for non-essential cookies and trackers

- **Requirement** (ePrivacy Directive 2002/58/EC Art. 5(3)): storing or reading information on a device needs **prior consent** unless strictly necessary for a service the user asked for, or solely for transmission. It covers cookies, local storage, tracking pixels, URL tracking and fingerprinting even without personal data (EDPB Guidelines 2/2023). Authorities such as the CNIL act directly against non-EU sites.
- **Repo evidence:** E, F, G. A tracker loaded unconditionally in the global layout, or a cookie set on first render, is a failure.
- **Severity:** High.
- **Fix:** gate every non-essential script and cookie behind opt-in (see `remediation-patterns.md`).

### EU-COOK-02: Banner design

- No pre-ticked boxes (CJEU Planet49, C-673/17); **"Reject all" on the first layer**, as easy and visible as "Accept all"; no deceptive colours or wording; no "legitimate interest" for cookies; nothing wrongly labelled "essential"; information on purposes, vendors and durations (EDPB Cookie Banner Taskforce report, Jan 2023; CNIL recommendation).
- **Repo evidence:** G (CMP configuration or custom banner component).
- **Severity:** High for missing reject option or pre-ticked categories; Medium for other design issues.

### EU-COOK-03: Withdrawal and renewal of choices

- Consent must be as easy to withdraw as to give: a persistent "Cookie settings" link or icon. The CNIL recommends keeping both consent and refusal for **6 months** before asking again.
- **Severity:** Medium.

### EU-COOK-04: Google Consent Mode v2 and ad-tech frameworks

- Not law but a Google policy: for EEA, UK and Swiss users, Google's advertising features (Google Ads conversion tracking and remarketing, and Google Analytics 4 when linked to Google Ads or with Google signals or ads personalisation) require Consent Mode v2 signals (`ad_storage`, `analytics_storage`, `ad_user_data`, `ad_personalization`). A GA4-only site without ads features does not strictly need it, but it is still the simplest way to wire consent to Google tags. AdSense/Ad Manager require a Google-certified IAB TCF CMP. In "advanced" mode Google receives cookieless pings before consent, which regulators may treat as device access: prefer "basic" mode or document the analysis.
- **Repo evidence:** G (`gtag('consent', 'default', ...)` placed before Google tags, defaults `denied`).
- **Severity:** Medium.

### EU-COOK-05: Cookie inventory and lifetimes

- A cookie policy (or section) listing each cookie/tracker, purpose, provider and duration. The CNIL audience-measurement exemption requires first-party, non-shared statistics, cookies lasting at most **13 months** and data kept at most **25 months**.
- **Severity:** Medium (Low for lifetimes only).

### EU-CONS-01: Pre-contractual information for online sales

- **Applies when** the trader directs its activities to EU consumers: their country's mandatory consumer law applies (Rome I Art. 6) and they can sue at home (Brussels Ia Arts 17-18; CJEU Pammer/Alpenhof).
- **Requirement** (Consumer Rights Directive 2011/83/EU Art. 6): trader identity, address and contacts; main characteristics; **total price including taxes and delivery**; payment, delivery and complaint arrangements; withdrawal information; legal guarantee; whether the price is personalised. Delivery restrictions and accepted payment methods shown at the start of checkout (Art. 8(3)).
- **Repo evidence:** N (prices, fees), B (terms), L (checkout flow).
- **Severity:** High for missing price or identity information; Medium otherwise.

### EU-CONS-02: Order button and pre-ticked extras

- The final button must say **"order with obligation to pay"** or an unambiguous equivalent ("Buy now", "Pay now"); "Continue" or "Submit" fails (CRD Art. 8(2)). For hotels and tours, "Book now" or "Complete booking" is not enough unless the button itself makes the payment obligation clear (CJEU C-249/21, Fuhrmann-2). Additional paid options must not be pre-selected (Art. 22).
- **Repo evidence:** L (checkout components).
- **Severity:** High (the consumer is not bound if the button is wrong).

### EU-CONS-03: Right of withdrawal and the withdrawal button

- **14 days** to withdraw from distance contracts, extended by up to 12 months if the consumer was not informed; refund within 14 days; model withdrawal form (CRD Arts 9-16, Annex I).
- **Since 19 June 2026** (CRD Art. 11a, inserted by Directive (EU) 2023/2673): every online distance contract needs a prominent **withdrawal function** labelled "withdraw from contract here" (or equally clear), available throughout the withdrawal period, leading to a short form (name, contract, email) and a separate **"confirm withdrawal"** button, followed by a time-stamped acknowledgement on a durable medium.
- **Exceptions that matter for Mauritius** (Art. 16): no withdrawal right for accommodation (other than residential), car rental, catering and leisure services booked for a **specific date or period** (Art. 16(l)), goods made to the consumer's specifications or clearly personalised (16(c)), **goods liable to deteriorate or expire rapidly**, such as cakes and fresh food (16(d)), sealed hygiene goods once unsealed (16(e)), and digital content once supplied with consent (16(m)). Hotels, tours, car rentals and food sellers must still say that no withdrawal right applies.
- **Repo evidence:** B (terms), L (account/order pages for the withdrawal function).
- **Severity:** High for shops selling goods/services to EU consumers.

### EU-CONS-04: Prices, promotions and reviews

- Price reductions must show the **lowest price of the previous 30 days** (Price Indication Directive Art. 6a, inserted by Directive (EU) 2019/2161; CJEU C-330/23); member states may set different rules for goods liable to deteriorate or expire rapidly (Art. 6a(3)). State whether and how reviews are verified; fake or undisclosed incentivised reviews are banned; no false countdowns or scarcity claims (Unfair Commercial Practices Directive, Annex I).
- **Repo evidence:** N (sale badges, "was" prices, review widgets, countdown components).
- **Severity:** Medium (High for fake reviews or fake urgency).

### EU-CONS-05: Reserved

Not used (merged into EU-CONS-04). Kept so that check IDs stay stable.

### EU-CONS-06: Outdated ODR link

- The EU Online Dispute Resolution platform **closed on 20 July 2025** (Regulation (EU) 2024/3228). Remove links to `ec.europa.eu/consumers/odr` and the related wording.
- **Severity:** Low.

### EU-DSA-01: Digital Services Act (intermediaries only)

- **Applies when** the service hosts or transmits **third-party** content for EU users: reviews, comments, forums, uploads, classified ads, marketplaces. A shop selling only its own products is not an intermediary.
- **Requirement** (Regulation (EU) 2022/2065): contact points for authorities and users (Arts 11-12); a written **legal representative in the EU** for non-EU providers (Art. 13); terms explaining content moderation (Art. 14); notice-and-action mechanism for hosting services (Art. 16) and statements of reasons (Art. 17); for online platforms: no dark patterns (Art. 25), ad labelling (Art. 26), protection of minors and no profiling-based ads to minors (Art. 28). Micro and small enterprises are exempt from most platform duties (Art. 19).
- **Repo evidence:** C (UGC features), B (terms), report/flag buttons.
- **Severity:** Medium (High for marketplaces).

### EU-EAA-01: European Accessibility Act

- **Applies since 28 June 2025** to e-commerce services (and banking, e-books, ticketing, transport booking) offered to EU consumers, including by non-EU traders. **Micro-enterprises providing services** (fewer than 10 staff and turnover or balance sheet up to EUR 2 million) are exempt.
- **Requirement** (Directive (EU) 2019/882): meet the accessibility requirements, presumed by **EN 301 549 v3.2.1 = WCAG 2.1 AA** (aim for WCAG 2.2 AA); publish accessibility information in the terms or a statement (Annex V); document any disproportionate-burden claim. Enforcement is national (in France the DGCCRF supervises e-commerce; fines reported at EUR 7,500, doubled for repeat offences *(unverified)*).
- **Repo evidence:** M, B (accessibility statement).
- **Severity:** High for in-scope shops; otherwise see A11Y checks.

### EU-AI-01: AI Act transparency

- **Applies** to providers and deployers outside the EU when the AI output is used in the EU (Regulation (EU) 2024/1689 Art. 2(1)(c)). Article 50 has applied **since 2 August 2026** (not delayed by the AI omnibus, Regulation (EU) 2026/1744; machine-readable marking under Art. 50(2) for generative systems already on the market by 2 December 2026).
- **Requirement:** tell people they are interacting with an AI system at the **first interaction** unless obvious (Art. 50(1), (5)); mark AI-generated audio, image, video and text in machine-readable form (Art. 50(2)); disclose deepfakes and AI-generated text published to inform the public unless human-edited (Art. 50(4)). Prohibited practices (Art. 5) apply since 2 February 2025.
- **Repo evidence:** K (chatbot first message, AI image generation, AI-written content).
- **Severity:** Medium (High for prohibited practices).

## United Kingdom

### UK-01: UK GDPR, Data (Use and Access) Act 2025 and PECR cookies

- **Applies** like the EU GDPR (targeting or monitoring people in the UK). A **UK representative** is required on the same terms (UK GDPR Art. 27).
- **Since 5 February 2026** most Data (Use and Access) Act 2025 changes are in force (SI 2026/82): recognised legitimate interests, rules on access requests and automated decisions, and new cookie rules. A duty to handle data-protection complaints applies since 19 June 2026 (offer an electronic complaints route; acknowledge within 30 days). **Since 30 September 2026 the ICO is the "Information Commission"**: update notices that name the ICO.
- **Cookies** (PECR reg. 6 and Schedule A1): consent is required (it may be given through browser settings) except for transmission, strictly necessary uses (security, fraud prevention, login, remembering choices), **statistics about your own site** (not shared except with service providers, users clearly informed and given a simple free opt-out, no fingerprinting), and remembering appearance or functionality preferences. Advertising and retargeting still need consent. PECR is now enforced with UK GDPR-level fines.
- **Children:** consent age 13; the Children's Code applies to services likely to be used by UK children.
- **Repo evidence:** B, E, F, G.
- **Severity:** High for trackers without consent; Medium for notice gaps.

### UK-02: UK consumer law

- Consumer Contracts Regulations 2013: pre-contract information (Sched. 2), order button "order with an obligation to pay" (reg. 14(3)), confirmation on a durable medium (reg. 16), 14-day cancellation (regs 29-31), refund within 14 days (reg. 34), no pre-ticked extra payments (reg. 40). The EU withdrawal button does not apply in the UK.
- DMCC Act 2024 (unfair practices in force 6 April 2025): mandatory fees in the headline price (drip pricing, s.230); fake or concealed incentivised reviews banned (Sched. 20); the CMA can fine up to 10% of global turnover. Subscription-contract rules (ss.254-275) expected from January 2027.
- **Severity:** High for drip pricing or fake reviews; Medium otherwise.

### UK-03: Online Safety Act 2023

- **Applies** to user-to-user and search services with links to the UK (significant number of UK users, UK target market, or material risk of significant harm). Services whose only user content is comments or reviews on their own content are exempt (Sched. 1 para 4). Illegal-content duties enforceable since 17 March 2025; children's safety duties since July 2025; highly effective age assurance where pornography or other primary priority harmful content is allowed.
- **Severity:** High for in-scope platforms.

## United States

### US-01: California CCPA/CPRA and other state privacy laws

- **Applies** to for-profit businesses doing business in California that have annual gross revenue above **USD 26,625,000** (2025-2026 figure) **or** buy/sell/share personal information of 100,000+ consumers or households, **or** earn 50%+ of revenue from selling/sharing it.
- **Requirement:** privacy policy updated every 12 months; notice at collection; **"Do Not Sell or Share My Personal Information"** and **"Limit the Use of My Sensitive Personal Information"** links (or one "Your Privacy Choices" link); honour **Global Privacy Control** (`Sec-GPC: 1`) without friction; two request methods; answers within 45 days; opt-in before selling data of known under-16s. New regulations effective 1 January 2026; automated decision-making technology duties from 1 January 2027.
- About 20 other state laws are in force in 2026 (e.g. VA, CO, CT, TX, OR, NJ, MD, MN, IN, KY, RI) with their own thresholds; several require honouring opt-out preference signals.
- **Repo evidence:** B, F (ad pixels = "sharing"), G (GPC handling).
- **Severity:** High if thresholds are met; otherwise note as N/A.

### US-02: CalOPPA

- **Applies** to any commercial website collecting personal information from California residents, with **no size threshold**.
- **Requirement:** a conspicuously linked privacy policy listing categories collected and third parties shared with, how the site responds to **Do Not Track** signals, whether third parties track across sites, how users can review/correct data, and an effective date.
- **Severity:** Medium.

### US-03: COPPA

- **Applies** to sites directed to children under 13 in the US, or with actual knowledge of collecting their data (foreign sites included). The amended COPPA Rule is mandatory **since 22 April 2026**: separate verifiable parental consent before disclosing children's data to third parties (e.g. ads), written retention and security programmes, biometric identifiers covered. Civil penalties up to USD 53,088 per violation.
- **Severity:** Critical for child-directed services.

### US-04: Email marketing and subscriptions

- CAN-SPAM: accurate headers and subject lines, ads identified, a valid postal address, an opt-out honoured within 10 business days.
- Subscriptions: ROSCA (clear disclosure, express consent, simple cancellation) and state auto-renewal laws such as California's. The FTC's 2024 "click-to-cancel" amendments were vacated (8th Circuit, July 2025) and a new rulemaking opened in March 2026.
- **Severity:** Medium.

### US-05: Web accessibility (ADA)

- No federal web regulation for private businesses; courts and settlements use **WCAG 2.1/2.2 AA**. More than 5,000 web accessibility lawsuits were filed in 2025, many against businesses without a US presence in New York courts. The DOJ Title II rule (state and local governments) has deadlines of 26 April 2027 and 26 April 2028.
- **Severity:** Medium (High for US-facing e-commerce).

## South Africa

### ZA-01: POPIA

- **Applies** to responsible parties domiciled in South Africa or using automated or non-automated means in South Africa (s.3(1)(b)).
- **Requirement:** notice at collection (s.18, incl. the right to complain to the Information Regulator); consent for electronic direct marketing except to existing customers for similar products, with an opt-out in every message (s.69); transfers abroad only with adequate protection, consent or necessity (s.72); a registered information officer (ss.55-56); breach notice as soon as reasonably possible (s.22); a guardian's consent for children under 18 (s.35). Administrative fines up to ZAR 10 million.
- **Severity:** High when applicable.

### ZA-02: ECTA consumer protections

- **Applies** to electronic transactions with South African consumers regardless of the law chosen in the contract (ECTA s.47); terms excluding these rights are void (s.48).
- **Requirement** (s.43): show identity, address and contacts, full price with taxes and fees, payment, delivery and return policies, privacy and security policies, and let the consumer review and correct the order before placing it; otherwise the consumer can cancel within 14 days. 7-day cooling-off (s.44), opt-out for unsolicited marketing (s.45), delivery within 30 days or refund (s.46).
- **Severity:** Medium.

## India

### IN-01: Digital Personal Data Protection Act 2023 and DPDP Rules 2025

- **Applies** to processing outside India connected with offering goods or services to people in India (s.3(b)).
- **Timeline:** Rules notified 13-14 November 2025; consent-manager provisions from about November 2026; **notice, security, breach, children's and rights duties from about 13-14 May 2027**.
- **Requirement:** standalone, itemised notice with specific purposes and links to withdraw consent, exercise rights and complain to the Data Protection Board (Rule 3); free, specific, informed, unconditional and unambiguous consent (s.6); **verifiable parental consent under 18** and no tracking, behavioural monitoring or targeted ads aimed at children (s.9); breach notice without delay and a detailed report to the Board within 72 hours (Rule 7); answer rights requests within 90 days. Penalties up to INR 250 crore.
- **Severity:** Medium now (plan for May 2027); High after commencement.

## Other regimes (quick reference)

| Market | Law | Key website points |
|---|---|---|
| Canada | PIPEDA; CASL; Quebec Law 25 | CASL: consent, sender identification and unsubscribe honoured within 10 business days for commercial electronic messages. Quebec: tracking/profiling off by default. A new federal bill (C-36) is pending. |
| Brazil | LGPD; ECA Digital (Law 15.211/2025, in force 17 March 2026) | LGPD applies to offers to people in Brazil; name a data protection officer. ECA Digital: services likely used by minors need reliable age verification (no self-declaration for adult content) and parental controls. |
| Kenya | Data Protection Act 2019 | Applies to processing data of people in Kenya; registration with the regulator; breach notice within 72 hours. |
| Nigeria | NDPA 2023 + GAID (in force 19 Sept 2025) | Covers data of people in Nigeria; registration for organisations of "major importance". |
| Seychelles | Data Protection Act 2023 (Act 24 of 2023) | Breach notice within 72 hours; extraterritorial reach unclear. |
| Madagascar | Law 2014-038 | Creates the CMIL authority; whether it is fully operating is unconfirmed. |

## Cross-cutting tables

**Age below which parental consent is needed**

| Regime | Age |
|---|---|
| Mauritius DPA 2017 s.30 | under 16 (all processing, not only online services) |
| EU GDPR Art. 8 | 13-16 by member state (France 15) |
| UK GDPR | under 13 |
| US COPPA | under 13 |
| US CCPA (sale/sharing) | under 16 |
| South Africa POPIA, India DPDP, Brazil ECA Digital | under 18 |

**Breach notification deadlines**

| Regime | Deadline |
|---|---|
| Mauritius DPA 2017 s.25 | 72 hours to the Data Protection Commissioner, **every** breach |
| EU/UK GDPR Art. 33 | 72 hours, unless unlikely to result in a risk |
| India DPDP Rules | without delay, detailed report within 72 hours |
| Kenya, Seychelles | 72 hours |
| South Africa POPIA s.22 | as soon as reasonably possible |

## Sources

- EDPB Guidelines 3/2018 (territorial scope): https://www.edpb.europa.eu/sites/default/files/files/file1/edpb_guidelines_3_2018_territorial_scope_after_public_consultation_en_1.pdf
- EDPB Cookie Banner Taskforce report: https://www.edpb.europa.eu/system/files/2023-01/edpb_20230118_report_cookie_banner_taskforce_en.pdf
- EDPB Guidelines 2/2023 (Art. 5(3) technical scope): https://www.edpb.europa.eu/system/files/2024-10/edpb_guidelines_202302_technical_scope_art_53_eprivacydirective_v2_en_0.pdf
- CNIL cookie recommendation: https://www.cnil.fr/sites/cnil/files/atoms/files/recommandation-cookies-et-autres-traceurs.pdf
- Google EU User Consent Policy: https://www.google.com/about/company/user-consent-policy/
- Directive (EU) 2023/2673 (withdrawal function): https://eur-lex.europa.eu/eli/dir/2023/2673/oj/eng
- ODR platform closure: https://consumer-redress.ec.europa.eu/site-relocation_en
- Digital Services Act: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32022R2065
- European Accessibility Act: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32019L0882
- AI omnibus Regulation (EU) 2026/1744: https://eur-lex.europa.eu/eli/reg/2026/1744/oj/eng
- UK DUAA commencement: https://www.gov.uk/guidance/data-use-and-access-act-2025-plans-for-commencement ; SI 2026/1015: https://www.legislation.gov.uk/uksi/2026/1015/made ; PECR Schedule A1: https://www.legislation.gov.uk/uksi/2003/2426/schedule/A1
- ICO storage and access technologies guidance: https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guidance-on-the-use-of-storage-and-access-technologies/
- DMCC Act 2024: https://www.legislation.gov.uk/ukpga/2024/13/contents ; Online Safety Act explainer: https://www.gov.uk/government/publications/online-safety-act-explainer/online-safety-act-explainer
- CCPA regulations and thresholds: https://cppa.ca.gov/regulations/ccpa_updates.html ; https://cppa.ca.gov/regulations/cpi_adjustment.html
- COPPA amended rule: https://www.federalregister.gov/documents/2025/04/22/2025-05904/childrens-online-privacy-protection-rule
- DOJ ADA Title II web rule: https://www.ada.gov/resources/2024-03-08-web-rule/
- POPIA: https://www.gov.za/sites/default/files/gcis_document/201409/3706726-11act4of2013popi.pdf ; ECTA: https://www.gov.za/sites/default/files/gcis_document/201409/a25-02.pdf
- India DPDP Rules 2025: https://www.meity.gov.in/static/uploads/2025/11/53450e6e5dc0bfa85ebd78686cadad39.pdf
