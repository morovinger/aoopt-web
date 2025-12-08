<template>
  <div class="eco-expeditions-page" data-page="eco-expeditions">
    <!-- Hero Section -->
    <section class="expeditions-hero bg-gradient-to-br from-teal-700 to-teal-900 text-white py-16" data-section="hero">
      <div class="container mx-auto px-4 max-w-6xl">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">
          Площадки для экспедиций
        </h1>
      </div>
    </section>

    <!-- Content Section -->
    <section class="expeditions-content py-16 bg-white" data-section="content">
      <div class="container mx-auto px-4 max-w-6xl">
        <div class="prose prose-lg max-w-none mb-12">
          <p class="text-lg text-gray-700 leading-relaxed mb-6">
            На многих заповедных территориях проводятся познавательные экспедиции для детей, студентов и взрослых.
          </p>
          <p class="text-lg text-gray-700 leading-relaxed">
            Здесь размещен список ООПТ, у которых есть опыт в проведении таких мероприятий, и готовых выступить 
            в роли площадки для проведения экспедиций.
          </p>
        </div>

        <!-- Documents Section -->
        <div class="expeditions-documents bg-teal-50 border-l-4 border-teal-600 rounded-lg p-8 mb-12" data-section="documents">
          <h3 class="text-xl font-bold mb-4 text-gray-800">
            Документы и материалы
          </h3>
          <ul class="space-y-3">
            <li>
              <a 
                href="#" 
                class="text-teal-600 hover:text-teal-800 font-medium flex items-center"
              >
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                </svg>
                Подробности - в информационном письме (.docx)
              </a>
            </li>
            <li>
              <a 
                href="#" 
                class="text-teal-600 hover:text-teal-800 font-medium flex items-center"
              >
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                </svg>
                Банк данных по ООПТ с возможностями приема экспедиций - 2019 (.docx)
              </a>
            </li>
            <li>
              <a 
                href="#" 
                class="text-teal-600 hover:text-teal-800 font-medium flex items-center"
              >
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                </svg>
                Банк данных по ООПТ с возможностями приема экспедиций - 2018 (.docx)
              </a>
            </li>
            <li>
              <a 
                href="#" 
                class="text-teal-600 hover:text-teal-800 font-medium flex items-center"
              >
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                </svg>
                График возможных заездов экспедиций на ООПТ в 2018 (.docx)
              </a>
            </li>
          </ul>
        </div>

        <!-- Info Section -->
        <div class="expeditions-info grid md:grid-cols-2 gap-8 mb-12" data-section="info">
          <div class="info-card bg-white border-2 border-teal-200 rounded-lg p-6" data-info="target-audience">
            <div class="flex items-center mb-4">
              <div class="bg-teal-600 rounded-full p-3 mr-4">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-800">Для кого</h3>
            </div>
            <p class="text-gray-700">
              Экспедиции организуются для детей, студентов и взрослых, заинтересованных в изучении 
              природы заповедных территорий.
            </p>
          </div>

          <div class="info-card bg-white border-2 border-teal-200 rounded-lg p-6" data-info="conditions">
            <div class="flex items-center mb-4">
              <div class="bg-teal-600 rounded-full p-3 mr-4">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-800">Условия</h3>
            </div>
            <p class="text-gray-700">
              ООПТ предоставляют различные условия для размещения участников экспедиций - от полевых 
              станций до кордонов.
            </p>
          </div>
        </div>

        <!-- Contact Section -->
        <div class="expeditions-cta bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg p-8 border-l-4 border-teal-600" data-section="cta">
          <h3 class="text-2xl font-bold mb-4 text-gray-800">
            Планируете экспедицию?
          </h3>
          <p class="text-gray-700 mb-6">
            Чтобы внести свою территорию в список экологических площадок, свяжитесь с координатором Ассоциации.
          </p>
          <a 
            href="/#contacts" 
            class="inline-block bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors"
          >
            Связаться с координатором
          </a>
        </div>
      </div>
    </section>

    <!-- Back to Specialist Section -->
    <section class="expeditions-navigation py-8 bg-gray-100" data-section="navigation">
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
  title: 'Площадки для экспедиций | Ассоциация ООПТ Северо-Запада',
  meta: [
    { 
      name: 'description', 
      content: 'Познавательные экспедиции на заповедных территориях Северо-Запада России' 
    }
  ]
})
</script>

<style scoped>
.eco-expeditions-page {
  font-family: system-ui, -apple-system, sans-serif;
}
</style>
