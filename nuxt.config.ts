// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  // GitHub Pages base path (repo name)
  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/mySite/' : '/'
  },

  modules: [
    '@nuxt/content',
    'nuxt-studio',
    '@nuxtjs/tailwindcss'
  ],
  studio: {
    development: {
      sync: true
    },
    repository: {
      provider: 'github',
      owner: 'aoopt-szr', // TODO: Replace with your GitHub username
      repo: 'mySite', // TODO: Replace with your GitHub repository name
      branch: 'main',
      rootDir: ''
    }
  }
})
