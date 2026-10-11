# Mauritius checks: business, content and sector rules

Run the sections that `scoping.md` marked as applicable: e-commerce and tax when the site sells or shows prices, cybersecurity and intellectual property for every site, accessibility for every site, sector rules when their signals appear. Data protection checks are in `checks-mauritius.md`. **Law reviewed: 11 October 2026.** Legal background and sources: `mauritius-law-digest.md`. Letters A-N refer to the inventory in `repo-scan-playbook.md`.

Each check gives the **requirement** and its legal basis, what to **look for**, when it **fails**, the default **severity** and the **fix**. Use FAIL when the requirement is absent or contradicted, PARTIAL when a mechanism exists but is incomplete. Items marked *(pending)* are enacted but not confirmed in force: report them as "upcoming" good practice, not as breaches.

## E-commerce, consumer protection and tax (MU-ECOM)

Applies to sites that sell goods or services to consumers in Mauritius (shops, bookings, subscriptions, paid services). The Consumer Protection (Price and Supplies Control) Act 1998 is cited as "CPPSCA".

### MU-ECOM-01: Business identification

- **Requirement:** trade only under the registered business name (Business Registration Act 2002 s.10); "use and indicate on any document, whether electronically or otherwise" the **Business Registration Number (BRN)** in every transaction (BRA s.14(1); fine up to Rs 100,000); a company's name must be clearly stated in every written communication and every document creating a legal obligation (Companies Act 2001 s.38(1)); limited companies end in "Limited", "Ltd", "Limitée" or "Ltée" (s.32). Order confirmations, invoices and receipts are such documents. Displaying the legal name, BRN and contact details on the website itself is strongly recommended (whether a website is a "place of business" for the registration-card display rule in BRA s.8(11) is unsettled).
- **Look for:** A, B - footer, legal-information page, terms, order-confirmation e-mail templates, invoice templates. BRN formats: `C` + 8 digits (companies), `I` + 8 (individuals), `P` + 8 (partnerships/sociétés), `F` + 8, `LLP` + 6-8 digits, `LP` + 8.
- **Fails if:** order confirmations or invoices lack the legal name or BRN; trading name differs from the registered name with no legal name shown.
- **Severity:** Medium (High for shops whose transaction documents omit the BRN).
- **Fix:** add legal name, BRN, address and contact to the footer or a legal-information page (`assets/legal-notice-template.md`) and to transactional templates.

### MU-ECOM-02: Price display

- **Requirement** (CPPSCA, which since 2024-2025 expressly covers "an online or any other electronic transaction", s.2 and s.7(2A)):
  - the **selling price** shown must include compulsory transport costs, taxes and other costs (s.2);
  - state whether **VAT is included, zero (zero-rated) or nil (exempt)**; for services, the price and VAT status must be available before supply (s.7);
  - prices in **Mauritian rupees** and Arabic numerals; if foreign currency is accepted, show the foreign price or the conversion rate and any commission, and that card payments are converted at the card scheme's rate (s.7B);
  - never charge more than the displayed price; if several prices are shown the lowest applies (ss.8, 8A); no misleading price indications "by any means whatever" (s.9); obvious errors may be corrected only with reasonable steps to inform buyers (s.9A);
  - only VAT-registered persons may show an amount as VAT (VAT Act s.20(5)).
  - Penalties: up to Rs 100,000 and 3 years (s.31), fixed-penalty notices, and repayment orders (s.32). The Price Label Regulations 2026 (GN 60 of 2026) set label formats for shops; whether they apply to web pages is unclear.
- **Look for:** N, L - product and cart components, currency formatting, VAT labels, delivery fees shown only at the last step, currency switchers.
- **Fails if:** prices without VAT status; mandatory fees added only at checkout; foreign-currency prices without the required disclosure; checkout total above the displayed price.
- **Severity:** High for hidden mandatory charges; Medium otherwise.
- **Fix:** show all-in MUR prices with "VAT inclusive" (or zero/nil), delivery costs before checkout, and currency disclosures.

### MU-ECOM-03: Terms and conditions

- **Requirement:** consumers must get adequate information on their rights and obligations, and terms must not be "so adverse ... as to be detrimental" (Fair Trading Act 1979 s.4). *(Pending)* the Electronic Transactions (Amendment) Act 2026 (Act No. 5 of 2026, awaiting proclamation) requires each party to make the contract terms available "in a clear and accessible manner" (new ETA s.14D).
- **Look for:** B, L - a terms page linked before purchase; content: seller identity, prices and VAT, delivery, payment, cancellation and returns, warranty, complaints, governing law and courts; whether terms are e-mailed or downloadable.
- **Fails if:** an online shop or booking site has no terms reachable before checkout.
- **Severity:** High for shops and booking sites; Low for brochure sites.
- **Fix:** `assets/terms-of-sale-template.md`; link before the order button; send them with the confirmation.

### MU-ECOM-04: Returns, refunds, warranty and complaints

- **Requirement:** Mauritius has **no general cooling-off right** for online purchases (the only statutory one found is the 72-hour right to withdraw from a token purchase, VAITOS s.33). The **legal guarantee against hidden defects** applies regardless of the seller's policy (Code Civil Mauricien arts 1641-1649; claims within a "bref délai"). Withholding information on consumers' rights or misleading them about it is an unfair practice (Fair Trading Act s.4).
- **Look for:** B - returns or refund policy, warranty wording, complaint contact.
- **Fails if:** no returns/refund/warranty information for a shop; wording such as "no refunds under any circumstances" that implies the legal guarantee does not exist.
- **Severity:** Medium.
- **Fix:** publish a clear returns, refunds and warranty policy that preserves the legal guarantee; add a complaints contact. EU/UK consumers have extra rights (EU-CONS-03, UK-02).

### MU-ECOM-05: Online contract formation

- **Requirement:** electronic contracts and records are valid (Electronic Transactions Act 2000 ss.5-14; wills and prescribed documents excluded, s.4(2)); acknowledgement of receipt rules (s.13). *(Pending, Act No. 5 of 2026)*: a product listing is an invitation to treat unless it clearly intends to bind (s.14A); contracts formed by automated systems such as chatbots are valid (s.14B); if the system offers **no chance to correct input errors**, the buyer may withdraw the affected part (s.14C).
- **Look for:** L - a review step before the order button with the ability to edit quantities and details; an order acknowledgement e-mail or page; chatbot ordering flows.
- **Fails if:** single-click purchase with no review/correction step; no order acknowledgement.
- **Severity:** Medium (Low until s.14C is in force).
- **Fix:** add an order summary with edit links before payment; send an immediate acknowledgement.

### MU-ECOM-06: VAT invoices and MRA e-invoicing

- **Requirement:** VAT-registered sellers issue VAT invoices with the words "VAT INVOICE", supplier name, address, VAT number and BRN, serial number and date, description, value, VAT amount and rate (VAT Act 1998 s.20(2)); only registered persons may show VAT (s.20(5)). **E-invoicing** (s.20A; VAT (E-invoicing) Regulations 2023, GN 132 of 2023): fiscal invoices must be registered on the MRA platform and carry its QR code and invoice registration number. Phases: large taxpayers (turnover over Rs 100 million) since 15 May 2024; other taxpayers over Rs 100 million since 1 August 2025, over Rs 80 million since 30 June 2026, over **Rs 40 million since 1 September 2026**; anyone the MRA notifies. From 1 October 2026 the penalty is Rs 5,000 per day (capped at Rs 1 million per 12 months). VAT numbers are 8 digits; VAT registration threshold Rs 3 million (from 1 October 2025).
- **Look for:** L - invoice/receipt generation, e-invoicing integration (MRA API calls, QR codes, invoice registration numbers), VAT number shown.
- **Status:** often MANUAL (turnover and VAT status are business facts); flag invoices missing mandatory fields.
- **Severity:** Medium (High if in an e-invoicing phase and invoices are not fiscalised).
- **Fix:** complete invoice templates; integrate MRA e-invoicing (https://www.mra.mu/index.php/e-invoicing).

### MU-ECOM-07: Promotions, coupons and giveaways

- **Requirement:**
  - A price reduction must show the **prior price = lowest price of the previous 30 days** (CPPSCA s.7C; perishables and products on sale for less than 30 days excepted).
  - **Coupons and gift vouchers** (Consumer Protection (Price and Supplies Control) (Coupons and Gift Vouchers) Regulations 2025, GN 64 of 2025): electronic codes included; terms, expiry and restrictions stated clearly; gift vouchers valid at least 6 months, honoured 3 months after expiry, holder notified 1 month before expiry; no bait advertising.
  - **Online giveaways, contests and "spin the wheel" draws** through the internet or social media are **lotteries** under the Gambling Regulatory Authority Act 2007 (s.2 definition, para (ba)) and need a licence (s.90), unless an exception applies (e.g. charitable or educational draws approved by the Police).
- **Look for:** N - sale badges and "was" prices, countdowns, coupon and gift-card features, contest or giveaway pages, spin-to-win widgets.
- **Fails if:** "was" prices not based on the 30-day lowest price; voucher terms missing; a prize draw run without a licence.
- **Severity:** Medium (High for unlicensed lotteries).
- **Fix:** compute and store the 30-day lowest price; publish voucher terms; get GRA advice before running draws.

### MU-ECOM-08: Unfair practices and terms

- **Requirement:** the Fair Trading Act 1979 s.4 prohibits consumer trade practices that mislead, withhold adequate information on rights and obligations, apply undue pressure, or impose terms so adverse as to be detrimental. Misleading price indications are also an offence (CPPSCA s.9).
- **Look for:** B, N, L - fake scarcity or countdown timers, pre-selected paid add-ons, hard-to-cancel subscriptions, one-sided clauses ("we may change prices after your order", "we are not liable for anything"), fake or undisclosed incentivised reviews.
- **Severity:** Medium (High for systematic dark patterns).
- **Fix:** remove the practice; rewrite the clauses in balanced terms.

### MU-ECOM-09: Payments

- **Requirement:** payment service providers need a Bank of Mauritius licence (National Payment Systems Act 2018 s.9); **fees must be shown where the customer initiates payment**, charged separately rather than deducted (s.13), with clear terms (s.14). Card data handling: SEC-13.
- **Look for:** L - provider SDKs, wallets or stored-value features you operate yourself, surcharges for card or mobile payments.
- **Fails if:** you hold customer funds or run a wallet without a licence; surcharges hidden until after payment.
- **Severity:** High for unlicensed payment services; Medium for undisclosed fees.
- **Fix:** use a licensed provider; show fees before payment.

### MU-ECOM-10: Foreign suppliers of digital services

- **Requirement:** non-resident suppliers of digital or electronic services (apps, software, streaming, e-books, online ads, hosting, online-marketplace commissions...) to customers in Mauritius must register for and charge Mauritian VAT (VAT Act Part IIIA, s.14A; in force 1 January 2026). From **1 October 2026** only business-to-consumer supplies count and only above **Rs 3 million** a year. A customer is in Mauritius when two of: billing address, bank location, IP/geolocation, phone country code or other information point there (s.14A(4)).
- **Applies when:** the operator is outside Mauritius and sells digital services to Mauritian consumers.
- **Status:** MANUAL (registration is a business fact); flag when the code shows MUR pricing or Mauritius targeting by a foreign SaaS or app.
- **Severity:** Medium.

### MU-ECOM-11: Product safety and restricted products

- **Requirement:** goods must meet general safety requirements and safety regulations, and goods under a prohibition notice must not be supplied (Consumer Protection Act 1991 ss.3-5; Consumer Protection (Safety Requirements) Regulations 2019, GN 142 of 2019). Restricted products: see MU-SECT-05 and MU-SECT-08.
- **Status:** MANUAL for the product range; flag listings of obviously restricted goods.
- **Severity:** Medium.

## Cybersecurity and online content (MU-CYB)

### MU-CYB-01: Cybersecurity obligations and critical infrastructure

- **Requirement:** the Cybersecurity and Cybercrime Act 2021 (Act No. 16 of 2021) criminalises attacks on systems and data, and gives the police preservation (s.26) and production orders (s.27, including for any service provider offering services in Mauritius). Owners of **critical information infrastructure** (designated sectors: financial services, public service, ICT and broadcasting, energy and water, transport; Critical Information Infrastructure Designation Regulations 2026, GN 113 of 2026, in force 1 June 2026) must follow directions (s.34), **report incidents** affecting national security, public safety or the public interest (s.35), and commission an **annual independent IT security audit** (s.37).
- **Look for:** A (sector), H (security posture), I (incident procedure).
- **Status:** MANUAL for designation; for ordinary sites, report the SEC-* findings and recommend voluntary reporting to CERT-MU (MAUCORS: https://maucors.govmu.org, incident@cert.govmu.org, hotline 800 2378).
- **Severity:** High for designated CII without audit or incident reporting; otherwise covered by SEC-*.

### MU-CYB-02: Ability to answer preservation and production orders

- **Requirement:** service providers must be able to preserve traffic data for 90 days (extendable) and produce subscriber information when ordered (ss.26-27); tipping off the subject of an investigation is an offence (s.24).
- **Look for:** H, I - log retention, an internal contact for law-enforcement requests.
- **Status:** MANUAL. **Severity:** Low.

### MU-CYB-03: User-generated content and moderation

- **Requirement:** the administrator of an online account (including pages and groups on social networks and similar services) must **moderate and control "undesirable content"** brought to its attention by an investigatory authority such as the police (CCA 2021 s.23; up to Rs 1 million and 20 years; restated in a MITCI communiqué of August 2026). "Undesirable content" covers deceptive or inaccurate content posted to defame, threaten, abuse or mislead, content threatening public health, safety or national security, and content promoting racism. Related offences: harmful messages (ICT Act 2001 s.46(ga)), fake profiles, cyberbullying, revenge pornography (CCA ss.16-19), defamation (Criminal Code s.288), false news (s.299), racial hatred (s.282), identifying child victims, witnesses or offenders (Children's Act 2020 s.27). Network providers that merely provide access are protected (ETA s.9), but whether a host is protected is unclear.
- **Look for:** C, N - comments, reviews, forums, uploads, marketplaces, community pages; a report button, moderation queue, takedown contact.
- **Fails if:** user content is published with no way to report it and no takedown process.
- **Severity:** Medium (High for large communities or marketplaces).
- **Fix:** report/flag feature, moderation workflow, contact point for authorities, terms covering prohibited content.

## Intellectual property (MU-IP)

### MU-IP-01: Licensed content, fonts and software

- **Requirement:** publishing or communicating a protected work without the **written** authorisation of the owner or the collecting society is an offence (Copyright Act 2014 s.56, as amended in 2017; up to Rs 300,000 and 2 years, repeat offences up to Rs 500,000 and 8 years); online infringement is also an offence under CCA 2021 s.21. Copyright lasts life plus 70 years (2017 amendment).
- **Look for:** N - images, videos, music, fonts and icon packs without licence files or attribution; scraped content; open-source licences requiring notices.
- **Status:** MANUAL for licences; flag obvious third-party assets.
- **Severity:** Medium.
- **Fix:** keep licence records, attribute where required, replace unlicensed assets, add open-source notices.

### MU-IP-02: Names, trademarks and restricted words

- **Requirement:** registered marks are protected for 10 years, renewable (Industrial Property Act 2019 ss.97-98; knowing infringement up to Rs 250,000 and 5 years, s.139). Only banks may use the word "bank" (or derivatives, in any language) in business names, letterheads, notices or advertisements (Banking Act 2004 s.4); "insure", "assure", "reinsure" or "underwrite" in a business name needs FSC approval (Insurance Act 2005 s.120).
- **Look for:** N - use of ®, others' brands in domain names or ads, "bank" or "insurance" in names and copy.
- **Severity:** Medium (High for unauthorised "bank" use).

## Accessibility (MU-A11Y)

### MU-A11Y-01: Equal access for persons with disabilities

- **Requirement:** anyone providing goods, services or facilities "for payment or otherwise" must not discriminate in refusing them or in their terms or manner of provision (Equal Opportunities Act 2008 s.18), including indirectly through unjustifiable conditions (s.6); "status" includes impairment. Complaints go to the Equal Opportunities Commission within 12 months. The Protection and Promotion of the Rights of Persons with Disabilities Act 2024 (Act No. 1 of 2024) makes disability discrimination an offence (s.5) *(commencement unverified)*. Mauritius ratified the UN CRPD on 8 January 2010 (Art. 9.2(g): access to ICT and the internet). There is **no binding web-accessibility standard** in Mauritius: WCAG 2.2 AA is the recommended benchmark to reduce discrimination risk.
- **Look for:** M - run the A11Y-* checks.
- **Severity:** inherit from A11Y-* (an inaccessible checkout or booking flow is High). This is a roll-up: cite the A11Y IDs here but do not count it again in the severity totals.

## Sector rules (MU-SECT)

Run when `scoping.md` detects the sector. Many of these are licensing questions: report MANUAL with the evidence that triggered them unless the site clearly operates without a licence.

### MU-SECT-01: Financial services and investments

- **Requirement:** no carrying on or **holding out** a financial service without an FSC licence (Financial Services Act 2007 s.14); unlicensed persons may not advertise licensable activities and licensees' adverts must not be unclear, false or misleading (s.31). Investment dealers and advisers need licences (Securities Act 2005 ss.29-30) and securities advertisements follow FSC rules (s.145). Insurance business and intermediaries need licences (Insurance Act 2005 s.7, s.70); the FSC can stop misleading adverts (s.121).
- **Look for:** N - investment, trading, forex, insurance, loans or pension offers; licence numbers; risk warnings.
- **Severity:** High if offered without a visible licence.

### MU-SECT-02: Virtual assets and tokens

- **Requirement:** virtual asset service providers need an FSC licence (VAITOS Act 2021 s.7) and a physical office in Mauritius (s.10); token issuers register (s.23) and publish a white paper (s.27); adverts must be accurate, identifiable and consistent with the white paper (s.31); buyers have a **72-hour withdrawal right** (s.33). **New s.34A (2026):** no soliciting, targeting or engaging investors in Mauritius unless licensed or registered; anything publicly accessible is presumed to target Mauritius, and solicitation covers websites, apps, social media, algorithmic ads, influencers, affiliates and referral links or codes.
- **Look for:** N, L - crypto exchange, wallet, staking, NFT or token-sale features; referral codes; licence details.
- **Severity:** Critical for solicitation without a licence.

### MU-SECT-03: Gambling, betting and prize draws

- **Requirement:** online (interactive) gambling needs a GRA licence, held by a company incorporated in Mauritius, and promoting it counts as conducting it (Gambling Regulatory Authority Act 2007 s.91); people in Mauritius may not use offshore gambling sites, which can be blocked (s.91A); lotteries, including **online and social-media promotional draws**, need a licence (s.2, s.90); minimum age 21 for casino-type gambling, minors barred from betting (s.140); no inviting minors, including by adverts sent to their contact details (s.141); adverts must not mislead and must state the age restrictions (s.156); unlicensed activity or advertising: s.134.
- **Look for:** N, L - betting, casino, lottery or prize-draw features; age gates; ad copy.
- **Severity:** Critical without a licence; High for missing age gates or advert statements.

### MU-SECT-04: Tourism, accommodation and activities

- **Requirement:** hotels, guest houses and tourist residences need a tourist accommodation certificate (Tourism Authority Act 2006 s.25A); tourist enterprises need a licence (s.26) and must display it (s.31A); holding out premises as a tourist enterprise without a licence is an offence (s.39); misleading tourism adverts are prohibited (s.116). A **tourist fee of EUR 3 per tourist per night** applies from 1 October 2025 (Part IVA, ss.39A-39H; under-12s exempt): include it in displayed prices if it is a compulsory charge (MU-ECOM-02; this application is an inference).
- **Look for:** N - accommodation, excursions, car rental, licence numbers, price breakdowns.
- **Severity:** Medium (High for operating without a licence). EU consumers: see EU-CONS-02/03 for booking buttons and the date-specific booking exception.

### MU-SECT-05: Health, medicines and pharmacy

- **Requirement:** no advertising of pharmaceutical products except in technical or professional publications approved by the Pharmacy Board (Pharmacy Act 1983 s.41); health data is special-category data (MU-DPA-07).
- **Look for:** N, C - medicine promotions, online pharmacy features, symptom or health forms, telemedicine.
- **Severity:** High for medicine advertising to the public; see MU-DPA-07 for data.

### MU-SECT-06: Banking and payment services

- **Requirement:** only licensed banks may use "bank" (Banking Act 2004 s.4); payment services and e-money need a Bank of Mauritius licence (National Payment Systems Act 2018 s.9). See MU-ECOM-09.
- **Severity:** High.

### MU-SECT-07: Real estate

- **Requirement:** non-citizens need a certificate to acquire property unless exempt, e.g. under Economic Development Board schemes or qualifying apartments (Non-Citizens (Property Restriction) Act 1975 s.3); estate agents must register (Real Estate Agent Authority Act 2020 s.16), and advertising property without disclosing the agent's name and status is misconduct (s.25(1)(f)).
- **Look for:** N - property listings aimed at foreigners, scheme names, agent identification.
- **Severity:** Medium.

### MU-SECT-08: Tobacco, vaping and alcohol

- **Requirement:** no retail sale of tobacco products **by any remote method, including the internet**, and a **total ban on advertising and promotion**, including paid placement on social media; this covers vapes and e-cigarettes (Public Health (Restrictions on Tobacco Products) Regulations 2022, GN 139 of 2022, regs 4(1)(f) and 6). No sale of alcohol to under-18s, with a notice displayed (Excise Act s.15; Children's Act 2020 s.23).
- **Look for:** N, L - online sale or promotion of tobacco or vapes; alcohol shop age gate and delivery checks.
- **Severity:** Critical for online tobacco or vape sales; High for alcohol sales without age checks.

### MU-SECT-09: Children-directed services

- **Requirement:** a child is anyone under 18 (Children's Act 2020 s.2); online child sexual abuse material, grooming and bullying are offences (ss.21, 22, 26); identifying child victims, witnesses or offenders in online media is prohibited (s.27); parental consent below 16 for data (DPA s.30).
- **Look for:** C, N - children's photos and names, school or club content, chat between users and minors.
- **Severity:** High; combine with MU-DPA-06.

## Sources

- Electronic Transactions Act 2000: https://www.icta.mu/documents/2021/08/eta.pdf ; Electronic Transactions (Amendment) Act 2026: https://www.icta.mu/documents/2026/06/ETA_Act2026.pdf
- Consumer Protection (Price and Supplies Control) Act 1998 and regulations: https://commerce.govmu.org/Pages/Legislations/Acts-and-Regulations.aspx
- Business Registration Act 2002 (consolidated 31 Aug 2026): https://companies.govmu.org/cbrd/wp-content/uploads/2026/09/BusinessRegistrationAct2002-31-08-2026.pdf
- VAT Act 1998: https://www.mra.mu/download/VATAct.pdf ; MRA e-invoicing: https://www.mra.mu/index.php/e-invoicing
- Cybersecurity and Cybercrime Act 2021: https://www.icta.mu/documents/2021/12/cybersecurity_act_2021.pdf ; ICT Act 2001: https://www.icta.mu/documents/2026/03/ict_act.pdf
- Copyright Act 2014: https://www.icta.mu/documents/2021/08/copyright2014.pdf
- Gambling Regulatory Authority Act 2007: https://www.mra.mu/download/GRAActConsolidated.pdf
- Protection and Promotion of the Rights of Persons with Disabilities Act 2024: https://mauritiusassembly.govmu.org/mauritiusassembly/wp-content/uploads/2024/04/act0124.pdf
- Other Acts and regulators: `mauritius-law-digest.md` section 2.