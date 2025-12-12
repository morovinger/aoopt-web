<template>
  <div class="eco-expeditions-page bg-gray-50" data-page="eco-expeditions">
    <!-- Expeditions Section -->
    <section class="expeditions-intro py-20 bg-white" data-section="intro">
      <div class="container mx-auto px-4 max-w-7xl">
        <!-- Section Title -->
        <h1 class="section-title text-5xl font-bold text-gray-300 mb-16 uppercase tracking-wide">
          Площадки для экспедиций
          <span class="title-underline"></span>
        </h1>

        <!-- Two Column Layout -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
          <!-- Left Column - Text Content -->
          <div class="text-content space-y-6">
            <p class="text-base text-gray-700 leading-relaxed">
              На многих заповедных территориях проводятся познавательные экспедиции для детей, студентов и взрослых.
            </p>
            <p class="text-base text-gray-700 leading-relaxed">
              Здесь размещен список ООПТ, у которых есть опыт в проведении таких мероприятий, и готовых выступить 
              в роли площадки для проведения экспедиций.
            </p>

            <!-- Documents List -->
            <div class="documents-list mt-8">
              <p class="text-base text-gray-700 mb-4">Подробности - в 
                <a 
                  :href="`${baseURL}images/expeditions/info-letter.docx`" 
                  class="text-blue-600 hover:text-blue-800 underline"
                  download
                >
                  информационном письме (.docx)
                </a>.
              </p>
              <ul class="list-disc list-inside space-y-2 text-base text-gray-700">
                <li>
                  <a 
                    :href="`${baseURL}images/expeditions/bank-data-2019.docx`" 
                    class="text-blue-600 hover:text-blue-800 underline"
                    download
                  >
                    Банк данных по ООПТ с возможностями приема экспедиций - 2019 (.docx)
                  </a>
                </li>
                <li>
                  <a 
                    :href="`${baseURL}images/expeditions/bank-data-expeditions.docx`" 
                    class="text-blue-600 hover:text-blue-800 underline"
                    download
                  >
                    Банк данных по ООПТ с возможностями приема экспедиций - 2018 (.docx)
                  </a>
                </li>
                <li>
                  <a 
                    :href="`${baseURL}images/expeditions/schedule-expeditions.docx`" 
                    class="text-blue-600 hover:text-blue-800 underline"
                    download
                  >
                    График возможных заездов экспедиций на ООПТ в 2018 (.docx)
                  </a>
                </li>
              </ul>
            </div>

            <p class="text-base text-gray-700 leading-relaxed mt-6">
              Чтобы внести свою территорию в список экологических площадок, свяжитесь с координатором Ассоциации.
            </p>
          </div>

          <!-- Right Column - Tents Image -->
          <div class="tents-image-wrapper">
            <div class="relative h-96 rounded-lg overflow-hidden">
              <NuxtImg 
                src="/images/expeditions/tent.jpg" 
                alt="Expedition Tents in Mountains"
                class="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
const baseURL = config.app.baseURL

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

.section-title {
  position: relative;
  display: inline-block;
}

.title-underline {
  display: block;
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #06b6d4 0%, #0891b2 100%);
  margin-top: 12px;
}

.tents-image-wrapper {
  position: relative;
}

.tents-image-wrapper::before {
  content: '';
  position: absolute;
  top: -10px;
  left: -10px;
  right: 10px;
  bottom: 10px;
  background: linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(8, 145, 178, 0.1) 100%);
  border-radius: 0.5rem;
  z-index: -1;
}

.documents-list ul li {
  padding-left: 0.5rem;
}
</style>

