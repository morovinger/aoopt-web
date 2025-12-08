<template>
  <div class="news-article-page" data-page="news-article">
    <template v-if="article">
      <!-- Hero Section -->
      <section class="article-hero bg-gradient-to-br from-cyan-700 to-cyan-900 text-white py-16" data-section="hero">
        <div class="container mx-auto px-4 max-w-4xl">
          <!-- Breadcrumbs -->
          <nav class="article-breadcrumbs mb-6 text-sm opacity-80" data-element="breadcrumbs">
            <NuxtLink to="/" class="hover:underline">Главная</NuxtLink>
            <span class="mx-2">/</span>
            <NuxtLink to="/news" class="hover:underline">Новости</NuxtLink>
            <span class="mx-2">/</span>
            <span>{{ article.title }}</span>
          </nav>
          
          <h1 class="text-3xl md:text-6xl font-bold mb-6 leading-tight">
            {{ article.title }}
          </h1>
          
          <!-- Article Meta -->
          <div class="article-meta flex flex-wrap items-center gap-4 text-sm opacity-90" data-element="meta">
            <span class="flex items-center gap-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
              </svg>
              {{ article.author }}
            </span>
            <span class="flex items-center gap-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
              {{ formatDate(article.date) }}
            </span>
            <span class="flex items-center gap-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              {{ article.readingTime }} мин. чтения
            </span>
          </div>
        </div>
      </section>

      <!-- Article Content -->
      <section class="article-content py-12 bg-white" data-section="content">
        <div class="container mx-auto px-4 max-w-4xl">
          <article class="article-body prose prose-lg max-w-none" data-element="body">
            <ContentRenderer :value="article" />
          </article>
          
          <!-- Share Section -->
          <div class="article-share mt-12 pt-8 border-t border-gray-200" data-section="share">
            <h3 class="text-lg font-semibold text-gray-800 mb-4">
              Поделиться
            </h3>
            <div class="flex gap-3">
              <button class="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </button>
              <button class="p-3 bg-sky-500 text-white rounded-full hover:bg-sky-600 transition">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- Related News Section -->
      <section v-if="relatedNews?.length" class="article-related py-12 bg-gray-50" data-section="related">
        <div class="container mx-auto px-4 max-w-6xl">
          <div class="flex items-center justify-between mb-8">
            <h2 class="text-2xl font-bold text-gray-800">
              Другие новости
            </h2>
            <NuxtLink to="/news" class="text-cyan-600 hover:text-cyan-800 font-medium">
              Смотреть все →
            </NuxtLink>
          </div>
          
          <div class="grid md:grid-cols-3 gap-6">
            <NuxtLink 
              v-for="newsItem in relatedNews" 
              :key="newsItem.path"
              :to="newsItem.path"
              class="related-card bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow"
            >
              <div class="aspect-video bg-gradient-to-br from-cyan-500 to-cyan-700"></div>
              <div class="p-4">
                <h3 class="font-semibold text-gray-800 line-clamp-2">
                  {{ newsItem.title }}
                </h3>
              </div>
            </NuxtLink>
          </div>
        </div>
      </section>
    </template>

    <!-- Not Found -->
    <template v-else>
      <section class="py-20 bg-white text-center">
        <div class="container mx-auto px-4">
          <h1 class="text-4xl font-bold text-gray-800 mb-4">Статья не найдена</h1>
          <p class="text-gray-600 mb-8">К сожалению, запрашиваемая статья не существует.</p>
          <NuxtLink to="/news" class="text-cyan-600 hover:text-cyan-800 font-medium">
            ← Вернуться к новостям
          </NuxtLink>
        </div>
      </section>
    </template>

    <!-- Back Navigation -->
    <section class="article-navigation py-8 bg-gray-100" data-section="navigation">
      <div class="container mx-auto px-4 max-w-6xl">
        <NuxtLink 
          to="/news" 
          class="inline-flex items-center text-cyan-600 hover:text-cyan-800 font-semibold"
        >
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
          </svg>
          Вернуться к новостям
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const slug = Array.isArray(route.params.slug) ? route.params.slug.join('/') : route.params.slug

// Fetch the current article from 'news' collection
const { data: article } = await useAsyncData(`news-${slug}`, () => 
  queryCollection('news').path(`/news/${slug}`).first()
)

// Fetch related news (excluding current)
const { data: relatedNews } = await useAsyncData('related-news', async () => {
  const items = await queryCollection('news').order('date', 'DESC').limit(4).all()
  return items.filter(item => item.path !== article.value?.path).slice(0, 3)
})

// Set page meta
useHead({
  title: () => article.value?.title ? `${article.value.title} | Новости` : 'Новости',
  meta: [
    { 
      name: 'description', 
      content: () => article.value?.description || '' 
    }
  ]
})

function formatDate(dateString: string): string {
  if (!dateString) return ''
  const date = new Date(dateString)
  return date.toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
}
</script>

<style scoped>
.news-article-page {
  font-family: system-ui, -apple-system, sans-serif;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Prose styling for content */
:deep(.prose h2) {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1f2937;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

:deep(.prose p) {
  color: #374151;
  line-height: 1.75;
  margin-bottom: 1rem;
}

:deep(.prose ul), :deep(.prose ol) {
  margin: 1rem 0;
  padding-left: 1.5rem;
}

:deep(.prose li) {
  margin-bottom: 0.5rem;
}

:deep(.prose a) {
  color: #0891b2;
  text-decoration: underline;
}

:deep(.prose a:hover) {
  color: #0e7490;
}

:deep(.prose strong) {
  font-weight: 600;
  color: #111827;
}
</style>
