# mySite - Nuxt Project

A modern Nuxt application with content management capabilities.

## Setup

1. Install dependencies:

```bash
npm install
```

1. Start development server:

```bash
npm run dev
```

1. Build for production:

```bash
npm run build
```

## Deploy to Cloudflare Pages (NuxtHub + Cloudflare Pages)

This project is configured to build for Cloudflare Pages (Workers runtime) using Nitro’s `cloudflare_pages` preset.

### Cloudflare Pages (Dashboard) settings

- **Build command**: `npm run build:cf`
- **Build output directory**: `.output/public`
- **Node.js version**: Use Node 20+ (recommended for Nuxt 4)

### Fix for the error: “Workers-specific command in a Pages project”

If your deploy log shows something like:

- `Executing user deploy command: npx wrangler deploy`
- `It looks like you've run a Workers-specific command in a Pages project. For Pages, please run wrangler pages deploy instead.`

Then your **Cloudflare Pages project has a Deploy command set to a Workers command**.

- **Fix (recommended)**: **Remove/clear the Deploy command** in Cloudflare Pages. Pages deploys automatically after the build using the “Build output directory”.
- **Fix (if you really want a Deploy command)**: set it to:

```bash
npx wrangler pages deploy .output/public --project-name "$CF_PAGES_PROJECT_NAME"
```

### Fix for the error: `Output directory ".output/public" not found`

If your Pages build log shows:

- `No build command specified. Skipping build step.`
- `Error: Output directory ".output/public" not found.`

Then **no build command ran**, so the `.output/public` folder was never generated.

- **Cloudflare Pages (Dashboard)**:
  - **Build command**: `npm run build:cf`
  - **Build output directory**: `.output/public`

### Fix for the error: `Configuration file for Pages projects does not support "build"`

If your Pages build log shows:

- `Running configuration file validation for Pages:`
- `Configuration file for Pages projects does not support "build"`

Then **your `wrangler.toml` includes a `[build]` section**, which Pages currently rejects.

- **Fix**: remove the `[build]` section from `wrangler.toml` and configure build in the **Cloudflare Pages Dashboard**:
  - **Build command**: `npm run build:cf`
  - **Build output directory**: `.output/public`

### Base URL (optional)

Cloudflare Pages is usually deployed at the domain root. If you ever deploy under a sub-path, set:

- **Env var**: `NUXT_APP_BASE_URL`
- **Example value**: `/mySite/` (must include leading and trailing `/`)

### Fix for the error: `Error 8000057: Rule (...) in routes.json is over the 100 character limit`

Cloudflare Pages enforces a **100 character limit per rule** in the routes file it uses for Functions routing.
Some builds can generate overly long rules (often due to long asset paths).

**Root cause**: Long filenames (especially Cyrillic/Unicode) become extremely long when URL-encoded. For example, a Russian filename like `Информационное письмо.docx` becomes `%D0%98%D0%BD%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D0%BE%D0%B5%20%D0%BF%D0%B8%D1%81%D1%8C%D0%BC%D0%BE.docx` — way over 100 chars.

**Fix (root cause)**:

- **Keep all asset filenames short and ASCII-only** (e.g., `info-letter.docx` instead of Cyrillic names).
- This repo has already renamed the problematic files in `public/images/expeditions/` and `public/images/law/`.

**Fix (fallback)**:

- This repo includes `public/_routes.json` with short wildcard rules.
- The `postbuild` script copies it to `.output/public/_routes.json` so it overrides any generated routes.
- If you customize routing later, keep each `include` / `exclude` entry **under 100 characters**.

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
