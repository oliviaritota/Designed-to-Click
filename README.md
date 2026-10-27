# Designed to Click

Marketing site for Designed to Click, a web development studio. Built with Next.js, React, and TypeScript.

## Pages

- Home
- About
- Services
- Our Work
- The Process
- FAQ
- Contact
- Privacy Policy
- Website Terms of Use
- Accessibility Statement

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Before you publish

Update the studio inbox in `src/lib/site.ts` (`contactEmail`). The contact form opens the visitor’s email app addressed to that inbox. It does not store messages on the site.

Set `NEXT_PUBLIC_SITE_URL` to the live domain so canonical links, the sitemap, and robots metadata use the public URL. Copy `.env.example` to `.env.local` for local overrides.

Replace the project types in `src/lib/content.ts` when real case studies are ready to share.

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — ESLint

## Repository

The Git remote is [github.com/oliviaritota/Designed-to-Click](https://github.com/oliviaritota/Designed-to-Click).
