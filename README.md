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

## Cloudflare Pages Target

Do not connect Cloudflare Pages or point `eddhub.co.uk` until review and explicit approval.

Intended Cloudflare Pages settings:

- Framework preset: Astro
- Build command: `npm run build`
- Output directory: `dist`

## Current First-Pass TODOs

- Wire contact forms to an approved backend or form service. Current visible forms include a visitor-friendly email fallback and do not submit to a backend yet.
- Replace legal placeholders with approved legal content or approved PDFs.
- Confirm final public pricing wording.
- Confirm Perth, Dundee and Fife rollout status before launch.
- Confirm any approved app registration URLs.
- Run owner review before any deployment or domain changes.
