import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '*.md'
    }),
    news: defineCollection({
      type: 'page',
      source: 'news/**/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.string(),
        author: z.string().default('Ассоциация ООПТ СЗР'),
        readingTime: z.number().default(1),
        category: z.string().default('Новости'),
        image: z.string().optional()
      })
    })
  }
})
