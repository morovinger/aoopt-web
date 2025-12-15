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

## Deploy to Timeweb Shared Hosting (SSR Mode)

This project is configured to deploy automatically to Timeweb shared hosting via GitHub Actions when you push to the `main` branch.

### Deployment Flow

```
Push to GitHub → GitHub Actions builds → rsync to Timeweb → PM2 restart
```

### GitHub Secrets Setup

Configure these secrets in your GitHub repository (Settings → Secrets and variables → Actions):

| Secret | Description | Example |
|--------|-------------|---------|
| `TIMEWEB_HOST` | Server hostname or IP | `s123.timeweb.ru` |
| `TIMEWEB_USER` | SSH username | `u1234567` |
| `TIMEWEB_SSH_KEY` | Private SSH key (entire content) | `-----BEGIN OPENSSH...` |
| `TIMEWEB_PATH` | Deployment path on server | `/home/u1234567/aoopt-web` |
| `TIMEWEB_PM2_NAME` | PM2 process name | `aoopt-web` |

### Initial Server Setup (One Time)

1. SSH into your Timeweb server:

```bash
ssh your-user@your-server.timeweb.ru
```

2. Create the project directory and clone (first time only):

```bash
mkdir -p ~/aoopt-web
cd ~/aoopt-web
```

3. Create a `.env` file with environment variables:

```bash
cat > .env << 'EOF'
STUDIO_GITHUB_CLIENT_ID=your_github_oauth_client_id
STUDIO_GITHUB_CLIENT_SECRET=your_github_oauth_client_secret
# NUXT_APP_BASE_URL=/  # Uncomment if deploying to a sub-path
EOF
```

4. After the first GitHub Actions deploy, start PM2:

```bash
cd ~/aoopt-web
pm2 start .output/server/index.mjs --name "aoopt-web"
pm2 save
pm2 startup  # Follow instructions to enable auto-start
```

### SSH Key Setup for GitHub Actions

1. Generate a new SSH key pair (on your local machine):

```bash
ssh-keygen -t ed25519 -f timeweb_deploy -C "github-actions-deploy"
```

2. Add the public key to Timeweb server:

```bash
ssh-copy-id -i timeweb_deploy.pub your-user@your-server.timeweb.ru
```

3. Copy the private key content and add it as `TIMEWEB_SSH_KEY` secret in GitHub.

### Manual Deployment (Optional)

If you need to deploy manually:

```bash
npm run build
rsync -avz --delete .output/ user@server:~/aoopt-web/.output/
ssh user@server "cd ~/aoopt-web && pm2 restart aoopt-web"
```

## Nuxt Studio (Production Editing + GitHub Publish)

This project uses `nuxt-studio` (alpha) to edit `content/` in production and publish changes back to GitHub.

### GitHub OAuth App Setup

Nuxt Studio's OAuth callback route is:

- `__nuxt_studio/auth/github`

For `https://your-domain.ru`, set your OAuth app callback to:

- `https://your-domain.ru/__nuxt_studio/auth/github`

Then set these environment variables on your server (in `.env`):

- `STUDIO_GITHUB_CLIENT_ID`
- `STUDIO_GITHUB_CLIENT_SECRET`

### Troubleshooting "GitHub publish … /git/blobs: 404"

If you see an error like:

- `[POST] "https://api.github.com/repos/<owner>/<repo>/git/blobs": 404`

Checklist:

- **Logged-in account**: Make sure you're signed into Studio with a GitHub user that has **write access** to the target repo/branch.
- **Org restrictions**: If the repo is under a GitHub Organization with OAuth restrictions, grant the OAuth app access to that org.
- **Session sanity check**: Open `https://<your-site>/__nuxt_studio/auth/session` to confirm which user is active.

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
- Tailwind CSS
