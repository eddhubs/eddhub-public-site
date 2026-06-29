# EDD Hub Public Website Source of Truth

Last updated: 2026-06-29

The EDD Hub public website is now a coded Astro site. It is separate from the EDD Hub PWA/app.

- `eddhub.co.uk`: public marketing website for SEO, trust, conversion, and lead generation.
- `eddhub.app`: operational PWA/app for login, dashboards, onboarding, job management, and account workflows.
- Wix is no longer the build target.
- GitHub plus Cloudflare Pages is the intended deployment route after review and approval.
- Latest written rule wins if conflicts exist.

EDD Hub means Emergency Delivery Driver Hub. EDD Hub is a local overflow delivery coordination platform connecting approved takeaways needing short-notice delivery support with approved independent drivers in their local area.

EDD Hub is not a customer food-ordering marketplace, customer tracking app, customer ordering app, or driver employer. The public website must not imply guaranteed drivers, guaranteed delivery times, guaranteed jobs, guaranteed earnings, driver employment, customer accounts, customer dashboards, or EDD Hub handling driver payouts.

## Build Stack

- Astro
- TypeScript
- Tailwind CSS
- Reusable Astro components
- Static pages
- Mobile-first CSS
- SEO metadata per page
- Minimal JavaScript only where useful

Do not add React, a CMS, backend, payment systems, authentication, dashboards, or customer features in this pass.

## Sitemap

- `/`
- `/for-takeaways`
- `/for-drivers`
- `/how-it-works`
- `/pricing`
- `/locations`
- `/locations/perth`
- `/locations/dundee`
- `/locations/fife`
- `/about`
- `/safety-and-trust`
- `/faqs`
- `/contact`
- `/legal`
- `/legal/privacy-notice`
- `/legal/cookie-notice`
- `/legal/driver-terms`
- `/legal/takeaway-terms`

## Required Headlines

- Home: "Extra delivery drivers when your takeaway needs them"
- For takeaways: "Delivery backup for busy takeaway nights"
- For drivers: "Local delivery runs. Your choice whether to accept."
- How it works: "How EDD Hub works"
- Pricing: "Simple pricing for overflow delivery support"
- Locations: "EDD Hub locations"
- Perth: "Overflow delivery support for Perth takeaways"
- Dundee: "EDD Hub Dundee waiting list"
- Fife: "EDD Hub Fife waiting list"
- About: "Why EDD Hub exists"
- Safety and trust: "Safety and trust"
- FAQs: "EDD Hub FAQs"
- Contact: "Contact EDD Hub"
- Legal: "Legal"

## CTAs

Until app registration URLs are approved:

- Register interest: `/contact`
- Takeaway enquiry: `/contact?type=takeaway`
- Driver enquiry: `/contact?type=driver`
- Waiting list: `/contact`
- Login: `https://eddhub.app/login`

## Contact Forms

The first coded pass includes visible form UI only. A submission backend is a launch TODO.

Do not ask drivers to upload insurance, right-to-work evidence, ID documents, or other sensitive documents on the public website.

Consent text: "By submitting this form, you agree that EDD Hub may contact you about your enquiry."

## Legal

Create placeholder pages only unless final legal content or approved PDFs are supplied.

Placeholder wording: "This document will be added before public launch. For questions, contact info@eddhub.co.uk."

## Cloudflare Pages Target

Do not connect Cloudflare or change DNS in this task.

- Framework preset: Astro
- Build command: `npm run build`
- Output directory: `dist`
