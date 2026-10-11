# Third-party services catalogue

Use this file during the repo inventory (Step 2) to recognise trackers, widgets and SDKs, decide whether they need opt-in consent, and build the data-transfer register (DPA 2017 s.36). Contributors: add a row, keep the columns, cite a vendor doc in your PR if you add a note.

**Columns**

- **Search the repo for**: package names (`package.json`, `composer.json`, `requirements.txt`, `pyproject.toml`, `Gemfile`, `pubspec.yaml`), script/iframe URL fragments, or code snippets. Search templates, layouts, `_document`/`layout` files, tag-manager exports, CMS theme files and environment examples.
- **Cookies**: names the service usually sets (glob `*` = any suffix). Useful for cookie-policy inventories.
- **Opt-in?**: whether prior opt-in consent is needed for visitors covered by the EU ePrivacy Directive / UK PECR.
  - **Yes** = consent before loading. **Depends** = depends on configuration or use (read the note). **No** = no consent needed for the cookie/script itself, but you must still disclose the processing.
  - Mauritius has no cookie-specific law yet: under the Data Protection Act 2017 the tracking still needs a lawful basis (s.28) and notice (s.23). Treat **Yes** rows as consent-based processing in Mauritius too (see `checks-mauritius.md` MU-DPA-05).
- **HQ**: vendor's home country (ISO code). Anything other than `MU` means personal data (at least IP addresses and identifiers) leaves Mauritius: record it as a transfer (MU-DPA-11).

## Quick search patterns

Run these case-insensitive regex searches across the repo (exclude `node_modules`, `vendor`, build output and lock files) to find most services in one pass.

Analytics and tag managers:

```text
gtag\(|googletagmanager|google-analytics|_paq\.push|matomo|plausible|posthog|mixpanel|amplitude|segment\.(com|io)|heap\.load|clarity\.ms|hotjar|yandex
```

Advertising pixels:

```text
fbq\(|connect\.facebook\.net|analytics\.tiktok|ttq\.|snap\.licdn|_linkedin_partner_id|twq\(|snaptr|pintrk|rdt\(|bat\.bing|googleadservices|doubleclick|adsbygoogle|criteo|taboola|outbrain
```

Chat, embeds and widgets:

```text
intercom|tawk\.to|crisp\.chat|tidio|zdassets|livechatinc|freshchat|youtube\.com/embed|player\.vimeo|maps\.googleapis|google\.com/maps|instagram\.com/embed|platform\.twitter|wa\.me/
```

Fonts, CAPTCHA and CDNs:

```text
fonts\.googleapis|fonts\.gstatic|typekit|recaptcha|hcaptcha|turnstile|cdnjs|jsdelivr|unpkg|code\.jquery
```

Consent tools:

```text
cookiebot|onetrust|cookielaw|cookieyes|complianz|iubenda|usercentrics|didomi|axept|tarteaucitron|klaro|cookieconsent|__tcfapi|gtag\(.consent
```

Server-side SDKs (transfers, AI, messaging, payments):

```text
openai|anthropic|generativelanguage|@google/genai|mistral|deepseek|sendgrid|mailgun|postmark|resend|nodemailer|twilio|vonage|infobip|stripe|paypal|firebase|supabase|aws-sdk|@aws-sdk
```

## Tag managers and analytics

| Service | Search the repo for | Cookies | Opt-in? | HQ | Notes |
|---|---|---|---|---|---|
| Google Tag Manager | `googletagmanager.com/gtm.js`, `GTM-`, `react-gtm-module`, `@next/third-parties`, `@gtm-support/vue-gtm`, `@nuxtjs/gtm` | none itself | Depends | US | Fires other tags. Check each tag waits for consent (consent triggers or Google Consent Mode). Container contents live in GTM, not the repo: mark as MANUAL. |
| Google Analytics 4 | `gtag('config', 'G-`, `googletagmanager.com/gtag/js?id=G-`, `google-analytics.com`, `react-ga4`, `vue-gtag`, `ngx-google-analytics`, `nuxt-gtag`, `getAnalytics(` / `firebase/analytics` | `_ga`, `_ga_*`, `_gid`, `_gat*` | Yes | US | Remove legacy Universal Analytics (`UA-`), which stopped processing data. |
| Matomo / Piwik | `_paq.push(`, `matomo.js`, `piwik.js`, `matomo.cloud`, `@jonkoops/matomo-tracker-react`, `vue-matomo`, `ngx-matomo-client` | `_pk_id.*`, `_pk_ses.*` | Depends | NZ / self-hosted | Self-hosted, cookieless, non-shared audience measurement can be consent-exempt in some EU states (e.g. France/CNIL). Otherwise Yes. |
| Plausible | `plausible.io/js`, `next-plausible`, `plausible-tracker` | none | No | EE | Cookieless. Disclose it. |
| Fathom | `cdn.usefathom.com`, `fathom-client` | none | No | CA | Cookieless. Disclose it. |
| Simple Analytics | `simpleanalyticscdn.com` | none | No | NL | Cookieless. Disclose it. |
| Umami | `umami`, `data-website-id`, `cloud.umami.is` | none | No | US / self-hosted | Cookieless. Disclose it. |
| Cloudflare Web Analytics | `cloudflareinsights.com/beacon.min.js`, `data-cf-beacon` | none | No | US | Cookieless. Disclose it. |
| Vercel Analytics / Speed Insights | `@vercel/analytics`, `@vercel/speed-insights`, `/_vercel/insights` | none | No | US | Cookieless. Disclose it. |
| Jetpack / WordPress.com Stats | `stats.wp.com`, `_stq.push(`, Jetpack plugin | `tk_ai`, `tk_qs` | Yes | US | |
| Shopify analytics | Shopify theme without Customer Privacy API checks | `_shopify_y`, `_shopify_s`, `_shopify_sa_*` | Yes | CA | Use Shopify's Customer Privacy API / banner. |
| Yandex Metrica | `mc.yandex.ru`, `metrika/tag.js`, `ym(` | `_ym_*`, `yandexuid` | Yes | RU | Includes session replay (Webvisor). Transfer to Russia. |
| Segment | `@segment/analytics-next`, `analytics.load(`, `cdn.segment.com` | `ajs_anonymous_id`, `ajs_user_id` | Yes | US | Forwards data to many destinations: inventory each destination. |
| Mixpanel | `mixpanel-browser`, `mixpanel.init(` | `mp_*` | Yes | US | |
| Amplitude | `@amplitude/analytics-browser`, `amplitude-js`, `amplitude.init(` | `AMP_*` | Yes | US | |
| Heap | `heap.load(`, `cdn.heapanalytics.com` | `_hp2_*` | Yes | US | |
| PostHog | `posthog-js`, `posthog-node`, `posthog.init(` | `ph_*_posthog` | Yes | US | EU cloud and cookieless mode exist; session replay needs consent. |
| HubSpot tracking & forms | `js.hs-scripts.com`, `js.hsforms.net`, `_hsq`, `hbspt.forms.create(`, `@hubspot/api-client` | `__hstc`, `hubspotutk`, `__hssc` | Yes | US | |

## Advertising and conversion pixels

| Service | Search the repo for | Cookies | Opt-in? | HQ | Notes |
|---|---|---|---|---|---|
| Google Ads | `gtag('config', 'AW-`, `googleadservices.com`, `google_conversion_id` | `_gcl_au`, `_gcl_aw` | Yes | US | EEA/UK traffic requires Google Consent Mode v2 (`ad_user_data`, `ad_personalization`). |
| Google Marketing Platform (DoubleClick, Floodlight) | `doubleclick.net` | `IDE`, `DSID`, `test_cookie` | Yes | US | |
| Google AdSense / Ad Manager | `adsbygoogle`, `pagead2.googlesyndication.com`, `googletag.pubads` | `__gads`, `__gpi`, `__eoi` | Yes | US | Google requires a certified IAB TCF CMP for ads to EEA/UK/CH users. |
| Meta Pixel | `fbq(`, `fbevents.js`, `connect.facebook.net`, `facebook.com/tr`, `react-facebook-pixel`, `react-meta-pixel` | `_fbp`, `_fbc` | Yes | US | Also check the backend for the Conversions API (`graph.facebook.com/.../events`), which sends the same data server-side. |
| TikTok Pixel | `ttq.load(`, `analytics.tiktok.com`, `TiktokAnalyticsObject` | `_ttp`, `ttcsid*` | Yes | SG | Disclose the transfer; regulators have scrutinised TikTok transfers to China. |
| LinkedIn Insight Tag | `_linkedin_partner_id`, `lintrk(`, `snap.licdn.com` | `li_fat_id`, `li_sugr` | Yes | US | |
| X (Twitter) Pixel | `twq(`, `static.ads-twitter.com/uwt.js` | `_twpid`, `muc_ads` | Yes | US | |
| Snap Pixel | `snaptr(`, `sc-static.net/scevent.min.js` | `_scid`, `_sctr` | Yes | US | |
| Pinterest Tag | `pintrk(`, `s.pinimg.com/ct/core.js` | `_pin_unauth`, `_epik` | Yes | US | |
| Reddit Pixel | `rdt('init'`, `redditstatic.com/ads/pixel.js` | `_rdt_uuid` | Yes | US | |
| Microsoft Advertising UET | `bat.bing.com/bat.js`, `uetq` | `_uetsid`, `_uetvid` | Yes | US | |
| Criteo | `static.criteo.net`, `dynamic.criteo.com` | `cto_bundle` | Yes | FR | The CNIL fined Criteo EUR 40 million in 2023 over consent. |
| Taboola / Outbrain | `cdn.taboola.com`, `_tfa.push(`, `outbrain.com`, `obApi(` | `t_gid`, `taboola_session_id` | Yes | US | |
| Quantcast | `quantserve.com` | `__qca` | Yes | US | |
| Klaviyo onsite tracking | `static.klaviyo.com`, `_learnq`, `klaviyo-api` | `__kla_id` | Yes | US | Email/SMS marketing: also check opt-in and unsubscribe (MU-DPA-10). |
| Mailchimp embedded forms / site tracking | `chimpstatic.com`, `list-manage.com`, `@mailchimp/mailchimp_marketing` | none / `_mcid` | Depends | US | Signup forms: unticked consent, double opt-in recommended. |
| Brevo (Sendinblue) | `sibforms.com`, `sibautomation.com`, `sib_conversations`, `@getbrevo/brevo`, `sib-api-v3-sdk` | `sib_cuid` | Depends | FR | Tracker (`sib_cuid`) needs consent; transactional email does not. |

## Session replay, heatmaps and A/B testing

These record what visitors do on the page, often including form input. Always opt-in, mask inputs, and consider a DPIA (MU-DPA-16).

| Service | Search the repo for | Cookies | Opt-in? | HQ | Notes |
|---|---|---|---|---|---|
| Microsoft Clarity | `clarity.ms/tag`, `(c,l,a,r,i,t,y)`, `@microsoft/clarity` | `_clck`, `_clsk`, `CLID` | Yes | US | Microsoft requires a consent signal (Clarity consent API) for EEA, UK and Swiss visitors. |
| Hotjar | `static.hotjar.com`, `_hjSettings`, `@hotjar/browser`, `react-hotjar` | `_hjSessionUser_*`, `_hjSession_*` | Yes | MT | |
| Contentsquare | `contentsquare.net` | `_cs_id`, `_cs_s` | Yes | FR | |
| FullStory | `_fs_org`, `@fullstory/browser` | `fs_uid` | Yes | US | |
| LogRocket | `LogRocket.init(`, `logrocket` | none / local storage | Yes | US | |
| Mouseflow / Smartlook / Crazy Egg / Lucky Orange | `mouseflow`, `smartlook`, `crazyegg`, `luckyorange` | `mf_*`, `SL_C_*`, `_ceir`, `_lo_uid` | Yes | DK / CZ / US / US | |
| Datadog RUM | `@datadog/browser-rum`, `DD_RUM.init(` | `_dd_s` | Depends | US | Plain monitoring may rely on legitimate interests; session replay needs consent. |
| Optimizely / VWO / AB Tasty | `optimizely`, `_vwo_code`, `visualwebsiteoptimizer`, `abtasty` | `optimizelyEndUserId`, `_vwo_*`, `ABTasty` | Yes | US / IN / FR | |
| Google Optimize (discontinued) | `googleoptimize.com`, `optimize.js` | `_gaexp` | Yes | US | Shut down on 30 Sep 2023: remove the code. |

## Chat, support and AI chatbots

| Service | Search the repo for | Cookies | Opt-in? | HQ | Notes |
|---|---|---|---|---|---|
| WhatsApp click-to-chat | `wa.me/`, `api.whatsapp.com/send` | none (link) | No | US | Very common in Mauritius. Enquiries handled on WhatsApp are processed by Meta: name it as a recipient/transfer in the privacy notice. |
| Messenger link | `m.me/` | none (link) | No | US | Same as WhatsApp. |
| tawk.to | `embed.tawk.to`, `Tawk_API`, `@tawk.to/tawk-messenger-react` | `TawkConnectionTime`, `twk_*`, `__tawkuuid` | Depends | unverified | Popular with Mauritian SMEs. Check where transcripts are stored; disclose. |
| Intercom | `widget.intercom.io`, `intercomSettings`, `Intercom('boot'`, `react-use-intercom`, `@intercom/messenger-js-sdk` | `intercom-id-*`, `intercom-session-*` | Depends | US | May include an AI agent (Fin): AI disclosure (EU-AI-01). |
| Crisp | `client.crisp.chat`, `$crisp`, `CRISP_WEBSITE_ID`, `crisp-sdk-web` | `crisp-client*` | Depends | FR | |
| Tidio | `code.tidio.co` | `tidio_state_*` | Depends | US | Includes an AI agent (Lyro): AI disclosure. |
| Zendesk | `static.zdassets.com`, `zESettings`, `react-zendesk` | `__zlcmid` | Depends | US | |
| LiveChat | `cdn.livechatinc.com`, `__lc.license`, `@livechat/widget-react` | `__lc_cid`, `__lc2_cid` | Depends | PL | |
| Freshchat / Freshdesk | `wchat.freshchat.com`, `fcWidget.init(` | varies | Depends | US | |
| Drift | `js.driftt.com`, `drift.load(` | `drift_aid` | Depends | US | |
| Chatbase / Botpress / Voiceflow | `chatbase.co/embed`, `cdn.botpress.cloud`, `botpressWebChat`, `cdn.voiceflow.com` | varies | Depends | US / CA / CA | AI chatbot: tell users they are talking to an AI, disclose provider and transfer, do not train on chats without a lawful basis. |

## Social plugins and media embeds

| Service | Search the repo for | Cookies | Opt-in? | HQ | Notes |
|---|---|---|---|---|---|
| Facebook SDK / social plugins / page plugin | `connect.facebook.net/*/sdk.js`, `FB.init(`, `facebook.com/plugins/`, `fb-page`, `fb-like`, `fb-customerchat` | Meta cookies | Yes | US | The site and Meta are joint controllers for the collection (CJEU Fashion ID, C-40/17). Load on click (two-click solution). |
| Instagram embed | `instagram.com/embed.js`, `instagram-media` | Meta cookies | Yes | US | Common in hotel/restaurant sites. |
| X (Twitter) embeds | `platform.twitter.com/widgets.js`, `twitter-timeline`, `twitter-tweet` | X cookies | Yes | US | |
| AddThis (discontinued) / ShareThis | `addthis_widget.js`, `sharethis.com` | `__atuvc`, `__stid` | Yes | US | AddThis shut down in 2023: remove. Prefer plain share links. |
| Disqus comments | `disqus.com/embed.js`, `disqus_config` | Disqus cookies | Yes | US | |
| YouTube (standard) | `youtube.com/embed/`, `youtube.com/iframe_api`, `react-youtube`, `react-player` | `YSC`, `VISITOR_INFO1_LIVE` | Yes | US | Use `youtube-nocookie.com` with a click-to-load facade (e.g. `lite-youtube-embed`). |
| YouTube (privacy-enhanced) | `youtube-nocookie.com/embed/` | local storage on play | Depends | US | Better; click-to-load is still best. |
| Vimeo | `player.vimeo.com`, `@vimeo/player` | `vuid` | Depends | US | Add `?dnt=1` to the embed URL. |
| Google Maps | `google.com/maps/embed`, `maps.googleapis.com/maps/api/js`, `@react-google-maps/api`, `@vis.gl/react-google-maps`, `@googlemaps/js-api-loader` | Google cookies | Depends | US | Use a static image or click-to-load map before consent. |
| Tripadvisor widgets | `jscache.com/wejs` | Tripadvisor cookies | Depends | US | Common on Mauritian hotel and tour sites. |
| Trustpilot | `widget.trustpilot.com`, `trustpilot-widget` | varies | Depends | DK | |
| Calendly / Typeform / Jotform / Google Forms | `calendly.com`, `@typeform/embed`, `form.jotform.com`, `docs.google.com/forms` | vendor cookies | Depends | US / ES / US / US | The vendor collects the form data: processor contract and transfer (MU-DPA-11, MU-DPA-18). |

## Fonts, CAPTCHA, CDNs, overlays and other widgets

| Service | Search the repo for | Cookies | Opt-in? | HQ | Notes |
|---|---|---|---|---|---|
| Google Fonts (remote) | `fonts.googleapis.com`, `fonts.gstatic.com`, `next/font/google` | none | Depends | US | Remote loading sends the visitor IP to Google on every page view (a German court awarded damages for this: LG Muenchen I, 3 O 17493/20, 20 Jan 2022). `next/font/google` self-hosts at build time and is fine. Otherwise self-host (e.g. `@fontsource/*`). |
| Adobe Fonts | `use.typekit.net` | none | Depends | US | Sends visitor IP to Adobe; disclose. |
| Google reCAPTCHA | `google.com/recaptcha`, `recaptcha.net`, `grecaptcha`, `g-recaptcha`, `react-google-recaptcha`, `django-recaptcha` | `_GRECAPTCHA` | Depends | US | Collects device/behaviour data for Google. Disclose; load only on forms that need it; consider Turnstile or Friendly Captcha. |
| hCaptcha | `hcaptcha.com`, `h-captcha`, `@hcaptcha/react-hcaptcha` | none | Depends | US | |
| Cloudflare Turnstile | `challenges.cloudflare.com/turnstile`, `cf-turnstile` | none | No | US | Privacy-friendly; disclose. |
| Friendly Captcha | `frc-captcha`, `friendly-challenge`, `@friendlycaptcha/sdk` | none | No | DE | |
| Public CDNs (cdnjs, jsDelivr, unpkg, Google Hosted Libraries, code.jquery.com, BootstrapCDN) | `cdnjs.cloudflare.com`, `cdn.jsdelivr.net`, `unpkg.com`, `ajax.googleapis.com`, `code.jquery.com`, `bootstrapcdn.com` | none | No | US / PL | Add Subresource Integrity (`integrity=`) or self-host (SEC-16). |
| Font Awesome kit | `kit.fontawesome.com` | none | No | US | |
| Accessibility overlays (UserWay, accessiBe, AudioEye, EqualWeb) | `cdn.userway.org`, `acsbapp.com`, `audioeye.com`, `cdn.equalweb.com` | varies | Depends | US / IL | Overlays do not make a site WCAG-conformant (A11Y-10). In 2025 the US FTC finalised a USD 1 million order against accessiBe over misleading claims. |
| Google Translate widget | `translate.google.com/translate_a/element.js` | Google cookies | Depends | US | Sends page content and visitor data to Google. |
| Sentry | `@sentry/*`, `sentry-sdk`, `Sentry.init(` | none by default | Depends | US | Error monitoring can rely on legitimate interests; Session Replay needs consent. Keep `sendDefaultPii: false`, scrub PII, consider the EU region. |
| New Relic browser agent | `js-agent.newrelic.com`, `NREUM`, `@newrelic/browser-agent` | none | Depends | US | |

## Payments

Payment cookies set for fraud prevention are generally treated as strictly necessary. What matters most is that card data never touches your own servers (SEC-14) and that the provider is licensed where required (MU-ECOM-09).

| Service | Search the repo for | HQ | Notes |
|---|---|---|---|
| Stripe | `@stripe/stripe-js`, `@stripe/react-stripe-js`, `js.stripe.com`, `stripe` (server) | US | Elements/Checkout keep card data in Stripe iframes (PCI DSS SAQ A). |
| PayPal / Braintree | `@paypal/react-paypal-js`, `paypal.com/sdk/js`, `braintree-web`, `braintree` | US | |
| Mastercard Gateway (MPGS) hosted checkout | `gateway.mastercard.com`, `Checkout.configure(` | US | Hosted payment pages used by several Mauritian banks; confirm card data stays on the hosted page. |
| MIPS | `mips.mu` | MU | Mauritius-based payment gateway aggregator. Verify downstream processors. |
| Peach Payments | `peachpayments.com`, `oppwa.com` | ZA | Operates in Mauritius and South Africa. |
| Adyen / Checkout.com | `@adyen/adyen-web`, `checkoutshopper-live.adyen.com`, `frames.checkout.com`, `frames-react` | NL / GB | |
| Razorpay / Paystack / Flutterwave / PayFast | `checkout.razorpay.com`, `js.paystack.co`, `checkout.flutterwave.com`, `payfast.co.za` | IN / NG / US / ZA | |
| Own card form | inputs named `card`, `cardNumber`, `cc-number`, `cvv`, `cvc`, `expiry` outside a provider iframe | n/a | Brings your servers into PCI DSS scope (SEC-14). |

## Server-side SDKs: AI, messaging and cloud

These do not set cookies but move personal data out of Mauritius. List each in the transfer register and privacy notice (MU-DPA-11), with a processor contract (MU-DPA-18).

| Service | Search the repo for | HQ | Notes |
|---|---|---|---|
| OpenAI | `openai`, `@ai-sdk/openai`, `@langchain/openai`, `api.openai.com` | US | Prompts containing personal data are transferred to the US. AI disclosure, DPIA for high-risk uses (MU-DPA-16, MU-DPA-20, EU-AI-01). |
| Anthropic | `@anthropic-ai/sdk`, `anthropic`, `@ai-sdk/anthropic` | US | Same as above. |
| Google Gemini / Vertex AI | `@google/genai`, `@google/generative-ai`, `google-genai`, `generativelanguage.googleapis.com` | US | Same as above. |
| Mistral AI | `@mistralai/mistralai`, `mistralai`, `api.mistral.ai` | FR | Same as above. |
| DeepSeek | `api.deepseek.com`, `@ai-sdk/deepseek` | CN | Data processed in China; several regulators have restricted it. Assess carefully. |
| Vercel AI SDK / LangChain | `ai`, `@ai-sdk/*`, `langchain`, `@langchain/core` | US / depends | Check which model provider they route to. |
| Transactional and SMTP e-mail (SendGrid, Mailgun, Postmark, Resend, Amazon SES, Brevo; or plain SMTP via `nodemailer`, PHPMailer, `smtplib`) | `@sendgrid/mail`, `mailgun.js`, `postmark`, `resend`, `@aws-sdk/client-ses*`, `@getbrevo/brevo`, `nodemailer`, `SMTP_HOST` | US / FR / depends on `SMTP_HOST` | Processor contract; marketing emails need consent/opt-out and an unsubscribe link (MU-DPA-10). With plain SMTP the recipient and country depend on the mail host: MANUAL. |
| SMS / WhatsApp APIs (Twilio, Vonage, Infobip, Africa's Talking) | `twilio`, `@vonage/server-sdk`, `@infobip-api/sdk`, `africastalking` | US / US / HR / KE | Marketing SMS: consent and opt-out (MU-DPA-10). |
| Firebase | `firebase`, `firebase-admin`, `getAnalytics(` | US | Check the database region; Firebase Analytics is Google Analytics (opt-in). |
| Supabase | `@supabase/supabase-js`, `supabase.co` | US | Data location = project region; record it. |
| AWS / Azure / Google Cloud | `aws-sdk`, `@aws-sdk/*`, `boto3`, `@azure/*`, `@google-cloud/*`, region settings in IaC (`region =`) | US | Record the regions used (AWS Cape Town `af-south-1` is the closest AWS region to Mauritius). |

## Consent management platforms (CMPs)

A CMP only helps if it actually blocks trackers until opt-in. "Auto-blocks" means it can block known trackers by itself if its script loads first; "manual" means every tracker must be gated by you (for example `type="text/plain"` plus a category attribute, or loading it from the consent callback).

| CMP | Search the repo for | Auto-blocks? | Notes |
|---|---|---|---|
| Cookiebot | `consent.cookiebot.com`, `Cookiebot`, `data-blockingmode="auto"`, `data-cookieconsent=` | If `data-blockingmode="auto"` | Consent cookie `CookieConsent`. |
| OneTrust / CookiePro | `cdn.cookielaw.org`, `OptanonWrapper`, `otSDKStub.js`, `otAutoBlock.js`, `optanon-category-` | If `otAutoBlock.js` is used | Consent cookies `OptanonConsent`, `OptanonAlertBoxClosed`. |
| CookieYes | `cdn-cookieyes.com`, `cky-consent` | Yes | |
| Complianz (WordPress) | `complianz`, `cmplz_` | Yes | |
| Borlabs Cookie / Real Cookie Banner (WordPress) | `borlabs-cookie`, `real-cookie-banner` | Yes | |
| GDPR Cookie Consent / CookieLawInfo (WordPress) | `cookie-law-info`, `cli_cookiebar` | Only if configured | Often installed as an information-only banner. |
| Cookie Notice & Compliance (WordPress) | `cookie-notice-container`, `cnArgs` | Only if configured | Often information-only. |
| GDPR Cookie Compliance by Moove (WordPress) | `moove_gdpr` | Manual | |
| iubenda | `cdn.iubenda.com`, `_iub`, `cs.iubenda.com/autoblocking/` | If the autoblocking script is used | |
| Termly | `app.termly.io`, `resource-blocker` | If the resource blocker is used | |
| Usercentrics | `usercentrics`, `UC_UI`, `uc-block.bundle.js` | If `uc-block` is used | |
| Didomi | `sdk.privacy-center.org`, `didomiConfig` | Manual | French; IAB TCF. |
| Axeptio | `static.axept.io`, `axeptioSettings`, `_axcb` | Manual | French; common on French-language sites. |
| tarteaucitron.js | `tarteaucitron.init(`, `tarteaucitron.job`, `tarteaucitronjs` | Manual | French open source; only services declared via `tarteaucitron.job` are blocked. |
| Klaro! | `klaroConfig`, `klaro.js`, `klaro` | Manual | Scripts must be marked `type="text/plain" data-name=...`. |
| CookieConsent v3 (Orest Bida) | `vanilla-cookieconsent`, `CookieConsent.run(` | Manual | Scripts must be marked `type="text/plain" data-category=...`. |
| Osano legacy `cookieconsent.js` | `cookieconsent.initialise(`, `cookieconsent.min.js` | Manual | Usually information-only: blocks nothing. |
| react-cookie-consent | `react-cookie-consent` | Manual | Renders a banner only; you must check its value before loading trackers. |
| Osano CMP | `cmp.osano.com`, `Osano.cm` | Yes | |
| Google Funding Choices / Privacy & messaging | `fundingchoicesmessages.google.com` | Manual | Google-certified TCF CMP for AdSense/Ad Manager. |
| Shopify banner / Customer Privacy API | `Shopify.customerPrivacy`, `shopify-pc__banner` | Manual | Apps and theme scripts must read the Customer Privacy API. |
| HubSpot cookie banner | `js.hs-banner.com` | Manual | Controls HubSpot tracking only. |
| Others (Cookie-Script, CookieFirst, CookieHub, consentmanager.net, Sourcepoint, Quantcast Choice, TrustArc, Civic Cookie Control, Commanders Act, Sirdata, Ketch, Cookie Information, Pandectes, Enzuzo) | vendor domain in script tags; `__tcfapi` for any IAB TCF CMP | Varies | Check the vendor's blocking documentation. |

**Google Consent Mode**: look for `gtag('consent', 'default', {...})` before any Google tag, with `ad_storage`, `analytics_storage`, `ad_user_data` and `ad_personalization` set to `'denied'` by default, and `gtag('consent', 'update', ...)` called from the CMP callback.
