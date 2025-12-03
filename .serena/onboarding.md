# mySite - Nuxt 3 Project

## Project Overview
This is a Nuxt 3 application using Vue 3 and TypeScript.

## Technology Stack
- **Framework**: Nuxt 4.2.1
- **UI Library**: Vue 3.5.25
- **Routing**: Vue Router 4.6.3
- **Content**: @nuxt/content 3.8.2 (for content management)
- **Database**: better-sqlite3 12.4.6
- **Studio**: nuxt-studio (alpha)

## Project Structure
```
mySite/
├── app/                    # Application code
│   ├── app.vue            # Root component
│   └── pages/             # Page components
│       └── [...slug].vue  # Dynamic catch-all route
├── content/               # Content files (markdown, etc.)
│   └── index.md          # Homepage content
├── public/                # Static assets
├── .serena/              # Serena configuration
├── content.config.ts      # Nuxt Content configuration
├── nuxt.config.ts        # Nuxt configuration
└── package.json          # Dependencies

```

## Key Features
- Dynamic routing with catch-all routes
- Content management system via @nuxt/content
- Modern Nuxt 4 architecture

## Development Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run generate` - Generate static site
- `npm run preview` - Preview production build

## Architecture Principles
- **Modularity**: Components and pages are kept small and focused
- **Single Responsibility**: Each component/page handles one concern
- **OOP-first**: Using composition and reusable components
- **File Structure**: Following Nuxt conventions, files under 1000 lines

## Notes for AI/Serena
- This project uses Nuxt auto-imports, so components and composables don't need explicit imports
- Pages are automatically registered as routes based on file structure
- Content files can be queried using the Content API



