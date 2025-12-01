// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
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
      owner: 'your-username', // TODO: Replace with your GitHub username
      repo: 'your-repo', // TODO: Replace with your GitHub repository name
      branch: 'main',
      rootDir: ''
    }
  }
})
