# Example project: Dodo Treats

`dodo-treats/` is a tiny, **intentionally non-compliant** Next.js site for a fictional home bakery in Curepipe that delivers in Mauritius and to La Réunion. It is not meant to run. Use it to check that the skill still works after you change it.

## How to test

1. Install your local copy of the skill (see [CONTRIBUTING.md](../CONTRIBUTING.md#testing-your-change)).
2. Open `examples/dodo-treats` in your agent and ask:

   > Check this repo for compliance with Mauritian law. We're Dodo Treats, a small home-bakery business in Curepipe (4 employees), we deliver in Mauritius and to La Réunion. Report only, no fixes for now.

3. Compare the report with the answer key below. Generated reports are git-ignored.

**Pass:** at least 20 of the 24 expected root causes found with the right check ID (or a related one), every "must not" respected, citations taken from the skill's references.

## Expected findings (root causes)

| # | Main ID (related) | Expected finding | Evidence | Severity |
|---|---|---|---|---|
| 1 | SEC-08 (MU-DPA-12) | SMTP password hard-coded; value masked in the report | `app/api/contact/route.ts:4` | Critical |
| 2 | MU-DPA-05 (EU-COOK-01, EU-COOK-02) | Google Analytics, Meta Pixel and a standard YouTube embed load with no consent tool; 2-year `visitor_id` cookie | `app/layout.tsx:15-28`, `app/page.tsx:9`, `app/api/contact/route.ts:9` | High |
| 3 | MU-DPA-04 (MU-DPA-10, EU-GDPR-03) | Newsletter box pre-ticked and bundled with "partners"; no consent record or unsubscribe | `components/ContactForm.tsx:16` | High |
| 4 | MU-DPA-08 | NIC number required on a contact form | `components/ContactForm.tsx:11-12` | High |
| 5 | MU-DPA-07 | Free-text "Allergies or medical conditions" (health data) without explicit consent or safeguards | `components/ContactForm.tsx:13-14` | High |
| 6 | MU-DPA-02 (MU-DPA-01) | Privacy notice misses most s.23(2) items; no privacy information at the form or chat | `app/privacy/page.tsx`, `components/ContactForm.tsx` | High |
| 7 | MU-DPA-14 | No data protection officer contact | `app/privacy/page.tsx` | High |
| 8 | MU-DPA-21 | Notice cites the repealed Data Protection Act 2004 and the EU-US Privacy Shield | `app/privacy/page.tsx:5,7` | Medium |
| 9 | MU-DPA-11 | Transfers to Google, Meta and OpenAI (US) and WhatsApp not disclosed; no s.36 condition evidenced | `app/layout.tsx`, `app/api/chat/route.ts`, `components/Footer.tsx:5` | Medium |
| 10 | MU-DPA-20 (EU-AI-01, MU-DPA-16) | The AI assistant decides "pay later" credit eligibility; no AI disclosure or human review | `app/api/chat/route.ts:8`, `components/ChatWidget.tsx:5` | High |
| 11 | MU-DPA-19 | No retention periods; identifier cookie kept 730 days | `app/api/contact/route.ts:9`, `app/privacy/page.tsx` | Medium |
| 12 | MU-ECOM-01 | Trading name only: no legal name or BRN | `components/Footer.tsx:6` | Medium |
| 13 | MU-ECOM-02 | No VAT status; delivery fee added only at the payment step; EUR prices without disclosures | `app/shop/page.tsx:13,18` | Medium |
| 14 | MU-ECOM-03 (EU-CONS-01) | No terms of sale | searched, none | High |
| 15 | MU-ECOM-04 | No returns, warranty or complaints information | searched, none | Medium |
| 16 | MU-ECOM-08 (EU-CONS-04) | Fake urgency badge "Only 2 left - offer ends in 10 minutes!" on every product | `app/shop/page.tsx:14` | High |
| 17 | MU-ECOM-07 | "Was" price with no 30-day basis (perishables exception may apply) | `app/shop/page.tsx:2,13` | Medium or MANUAL |
| 18 | EU-GDPR-01 (EU-GDPR-02) | GDPR applies through Réunion delivery and EUR prices; no EU representative or GDPR items | `app/page.tsx:8`, `app/shop/page.tsx:13` | High |
| 19 | EU-CONS-03 | No withdrawal information: cakes are exempt as perishable goods (Art. 16(d)) but the site must say so | searched, none | Medium |
| 20 | SEC-09 (SEC-14) | E-mail, phone and NIC written to logs; whole form, incl. NIC and health data, e-mailed in plain text | `app/api/contact/route.ts:8,10` | Medium to High |
| 21 | MU-DPA-05 or SEC-06 | `visitor_id` tracking cookie set for 730 days without consent and without `Secure`, `HttpOnly` or `SameSite` (SEC-06 may be N/A because it is not a session cookie) | `app/api/contact/route.ts:9` | Medium |
| 22 | SEC-03 to SEC-05 | No security headers set in the repo; `X-Powered-By` not disabled | `next.config.js` | FAIL or MANUAL |
| 23 | A11Y-01, 02, 04, 06 (MU-A11Y-01) | No `lang`; images without `alt`; zoom disabled; untitled iframe; icon-only link | `app/layout.tsx:9,12`, `app/page.tsx:7,9`, `components/Footer.tsx:5` | Medium |
| 24 | A11Y-03 | Name, e-mail, phone and chat inputs use placeholders instead of labels | `components/ContactForm.tsx:8-10`, `components/ChatWidget.tsx:9` | High |

**Expected MANUAL:** MU-DPA-13 (registration), MU-DPA-15, MU-DPA-16, MU-DPA-17, MU-DPA-18, MU-ECOM-06 (VAT and e-invoicing), payment provider (MU-ECOM-09, SEC-13).

**Expected N/A:** EU-EAA-01 (micro-enterprise), EU-DSA-01 and MU-CYB-03 (no third-party content), UK and US packs.

## The report must not

- claim a data-portability right under Mauritian law;
- treat the French language alone as the reason the EU rules apply (the reasons are Réunion delivery and EUR prices);
- print the SMTP password;
- mark Data Protection Office registration as FAIL (it cannot be seen in code: MANUAL);
- cite provisions that are not in the skill's references (food-safety rules and the "pay later" offer should be reported as not covered).
