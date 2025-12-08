<template>
  <div class="volunteer-page" data-page="volunteer">
    <!-- 
      NOTE: Both volunteer and tourism pages use a split hero layout (PageHeroSplit) 
      instead of the standard HeroSection used on the main page.
      The hero has a background image on one side and an overlaid text box.
    -->
    
    <!-- Hero Section - Split layout with background image -->
    <section class="volunteer-hero relative overflow-hidden" data-section="hero">
      <div class="absolute inset-0 bg-gradient-to-r from-teal-900/90 to-teal-700/80 z-10" />
      <img 
        src="https://static.wixstatic.com/media/65d40007c89944cd970accd4729abddb.jpg" 
        alt="Заповедный волонтер"
        class="absolute inset-0 w-full h-full object-cover"
      />
      <div class="relative z-20 container mx-auto px-4 max-w-6xl py-20">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          Заповедный волонтер
        </h1>
        <p class="text-xl text-white/90 max-w-2xl">
          Волонтерство в заповедниках и национальных парках Северо-Запада России
        </p>
      </div>
    </section>

    <!-- Volunteer Info Section -->
    <section class="volunteer-info py-16 bg-white" data-section="info">
      <div class="container mx-auto px-4 max-w-6xl">
        <div class="flex flex-col lg:flex-row gap-12 items-start">
          <!-- Text Content -->
          <div class="lg:w-1/2">
            <div class="prose prose-lg max-w-none">
              <p class="text-lg text-gray-700 leading-relaxed mb-6">
                <strong>Заповедный волонтер</strong> – это доброволец, который безвозмездно оказывает 
                помощь особо охраняемым природным территориям (ООПТ): заповедникам, национальным 
                паркам, заказникам.
              </p>
              
              <p class="text-lg text-gray-700 leading-relaxed mb-6">
                Взамен он получает возможность побывать в уникальных, нетронутых уголках дикой 
                природы, получить яркие впечатления, новые знания об окружающем мире, познакомиться 
                с новыми людьми и природоохранной работой.
              </p>
              
              <p class="text-lg text-gray-700 leading-relaxed mb-6">
                На ООПТ Северо-Запада добровольцы участвуют в:
              </p>
              
              <ul class="space-y-3 mb-8">
                <li class="flex items-start">
                  <span class="text-teal-600 mr-3 mt-1">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                  </span>
                  <span class="text-gray-700">Проектировании и благоустройстве территорий</span>
                </li>
                <li class="flex items-start">
                  <span class="text-teal-600 mr-3 mt-1">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                  </span>
                  <span class="text-gray-700">Наблюдении за природой</span>
                </li>
                <li class="flex items-start">
                  <span class="text-teal-600 mr-3 mt-1">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                  </span>
                  <span class="text-gray-700">Проведении экскурсий</span>
                </li>
                <li class="flex items-start">
                  <span class="text-teal-600 mr-3 mt-1">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                  </span>
                  <span class="text-gray-700">Дизайне, фото и видеосъемке</span>
                </li>
                <li class="flex items-start">
                  <span class="text-teal-600 mr-3 mt-1">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                  </span>
                  <span class="text-gray-700">И многих других интересных и полезных делах</span>
                </li>
              </ul>
              
              <p class="text-lg text-gray-700 leading-relaxed">
                Волонтерские программы проводятся как «очно», так и дистанционно. 
                <strong>Идеальный проект найдется для каждого!</strong>
              </p>
            </div>
          </div>
          
          <!-- Image -->
          <div class="lg:w-1/2">
            <img 
              src="https://static.wixstatic.com/media/6cb40ac526f14ed38ac4ec5f3124ee48.jpg" 
              alt="Волонтеры в заповедниках"
              class="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <StatsGrid :stats="volunteerStats" variant="dark" />

    <!-- Map Section -->
    <MapSection />

    <!-- Gallery Section -->
    <VolunteerGallery />

    <!-- CTA Section -->
    <section class="volunteer-cta py-16 bg-teal-700" data-section="cta">
      <div class="container mx-auto px-4 max-w-4xl text-center">
        <h2 class="text-3xl font-bold text-white mb-4">
          Хотите стать волонтером?
        </h2>
        <p class="text-xl text-white/90 mb-8">
          Свяжитесь с нами для получения информации о волонтерских программах в заповедниках и национальных парках
        </p>
        <NuxtLink 
          to="/#contacts" 
          class="inline-block bg-white text-teal-700 px-8 py-3 rounded-lg font-semibold hover:bg-teal-50 transition-colors"
        >
          Связаться с нами
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const volunteerStats = [
  { value: '1995', label: 'Год основания' },
  { value: '31', label: 'Федеральных ООПТ' },
  { value: '6,6M', label: 'Гектар дикой природы' },
  { value: '6', label: 'Биосферных резерватов ЮНЕСКО' },
  { value: '2', label: 'Объекта всемирного наследия ЮНЕСКО' }
]

useHead({
  title: 'Волонтерство | Ассоциация ООПТ Северо-Запада',
  meta: [
    { 
      name: 'description', 
      content: 'Волонтерство в заповедниках и национальных парках Северо-Запада России. Станьте заповедным волонтером и помогайте особо охраняемым природным территориям.' 
    }
  ]
})
</script>

<style scoped>
.volunteer-hero {
  min-height: 400px;
}
</style>
