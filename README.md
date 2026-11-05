# Motioptic website

Independent studio portfolio with local fonts, images and videos. Requires Node.js 20 or later.

## Install, run and build

```sh
npm ci
npm run build
npm test
npm start
```

Open http://127.0.0.1:4173. The built files are included; `npm start` also works before installing dependencies. Opening `public/index.html` offers a file preview, but form submission and metadata refresh need HTTP.

## Editable source

- `content/works.json`: seven projects, slugs, service labels and covers. Preserve IDs used by next-project navigation.
- `content/services.json`: four primary services and the legacy App UI detail page.
- `content/site.json`: email, LinkedIn and FAQ answers.
- `content/project-media.json`: project videos, posters and labels.
- `content/redirects.json`: old-to-new project URLs.
- `src/studio-components.mjs`: maintained FAQ, footer, contact form, logos, reel and video players.
- `src/home.mjs`, `src/works.mjs`, `src/services.mjs`, `src/contact.mjs`, `src/project-detail.mjs`, `src/service-detail.mjs`: inherited page layouts. Some generated identifiers remain; avoid global renaming.
- `public/site.css`: layout CSS and maintained responsive overrides at the end.
- `page-content.mjs`: build-time page text and privacy content. Keep it aligned with the interactive components.
- `build.mjs`: local bundle, HTML entry points, metadata, robots and optional sitemap.
- `server.mjs`, `contact.mjs`, `api/contact.mjs`: local serving, validation, local storage and optional hosted delivery.

Do not edit emitted `public/site.js` or HTML directly. Rebuild after changing source or content. The archive `content/blogs.json` is not published.

## Contact delivery

The Node server validates submissions and, without delivery credentials, stores them in `data/inquiries.jsonl` outside `public/`. With Microsoft 365 credentials configured, Node and Vercel use the same email delivery handler.

The receiver is `hyder@motioptic.com`, hosted on GoDaddy / Microsoft 365. Configure `MS_TENANT_ID`, `MS_CLIENT_ID` and `MS_CLIENT_SECRET` privately in Vercel. A Microsoft 365 tenant administrator must authorize the app for Graph Mail.Send application access and restrict it to the intended mailbox using Exchange's application access controls. GoDaddy tenant restrictions may require administrator/provider assistance. No permission or account setting is changed by this code.

The server obtains a token with the client-credentials flow, sends plain-text mail through `/users/hyder@motioptic.com/sendMail`, and uses the visitor's validated address only as Reply-To. Sender and recipient cannot be selected by visitors. Graph must return 202 before the form reports submission. That status means accepted for processing, not confirmed delivery; an inbox receipt test is still required. Tests use a mock transport. Gmail OAuth variables from the prior version are no longer used.

`CONTACT_WEBHOOK_URL` and optional `CONTACT_WEBHOOK_TOKEN` remain an alternative if Microsoft 365 credentials are absent. On Vercel, without either delivery method, the API returns 503 and the form offers direct email. It never pretends to save submissions in ephemeral function storage.

Budget is free text with a currency prompt because pricing bands are unconfirmed. Start date is flexible text. Required fields are first name, email, service and project description. No response-time promise is published.

## Deployment

For Vercel, import the repository and use the included `vercel.json` (`public` output, `npm run build`). It includes seven explicit 301 redirects. Do not add an all-paths-to-home rewrite: retired blog pages and missing pages must remain 404s.

The production origin defaults to `https://motioptic.com` in `content/site.json`. Builds emit canonical URLs, absolute share-image URLs and `sitemap.xml` for this domain. `SITE_URL` can override the origin when needed. Production domain and public email are now confirmed; DNS or live deployment settings were not modified in this session.

For a Node host: build with `npm ci && npm run build`, start with `npm start`, set `HOST=0.0.0.0` and the platform's `PORT`, and mount persistent `data/` storage. Node uses `content/redirects.json`. Static Netlify-compatible redirects are also generated in `public/_redirects`.

Vercel Analytics integration is included using the same-origin `/_vercel/insights/script.js` endpoint. Enable Web Analytics in the Vercel dashboard and redeploy. Production builds enable the script; local and preview builds do not. `ANALYTICS_ENABLED=false` disables it explicitly. Page URL query strings/fragments and unknown routes are excluded. Form contents are never passed to analytics. Set `ANALYTICS_CUSTOM_EVENTS=true` only if your Vercel plan supports custom events; this records a generic successful-enquiry event. Dashboard activation and real event receipt are not verified.

Official setup references: https://vercel.com/docs/analytics/quickstart and https://learn.microsoft.com/en-us/graph/api/user-sendmail .


## Verification and outstanding work

`npm test` checks the real request handler without binding a port: published routes, one static H1, unique titles/descriptions, seven 301s, retired-blog 404s, local CMS assets, contact validation/storage, unconfigured hosted delivery and video range responses.

HTML includes meaningful page text before JavaScript. React then replaces this fallback with the interactive layout; it is not full layout hydration. Metadata refreshes after navigation. Browser-based screenshot, keyboard, touch, menu-reversal and motion comparisons remain pending in this session. No pixel-perfect claim is made for these updates.

See `docs/FINAL-AUDIT.md` for exact asset provenance, changes, remaining owner facts and review limitations. All source-media downloads were read-only. No original design project, publishing setting, GitHub branch or live deployment was changed.

## Browser QA runner

In an unrestricted terminal, start the site, then install Playwright locally without modifying the lockfile and run the QA script:

```sh
npm install --no-save --package-lock=false playwright
npx playwright install chromium
node scripts/browser-qa.mjs
```

It saves full-page screenshots and JSON findings at 390, 809, 810, 1024, 1439 and 1440px, checks rendered headings/overflow, repeats menu open/Escape and reverse scrolling, and checks empty-form validation. It sends no enquiry. Review the screenshots and motion manually; successful execution alone does not establish visual fidelity. `PLAYWRIGHT_MODULE` can point to an already-installed Playwright entry module. `QA_URL` can target a preview deployment. The runner itself could not execute here because macOS denied Chromium's Mach service registration.

See `docs/RESOURCES-TO-COLLECT.md` for one consolidated handover list.

### One-command local browser run

After applying the latest patch, run:

```sh
cd "$HOME/Motioptic_website" && node scripts/run-browser-qa.mjs
```

The launcher finds the installed Playwright library (including registered macOS browser-cache installations), starts an isolated server on a free port and writes results to `qa-results/`. If Playwright is absent, it prints the installation command. This launcher must run from your normal Terminal: the current assistant session cannot launch Chromium or request a sandbox exception. It is not a grant of browser control to the assistant. After it finishes, the resulting files can be inspected in a follow-up.

## Editing portfolio covers

The homepage, Works grid and case-study heroes read the same cover from `content/works.json`. Video posters are mapped in `content/project-media.json`. Each project also has a dedicated social preview.

Duradry uses the supplied 3508-pixel white wordmark. Markovate and Content Army use scalable SVG traces of the supplied logos in `public/media/logos`. BIOV8, Monkeflow and ELVIS use the supplied Figma assets. Littledata uses its original opening title from the supplied clip.

Production builds use the checked-in WebP and JPEG exports. To regenerate only the artwork, use Node 22.12+ and run these optional commands from the project root:

```sh
npm install --no-save --package-lock=false sharp@0.35.3
node scripts/export-covers.cjs
```
