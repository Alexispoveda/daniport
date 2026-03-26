# Daniella Castillo Portfolio

Professional bilingual portfolio built with Next.js App Router.

## Stack

- Next.js 16
- React 19
- TypeScript (strict)
- Tailwind CSS 4
- ESLint 9

## Main Features

- 3 pages: Home, About, Contact
- Shared header and footer
- EN/ES internationalization with locale-prefixed routes
- JSON-driven content for easy CI/CD updates
- SEO metadata per page + `robots.txt` + `sitemap.xml`
- Responsive layout
- Uses only the 3 provided image assets

## Routes

- `/` redirects to default locale (`/en`)
- `/en`, `/en/about`, `/en/contact`
- `/es`, `/es/about`, `/es/contact`

Locale redirection is handled in `proxy.ts`.

## Project Structure

```text
app/
	[lang]/
		about/page.tsx
		contact/page.tsx
		layout.tsx
		page.tsx
	assets/images/
	globals.css
	layout.tsx
	page.tsx
	robots.ts
	sitemap.ts
components/
	common/
	layout/
	sections/
config/
	experiences.json
	profile.json
	site.json
locales/
	en.json
	es.json
lib/
	i18n.ts
	routes.ts
	types.ts
proxy.ts
```

## Content Management

All editable text is configurable through JSON files.

- Global profile and contact content: `config/profile.json`
- Experience list: `config/experiences.json`
- Site config (base URL and locales): `config/site.json`
- UI labels and page copy by locale: `locales/en.json`, `locales/es.json`

To update content, edit JSON files only. No component code changes should be required.

## SEO

- Base URL: `https://danicast.com` (from `config/site.json`)
- Localized metadata via `app/[lang]/layout.tsx`
- Route metadata in each page file
- Search engine files:
	- `app/robots.ts`
	- `app/sitemap.ts`

## Development

Install dependencies:

```bash
npm install
```

Run locally:

```bash
npm run dev
```

Lint:

```bash
npm run lint
```

Build for production:

```bash
npm run build
```

Run production build:

```bash
npm run start
```

## Notes

- Keep locale keys synchronized between `locales/en.json` and `locales/es.json`.
- Keep text changes in JSON, not hardcoded in TSX.
- Current default locale is `en`.
