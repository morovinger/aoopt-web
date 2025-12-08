<template>
  <div class="news-page" data-page="news">
    <!-- Hero Section -->
    <section class="news-hero bg-gradient-to-br from-cyan-700 to-cyan-900 text-white py-16" data-section="hero">
      <div class="container mx-auto px-4 max-w-6xl">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">
          Новости
        </h1>
        <p class="text-xl opacity-90">
          Актуальные события и мероприятия Ассоциации ООПТ Северо-Запада
        </p>
      </div>
    </section>

    <!-- News List Section -->
    <section class="news-content py-16 bg-white" data-section="content">
      <div class="container mx-auto px-4 max-w-6xl">

        <!-- News Grid -->
        <div class="news-grid grid md:grid-cols-2 gap-8" data-section="news-list">
          <article 
            v-for="article in posts" 
            :key="article.path"
            class="news-card bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
            :data-article="article.path"
          >
            <!-- Article Image -->
            <NuxtLink :to="article.path" class="news-card-image aspect-video relative block overflow-hidden">
              <img 
                v-if="article.image" 
                :src="article.image" 
                :alt="article.title"
                class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              >
              <div v-else class="absolute inset-0 bg-gradient-to-br from-cyan-500 to-cyan-700 flex items-center justify-center">
                <svg class="w-16 h-16 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/>
                </svg>
              </div>
            </NuxtLink>
            
            <!-- Article Content -->
            <div class="news-card-content p-6">
              <NuxtLink :to="article.path" class="block">
                <h2 class="text-xl font-bold text-gray-800 mb-3 hover:text-cyan-600 transition-colors line-clamp-2">
                  {{ article.title }}
                </h2>
              </NuxtLink>
              
              <p class="text-gray-600 mb-4 line-clamp-3">
                {{ article.description }}
              </p>
              
              <!-- Article Meta -->
              <div class="news-card-meta flex items-center justify-between text-sm text-gray-500">
                <div class="flex items-center gap-4">
                  <span>{{ formatDate(article.date) }}</span>
                  <span>{{ article.readingTime }} мин. чтения</span>
                </div>
              </div>
            </div>
          </article>
        </div>

        <!-- Empty State -->
        <div v-if="!posts?.length" class="text-center py-12 text-gray-500">
          <svg class="w-16 h-16 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/>
          </svg>
          <p>Новости пока не опубликованы</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Новости | Ассоциация ООПТ Северо-Запада',
  meta: [
    { 
      name: 'description', 
      content: 'Новости и события Ассоциации заповедников и национальных парков Северо-Запада России' 
    }
  ]
})

// Fetch all news using queryCollection from 'news' collection
const { data: posts } = useAsyncData('news-list', () => 
  queryCollection('news').order('date', 'DESC').all()
)

function formatDate(dateString: string): string {
  if (!dateString) return ''
  const date = new Date(dateString)
  return date.toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  })
}
</script>

<style scoped>
.news-page {
  font-family: system-ui, -apple-system, sans-serif;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
