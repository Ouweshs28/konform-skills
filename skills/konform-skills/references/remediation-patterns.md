# Remediation patterns

Ready-to-adapt fixes for the most common findings. Apply them only after the user approves (Step 5). Adapt names and paths to the project, keep the project's code style, and never invent company facts: use `[[placeholders]]` for BRN, addresses, DPO details and vendor lists.

## 1. Gate trackers behind opt-in consent (MU-DPA-05, EU-COOK-01)

Principle: nothing non-essential runs, and no non-essential cookie is set, until the visitor opts in. "Reject all" must leave the page free of trackers. Withdrawal must stop them and delete their cookies.

**Option A: a consent tool that blocks scripts.** Load the consent tool first in the global layout, then mark each tracker so the tool controls it. The attribute depends on the tool (check its documentation):

```html
<!-- Before: runs immediately on every page -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"></script>

<!-- After: inert until the visitor accepts "analytics" (CookieConsent v3 / Klaro / Complianz style) -->
<script type="text/plain" data-category="analytics" async
        src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"></script>
<!-- Cookiebot: type="text/plain" data-cookieconsent="statistics"
     OneTrust:  type="text/plain" class="optanon-category-C0002" -->
```

**Option B: load from code only when consent is given** (Next.js App Router example; same idea in any SPA):

```tsx
'use client';
import Script from 'next/script';
import { useConsent } from '@/lib/consent'; // read the consent tool's state or your own store

export function Analytics() {
  const { analytics } = useConsent();
  if (!analytics) return null; // nothing is requested, no cookie is set
  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX" strategy="afterInteractive" />
      <Script id="ga-init" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-XXXXXXX');
      `}</Script>
    </>
  );
}
```

On withdrawal: stop rendering the component, delete the tracker's cookies (for example `_ga`, `_ga_*`) and reload.

**Google Consent Mode v2 defaults** (needed for Google ads/analytics with EEA/UK/Swiss visitors). Place before any Google tag; let the consent tool send the `update`:

```html
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('consent', 'default', {
    ad_storage: 'denied',
    analytics_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    wait_for_update: 500
  });
</script>
```

Consent Mode alone still lets Google tags load and send cookieless pings ("advanced" mode). For the strictest setup, also block the tags until consent ("basic" mode).

**Platforms:** WordPress: use a consent plugin with automatic script blocking and remove trackers hard-coded in `header.php`/`functions.php`. Shopify: enable the cookie banner (Customer Privacy API) and make custom pixels respect it. Tag managers: add consent conditions to every tag (MANUAL check in the container).

**Banner rules** (EU-COOK-02/03): "Reject all" and "Accept all" equally visible on the first layer; nothing pre-ticked; a persistent "Cookie settings" link in the footer; re-ask after about 6 months; store proof of consent. Wording in English and French: `assets/cookie-policy-template.md`.

## 2. Embeds: click to load (MU-DPA-05, MU-DPA-11)

```html
<button type="button" class="video-facade" data-video-id="VIDEO_ID"
        aria-label="Play video: [[title]] (loads YouTube, which may set cookies)">
  <img src="/images/video-VIDEO_ID.jpg" alt="" width="640" height="360" loading="lazy">
</button>
<script>
  document.querySelectorAll('.video-facade').forEach((btn) => {
    btn.addEventListener('click', () => {
      const iframe = document.createElement('iframe');
      iframe.src = 'https://www.youtube-nocookie.com/embed/' + btn.dataset.videoId + '?autoplay=1';
      iframe.title = btn.getAttribute('aria-label');
      iframe.allow = 'autoplay; encrypted-media; picture-in-picture';
      iframe.allowFullscreen = true;
      iframe.width = '640';
      iframe.height = '360';
      btn.replaceWith(iframe);
    });
  });
</script>
```

Same idea for Google Maps (show a static image or address link with "Open map"), social posts and chat widgets (load the widget when the visitor clicks "Chat with us"). Vimeo: add `?dnt=1`.

**Fonts:** self-host instead of loading from Google: `npm install @fontsource/inter` then `import '@fontsource/inter/400.css'`, or in Next.js use `next/font/google` (downloads fonts at build time, so visitors never contact Google).

## 3. Privacy information and consent in forms (MU-DPA-01, MU-DPA-04, MU-DPA-10)

```html
<form method="post" action="/contact">
  <label for="name">Name</label>
  <input id="name" name="name" autocomplete="name" required>

  <label for="email">Email</label>
  <input id="email" name="email" type="email" autocomplete="email" required>

  <label for="message">Message</label>
  <textarea id="message" name="message" required></textarea>

  <!-- Optional marketing consent: separate, unticked, not required to submit -->
  <label>
    <input type="checkbox" name="marketing_consent" value="yes">
    Send me news and offers by email. I can unsubscribe at any time.
  </label>

  <p class="form-privacy">
    [[Legal name]] uses these details to answer your request.
    Learn more, including how to object or to complain to the Data Protection Commissioner,
    in our <a href="/privacy">privacy notice</a>.
  </p>
  <button type="submit">Send message</button>
</form>
```

French wording:

```text
Envoyez-moi des actualités et offres par e-mail. Je peux me désinscrire à tout moment.
[[Raison sociale]] utilise ces informations pour répondre à votre demande. En savoir plus, notamment sur votre droit d'opposition et de réclamation auprès du Data Protection Commissioner, dans notre politique de confidentialité.
```

**Record consent** (DPA s.24(1) puts the burden of proof on you): store who consented, to what (purpose and the exact wording or its version), when, and how (form URL). Store withdrawals the same way.

**Only collect what you need** (MU-DPA-08): remove fields such as NIC number, date of birth or gender unless a law or the service requires them; make optional fields clearly optional.

## 4. Security headers (SEC-03, SEC-04, SEC-05)

Start with these; tighten the Content-Security-Policy step by step (use `Content-Security-Policy-Report-Only` first).

Next.js (`next.config.js`):

```js
const securityHeaders = [
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
  { key: 'Content-Security-Policy', value: "frame-ancestors 'self'; upgrade-insecure-requests" },
];

module.exports = {
  poweredByHeader: false,
  async headers() {
    return [{ source: '/(.*)', headers: securityHeaders }];
  },
};
```

Express:

```js
const helmet = require('helmet');
app.disable('x-powered-by');
app.use(helmet()); // CSP, HSTS, nosniff, frame protection, referrer policy defaults
```

nginx:

```nginx
server_tokens off;
add_header Strict-Transport-Security "max-age=63072000; includeSubDomains" always;
add_header X-Content-Type-Options "nosniff" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
add_header Permissions-Policy "camera=(), microphone=(), geolocation=()" always;
add_header Content-Security-Policy "frame-ancestors 'self'; upgrade-insecure-requests" always;
```

Apache (`.htaccess`):

```apache
<IfModule mod_headers.c>
  Header always set Strict-Transport-Security "max-age=63072000; includeSubDomains"
  Header always set X-Content-Type-Options "nosniff"
  Header always set Referrer-Policy "strict-origin-when-cross-origin"
  Header always set Permissions-Policy "camera=(), microphone=(), geolocation=()"
  Header always set Content-Security-Policy "frame-ancestors 'self'; upgrade-insecure-requests"
  Header unset X-Powered-By
</IfModule>
```

Netlify (`_headers`) and Vercel (`vercel.json` `"headers"` array) take the same header names and values. Django: `SECURE_SSL_REDIRECT = True`, `SECURE_HSTS_SECONDS = 63072000`, `SECURE_HSTS_INCLUDE_SUBDOMAINS = True`, `SECURE_REFERRER_POLICY = "strict-origin-when-cross-origin"`, `X_FRAME_OPTIONS = "DENY"`. Rails: `config.force_ssl = true` plus `config/initializers/content_security_policy.rb`. ASP.NET Core: `app.UseHsts(); app.UseHttpsRedirection();` plus a header middleware.

## 5. Session cookies (SEC-06)

| Stack | Setting |
|---|---|
| Express (`express-session`) | `cookie: { secure: true, httpOnly: true, sameSite: 'lax', maxAge: 8 * 60 * 60 * 1000 }`, `saveUninitialized: false`, and `app.set('trust proxy', 1)` behind a proxy |
| Next.js route handlers / server actions | `(await cookies()).set(name, value, { secure: true, httpOnly: true, sameSite: 'lax', path: '/' })` (Next.js 15+; `cookies()` is synchronous in older versions) |
| Laravel | `.env` `SESSION_SECURE_COOKIE=true`; `config/session.php` `'http_only' => true`, `'same_site' => 'lax'` |
| Django | `SESSION_COOKIE_SECURE = True`, `CSRF_COOKIE_SECURE = True`, `SESSION_COOKIE_SAMESITE = "Lax"` |
| PHP | `session.cookie_secure=1`, `session.cookie_httponly=1`, `session.cookie_samesite=Lax` |
| ASP.NET Core | `CookiePolicyOptions { Secure = CookieSecurePolicy.Always, HttpOnly = HttpOnlyPolicy.Always, MinimumSameSitePolicy = SameSiteMode.Lax }` |

## 6. Passwords and secrets (SEC-07, SEC-08)

- Use the framework's password hasher: Laravel `Hash::make`, Django's default hasher (PBKDF2, or Argon2), Rails `has_secure_password` (bcrypt), Node `argon2` or `bcrypt`, PHP `password_hash($password, PASSWORD_DEFAULT)`. Rehash old MD5/SHA-1 hashes at next login.
- A committed secret is compromised: **rotate it first**, then remove it from the code (and from history if needed), move it to environment variables or a secret manager, and add `.env` to `.gitignore`.

## 7. Footer: legal links and identity (MU-DPA-01, MU-DPA-14, MU-ECOM-01)

```html
<footer>
  <nav aria-label="Legal">
    <a href="/privacy">Privacy notice</a>
    <a href="/cookies">Cookie policy</a>
    <button type="button" data-open-consent-settings>Cookie settings</button>
    <a href="/terms">Terms</a>
    <a href="/legal">Legal information</a>
    <a href="/accessibility">Accessibility</a>
  </nav>
  <p>
    © [[YYYY]] [[Legal name]] · BRN [[BRN]] · [[Registered address]], Mauritius ·
    Data protection officer: <a href="mailto:[[dpo@example.mu]]">[[dpo@example.mu]]</a>
  </p>
</footer>
```

From **1 January 2027** the DPO's contact details must be published on the controller's website (Data Protection (Designation, Tasks and Position of Data Protection Officers) Regulations 2026, GN 117 of 2026, reg 8(1)).

## 8. Rights and marketing (MU-DPA-09, MU-DPA-10)

- **Access and export:** an authenticated "Download my data" action (or a documented manual process) answering within one month (s.37).
- **Erasure:** an account-deletion flow that deletes or anonymises the user's records, including in third-party tools, keeping only what a law requires (s.39).
- **Objection to marketing:** every marketing e-mail or SMS carries a working opt-out, honoured immediately and permanently (s.40(3)). Add one-click unsubscribe headers (RFC 8058) to bulk e-mail, e.g. with Nodemailer:

```js
await transporter.sendMail({
  from: '"[[Brand]]" <news@example.mu>',
  to,
  subject,
  html,
  list: { unsubscribe: { url: `https://example.mu/unsubscribe?token=${token}`, comment: 'Unsubscribe' } },
  headers: { 'List-Unsubscribe-Post': 'List-Unsubscribe=One-Click' },
});
```

## 9. AI features (MU-DPA-20, EU-AI-01)

First message of a chatbot (English / French):

```text
Hi! I'm [[Brand]]'s virtual assistant, powered by AI. I can make mistakes, so please check important information. Please don't share sensitive personal information here. Need a person? [[contact link]].

Bonjour ! Je suis l'assistant virtuel de [[Marque]], basé sur l'intelligence artificielle. Je peux me tromper : vérifiez les informations importantes. Ne partagez pas d'informations personnelles sensibles ici. Besoin d'un conseiller ? [[lien de contact]].
```

Also: disclose the AI provider and the transfer in the privacy notice, do not send special-category data to the model, set provider data-retention/training opt-outs, and never base an automated decision with legal or similarly significant effects solely on the model without human review (s.38).

## 10. Children (MU-DPA-06)

If the service targets or is likely used by children under 16: ask for the date of birth at sign-up; for under-16s, collect a parent's or guardian's e-mail, send a confirmation link, and do not process the child's data (beyond what is needed to obtain consent) until the parent confirms (DPA s.30). Keep advertising and profiling off for children.
