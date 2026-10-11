# Scoping: which law packs apply

Step 1 of the workflow. Decide which checklists to run, write down **why** (with evidence), and state your assumptions. Put the result in section 2 of the report.

## 1. Facts to establish

Find them in the repository first (inventory A in `repo-scan-playbook.md`); ask the user only for what the code cannot show.

| Question | Where to look | Ask if unknown? |
|---|---|---|
| Who operates the site? Legal entity, BRN, address | Footer, legal notice, terms, `package.json` author, JSON-LD `Organization` | Yes |
| Is the operator established in Mauritius, or using servers/equipment in Mauritius? | Address, BRN, hosting config | Yes |
| What does the site do? | Routes, product/booking/checkout code, copy | No |
| Who is it for? | Currencies, locales, shipping zones, phone prefixes, marketing copy, ad pixels | Yes, if signals are mixed |
| Does it collect payments, run accounts, send marketing, host user content, use AI, target children? | Inventory C, F, J, K, L | No |
| Headcount, turnover band and VAT registration | Footer, invoices, legal notice | Yes, if a threshold matters (EU accessibility micro-enterprise exemption: under 10 staff and up to EUR 2 million; VAT registration from Rs 3 million; MRA e-invoicing from Rs 40 million) |
| Report only, or fixes too? | - | Yes |

## 2. Mauritius (primary)

| Pack | Applies when | Checks |
|---|---|---|
| Data protection (Data Protection Act 2017) | The controller or processor is **established in Mauritius** (company, branch, office or agency, or an ordinarily resident individual), or is not established but **uses equipment in Mauritius** for processing (then it must nominate a representative in Mauritius) (s.3(5)-(7)). There is no GDPR-style "targeting" test: a foreign site that merely sells to Mauritians is not caught by the Act, but other Mauritian rules may apply. | MU-DPA-* |
| E-commerce and consumer protection | The site sells goods or services to consumers in Mauritius, or displays prices to them (online transactions are covered by the Consumer Protection (Price and Supplies Control) Act 1998 since 2024-2025). | MU-ECOM-01 to 05, 07, 08, 11 |
| Tax and invoicing | The operator is VAT-registered in Mauritius (VAT invoices, MRA e-invoicing phases), or is a **foreign supplier of digital services** to Mauritian consumers (VAT Act s.14A, from 1 January 2026; B2C over Rs 3 million from 1 October 2026). | MU-ECOM-06, MU-ECOM-10 |
| Payments | The site takes payments or offers wallets, stored value or payment initiation. | MU-ECOM-09, SEC-13 |
| Cybersecurity and online content | Always (security baseline); user-generated content or community pages; operators in designated critical-information-infrastructure sectors. | MU-CYB-* |
| Intellectual property and names | Always (content licences); brand names using restricted words ("bank", "insurance"). | MU-IP-* |
| Accessibility | Always (equal access to goods and services). | MU-A11Y-01, A11Y-* |

## 3. Foreign law packs

Weigh the signals together; one weak signal is not enough.

| Pack | Strong signals | Weak signals (not enough alone) | Checks |
|---|---|---|---|
| **EU** (GDPR, ePrivacy, consumer law, DSA, EAA, AI Act) | EUR prices; delivery or services to France, Réunion, Mayotte or other EU countries; `.fr`/`.re`/`.eu` domains; +33/+262 phone numbers; `fr-FR`/`fr-RE`/`de`/`it` locales or hreflang; marketing aimed at European tourists; ad pixels or analytics monitoring EU visitors | French or English language (Mauritius is bilingual); site reachable from the EU | EU-* |
| **UK** (UK GDPR, PECR, consumer law, Online Safety Act) | GBP prices; delivery to the UK; `en-GB` locale; UK tourism marketing; UK tracking audiences | English language | UK-* |
| **US** (CalOPPA, CCPA and state laws, COPPA, CAN-SPAM, ADA) | USD prices aimed at US buyers; US shipping; US marketing; Californian users; child-directed content | USD used for international tourism pricing | US-* |
| **South Africa** (POPIA, ECTA) | ZAR prices; South African customers or operations; servers in South Africa | Regional (SADC) marketing | ZA-* |
| **India** (DPDP Act and Rules) | INR prices; services offered to people in India | Indian diaspora content | IN-01 |
| **Other** (Canada, Brazil, Kenya, Nigeria, Seychelles, Madagascar) | Local currency, delivery or marketing in that country | - | Table in `checks-international.md` |

Tourism note: hotels, villas, tour operators and car rentals in Mauritius usually market to European visitors, take EUR prices and track visitors with ad pixels. Treat the EU and UK packs as applicable unless the evidence says otherwise.

Outsourcing note: Mauritian BPO, call-centre and software firms that process data for EU clients are processors receiving transfers from the EU (EU-GDPR-05) in addition to their Mauritian duties.

## 4. Sector and feature triggers

| Signal in the repo | Run |
|---|---|
| Accounts, forms, newsletter (almost every site) | MU-DPA-01 to MU-DPA-14 |
| Analytics, ads, pixels, embeds, chat widgets | MU-DPA-05, MU-DPA-11, EU-COOK-* if EU/UK visitors |
| Shop, bookings, checkout, prices | MU-ECOM-*, EU-CONS-* if selling to EU consumers |
| Card payments | SEC-13, MU-ECOM-09 |
| Content aimed at children, school or kids' activities, age fields | MU-DPA-06, US-03 if US children |
| Health, clinics, pharmacy, insurance, recruitment (CVs), "community"/religion fields | MU-DPA-07, MU-DPA-16 |
| Chatbot, LLM SDK, scoring or automated approvals | MU-DPA-20, MU-DPA-16, EU-AI-01 if EU users |
| Reviews, comments, forums, marketplaces, uploads | MU-CYB-03, EU-DSA-01, UK-03 |
| Investments, trading, forex, insurance, loans, pensions | MU-SECT-01 (a merchant's own "pay later" offer for its goods is not covered: say so) |
| Crypto, tokens, NFTs, wallets, referral codes for crypto | MU-SECT-02 (solicitation ban, VAITOS s.34A) |
| Betting, casino, lottery, contests, giveaways, "spin the wheel" | MU-SECT-03, MU-ECOM-07 |
| Hotels, villas, guest houses, excursions, car rental | MU-SECT-04, plus EU/UK packs for European tourists |
| Clinics, pharmacy, medicines, telemedicine | MU-SECT-05, MU-DPA-07 |
| "Bank" in the name, e-money, wallets | MU-SECT-06, MU-ECOM-09 |
| Property sales or rentals, especially to foreigners | MU-SECT-07 |
| Tobacco, vapes, alcohol | MU-SECT-08 |
| Kids' content, schools, child photos | MU-SECT-09, MU-DPA-06 |
| Food, restaurants, catering, bakeries | MU-DPA-07 for allergy or dietary data; perishable goods are exempt from the EU withdrawal right (EU-CONS-03) and from the 30-day "was" price rule (Mauritius: CPPSCA s.7C; EU member states may differ, Price Indication Directive Art. 6a(3)); food safety, labelling and allergen rules are **not covered** (say so) |

## 5. Record the decision

In the report, list each pack with **Applies / Does not apply / Unclear** and the evidence (`path:line` or the user's answer). When unclear, run the pack and label its findings "if applicable" rather than skipping it.
