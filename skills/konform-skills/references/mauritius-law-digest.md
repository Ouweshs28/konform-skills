# Mauritius law digest

The Mauritian law behind `checks-mauritius.md` and `checks-mauritius-business.md`, with section numbers verified against official texts. Use it to explain findings and to answer "what does the law actually say?" questions; the checks already contain what an audit needs. **Law reviewed: 11 October 2026.** Mauritian statutes are published in English; quotes are from the official text.

## 1. Data Protection Act 2017 (Act No. 20 of 2017)

- **In force** since 15 January 2018 (Proclamation No. 3 of 2018). It repealed the Data Protection Act 2004.
- **Amendments:** s.44(1)(f) added by the COVID-19 (Miscellaneous Provisions) Act 2020 (Act No. 1 of 2020); s.3(8) added by the Child Sex Offender Register Act 2020 (Act No. 15 of 2020). No Finance Act has amended it.
- **Pending (not law on 11 Oct 2026):** a Data Protection (Amendment) Bill aimed at EU adequacy (announced in Budget 2025-26, not yet introduced in the National Assembly); planned E-Privacy Regulations (consent for storing information on personal equipment; unsolicited direct marketing); a revision of registration fees.
- **Regulator:** the Data Protection Commissioner and the Data Protection Office (https://dataprotection.govmu.org). Online services, including registration, transfer, breach and DPIA e-forms: the e-DPO portal (https://dpo.govmu.org, MauPass login). Manual forms are no longer processed (since 5 December 2022).
- **Official texts:** DPO consolidated Act https://dataprotection.govmu.org/Documents/DPA_2017.pdf (omits s.3(8)); MITCI consolidated Act https://mitci.govmu.org/mitci/wp-content/uploads/2025/05/Data-Protection-Act-2017.pdf

### 1.1 Section map

| Section | Heading | Why it matters for a website or app |
|---|---|---|
| s.2 | Interpretation | "Data subject" is identified or identifiable "by reference to an identifier such as a name, an identification number, location data, **an online identifier**...": cookie IDs, device IDs and IP addresses are personal data. |
| s.3 | Application of Act | Applies to controllers/processors **established in Mauritius** (incl. ordinarily resident or with an office, branch or agency) and to those not established but **using equipment in Mauritius** (they must nominate a local representative, s.3(6)). No GDPR-style "targeting" test. |
| ss.14-20 | Registration | Every controller **and** processor must be registered with the Commissioner (s.14). |
| s.21 | Principles | Lawful, fair and transparent; specified purposes; adequate, relevant and limited; accurate; kept no longer than necessary; in line with data subjects' rights. |
| s.22 | Duties of controller | Policies and measures to ensure **and demonstrate** compliance, including "designating an officer responsible for data protection compliance issues" (s.22(2)(e)). |
| s.23 | Collection of personal data | Information that must be given **at the time of collection** (list below). |
| s.24 | Conditions for consent | Burden of proof on the controller; withdrawal at any time; no bundling of unnecessary consent with a contract. |
| ss.25-26 | Breach notification and communication | Commissioner within 72 hours; data subjects when high risk. |
| s.27 | Duty to destroy | Destroy data as soon as reasonably practicable once the purpose has lapsed; tell processors. |
| s.28 | Lawful processing | The legal bases (list below). Processing without one is an offence (s.28(2)). |
| s.29 | Special categories | Strict conditions; offence (s.29(3)). |
| s.30 | Personal data of child | Below 16: parental or guardian consent, with reasonable verification. |
| s.31 | Security of processing | Encryption, pseudonymisation, resilience, restoration, testing; written processor contracts. |
| s.32 | Prior security check | The Commissioner may inspect security measures. |
| s.33 | Record of processing operations | Required for every controller and processor. |
| s.34 | Data protection impact assessment | Before high-risk processing. |
| s.35 | Prior authorisation and consultation | When s.36 safeguards cannot be provided, or a DPIA shows high risk. |
| s.36 | Transfer of personal data outside Mauritius | Conditions for any transfer abroad (list below). |
| ss.37-41 | Rights of data subjects | Access, automated decisions, rectification/erasure/restriction, objection, exercise of rights. |
| ss.42-43 | Offences and penalties | Unlawful disclosure; general penalty. |
| s.44 | Exceptions and restrictions | Narrow public-interest exceptions. |
| s.48 | Certification | Voluntary certification, seals and marks (max 3 years). |
| s.51 | Right of appeal | To the ICT Appeal Tribunal within 21 days. |

### 1.2 Key definitions (s.2)

- **Consent:** "any freely given specific, informed and unambiguous indication of the wishes of a data subject, either by a statement or a clear affirmative action, by which he signifies his agreement to personal data relating to him being processed".
- **Controller:** a person or public body which, alone or jointly with others, "determines the purposes and means of the processing of personal data and has decision making power with respect to the processing".
- **Processor:** a person or public body which processes personal data on behalf of a controller.
- **Profiling:** automated processing to evaluate personal aspects, e.g. "performance at work, economic situation, health, personal preferences, interests, reliability, behaviour, location or movements".
- **Personal data breach:** "a breach of security leading to the accidental or unlawful destruction, loss, alteration, unauthorised disclosure of, or access to, personal data transmitted, stored or otherwise processed".
- **Special categories of personal data:** racial or ethnic origin; political opinion or adherence; religious or philosophical beliefs; trade union membership; physical or mental health or condition; sexual orientation, practices or preferences; genetic data or biometric data uniquely identifying a person; the commission or alleged commission of an offence; proceedings for an offence and their outcome; any other data the Commissioner determines to be sensitive.
- **Child:** not defined; s.30 uses "a child below the age of 16 years".

### 1.3 Registration (ss.14-20)

- No person may act as controller or processor unless registered (s.14). The application describes the data, data subjects, special categories, purposes, recipients, **countries of transfer** and security measures (s.15(2)).
- A certificate is valid for **3 years** (s.16(3)); apply for renewal at least 3 months before expiry (s.18(1)); notify changes within **14 days** (s.17; fine up to Rs 50,000).
- Fees (Data Protection (Fees) Regulations 2020, GN 152 of 2020): Rs 1,000 (up to 5 employees), Rs 1,500 (6-25), Rs 2,500 (more than 25), per certificate; controller and processor capacities are registered separately. A fee increase was announced in June 2026 but not yet published.
- Not registering is prosecuted under the general penalty (s.43): up to Rs 200,000 and 5 years' imprisonment. The Office's deadline for unregistered organisations expired on 2 July 2026.
- Public register search: https://dpo.govmu.org/dpoPortal/registerList.jsf

### 1.4 Data protection officer (s.22(2)(e) and GN 117 of 2026)

- Every controller must designate an officer responsible for data protection compliance (s.22(2)(e)), with no size threshold.
- The **Data Protection (Designation, Tasks and Position of Data Protection Officers) Regulations 2026** (GN 117 of 2026, https://mitci.govmu.org/mitci/wp-content/uploads/2026/06/117_The-Data-Protection_Designation-Tasks-and-Position-of-Data-Protection-Officers_Reg.pdf), made 17 June 2026, **in force 1 January 2027**:
  - the DPO must be a **staff member** of the organisation (reg 3(1)); external DPOs are no longer accepted;
  - DPO particulars must be notified to the Office within 14 days of designation and of any change (reg 3(4));
  - the DPO needs certification issued by the Data Protection Office (reg 5; the Office accepts only its own certification);
  - "The controller shall publish the contact details of the data protection officer ... at a conspicuous place on its premises or, where applicable, **on the website of the controller**" (reg 8(1));
  - breaching reg 3(4) or 8(1) is an offence: fine up to Rs 100,000 and imprisonment up to 5 years (reg 9).
  - The Office's August 2026 guidance notes allow case-by-case treatment for organisations without employees, sole traders and micro organisations, and other means of publication where there is no website.

### 1.5 Information at collection (s.23(2))

When collecting personal data directly, the controller must inform the person, at the time of collection, of:

| Para | Item |
|---|---|
| (a) | identity and contact details of the controller and, where applicable, its representative and **any data protection officer** |
| (b) | the purpose of the collection |
| (c) | the intended recipients |
| (d) | whether the supply of the data is **voluntary or mandatory** |
| (e) | the right to **withdraw consent** at any time, without affecting earlier processing |
| (f) | the right to request **access, rectification, restriction or erasure**, or to **object** |
| (g) | the existence of **automated decision making**, including profiling, with information about the logic involved, its significance and envisaged consequences |
| (h) | the **storage period** |
| (i) | the right to **lodge a complaint with the Commissioner** |
| (j) | where applicable, the intention to **transfer data to another country** and the level of protection afforded by that country |
| (k) | any further information necessary to guarantee fair processing |

Also: the right to object must be "explicitly brought to the attention of the data subject" (s.40(4)). The Act does not list the legal basis among the s.23(2) items, but the Data Protection Office advises documenting it and explaining it in the privacy notice. Indirect collection triggers the same duty (s.23(4)); exceptions in s.23(3).

### 1.6 Consent (s.24) and the Office's guidance

- The controller "shall bear the burden of proof" for consent (s.24(1)); consent can be withdrawn at any time (s.24(2)); making a contract or service conditional on consent to unnecessary processing undermines it (s.24(3)).
- The Office's Introductory Guide asks for consent that is unbundled from terms, **active opt-in ("pre-ticked opt-in boxes are not valid")**, granular, naming the controller and third parties, and documented. For online services it recommends access portals and an automated way to object.

### 1.7 Personal data breaches (ss.25-26)

- Notify the Commissioner "without undue delay and, where feasible, not later than **72 hours** after having become aware of it" (s.25(1)(a)); give reasons if later (s.25(1)(b)). Unlike the GDPR there is **no exemption** for breaches unlikely to cause risk. Processors notify the controller without undue delay (s.25(2)).
- The notification describes the breach, categories and approximate numbers of people and records, the DPO or contact point, and recommended measures (s.25(3)); document every breach (s.25(4)).
- Tell data subjects without undue delay when the breach is likely to result in a **high risk**, in clear language (s.26), unless encryption or later measures remove the risk or individual notice is disproportionate (public communication instead).
- Notification is made through the e-DPO portal. 95 breaches were notified in 2025, mostly unlawful disclosure and e-mails sent to the wrong recipient.

### 1.8 Lawful bases (s.28)

No processing unless: (a) consent for one or more specified purposes; or processing is necessary for (b)(i) a contract or pre-contract steps, (ii) a legal obligation, (iii) vital interests, (iv) a public-interest task or official authority, (v) a task carried out by a public authority, (vi) public functions exercised in the public interest, (vii) **legitimate interests** of the controller or a third party, "except if the processing is unwarranted in any particular case having regard to the harm and prejudice to the rights and freedoms or legitimate interests of the data subject", or (viii) historical, statistical or scientific research. Processing without a basis: fine up to Rs 100,000 and 5 years (s.28(2)). The Office publishes a legitimate-interest fact sheet with a balancing test.

### 1.9 Special categories (s.29) and children (s.30)

- Special categories may be processed only under the s.29(1) conditions: a lawful basis under s.28, together with a specific condition (processing by a not-for-profit body about its members, data manifestly made public by the person, legal claims, preventive or occupational medicine and care under professional secrecy, obligations or specific rights of the controller or the person, vital interests). The drafting of how these conditions combine is ambiguous: rely on explicit consent or a clearly applicable condition. Offence: Rs 100,000 and 5 years (s.29(3)). Automated evaluation of a person must never be based on special categories (s.38(3)).
- "No person shall process the personal data of a child below the age of 16 years unless consent is given by the child's parent or guardian" (s.30(1)), and the controller must make "every reasonable effort to verify that consent has been given or authorised, taking into account available technology" (s.30(2)). This is not limited to online services.

### 1.10 Security, records, DPIA (ss.31-35)

- Measures "shall include" pseudonymisation and encryption; ongoing confidentiality, integrity, availability and resilience; timely restoration after an incident; and regular testing (s.31(2)(a)). Processors must give sufficient guarantees and act under a **written contract** requiring them to follow instructions and the security obligations (s.31(4)); staff must be trained (s.31(6)).
- Every controller and processor keeps a **record of processing operations** (s.33), with a template on the Office's website.
- A **DPIA** is required before processing likely to result in a high risk (s.34): systematic and extensive automated evaluation with significant effects, large-scale special-category data, large-scale monitoring of public areas. The Office's high-risk list includes monitoring online buying behaviour for targeted advertising, matching website data with marketing databases, and **AI-based systems**.
- **Prior authorisation** is needed when s.36 safeguards cannot be provided; **prior consultation** when a DPIA shows high risk (s.35).

### 1.11 Transfers outside Mauritius (s.36)

A controller or processor may transfer personal data to another country only where:

- (a) it "has provided to the Commissioner proof of appropriate safeguards" (in practice through the e-DPO transfer e-form; 100 transfers were authorised in 2025);
- (b) the data subject gave **explicit consent** after being informed of the risks of the transfer;
- (c) the transfer is necessary for a contract with or in the interest of the data subject, reasons of public interest as provided by law, legal claims, vital interests, or (narrowly) compelling legitimate interests for non-repetitive transfers of limited data, with proof of safeguards to the Commissioner; or
- (d) the data come from a public register.

There is **no adequacy mechanism**: hosting, analytics, e-mail, CRM or AI services outside Mauritius are transfers. The Commissioner can prohibit or suspend transfers (s.36(4)).

### 1.12 Rights (ss.37-41)

- **Access** (s.37): on written request, free of charge, within **one month** (extendable once by one month); refusal must be explained; a Rs 100 fee or refusal only for manifestly excessive requests.
- **Automated decisions** (s.38): right not to be subject to a decision based solely on automated processing, including profiling, with legal or similarly significant effects, unless necessary for a contract, authorised by law, or based on explicit consent, with safeguards.
- **Rectification, erasure, restriction** (s.39): rectify without undue delay; erase when no longer necessary, consent withdrawn, objection upheld or processing unlawful; inform others of erasure of published data.
- **Objection** (s.40): in writing, at any time; for **direct marketing** (defined as "the communication of any advertising or marketing material which is directed to any particular individual") the objection is absolute.
- **No data portability right** exists in the Act.

### 1.13 Offences and penalties

There are no administrative fines: enforcement is criminal, tried in the Intermediate Court with the consent of the Director of Public Prosecutions (s.53).

| Provision | Conduct | Maximum penalty |
|---|---|---|
| s.43 | Any contravention without a specific penalty (e.g. not registering, breach notification failures, children's data, s.36 transfers) | Rs 200,000 **and** 5 years' imprisonment |
| s.28(2) | Processing without a lawful basis | Rs 100,000 and 5 years |
| s.29(3) | Unlawful processing of special categories | Rs 100,000 and 5 years |
| s.42 | Unlawful disclosure; selling unlawfully obtained data | s.43 penalty |
| s.15(3) | False information in a registration application | Rs 100,000 and 5 years |
| s.17(3) | Not notifying a change of registered particulars within 14 days | Rs 50,000 |
| s.9(6) | Not complying with an enforcement notice | Rs 50,000 and 2 years |
| GN 117/2026 reg 9 | Not notifying or not publishing DPO details (from 1 Jan 2027) | Rs 100,000 and 5 years |

The Commissioner can also issue enforcement notices (s.9), information notices (s.7), seek preservation orders (s.8), enter and search with a warrant (s.11), audit (s.46) and cancel registrations (s.19).

### 1.14 Cookies and online tracking in Mauritius

- There is **no cookie-specific law** and no cookie guidance from the Data Protection Office yet (E-Privacy Regulations are only planned).
- Because online identifiers are personal data, tracking needs a lawful basis (s.28), notice (s.23), security (s.31) and, usually, a transfer condition (s.36). Advertising and cross-site tracking are hard to justify on legitimate interests, and the person can object at any time (s.40). Consent, collected to the Office's standard (active opt-in, granular, documented), is the safe basis for analytics and advertising cookies. It is also legally required for EU and UK visitors (ePrivacy, PECR), which Mauritian tourism, e-commerce and outsourcing sites often have.

### 1.15 Enforcement practice

- The Office publishes anonymised decisions (about 209, mostly CCTV): https://dataprotection.govmu.org/Pages/Decisions/Decisions-on-Complaints.aspx
- Website-related examples: a college publishing alumni data, including ID or passport numbers, on its website had to limit publication to consenting graduates, remove excess data and register (Decision 50, 2018); unsolicited marketing SMS without an easy opt-out (Decision 38, 2017, under the 2004 Act).
- 2025-2026 communiqués warn that posting people's passport details, photos or videos online without a lawful basis is an offence.
- 244 complaints were received in 2025 (88% about CCTV); prosecutions remain rare, but registration enforcement intensified in 2026.

### 1.16 International position

- Council of Europe Convention 108: acceded 17 June 2016 (in force for Mauritius 1 October 2016). Protocol CETS 223 (Convention 108+): ratified 4 September 2020, the first African country to do so.
- African Union Malabo Convention: ratified 6 March 2018 (deposited 14 March 2018).
- **No EU adequacy decision**: personal data sent from the EU to Mauritius needs EU transfer tools (see EU-GDPR-05).

### 1.17 Differences from the GDPR that change audit results

1. Criminal penalties (fine **and** imprisonment), not administrative fines.
2. Mandatory registration of every controller and processor, renewed every 3 years.
3. A DPO for every controller; from 2027 a certified staff member, with contact details on the website.
4. Children: parental consent below 16 for all processing.
5. No data portability right.
6. Access and objection requests are made in writing; access deadline extendable by one month only.
7. Every breach is notified to the Commissioner within 72 hours.
8. Transfers abroad need proof of safeguards **to the Commissioner** (or another s.36 condition); no adequacy route.
9. No territorial "targeting" test: establishment or equipment in Mauritius.
10. The privacy notice must say whether supplying data is voluntary or mandatory (s.23(2)(d)).

## 2. Other Mauritian laws that affect websites

Status markers: *(pending)* = enacted, commencement not confirmed; *(unverified)* = from a dated consolidation or an inference.

### 2.1 Electronic Transactions Act 2000 (Act No. 23 of 2000)

- In force 1 August 2001 and 1 December 2010; amended 2009, 2015, 2019.
- Electronic records, writing, signatures and contracts are legally recognised (ss.5-14); excluded: wills and prescribed documents (s.4(2)); attribution (s.12), acknowledgement of receipt (s.13), time and place of dispatch (s.14).
- s.9: no liability for network service providers that "merely provide access" to third-party material (subject to legal or court orders to remove or block).
- **Electronic Transactions (Amendment) Act 2026 (Act No. 5 of 2026)**, assented 25 May 2026, in force on proclamation *(pending)*: s.14A (online listings are invitations to treat unless clearly binding), s.14B (contracts formed by automated systems are valid), **s.14C (input-error correction; without it the buyer may withdraw the affected part)**, **s.14D (contract terms made available in a clear and accessible manner)**, s.14(5)(bb) (a domain or e-mail address does not presume where a business is located).
- Offences mostly concern certification authorities (catch-all s.47(9): up to Rs 50,000 and/or 6 months).
- Sources: https://www.icta.mu/documents/2021/08/eta.pdf ; https://www.icta.mu/documents/2026/06/ETA_Act2026.pdf

### 2.2 Consumer protection

**Consumer Protection (Price and Supplies Control) Act 1998 (Act No. 12 of 1998)**, amended by the Finance (Miscellaneous Provisions) Act 2024 and the Finance Act 2025:

| Section | Rule |
|---|---|
| s.2 | "Supply" includes an online or other electronic transaction; "selling price" includes compulsory transport costs, taxes and other costs |
| s.6 | Offence to charge VAT when not chargeable or at a higher rate |
| s.7, s.7(2A) | Price and VAT status (inclusive, zero or nil) shown for goods; for services available before supply; applies to traders operating online |
| s.7B | Prices in Mauritian currency and Arabic numerals; foreign-currency display rules |
| s.7C | Price reductions show the lowest price of the previous 30 days |
| ss.8, 8A | No selling above the displayed price; lowest of several prices applies |
| s.9, s.9A | Misleading price indications by any means; correction of obvious price errors |
| ss.30A-30C, 31, 32 | Fixed penalties; up to Rs 100,000 and 3 years; repayment of overcharges |
| s.35(2)(a)(ixa)-(ixb) | Power to make rules on online transactions and online prices (none found yet) |

Regulations: Price Label Regulations 2026 (GN 60 of 2026, from 1 July 2026; web application unclear); Coupons and Gift Vouchers Regulations 2025 (GN 64 of 2025: electronic codes, terms and expiry stated, vouchers valid at least 6 months plus 3 months' grace, 1 month's notice before expiry, no bait advertising; fines Rs 10,000-100,000).

**Fair Trading Act 1979 (Act No. 26 of 1979)** s.4: unfair consumer trade practices (misleading, withholding information on rights and obligations, undue pressure, terms so adverse as to be detrimental); penalties ss.13-14.

**Consumer Protection Act 1991 (Act No. 11 of 1991)**: product safety (ss.3-5); Consumer Protection (Safety Requirements) Regulations 2019 (GN 142 of 2019).

**Code Civil Mauricien**: hidden-defects guarantee (arts 1641-1649, claim within a "bref délai"); eviction guarantee (art. 1625); capacity of minors (art. 1123); civil liability (arts 1382-1383).

**Not in Mauritian law:** a general cooling-off period for distance sales (only VAITOS s.33 for token purchases) and any pending Consumer Protection Bill (only an archived 2013 draft).

Regulator: Ministry of Commerce and Consumer Protection (Consumer Affairs Unit). Sources: https://commerce.govmu.org/Pages/Legislations/Acts-and-Regulations.aspx

### 2.3 Cybersecurity and Cybercrime Act 2021 (Act No. 16 of 2021)

- Repealed the Computer Misuse and Cybercrime Act 2003. Mauritius acceded to the Budapest Convention on 1 March 2014.
- Offences: electronic fraud (s.14), forgery (s.15), misuse of a fake profile (s.16), cyberbullying (s.17), cyber-extortion (s.18), revenge pornography (s.19), online copyright infringement (s.21), attacks on critical information infrastructure (s.22).
- **s.23 failure to moderate:** the administrator of an online account must moderate and control "undesirable content" brought to its attention by an investigatory authority (up to Rs 1 million and 20 years' penal servitude). A MITCI communiqué of August 2026 reminded administrators of this duty.
- Investigations: preservation of traffic data for 90 days (s.26), production orders including against service providers offering services in Mauritius (s.27), search and seizure, interception, deletion orders (ss.28-31); disclosing an investigation is an offence (s.24).
- Critical information infrastructure (Part V): designation (s.33), directions (s.34), incident reporting to the National Cybersecurity Committee (s.35), annual independent IT security audit (s.37). **CII Designation Regulations 2026** (GN 113 of 2026, in force 1 June 2026): financial services, public service, ICT and broadcasting, energy and water, transport; 12-month transition.
- CERT-MU (Part VI) runs voluntary incident reporting: MAUCORS https://maucors.govmu.org, incident@cert.govmu.org, hotline 800 2378.
- Sources: https://www.icta.mu/documents/2021/12/cybersecurity_act_2021.pdf ; https://cert-mu.govmu.org

### 2.4 Information and Communication Technologies Act 2001 (Act No. 44 of 2001)

- s.46(1)(ga) (as replaced in 2021): sending, posting or publishing a message that is "obscene, indecent, offensive, abusive, threatening, menacing, false or misleading, which is likely to cause or causes harm to a person"; also impersonation (ha), false messages (g), false information (na). Penalty: up to Rs 1 million and 10 years' penal servitude (s.47).
- s.18(1)(m): ICTA may take steps to regulate harmful and illegal internet content (no takedown procedure in the Act). No anti-spam provisions. The 2021 social-media regulation proposal was never enacted.
- Source: https://www.icta.mu/documents/2026/03/ict_act.pdf

### 2.5 Business Registration Act 2002 (Act No. 40 of 2002) and Companies Act 2001

- Register before trading (BRA s.6); trade only under the registered name (s.10); display the registration card "in any format" at places of business (s.8(11), wording added in 2026); **use and indicate the BRN on any document, electronically or otherwise, for every transaction** (s.14(1), up to Rs 100,000). A company's Companies Act number is its BRN (s.9(2)).
- Companies Act 2001: name stated in every written communication and on documents creating legal obligations (s.38); "Limited/Ltd/Limitée/Ltée" suffix (s.32). No duty found to show the registered office on websites.
- **BRN format** (from the MRA list of VAT-registered persons, July 2026): `C` + 8 digits (companies), `I` + 8 (individuals), `P` + 8 (partnerships/sociétés), `F` + 8 *(meaning unverified)*, `LLP` + 6-8 digits, `LP` + 8; rare other letters. Pattern: `^(?:[A-Z]\d{8}|LLP\d{6,8}|LP\d{8})$`.
- Sources: https://companies.govmu.org/cbrd/wp-content/uploads/2026/09/BusinessRegistrationAct2002-31-08-2026.pdf ; https://www.mra.mu/download/ListofVATRegPersons.pdf

### 2.6 Value Added Tax Act 1998 (Act No. 2 of 1998)

- Standard rate 15%; registration threshold Rs 3 million (from 1 October 2025).
- **Digital services by foreign suppliers** (Part IIIA, s.14A): in force 1 January 2026; from 1 October 2026 B2C only and above Rs 3 million; customer location by two matching indicators (s.14A(4)); online-marketplace commissions added; tax-representative requirement repealed (Finance Act 2026).
- VAT invoices (s.20(2)); only registered persons may show VAT (s.20(5)).
- **E-invoicing** (s.20A; VAT (E-invoicing) Regulations 2023, GN 132 of 2023): QR code and invoice registration number from the MRA platform. Phases: Rs 100 million+ large taxpayers 15 May 2024; others Rs 100 million+ 1 August 2025; Rs 80 million+ 30 June 2026; **Rs 40 million+ 1 September 2026**; or on MRA notice. Penalty from 1 October 2026: Rs 5,000 per day, capped at Rs 1 million per 12 months (s.20B).
- VAT numbers: 8 digits.
- Sources: https://www.mra.mu/download/VATAct.pdf ; https://www.mra.mu/index.php/e-invoicing

### 2.7 Equality and disability

- **Equal Opportunities Act 2008 (Act No. 42 of 2008)**: direct and indirect discrimination (ss.5-6) on grounds of status, including impairment; goods, services and facilities (s.18); complaints to the Equal Opportunities Commission within 12 months (s.28).
- **Protection and Promotion of the Rights of Persons with Disabilities Act 2024 (Act No. 1 of 2024)**: discrimination offence (s.5, up to Rs 200,000 and 5 years); no web-accessibility provisions; commencement *(unverified)*.
- UN CRPD ratified 8 January 2010 (reservation on Art. 9.2(d)-(e) only). No binding web-accessibility standard.

### 2.8 Intellectual property

- **Copyright Act 2014 (Act No. 2 of 2014)**, in force 31 July 2014, amended 2017: economic and moral rights (ss.6-7); term life plus 70 years; exceptions (ss.18, 22); offences (s.56: up to Rs 300,000 and 2 years; repeat Rs 500,000 and 8 years).
- **Industrial Property Act 2019 (Act No. 15 of 2019)**: marks (ss.91-103; 10-year renewable term s.97), trade names (s.104), infringement offence (s.139: up to Rs 250,000 and 5 years).

### 2.9 Children

- **Children's Act 2020 (Act No. 13 of 2020)**: child = under 18 (s.2); child sexual abuse material including via ICT (s.21); grooming (s.22); sale of alcohol to a child (s.23); bullying including by ICT (s.26); no identification of child victims, witnesses or offenders in media including online (s.27); courts may order removal of material (s.70(4)(b)). Commencement *(unverified)*.
- Age of majority 18 (Code Civil arts 388, 488).

### 2.10 Sector laws

| Law | Website-relevant provisions |
|---|---|
| Gambling Regulatory Authority Act 2007 (Act No. 9 of 2007) | Lottery includes internet and social-media promotional draws (s.2(ba)); licences for lotteries (s.90) and interactive gambling (s.91, Mauritius-incorporated companies); offshore sites barred and blockable (s.91A); unlicensed activity or advertising (s.134); age 21 for casino-type gambling (s.140); no inviting minors (s.141); advertising rules (s.156). Source: https://www.mra.mu/download/GRAActConsolidated.pdf |
| Financial Services Act 2007 | Licence to carry on or hold out financial services (s.14); advertising restrictions (s.31); register of licensees (s.26) |
| Securities Act 2005; Insurance Act 2005 | Investment dealer/adviser licences (ss.29-30); securities advertisements (s.145). Insurance licences (s.7), intermediaries (s.70), restricted words in names (s.120), misleading adverts (s.121) |
| Virtual Asset and Initial Token Offering Services Act 2021 (Act No. 21 of 2021) | VASP licence (s.7); local office (s.10); token issuers (ss.23, 27); adverts (s.31); 72-hour withdrawal (s.33); **no solicitation of Mauritian investors unless licensed (s.34A, 2026)** |
| National Payment Systems Act 2018 (Act No. 17 of 2018) | Payment service licence from the Bank of Mauritius (s.9); fees shown where payment is initiated (s.13); clear terms (s.14) |
| Banking Act 2004 | Only banks may use "bank" in names or adverts (s.4) |
| Tourism Authority Act 2006 | Accommodation certificate (s.25A); tourist enterprise licence (s.26) and display (s.31A); holding out without a licence (s.39); misleading adverts (s.116); tourist fee EUR 3 per night from 1 October 2025 (Part IVA) |
| Pharmacy Act 1983 | No advertising of pharmaceutical products to the public (s.41) |
| Public Health (Restrictions on Tobacco Products) Regulations 2022 (GN 139 of 2022) | No internet sales (reg 4(1)(f)); total advertising ban, incl. social media (reg 6); covers vapes |
| Excise Act | No alcohol sales to under-18s; notice displayed (s.15) |
| Non-Citizens (Property Restriction) Act 1975; Real Estate Agent Authority Act 2020 | Certificate for non-citizen purchases unless exempt (s.3); agent registration (s.16); adverts must name the agent (s.25(1)(f)) |

### 2.11 Criminal Code (Cap. 195): online speech

Defamation (s.288, defences in s.288(4)), insult (s.296), false news likely to disturb public order (s.299), racial hatred (s.282), sedition (s.283), outrage against morality (s.206). Civil liability under the Code Civil arts 1382-1383.

### 2.12 Artificial intelligence

No AI law or bill. The National AI Strategy ("AI for Mauritius", 2026) favours sector-based regulation; the FAIR Guidelines (MITCI, April 2026) are voluntary and "do not create legal obligations". AI use is governed by the DPA 2017 (ss.34, 36, 38). Source: https://mitci.govmu.org/mitci/wp-content/uploads/2026/04/FINAL-GUIDELINES-15AVRIL.pdf

### 2.13 Regulators and portals

| Body | Website |
|---|---|
| Data Protection Office / Commissioner | https://dataprotection.govmu.org (e-DPO portal: https://dpo.govmu.org) |
| Ministry of Commerce and Consumer Protection | https://commerce.govmu.org |
| Mauritius Revenue Authority (VAT, e-invoicing) | https://www.mra.mu |
| Corporate and Business Registration Department | https://companies.govmu.org |
| Information and Communication Technologies Authority | https://www.icta.mu |
| CERT-MU | https://cert-mu.govmu.org |
| Ministry of Information Technology, Communication and Innovation | https://mitci.govmu.org |
| Financial Services Commission | https://www.fscmauritius.org |
| Bank of Mauritius | https://www.bom.mu |
| Gambling Regulatory Authority | https://gra.govmu.org |
| Tourism Authority | https://www.tourismauthority.mu |
| Equal Opportunities Commission | https://eoc.govmu.org |
| National Assembly (Acts and bills) | https://mauritiusassembly.govmu.org |
