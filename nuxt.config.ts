// https://nuxt.com/docs/api/configuration/nuxt-config
const appBaseURL = process.env.NUXT_APP_BASE_URL || '/'

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },

  app: {
    // If you deploy under a sub-path, set NUXT_APP_BASE_URL (e.g. "/mySite/").
    baseURL: appBaseURL
  },

  modules: [
    '@nuxt/content',
    'nuxt-studio',
    '@nuxtjs/tailwindcss',
    '@nuxt/image'
  ],

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
