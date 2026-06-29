# EDD Hub Website Design System

Last updated: 2026-06-29

## Source

The coded public website design is based on the existing EDD Hub PWA/app visual language, inspected from:

- `C:\Users\viber\Documents\edd-hub-pwa\tailwind.config.ts`
- `C:\Users\viber\Documents\edd-hub-pwa\src\styles\index.css`
- `C:\Users\viber\Documents\edd-hub-pwa\src\components\ui\page-shell.tsx`
- `C:\Users\viber\Documents\edd-hub-pwa\src\components\ui\placeholder-card.tsx`
- `C:\Users\viber\Documents\edd-hub-pwa\src\components\ui\brand-logo.tsx`
- `C:\Users\viber\Documents\edd-hub-pwa\src\features\ui\feedback-colors.ts`

## Colour Tokens

- Deep brand red: `#601d1d`
- Brand gold: `#fbb040`
- Brown-gold accent: `#a96f40`
- Teal accent: `#1b6b63`
- Dark ink: `#171717`
- Shell: `#f4efe7`
- Mist: `#f8f7f4`
- Warm panel: `#fffaf3`
- Success green: `#2f8f5b`
- Info blue: `#2f6f9f`
- Danger red: `#aa2727`

## Typography

Use Manrope with system fallbacks. The feel should be strong, operational, modern, and readable on mobile.

## Components

- Buttons: deep red primary, warm secondary, text-first ghost
- Cards: 8px radius, warm panels, thin brand borders, soft shadow
- Badges: app-aligned brand, primary, success, info, waiting, neutral, and danger tones
- Icons: local inline SVG icons, no third-party icon package in this pass

## Motion

Use CSS transitions and desktop sticky cards only. Respect `prefers-reduced-motion`. Do not add heavy animation libraries, autoplay media, or distracting parallax.

## Assets

Copied from the PWA into this Astro site:

- `/public/images/brand/edd-logo-full.png`
- `/public/images/brand/edd-logo-text.png`
- `/public/images/brand/edd-logo-mascot.png`
- `/public/favicon.svg`
