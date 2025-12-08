<template>
  <div class="experts-page" data-page="experts">
    <!-- Hero Section -->
    <section class="experts-hero bg-gradient-to-br from-purple-700 to-purple-900 text-white py-16" data-section="hero">
      <div class="container mx-auto px-4 max-w-6xl">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">
          База научных сотрудников
        </h1>
      </div>
    </section>

    <!-- Content Section -->
    <section class="experts-content py-16 bg-white" data-section="content">
      <div class="container mx-auto px-4 max-w-6xl">
        <div class="prose prose-lg max-w-none mb-12">
          <p class="text-lg text-gray-700 leading-relaxed mb-6">
            В таблице, приведенной ниже, размещен список научных сотрудников, работающих в заповедниках и 
            национальных парках Ассоциации, готовых выступить в качестве экспертов и помочь коллегам с других 
            территорий в выполнении тех или иных работ.
          </p>
          <p class="text-lg text-gray-700 leading-relaxed mb-6">
            В таблице указана специализация и область научных интересов каждого из сотрудников. Они готовы 
            оказать консультативную помощь или приехать на другую территорию в командировку или по договору 
            для выполнения необходимой задачи.
          </p>
          <p class="text-lg text-gray-700 leading-relaxed">
            Для внесения новых специалистов в таблицу, пожалуйста, свяжитесь с координатором Ассоциации.
          </p>
        </div>

        <!-- Experts Grid -->
        <div class="experts-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12" data-section="experts-list">
          <!-- Expert 1 -->
          <div class="expert-card bg-white border-2 border-purple-200 rounded-lg p-6 hover:border-purple-400 transition-colors" data-expert="shubnitsyna">
            <h3 class="text-lg font-bold text-gray-800 mb-2">
              Шубницина Елена Игоревна
            </h3>
            <p class="text-sm text-gray-600 mb-3">
              Национальный парк «Югыд ва», замдиректора по НИР
            </p>
            <p class="text-sm text-gray-700 mb-3">
              Историческая география. Познавательный туризм, экотропы, фото- и видеотуры.
            </p>
            <div class="text-sm space-y-1">
              <p class="text-gray-600">+79042710013</p>
              <a href="mailto:shub07@yandex.ru" class="text-purple-600 hover:text-purple-800">
                shub07@yandex.ru
              </a>
            </div>
          </div>

          <!-- Expert 2 -->
          <div class="expert-card bg-white border-2 border-purple-200 rounded-lg p-6 hover:border-purple-400 transition-colors" data-expert="kulebyakina">
            <h3 class="text-lg font-bold text-gray-800 mb-2">
              Кулебякина Елена Викторовна
            </h3>
            <p class="text-sm text-gray-600 mb-3">
              Национальный парк «Водлозерский», старший научный сотрудник
            </p>
            <p class="text-sm text-gray-700 mb-3">
              Экология летяги обыкновенной (Pteromys volans L.).
            </p>
            <div class="text-sm">
              <a href="mailto:vodloz_no@mail.ru" class="text-purple-600 hover:text-purple-800">
                vodloz_no@mail.ru
              </a>
            </div>
          </div>

          <!-- Expert 3 -->
          <div class="expert-card bg-white border-2 border-purple-200 rounded-lg p-6 hover:border-purple-400 transition-colors" data-expert="karpachev">
            <h3 class="text-lg font-bold text-gray-800 mb-2">
              Карпачев Андрей Петрович
            </h3>
            <p class="text-sm text-gray-600 mb-3">
              Национальный парк «Орловское полесье», научный сотрудник
            </p>
            <p class="text-sm text-gray-700 mb-3">
              Специалист по ГИС, эколог, интересы: картография и дешифрирование космоснимков, ГИС, ДДЗ.
            </p>
            <div class="text-sm space-y-1">
              <p class="text-gray-600">89208190089</p>
              <a href="mailto:cyberbison88@gmail.com" class="text-purple-600 hover:text-purple-800">
                cyberbison88@gmail.com
              </a>
            </div>
          </div>

          <!-- Expert 4 -->
          <div class="expert-card bg-white border-2 border-purple-200 rounded-lg p-6 hover:border-purple-400 transition-colors" data-expert="mamontov">
            <h3 class="text-lg font-bold text-gray-800 mb-2">
              Мамонтов Виктор Николаевич
            </h3>
            <p class="text-sm text-gray-600 mb-3">
              Национальный парк «Водлозерский», к.б.н., начальник научного отдела
            </p>
            <p class="text-sm text-gray-700 mb-3">
              Экология европейского лесного северного оленя (Rangifer tarandus L.).
            </p>
            <div class="text-sm">
              <a href="mailto:vodloz_no@mail.ru" class="text-purple-600 hover:text-purple-800">
                vodloz_no@mail.ru
              </a>
            </div>
          </div>

          <!-- Expert 5 -->
          <div class="expert-card bg-white border-2 border-purple-200 rounded-lg p-6 hover:border-purple-400 transition-colors" data-expert="zheltukhin">
            <h3 class="text-lg font-bold text-gray-800 mb-2">
              Желтухин Анатолий Семенович
            </h3>
            <p class="text-sm text-gray-600 mb-3">
              Центрально-Лесной заповедник, к.б.н., замдиректора по НИР
            </p>
            <p class="text-sm text-gray-700 mb-3">
              Экология европейской рыси (Lynx lynx L.).
            </p>
            <div class="text-sm">
              <a href="mailto:azheltukhin@mail.ru" class="text-purple-600 hover:text-purple-800">
                azheltukhin@mail.ru
              </a>
            </div>
          </div>

          <!-- Expert 6 -->
          <div class="expert-card bg-white border-2 border-purple-200 rounded-lg p-6 hover:border-purple-400 transition-colors" data-expert="khokhryakov">
            <h3 class="text-lg font-bold text-gray-800 mb-2">
              Хохряков Владимир Рафаэльевич
            </h3>
            <p class="text-sm text-gray-600 mb-3">
              Национальный парк «Смоленское Поозерье», к.б.н., начальник отдела инвентаризации и мониторинга природных комплексов
            </p>
            <p class="text-sm text-gray-700 mb-3">
              Интересы: ихтиология, лимнология, гидробиология, ЗМУ.
            </p>
            <div class="text-sm space-y-1">
              <p class="text-gray-600">8(481 47) 2 62 04</p>
              <a href="mailto:khokhryakovy@yandex.ru" class="text-purple-600 hover:text-purple-800">
                khokhryakovy@yandex.ru
              </a>
            </div>
          </div>
        </div>

        <!-- Add Your Info Section -->
        <div class="experts-cta bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-8 border-l-4 border-purple-600" data-section="cta">
          <h3 class="text-2xl font-bold mb-4 text-gray-800">
            Добавить информацию о себе
          </h3>
          <p class="text-gray-700 mb-6">
            Если вы являетесь научным сотрудником или специалистом ООПТ и хотите добавить свои контакты 
            в базу данных, свяжитесь с координатором Ассоциации.
          </p>
          <a 
            href="/#contacts" 
            class="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
          >
            Отправить заявку
          </a>
        </div>
      </div>
    </section>

    <!-- Back to Specialist Section -->
    <section class="experts-navigation py-8 bg-gray-100" data-section="navigation">
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
  title: 'База научных сотрудников | Ассоциация ООПТ Северо-Запада',
  meta: [
    { 
      name: 'description', 
      content: 'Научные сотрудники заповедников и национальных парков Ассоциации ООПТ Северо-Запада России' 
    }
  ]
})
</script>

<style scoped>
.experts-page {
  font-family: system-ui, -apple-system, sans-serif;
}
</style>
