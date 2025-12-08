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
            class="resource-card bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col"
            data-resource="law"
          >
            <div class="text-green-600 mb-4">
              <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3 text-gray-800">
              Юридическая практика
            </h3>
            <p class="text-gray-600 flex-grow">
              Примеры правоприменительной практики, образцы документов и юридические материалы
            </p>
            <div class="mt-4 text-green-600 font-semibold">
              Подробнее →
            </div>
          </NuxtLink>

          <!-- Researchers Database Card -->
          <NuxtLink 
            to="/experts" 
            class="resource-card bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col"
            data-resource="experts"
          >
            <div class="text-green-600 mb-4">
              <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3 text-gray-800">
              База научных сотрудников
            </h3>
            <p class="text-gray-600 flex-grow">
              Контакты специалистов, работающих на территориях ООПТ Северо-Запада
            </p>
            <div class="mt-4 text-green-600 font-semibold">
              Подробнее →
            </div>
          </NuxtLink>

          <!-- Expedition Sites Card -->
          <NuxtLink 
            to="/eco-expeditions" 
            class="resource-card bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col"
            data-resource="expeditions"
          >
            <div class="text-green-600 mb-4">
              <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3 text-gray-800">
              Площадки для экспедиций
            </h3>
            <p class="text-gray-600 flex-grow">
              Информация о доступных площадках для проведения научных исследований
            </p>
            <div class="mt-4 text-green-600 font-semibold">
              Подробнее →
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <StatsGrid :stats="associationStats" />
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
