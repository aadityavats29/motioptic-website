# Motioptic — collect these together

Decision: keep unconfirmed claims omitted. Use https://motioptic.com, hyder@motioptic.com (GoDaddy / Microsoft 365), and Vercel Analytics. Domain and mailbox are confirmed.

## Needed to activate and verify the live site

1. **Vercel project access.** Domain is confirmed as motioptic.com and already configured in code. Enable Web Analytics in the project's dashboard and redeploy. Custom enquiry events require a supporting plan; leave ANALYTICS_CUSTOM_EVENTS false otherwise. No paid upgrade has been requested or performed.
2. **Microsoft 365 mail authorization.** A tenant administrator must register/authorize the website's mail app and restrict it to hyder@motioptic.com using Exchange application access controls. Configure MS_TENANT_ID, MS_CLIENT_ID and MS_CLIENT_SECRET directly in Vercel's private environment settings. Do not paste secrets into chat. Gmail OAuth is not applicable to this GoDaddy/Microsoft 365 mailbox. GoDaddy may require administrator/provider assistance for app authorization. After configuration, submit one clearly labelled test enquiry and confirm inbox receipt and Reply-To.
3. **Unrestricted browser QA.** Run `cd "$HOME/Motioptic_website" && node scripts/run-browser-qa.mjs` in your normal Terminal, then review the screenshots and JSON report. Check the original menu-freeze scenario, rapid opening/closing, touch, keyboard focus, first load, navigation, reverse scrolling, hover reversals, reduced motion and video controls. Full visual comparison with the original reference is still required; none is claimed here.

## Media to provide or confirm

- **ELVIS:** one approved MP4 below 256 MiB, ideally a web-ready H.264 file at 1080p or lower. All three currently supplied files exceed the connector limit.
- **BIOV8 and Markovate:** approved additional gallery images/video. The website currently has one real cover per project, not a complete gallery.
- **Content Army:** confirm the chosen VAR2 edit belongs under this project; it includes Monkeflow imagery and an interview speaker.
- **Duradry:** confirm the selected 1.mp4 lifestyle edit is the intended public project video. The cover is separate editorial artwork.
- **All spoken videos:** approved captions/transcripts and a full-content review. Existing review sampled frames, not every spoken line.
- **Logos:** permission to display BIOV8, Duradry and Markovate. Other logos remain withheld pending identity/permission confirmation.

## Optional additions — omitted until supplied

- For each of the seven projects: client description, what they needed, work delivered, year, live URL and one approved result only if substantiated. A few sentences each are enough.
- Founder/team names, roles and a real photo; studio city and founding year.
- Verified project/client/country counts, if you want metrics shown.
- Pricing bands, typical timelines, revisions, support terms and response-time promise, if you want specific FAQ commitments.
- Approved testimonials with attribution and permission.
- Review privacy wording against the actual hosting, retention and email setup.

No missing numbers, company history, project results or promises have been invented. These optional facts do not need to delay a site that intentionally leaves them out.
