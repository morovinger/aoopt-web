<template>
  <div class="law-page" data-page="law">
    <!-- Hero Section -->
    <section class="law-hero bg-gradient-to-br from-blue-700 to-blue-900 text-white py-16" data-section="hero">
      <div class="container mx-auto px-4 max-w-6xl">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">
          Юридическая практика
        </h1>
      </div>
    </section>

    <!-- Content Section -->
    <section class="law-content py-16 bg-white" data-section="content">
      <div class="container mx-auto px-4 max-w-6xl">
        <div class="prose prose-lg max-w-none mb-12">
          <p class="text-lg text-gray-700 leading-relaxed mb-6">
            За годы работы в заповедниках и национальных парков Северо-Запада России накоплен ценный 
            практический опыт в правовой сфере.
          </p>
          <p class="text-lg text-gray-700 leading-relaxed mb-6">
            Судебные дела, оформление документации, разрешение конфликтных юридических вопросов - вся 
            эта информация может быть весьма полезной для коллег, поэтому она будет размещаться здесь.
          </p>
          <p class="text-lg text-gray-700 leading-relaxed mb-6">
            Информация приведена в сжатом формате, если какой-то из примеров заинтересовал вас - можно 
            обратиться к контактному лицу, указанному в описании конкретного случая.
          </p>
          <p class="text-lg text-gray-700 leading-relaxed">
            Приглашаем всех специалистов ООПТ Асоциации присоединяться к работе над разделом.
          </p>
        </div>

        <!-- Examples Section -->
        <div class="law-examples mt-16" data-section="examples">
          <h2 class="text-3xl md:text-6xl font-bold mb-8 text-gray-800">
            Примеры из практики
          </h2>
          <div class="bg-blue-50 border-l-4 border-blue-600 p-8 rounded-lg">
            <p class="text-gray-700">
              Материалы находятся в процессе подготовки. Для получения информации о конкретных примерах 
              из юридической практики свяжитесь с координатором Ассоциации.
            </p>
          </div>
        </div>

        <!-- Contact Section -->
        <div class="law-contact mt-12 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8 border-l-4 border-blue-600" data-section="contact">
          <h3 class="text-2xl font-bold mb-4 text-gray-800">
            Нужна консультация?
          </h3>
          <p class="text-gray-700 mb-4">
            Для получения юридической консультации или предоставления материалов для публикации 
            свяжитесь с координатором Ассоциации.
          </p>
          <a 
            href="/#contacts" 
            class="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Связаться с нами
          </a>
        </div>
      </div>
    </section>

    <!-- Back to Specialist Section -->
    <section class="law-navigation py-8 bg-gray-100" data-section="navigation">
      <div class="container mx-auto px-4 max-w-6xl">
        <NuxtLink 
          to="/specialist" 
          class="inline-flex items-center text-green-600 hover:text-green-800 font-semibold"
        >
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
          </svg>
          Вернуться к разделу для специалистов
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Юридическая практика | Ассоциация ООПТ Северо-Запада',
  meta: [
    { 
      name: 'description', 
      content: 'Практический опыт в правовой сфере заповедников и национальных парков Северо-Запада России' 
    }
  ]
})
</script>

<style scoped>
.law-page {
  font-family: system-ui, -apple-system, sans-serif;
}
</style>
