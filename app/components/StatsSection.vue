<template>
  <div data-component="stats">
    <section id="about" class="stats-section py-20 bg-white">
      <div class="container mx-auto px-4">
        
        <!-- About Text with Buttons and Image -->
        <div class="flex flex-col lg:flex-row items-start gap-8">
          <!-- Left: Buttons and Text -->
          <div class="lg:w-1/2">
            <div class="flex flex-wrap gap-3 mb-8">
              <button class="px-6 py-2 bg-gray-700 text-white text-sm uppercase font-semibold hover:bg-gray-800 transition">
                История Ассоциации
              </button>
              <button class="px-6 py-2 bg-gray-700 text-white text-sm uppercase font-semibold hover:bg-gray-800 transition">
                Список территорий
              </button>
            </div>
            
            <h2 class="text-3xl font-bold text-gray-400 mb-4 uppercase relative inline-block">
              О Нас
              <span class="absolute bottom-0 left-0 w-16 h-1 bg-cyan-400"></span>
            </h2>
            
            <div class="text-gray-600 leading-relaxed space-y-4 mt-6">
              <p>
                Ассоциация заповедников и национальных парков Северо-запада России создана 25 февраля 1995 года. Это некоммерческая организация, объединяющая 26 учреждений и 31 особо охраняемую <span class="font-semibold">природную</span> территорию федерального значения.
              </p>
              <p>
                Задачи Ассоциации - сохранение природного и культурного наследия, экопросвещение, поддержка научной деятельности, содействие развитию экотуризма, социально-экономическое развитие системы ООПТ.
              </p>
              <p>
                Направления деятельности: проведение семинаров, конференций и советов директоров; разработка и проведение учебных курсов для сотрудников, информационно-издательская деятельность, международное сотрудничество.
              </p>
            </div>
          </div>
          
          <!-- Right: Image -->
          <div class="lg:w-1/2">
            <img 
              src="/images/team-nature.jpg" 
              alt="Team working in nature" 
              class="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Grid (full-width) -->
    <StatsGrid :stats="stats" variant="light" />
  </div>
</template>

<script setup lang="ts">
const stats = [
  { value: '1995', label: 'Год основания' },
  { value: '43', label: 'Федеральных ООПТ' },
  { value: '15,6M', label: 'Гектар дикой природы' },
  { value: '7', label: 'Биосферных резерватов ЮНЕСКО' },
  { value: '3', label: 'Объекта всемирного наследия ЮНЕСКО' },
  { value: '6', label: 'Территорий Рамсарской конвенции' },
]
</script>

