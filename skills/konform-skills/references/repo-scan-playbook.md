# Repo scan playbook

How to build the evidence inventory (Step 2 of the workflow) using only the agent's own file-search and read tools. Judge nothing yet: first collect facts with `path:line` evidence, then evaluate them against the checklists.

## Ground rules

- **Read-only.** Do not run the app, install packages or change files during the audit. Fixes come later, with the user's approval.
- **Skip noise.** Exclude `node_modules/`, `vendor/`, `.git/`, `dist/`, `build/`, `out/`, `.next/`, `.nuxt/`, `.svelte-kit/`, `coverage/`, `public/build/`, `*.min.js`, `*.map` and lock files (open lock files only to confirm a version).
- **Never print secrets.** If you find a key or password, report the file, line and type of secret with the value masked (`sk_live_****`).
- **Absent from the repo is not absent from the site.** Content can live in a CMS, database, Shopify admin, WordPress options, a tag-manager container or the hosting dashboard. Mark those checks **MANUAL** and say what to verify, instead of **FAIL**.
- **Quote, don't paraphrase,** when the wording matters (privacy notice, consent text, terms). Keep quotes to one or two lines.

## 1. Identify the stack

Find the framework first; it tells you where global scripts, banners, headers and cookies are configured.

| Stack | Detect by | Global layout (scripts, banner, footer links) | Headers, HTTPS, cookies | Forms and models |
|---|---|---|---|---|
| Next.js | `next.config.*`, `app/`, `pages/` | `app/layout.*`, `pages/_app.*`, `pages/_document.*` | `headers()` in `next.config.*`, `middleware.*`, `cookies().set`, `NextResponse` | `app/**/page.*`, server actions, `app/api/**/route.*`, `prisma/schema.prisma` |
| React SPA (Vite, CRA) | `vite.config.*`, `src/main.*` | `index.html`, `src/App.*` | host config (`vercel.json`, `netlify.toml`, `_headers`, nginx) | components using `react-hook-form`, `Formik`, `zod` |
| Nuxt / Vue | `nuxt.config.*`, `*.vue` | `app.vue`, `layouts/default.vue`, `nuxt.config` `app.head`, `plugins/` | `routeRules` headers, `server/middleware`, `useCookie` | `pages/`, `server/api/` |
| Angular | `angular.json` | `src/index.html`, `app.component.*` | `server.ts` (SSR), host config | `*.component.html`, reactive forms |
| SvelteKit | `svelte.config.*` | `src/app.html`, `+layout.svelte` | `hooks.server.*` (`setHeaders`, `cookies.set`) | `+page.server.*` actions |
| Astro | `astro.config.*` | `src/layouts/` | middleware, host config | `src/pages/` |
| Remix / React Router | `app/root.*` | `app/root.*` | `entry.server.*`, loaders/actions | `app/routes/` |
| Gatsby | `gatsby-config.*` | `gatsby-ssr.*`, `gatsby-browser.*`, plugins list | host config | `src/pages/` |
| Static / Hugo / Jekyll / Eleventy | `*.html`, `config.toml`, `_config.yml`, `.eleventy.js` | `_layouts/`, `_includes/`, `layouts/partials/` | host config | HTML forms, form services (Formspree, Netlify Forms) |
| WordPress theme or plugin | `style.css` theme header, `functions.php`, `wp-content/` | `header.php`, `footer.php`, `wp_enqueue_script` | `.htaccess`, `wp-config.php` (cookies), plugins | templates, Contact Form 7 / WPForms / Gravity Forms config (often in DB: MANUAL) |
| Shopify theme | `layout/theme.liquid`, `sections/`, `snippets/` | `layout/theme.liquid` | Shopify-managed; app embeds are in the admin (MANUAL) | `{% form %}` tags, `templates/customers/*` |
| Laravel / PHP | `artisan`, `composer.json` | `resources/views/layouts/*.blade.php` | `config/session.php` (`secure`, `http_only`, `same_site`), middleware, `public/.htaccess` | `routes/web.php`, `app/Http/Requests`, `database/migrations` |
| Django | `manage.py`, `settings.py` | `templates/base.html` | `SECURE_*`, `SESSION_COOKIE_*`, `CSRF_COOKIE_*`, `MIDDLEWARE` in settings | `forms.py`, `models.py`, migrations |
| Flask / FastAPI | `app.py`, `main.py` | `templates/` | `after_request` / middleware, `set_cookie(` | `request.form`, Pydantic models |
| Rails | `Gemfile`, `config/application.rb` | `app/views/layouts/application.html.erb` | `config.force_ssl`, `config/initializers/content_security_policy.rb`, `session_store.rb` | `app/models`, `db/schema.rb` |
| Express / Node | `server.*`, `app.*`, `express` | view templates (`views/`) | `helmet`, `express-session`, `cookie-session`, `res.cookie(` | route handlers, `mongoose.Schema` |
| ASP.NET | `*.csproj`, `Program.cs` | `Views/Shared/_Layout.cshtml`, `Pages/Shared/` | `UseHsts`, `UseHttpsRedirection`, `CookiePolicyOptions`, `web.config` `customHeaders` | Razor pages, `DbContext` entities |
| Spring | `pom.xml`, `build.gradle` | Thymeleaf `templates/` | `SecurityFilterChain` `.headers()`, `server.servlet.session.cookie.*` | `@Entity` classes |

**Hosting and infrastructure files** also matter: `vercel.json`, `netlify.toml`, `_headers`, `firebase.json`, `nginx.conf`, `.htaccess`, `Caddyfile`, `wrangler.toml`, `web.config`, Kubernetes ingress annotations, Terraform/CloudFormation (look for `region`). They show security headers, redirects and **where data is stored** (a transfer outside Mauritius if not hosted locally).

## 2. Inventory checklist

Record each item with evidence. The letters are referenced by the checklists.

### A. Operator and audience signals (for scoping)

Find who runs the site and whom it targets.

```text
\bBRN\b|Business Registration|\bVAT\b|\bTVA\b|\bLtd\b|Lt[ée]e|Limited|Mauritius|Maurice|Port.?Louis|Eb[eè]ne|\+230|\bMUR\b|\bRs\.?\s?\d|priceCurrency|currency|hreflang|\blocales?\b|i18n|shipping.?(zones|countries)|\+262|R[ée]union|Mayotte|\bEUR\b|€|\bGBP\b|\bUSD\b|\bZAR\b|\bINR\b
```

Note: languages used (English, French, Kreol Morisien `mfe`), currencies, delivery or service countries, country selectors and phone prefixes. French alone does not mean the site targets France: Mauritius is bilingual.

### B. Pages and legal documents

List routes and find the legal pages, then **read each one in full**. Match these against **file and route paths** (a file-name search), not file contents, to avoid noise such as `return` in JSX:

```text
privacy|confidentialit|donnees-personnelles|cookie|terms|conditions|cgv|cgu|legal|mentions|imprint|refund|returns|retour|retractation|shipping|livraison|delivery|accessib|contact|about|a-propos
```

Then read the footer and navigation components and list their link labels; check that they reach these pages from every page, and that forms link to the privacy notice.

### C. Data collection points

Every place personal data enters the system: contact, newsletter, sign-up/login, checkout, booking/reservation, quote request, job application/CV upload, reviews/comments, chat, surveys, API endpoints, webhooks, mobile SDKs.

For each, record: fields, which are required, purpose, where the data goes (database table, email inbox, CRM, third party), consent checkboxes and **their default state**, and whether privacy information appears next to the submit button.

Personal data fields:

```text
type=["']?(email|tel|password|file|date)|(first|last|full|given|family|sur)_?name|phone|mobile|whatsapp|address|adresse|postcode|dob|birth|naissance|\bage\b|\bnic\b|national.?id|identity.?card|passport|gender|salary|iban|account.?number
```

Special categories of personal data (DPA 2017 s.2 and s.29; also children):

```text
health|sant[ée]|medical|allerg|disab|handicap|pregnan|blood|religio|caste|ethnic|\bcommunity\b|communaut|political|sexual|biometric|fingerprint|face.?id|selfie|genetic|criminal|casier|certificate.of.character|conviction|trade.?union|syndicat
```

In Mauritius a field labelled "Community" (Hindu, Muslim, General Population, Sino-Mauritian...) captures ethnic or religious origin: treat it as special-category data.

Pre-ticked consent boxes (inspect matches near `newsletter`, `marketing`, `consent`, `offers`, `partners`, `j'accepte`):

```text
\bchecked\b|defaultChecked|checked=\{true\}|:checked="true"|initial=True|default=True|value=\{?true
```

### D. Data storage and models

Database schemas, migrations and models (`schema.prisma`, `migrations/`, `models.py`, `app/Models`, `@Entity`, `mongoose.Schema`, `db/schema.rb`): personal-data fields, special categories, date of birth/age, soft-delete and retention fields (`deleted_at`, `expires_at`), encryption or hashing of sensitive fields, audit logs, backups, data-residency settings.

### E. Cookies and browser storage

```text
document\.cookie|setCookie|set_cookie|res\.cookie\(|cookies\(\)\)?\.set|cookies\.set|response\.cookies|Cookies\.set|js-cookie|useCookie|cookie-parser|express-session|cookie-session|SESSION_COOKIE|session\.cookie|samesite|httponly|secure\s*[:=]|max_?age|expires|localStorage\.setItem|sessionStorage\.setItem|indexedDB
```

Record each cookie or storage key: name, set by (first or third party), purpose, lifetime, `Secure` / `HttpOnly` / `SameSite` flags, and whether it is set **before** consent.

### F. Third-party services

Run the quick search patterns in `third-party-services.md`, read the package manifests (`package.json`, `composer.json`, `requirements.txt`, `pyproject.toml`, `Gemfile`, `go.mod`, `pubspec.yaml`), the global layout's `<script>`/`<iframe>`/`<link>` tags, and environment examples (`.env.example`, `.env.sample`, config files) for IDs such as `GA_ID`, `GTM_ID`, `PIXEL_ID`, `CLARITY_ID`, `HOTJAR_ID`, `SENTRY_DSN`, `OPENAI_API_KEY`, `MAILCHIMP`, `STRIPE`.

For each service record: category, what personal data it receives, vendor country, whether it needs opt-in, and where it is loaded.

### G. Consent implementation

- Is there a consent tool (CMP) or a custom banner component? Where is it initialised, and does it load **before** the trackers?
- How are trackers gated: `type="text/plain"` plus a category attribute, conditional rendering on consent state, loading inside the consent callback, CMP auto-blocking, Google Consent Mode defaults?
- Banner behaviour (read the CMP config or component): "Reject all" on the first layer as prominent as "Accept all", granular categories, nothing pre-selected, no cookie wall, a persistent link or button to change choices, consent expiry and re-prompt.
- Proof of consent: is the choice logged (DPA s.24(1) puts the burden of proof on the controller)?
- What happens on "Reject": are tracker scripts still loaded or cookies still set?

### H. Security baseline (code and configuration)

- HTTPS redirect and HSTS; security headers (`Content-Security-Policy`, `X-Content-Type-Options`, `frame-ancestors`/`X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`); version banners (`X-Powered-By`, `server_tokens`).
- Cookie flags for sessions and auth tokens; CSRF protection; rate limiting or CAPTCHA on public forms.
- Password storage:

```text
bcrypt|argon2|scrypt|pbkdf2|password_hash|make_password|Hash::make|has_secure_password|md5\(|sha1\(|createHash\(['"](md5|sha1|sha256)
```

- Secrets committed to the repo (mask values when reporting):

```text
AKIA[0-9A-Z]{16}|sk_live_[0-9a-zA-Z]{10,}|AIza[0-9A-Za-z_\-]{30,}|xox[abp]-[0-9A-Za-z\-]+|gh[pousr]_[0-9A-Za-z]{30,}|-----BEGIN (RSA |EC |OPENSSH )?PRIVATE KEY-----|(api[_-]?key|secret|password|passwd|pass|pwd|token|auth)["']?\s*[:=]\s*['"][^'"]{6,}
```

  Read the matches: ignore placeholders and environment lookups (`process.env.X`, `os.environ`, `${...}`). Also check SMTP, database and API client constructors by hand (`createTransport`, `connectionString`, `new Client(`), and whether `.env` files are committed and covered by `.gitignore`.
- Personal data in logs or URLs:

```text
(console\.(log|info|debug)|logger\.\w+|log\.(info|debug)|print\(|error_log\().{0,80}(email|password|phone|nic|passport|card|token|address)
```

- Error handling that leaks stack traces in production, debug mode on (`DEBUG = True`, `APP_DEBUG=true`), open admin routes, unvalidated file uploads, outdated or vulnerable dependencies (versions in manifests), third-party scripts on payment pages.

### I. Rights, retention and incident handling

```text
delete.?account|deleteUser|destroy\(|anonymi[sz]e|purge|retention|export.?(data|account)|download.?my.?data|unsubscribe|List-Unsubscribe|opt.?out|preferences|cron|schedule|SECURITY\.md|incident|breach|dpia|record.?of.?processing
```

Record: account deletion, access/export, rectification (profile editing), objection/unsubscribe, retention or clean-up jobs, documented incident response (breach notification within 72 hours), records of processing, DPIA, vendor list.

### J. Marketing communications

Email/SMS/WhatsApp sending code: separate marketing from transactional messages, consent capture and storage, unsubscribe link and `List-Unsubscribe` header, honouring opt-outs, sender identity in footers.

### K. AI and automated decisions

LLM SDKs, chatbots, recommendation or scoring logic, automated approvals/rejections (credit, insurance, recruitment, fraud). Record what personal data goes into prompts, whether users are told they are interacting with AI, retention of prompts and outputs, vendor training opt-outs, and any decision made solely by automated means.

### L. Payments and invoicing

Provider SDKs; hosted page or iframe versus your own card fields; any storage of card numbers or CVV (never store CVV); scripts loaded on the payment page; receipts and invoices (VAT number, MRA e-invoicing integration where applicable).

### M. Accessibility (code level)

These patterns find candidates (no look-around, so they work in ripgrep and grep); open each match and check it:

```text
<html\b|<img\b|<Image\b|<iframe\b|user-scalable\s*=\s*(no|0)|maximum-scale\s*=\s*1(\.0)?\b|outline:\s*(none|0)|tabindex=["']?[1-9]|aria-hidden=["']true
```

Check that `<html>` has `lang`, images have `alt`, iframes have `title`, and that clickable `<div>`/`<span>` elements (`onClick` without `role` and keyboard handling) are real buttons or links.

Also: labels for every input, accessible names for icon buttons, skip link, heading order, focus styles, `prefers-reduced-motion`, captions for video, error messages tied to fields, an accessibility statement page. Colour contrast and keyboard flow need a manual or browser check.

### N. Content and claims

Price display (currency, "incl. VAT"/"TTC", delivery fees before checkout), promotions ("was/now" prices, countdowns), reviews and testimonials (incentivised or fake), licence numbers (FSC, Bank of Mauritius, Tourism Authority, Gambling Regulatory Authority), regulated products (alcohol, tobacco, medicines), age gates, licences for images, fonts and third-party content, open-source licence notices.

## 3. Evidence notation

- `path/to/file.ext:42` for a line, `path:42-48` for a range; quote one or two lines when the wording matters.
- For generated or minified files, cite the source that produces them.
- For absences: "Not found in repo (searched `privacy|confidentialit` in `src/`, `app/`, `public/`)". Listing the patterns lets the user re-check.

## 4. Limits of a repository review

Say these explicitly in the report's limitations section when they apply:

- Tags injected at runtime (tag-manager containers, CMS plugins configured in the database, Shopify app embeds, ad networks) are not visible in code. Suggest checking with the browser's developer tools in a private window: Application → Cookies and Network before clicking the banner, then after "Reject all".
- Hosting, CDN or WAF configuration outside the repo (headers, redirects, TLS) needs checking on the live site.
- Organisational duties (Data Protection Office registration, DPO designation, records, processor contracts, DPIAs, breach procedure, staff training) cannot be confirmed from code: list them as MANUAL questions for the user.
