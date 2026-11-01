# Motioptic website

A responsive studio portfolio with locally served media, reusable page templates and editable JSON content. Node.js 20 or later runs the preview and the contact endpoint.

## Run locally

```sh
npm start
```

Open [the local site](http://127.0.0.1:4173/). The built website is included. You can also open `public/index.html` to browse the pages without a server.

## Change the site

1. Edit projects in `content/works.json`, service pages in `content/services.json`, and articles in `content/blogs.json`. Each record has named fields for its title, slug, copy, and media. Keep record IDs stable because navigation and featured items use them.
2. Edit the corresponding page module in `src/`. The home, contact, works, services, blog, article, project-detail, service-detail and not-found files are named for their pages. Shared components and animation logic remain in the accompanying modules. The inherited component modules retain generated identifiers.
3. Put images in `public/media/images/` and fonts or videos in `public/media/assets/`. For a replacement image, update both its main path and responsive image candidates in the record.
4. Install the pinned build dependency, rebuild and preview.

```sh
npm ci
npm run build
npm start
```

The build reads the JSON records to generate route entry points and bundles the page source into `public/site.js`. Edit the source modules and content files rather than the emitted bundle.

## GitHub and deployment

Commit the project root, including the lockfile, content, media and built website. Local inquiries, dependency installs and environment files are excluded by `.gitignore`. The project has no configured remote.

For a Node host, set the build command to `npm ci && npm run build`, the start command to `npm start`, and `HOST=0.0.0.0`. The server reads the host-provided `PORT` and defaults to 4173 for local use. Mount persistent storage at `data/` to retain contact submissions across deployments.

For static hosting, deploy `public/` at the domain root with directory-index support. Contact delivery requires a backend at `POST /api/contact`. The supplied Node server saves inquiries to `data/inquiries.jsonl`; it does not send email. The data directory is outside the public document root.

## Verification scope

The source clone was compared with the published design at desktop, tablet and mobile widths. After the content migration the 25 public routes were checked for rendered headings and for platform mentions in page text, tab titles, links, image descriptions and accessibility labels. The inherited Contact submit-button mask could not be retrieved from the original site. Image and video pixels have not been audited for embedded words.
# motioptic-website
