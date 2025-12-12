// https://nuxt.com/docs/api/configuration/nuxt-config
const appBaseURL = process.env.NUXT_APP_BASE_URL || '/'
const nitroPreset =
  process.env.NITRO_PRESET ||
  (process.env.CF_PAGES ? 'cloudflare_pages' : undefined)
const enableHubDatabase = process.env.NUXT_HUB_DATABASE === 'true'

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },

  app: {
    // Cloudflare Pages is typically deployed at the domain root.
    // If you deploy under a sub-path, set NUXT_APP_BASE_URL (e.g. "/mySite/").
    baseURL: appBaseURL
  },

  modules: [
    '@nuxt/content',
    'nuxt-studio',
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxthub/core'
  ],

  nitro: nitroPreset ? { preset: nitroPreset } : {},

  hub: {
    // Optional: Enable NuxtHub database (Cloudflare D1).
    // When enabled, configure a Pages D1 binding named `DB`.
    database: enableHubDatabase
  },

  // Fix for nuxt-studio H3Error
  vite: {
    optimizeDeps: {
      include: ['brace-expansion']
    }
  },

  studio: {
    development: {
      sync: true
    },
    repository: {
      provider: 'github',
      owner: 'morovinger',
      repo: 'aoopt-web',
      branch: 'main',
      rootDir: ''
    }
  }
})
