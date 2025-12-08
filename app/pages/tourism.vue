<template>
  <div class="tourism-page" data-page="tourism">

    <!-- Ecotourism Info Section -->
    <section class="tourism-info py-16 bg-white" data-section="info">
      <div class="container mx-auto px-4 max-w-6xl">
        <div class="flex flex-col lg:flex-row gap-12 items-start">
          <!-- Text Content -->
          <div class="lg:w-1/2">
            <div class="prose prose-lg max-w-none">
              <p class="text-lg text-gray-700 leading-relaxed mb-6">
                Все территории, входящие в Ассоциацию заповедников и национальных парков 
                Северо-Запада России, занимаются развитием экологического, познавательного туризма.
              </p>
              
              <p class="text-lg text-gray-700 leading-relaxed mb-6">
                Экотуризм основан на принципах устойчивого развития:
              </p>
              
              <ul class="space-y-3 mb-8">
                <li class="flex items-start">
                  <span class="text-teal-600 mr-3 mt-1">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                  </span>
                  <span class="text-gray-700">Это путешествие в дикую природу.</span>
                </li>
                <li class="flex items-start">
                  <span class="text-teal-600 mr-3 mt-1">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                  </span>
                  <span class="text-gray-700">Воздействие на окружающую среду минимально и контролируемо.</span>
                </li>
                <li class="flex items-start">
                  <span class="text-teal-600 mr-3 mt-1">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                  </span>
                  <span class="text-gray-700">Туризм содержит познавательный компонент.</span>
                </li>
                <li class="flex items-start">
                  <span class="text-teal-600 mr-3 mt-1">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                  </span>
                  <span class="text-gray-700">Он интегрирован в местную экономику.</span>
                </li>
              </ul>
              
              <p class="text-lg text-gray-700 leading-relaxed">
                Планируя путешествие на Северо-Запад России, ознакомьтесь с туристическими 
                предложениями заповедников и национальных парков, а также с правилами их посещения.
              </p>
            </div>
          </div>
          
          <!-- Image -->
          <div class="lg:w-1/2">
            <img 
              src="https://static.wixstatic.com/media/65d40007c89944cd970accd4729abddb.jpg" 
              alt="Экотуризм в заповедниках"
              class="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <StatsGrid :stats="tourismStats" variant="dark" />

    <!-- Map Section -->
    <MapSection />

    <!-- Gallery Section -->
    <TourismGallery />

  </div>
</template>

<script setup lang="ts">
const tourismStats = [
  { value: '1995', label: 'Год основания' },
  { value: '31', label: 'Федеральных ООПТ' },
  { value: '6,6M', label: 'Гектар дикой природы' },
  { value: '6', label: 'Биосферных резерватов ЮНЕСКО' },
  { value: '2', label: 'Объекта всемирного наследия ЮНЕСКО' }
]

useHead({
  title: 'Экотуризм | Ассоциация ООПТ Северо-Запада',
  meta: [
    { 
      name: 'description', 
      content: 'Экологический туризм в заповедниках и национальных парках Северо-Запада России. Путешествия в дикую природу с минимальным воздействием на окружающую среду.' 
    }
  ]
})
</script>

<style scoped>
.tourism-hero {
  min-height: 400px;
}
</style>
