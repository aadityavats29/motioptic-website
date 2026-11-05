# Remaining-batch implementation and audit

Updated 5 November 2026 (India time). This update follows installed batches 1–5.

## Implemented

- Shared footer: Home, Work, Services, Contact, Privacy, existing email, company LinkedIn, current year and original large wordmark.
- Shared FAQ: six complete answers; displayed only on Home and Contact. Unconfirmed amounts, times, revision counts and country counts are omitted.
- Contact: plain-language labels; four services plus Not sure yet; budget and start-date fields; native validation, pending/error/success states, 15-second timeout, honeypot and privacy link. Budget uses free text until price bands are supplied.
- Work/Contact/404 headers: removed .INC/.US/.404 decoration and replaced copy. The Services suffix was removed in batch 5.
- Seven project slugs renamed. Node and Vercel 301s retain shared links; Netlify-compatible redirect file included. Old generated folders removed.
- Inherited page-wipe mask removed from the route transition so it cannot leave that mask above navigation. Existing native dialog menu remains.
- Static page text, one initial H1, unique title/description, local share image, optional production canonical/sitemap, metadata refresh after client navigation. This is a text-first static fallback replaced by React, not full visual server rendering.
- Privacy page describing implemented enquiry handling. Analytics remains disabled; local success event added as an integration point.
- Reduced-motion CSS, skip link, focus outlines, labelled controls, image alternatives, native details disclosures and video controls.
- Removed template case-study galleries, including those under BIOV8 and ELVIS. Removed inherited service mockup galleries and replaced service covers with simple original typographic cards.
- Homepage logo strip now contains only BIOV8, Duradry and Markovate, the three matching projects identified for retention in the brief, with named alternatives and monochrome presentation. Other logos are withheld pending confirmation. Owner still needs to confirm usage permissions.
- Four local project videos, their posters and a silent 15.92-second preview montage. Video loads on demand; controls allow playback and pause. No forced autoplay.

## Asset provenance and review

| Project | Installed media | Source / review |
|---|---|---|
| Content Army | VAR2.mp4, compressed H.264/AAC; poster at 24s | Drive ID 1EXDdZE95NOfrdGXYkJ3Acb9Pzyo_Igyj, supplied Content Army folder. Sampled 3/8/16/24s. Includes Monkeflow imagery and an interview speaker; folder association is retained, not evidence of direct-client scope. |
| BIOV8 | Existing red-bottle cover, compressed WebP | Visually inspected. Removed unrelated box/identity gallery. No additional real gallery supplied locally. |
| ELVIS | Existing ELVIS device/character cover, compressed WebP | Visually inspected. Removed unrelated architecture gallery. All three Drive videos are 319–375MB, above connector's 256MiB limit. |
| Duradry | 1.mp4, compressed H.264/AAC; poster at 3s | Drive ID 1hMK8oyqtCtoJWWJxGSPO5JGxeTC60Ibu. Sampled 3/8/16/24s; lifestyle edit from supplied folder. |
| Littledata | Intro.mp4, compressed H.264; poster at 3s | Drive ID 1L7_A9WxoIJIWuKD2fDUKepy3Og4FYcmN. 3.94s show intro; inspected logo frame. |
| Monkeflow | VAR3.mp4, compressed H.264/AAC; poster at 8s | Drive ID 1h8UCJTZR91TyavkfEScR7ciq8nvuErmj. Sampled 3/8/16/24s, showing email-template promotion. |
| Markovate | Flutter vs Native_Herov2.png converted to local WebP | Drive ID 19GGI1456gSuqGMN4gJPrVtncc8-JMge9. Inspected full image. Replaces Bruno template. |

The reel uses 3.9s of Littledata, 4s of Monkeflow from 6s, 4s of Content Army from 1s and 4s of Duradry from 0s. Clips are letterboxed, never stretched. Audio is omitted from the reel; full project players preserve available audio. Video frames were sampled, not exhaustively watched or transcribed. Speech captions and detailed media approval remain outstanding.

Figma remains read-only. Previously inspected ELVIS artwork and BIOV8 logo are inventoried in figma-assets.md. No new Figma export was installed in this batch. Existing approved-looking covers are retained; this is not a complete replacement gallery of 6–10 assets per client.

## Verification

- Production bundling succeeds.
- Automated tests exercise the real Node handler, all generated routes, unique initial metadata/H1s, seven redirects with query strings, retired blog 404s, file existence, contact validation and temporary private storage, Vercel endpoint failure when unconfigured, HEAD and video range responses.
- Existing service structural checks still pass.
- Source review checks removal of known template galleries, no published fake narrative/results, and the shared FAQ's route restriction.
- Browser control is unavailable. Earlier browser launch failed and the sandbox blocked a listening preview server. These changes have **not** been screenshot-compared at 809/810 or 1439/1440 boundaries, nor tested with touch, keyboard, rapid menu reversal, navigation/scroll reversal or real email delivery. Do not describe this update as pixel-perfect or fully launch-verified.

## Still needs facts, access or external setup

1. Per-project client description, brief, delivered scope, year, live link and any verified result. Current seven pages use titles, inherited service tags, covers and available video; no invented result or replacement narrative.
2. Logo permissions, founder/team photo and names, city/year, verified metrics, prices, delivery timelines, revisions, support terms, response-time promise, budget bands and domain mailbox. Existing Gmail retained.
3. ELVIS video below the download limit, fuller BIOV8/Markovate galleries, complete media review and captions. Confirm Content Army/Monkeflow cross-client imagery and Duradry lifestyle edit before publishing.
4. Production SITE_URL, enquiry receiver/email delivery configuration and a real receipt test; analytics account/provider and privacy review against actual host/retention practices.
5. Browser desktop/tablet/mobile layout and interaction review, including the original intermittent menu issue. The route mask is removed, but the reported freeze cannot be called reproduced or fixed by browser testing here.

The working copy is editable in the session workspace. The active /Users/adityavats/Motioptic_website checkout is read-only here; the consolidated patch must be applied there. The patch is checked against the installed batch-5 state and must be applied once. No live deployment or commit was performed.

## Follow-up: Gmail and Vercel Analytics

User chose the existing Gmail inbox and Vercel Analytics and asked to keep unconfirmed business claims omitted. Added server-side Gmail OAuth email delivery, production-only analytics integration, query/hash redaction, generic opt-in contact events and a browser QA runner. Eleven automated checks pass, including mocked Gmail receipt/failure tests and analytics isolation/redaction tests. No live email was sent and no analytics receipt was verified.

The preceding patch is now installed in the active checkout (reverse apply check passed). This follow-up is packaged separately as Motioptic-launch-integrations.patch.

Chromium headless-shell was found locally, but launch failed with `bootstrap_check_in ... Permission denied (1100)`. No screenshot was produced. Browser-library imports also failed in the available runtime. Browser tests must run from an unrestricted terminal; scripts/browser-qa.mjs is supplied for that purpose.

No smaller ELVIS export was found in the scoped local search. The supplied folder's three videos remain above the connector limit. No business facts were inferred from other clients' documents. The final collection list is RESOURCES-TO-COLLECT.md.

## Confirmed production domain and Microsoft 365 mailbox

User confirmed https://motioptic.com and hyder@motioptic.com, hosted by GoDaddy / Microsoft 365. Updated site config, header/menu/footer email, contact/privacy text, default canonicals, share URLs, robots and sitemap. Replaced the Gmail sender with Microsoft Graph app-authorized delivery to the fixed domain inbox. The form reports submission only after Graph 202 acceptance; inbox delivery remains unverified. Environment instructions now use MS_TENANT_ID, MS_CLIENT_ID and MS_CLIENT_SECRET. Tenant-admin authorization is still needed; no credentials or account permissions were changed.

User authorized browser control, but no browser-control tool or sandbox-approval channel is available. This is an environment limitation, not missing user consent. Added scripts/run-browser-qa.mjs to run the existing browser suite from normal Terminal with a free-port server. It has not been executed in this restricted session.

Packaged together with the portfolio cover updates in Motioptic-domain-and-covers.patch against the installed launch-integrations update.
