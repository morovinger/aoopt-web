# mySite - Nuxt Project

A modern Nuxt application with content management capabilities.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Deploy to Cloudflare Pages (NuxtHub + Cloudflare Pages)

This project is configured to build for Cloudflare Pages (Workers runtime) using Nitro’s `cloudflare_pages` preset.

### Cloudflare Pages (Dashboard) settings

- **Build command**: `npm run build:cf`
- **Build output directory**: `.output/public`
- **Node.js version**: Use Node 20+ (recommended for Nuxt 4)

### Base URL (optional)

Cloudflare Pages is usually deployed at the domain root. If you ever deploy under a sub-path, set:

- **Env var**: `NUXT_APP_BASE_URL`
- **Example value**: `/mySite/` (must include leading and trailing `/`)

### Wrangler CLI (optional deploy)

If you prefer deploying from your machine:

```bash
npm run build:cf
npx wrangler pages deploy .output/public --project-name <your-pages-project-name>
```

### NuxtHub features (optional)

`@nuxthub/core` is installed.

If you want to enable the NuxtHub database (Cloudflare D1), set **Env var** `NUXT_HUB_DATABASE=true` and add a **D1 binding** in Cloudflare Pages:

- **Binding name**: `DB`
- **Resource**: your Cloudflare D1 database

If you enable other NuxtHub features later (KV/R2/cache), you’ll also need to configure the corresponding Cloudflare bindings in your Pages project settings.

## Project Structure

- `app/` - Application code
  - `pages/` - Vue page components (auto-routed)
  - `components/` - Reusable Vue components
  - `composables/` - Composable functions for shared logic
  - `types/` - TypeScript type definitions and interfaces
  - `layouts/` - Layout templates
- `content/` - Markdown content files
- `public/` - Static assets
- `nuxt.config.ts` - Nuxt configuration

## Tech Stack

- Nuxt 4.2.1
- Vue 3.5.25
- TypeScript
- @nuxt/content
- @nuxt/studio
- @nuxthub/core
- wrangler
