# EDD Hub Public Site

This is the coded public marketing website for EDD Hub, built with Astro, TypeScript and Tailwind CSS.

## What This Site Is

- Public website for `eddhub.co.uk`
- Marketing, SEO, trust, conversion and lead-generation surface
- Static Astro site with reusable components
- Mobile-first first-pass build
- Separate from the operational EDD Hub PWA/app

## What This Site Is Not

- Not the EDD Hub operational app
- Not `eddhub.app`
- Not a customer food-ordering marketplace
- Not a customer tracking or customer account system
- Not a dashboard
- Not a Wix rebuild
- Not connected to payments, authentication, a CMS or backend forms yet

## Local Development

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
```

Preview a production build locally:

```sh
npm run preview
```

## Legal Documents

- Public legal PDFs are stored in `public/legal/`.
- The public website currently exposes only the four core public legal PDFs:
  - Driver Terms and Conditions
  - Takeaway / Restaurant Terms and Conditions
  - Privacy Notice
  - Cookie Notice
- The wider legal pack remains stored separately and should only be added to the public website if explicitly approved.
- Legal pages summarise each public website document and link to the controlled PDF.
- DOCX files are not used on the public website.
- Legal documents must be reviewed and replaced when new versions are issued.
- The public site is not legal advice; the PDF versions control the documents.

## Legal Document Update Process

1. Replace PDFs in `public/legal/`.
2. Update legal data/page metadata if filename, version or effective date changes.
3. Run `npm.cmd run check`.
4. Run `npm.cmd run build`.
5. Review `/legal` and the linked pages.
6. Commit changes.

## Cloudflare Pages Target

Do not connect Cloudflare Pages or point `eddhub.co.uk` until review and explicit approval.

Intended Cloudflare Pages settings:

- Framework preset: Astro
- Build command: `npm run build`
- Output directory: `dist`

## Current First-Pass TODOs

- Wire contact forms to an approved backend or form service. Current visible forms include a visitor-friendly email fallback and do not submit to a backend yet.
- Replace legal PDFs and metadata when new approved versions are issued.
- Confirm final public pricing wording.
- Confirm Perth, Dundee and Fife rollout status before launch.
- Confirm any approved app registration URLs.
- Run owner review before any deployment or domain changes.
