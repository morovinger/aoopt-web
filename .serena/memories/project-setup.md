# mySite Project Setup

## Initial Configuration
- **Date**: December 1, 2025
- **Project Type**: Nuxt 4 with Vue 3 and TypeScript
- **Serena Version**: Successfully activated and tested

## Key Components
- **Framework**: Nuxt 4.2.1 with @nuxt/content for content management
- **Database**: better-sqlite3 for local database
- **Studio**: nuxt-studio (alpha) configured but needs GitHub details

## File Structure
- `app/` - Application source code
  - `app.vue` - Root component
  - `pages/[...slug].vue` - Dynamic catch-all route
- `content/` - Markdown content files
- `.serena/` - Serena configuration and documentation

## Serena Setup Completed
- Created comprehensive configuration in `.serena/config.toml`
- TypeScript and Vue language servers enabled
- All symbolic and file operation tools enabled
- Memory system activated (max 50 memories)
- Created detailed setup guides and quick reference

## Routing System Implemented (December 4, 2025)

### Specialist Section Pages
Created full routing system with static Vue pages (not content):

**Main Page**:
- `/specialist` - Overview page with cards linking to sub-sections

**Sub-pages**:
- `/specialist/legal-practice` - Legal materials, document templates, case law
- `/specialist/researchers-database` - Database of researchers working at protected areas
- `/specialist/expedition-sites` - Information about field research facilities and infrastructure

### Navigation
Updated `AppHeader.vue` with:
- Desktop dropdown menu for specialist section
- Mobile menu with specialist links
- Proper routing to all specialist pages

### Design Features
- Breadcrumb navigation on sub-pages
- Color-coded sections (green, blue, purple, teal)
- Stats section with key metrics
- Responsive grid layouts
- Back-to-section navigation links
- Call-to-action sections

## Next Steps
- Create pages for Tourist and Volunteer sections
- Update nuxt.config.ts with actual GitHub repository details
- Implement database schema and operations
- Add News section functionality

## Notes
- Project follows OOP principles and modular design
- Files kept under 1000 lines per user requirements
- Node modules and build artifacts excluded from Serena analysis
