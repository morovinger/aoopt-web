// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },

  // GitHub Pages base path (repo name)
  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/mySite/' : '/'
  },

  modules: [
    '@nuxt/content',
    'nuxt-studio',
    '@nuxtjs/tailwindcss'
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
      owner: 'aoopt-szr',
      repo: 'mySite',
      branch: 'main',
      rootDir: ''
    }
  }
})
