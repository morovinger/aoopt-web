<template>
  <div class="specialist-page" data-page="specialist">

    <!-- Two Column Hero Section -->
    <TwoColumnHero
      title="СПЕЦИАЛИСТУ"
      :paragraphs="heroParagraphs"
      image-url="/images/heroes/specialist-hero.jpg"
      image-alt="Специалисты ООПТ"
      section-id="specialist-hero"
    />

        <!-- Stats Section -->
    <StatsGrid :stats="associationStats" />

    <!-- Resource Cards Section -->
    <section class="specialist-resources py-16 bg-gray-50" data-section="resources">
      <div class="container mx-auto px-4 max-w-6xl">
        <h2 class="text-3xl md:text-6xl font-bold text-center mb-12 text-gray-800">
          Ресурсы для специалистов
        </h2>
        
        <div class="specialist-cards grid md:grid-cols-3 gap-8">
          <!-- Legal Practice Card -->
          <NuxtLink 
            to="/law" 
            class="resource-card group relative overflow-hidden rounded-lg shadow-lg h-80 transition-all duration-300 hover:shadow-2xl"
            data-resource="law"
          >
            <!-- Background Image -->
            <div 
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style="background-image: url('/images/gallery/gallery-01.png')"
            ></div>
            
            <!-- Overlay -->
            <div class="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70 transition-opacity duration-300 group-hover:bg-black/60"></div>
            
            <!-- Content -->
            <div class="relative h-full flex flex-col justify-center items-center text-center p-8">
              <h3 class="text-2xl md:text-3xl font-bold text-white mb-4 uppercase tracking-wide">
                Юридическая<br />практика
              </h3>
              <p class="text-white text-sm md:text-base opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                Судебная практика. Реальные примеры.
              </p>
            </div>
          </NuxtLink>

          <!-- Researchers Database Card -->
          <NuxtLink 
            to="/experts" 
            class="resource-card group relative overflow-hidden rounded-lg shadow-lg h-80 transition-all duration-300 hover:shadow-2xl"
            data-resource="experts"
          >
            <!-- Background Image -->
            <div 
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style="background-image: url('/images/gallery/gallery-10.png')"
            ></div>
            
            <!-- Overlay -->
            <div class="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70 transition-opacity duration-300 group-hover:bg-black/60"></div>
            
            <!-- Content -->
            <div class="relative h-full flex flex-col justify-center items-center text-center p-8">
              <h3 class="text-2xl md:text-3xl font-bold text-white mb-4 uppercase tracking-wide">
                База научных<br />сотрудников
              </h3>
              <p class="text-white text-sm md:text-base opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                Эксперты, готовые поработать на других ООПТ.
              </p>
            </div>
          </NuxtLink>

          <!-- Expedition Sites Card -->
          <NuxtLink 
            to="/eco-expeditions" 
            class="resource-card group relative overflow-hidden rounded-lg shadow-lg h-80 transition-all duration-300 hover:shadow-2xl"
            data-resource="expeditions"
          >
            <!-- Background Image -->
            <div 
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style="background-image: url('/images/gallery/gallery-18.png')"
            ></div>
            
            <!-- Overlay -->
            <div class="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70 transition-opacity duration-300 group-hover:bg-black/60"></div>
            
            <!-- Content -->
            <div class="relative h-full flex flex-col justify-center items-center text-center p-8">
              <h3 class="text-2xl md:text-3xl font-bold text-white mb-4 uppercase tracking-wide">
                Площадки для<br />экспедиций
              </h3>
              <p class="text-white text-sm md:text-base opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                Детских. Студенческих. Исследовательских.
              </p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
const heroParagraphs = [
  'Этот раздел создан для профессионального взаимодействия между специалистами особо охраняемых природных территорий, входящих в Ассоциацию ООПТ Северо-Запада России.',
  'Здесь собраны практические материалы, методические рекомендации и базы данных, которые могут быть использованы в работе различных ООПТ.',
  'Для предложения материалов в данный раздел свяжитесь с координатором Ассоциации.'
]

const associationStats = [
  { value: '1995', label: 'Год основания' },
  { value: '31', label: 'Федеральная ООПТ' },
  { value: '6.6M', label: 'Гектар дикой природы' },
  { value: '6', label: 'Биосферных резерватов ЮНЕСКО' },
  { value: '2', label: 'Объекта всемирного наследия ЮНЕСКО' }
]

useHead({
  title: 'Для специалистов ООПТ | Ассоциация ООПТ Северо-Запада',
  meta: [
    { 
      name: 'description', 
      content: 'Ресурсы и материалы для специалистов особо охраняемых природных территорий Северо-Запада России' 
    }
  ]
})
</script>
