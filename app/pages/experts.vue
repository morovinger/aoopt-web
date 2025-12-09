<template>
  <div class="experts-page bg-gray-50" data-page="experts">
    <!-- Experts Database Section -->
    <section class="experts-intro py-20 bg-white" data-section="intro">
      <div class="container mx-auto px-4 max-w-7xl">
        <!-- Section Title -->
        <h1 class="section-title text-5xl font-bold text-gray-300 mb-16 uppercase tracking-wide">
          База научных сотрудников
          <span class="title-underline"></span>
        </h1>

        <!-- Two Column Layout -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
          <!-- Left Column - Text Content -->
          <div class="text-content space-y-6">
            <p class="text-base text-gray-700 leading-relaxed">
              В таблице, приведенной ниже, размещен список научных сотрудников, работающих в заповедниках и 
              национальных парках Ассоциации, готовых выступить в качестве экспертов и помочь коллегам с других 
              территорий в выполнении тех или иных работ.
            </p>
            <p class="text-base text-gray-700 leading-relaxed">
              В таблице указана специализация и область научных интересов каждого из сотрудников. Они готовы 
              оказать консультативную помощь или приехать на другую территорию в командировку или по договору 
              для выполнения необходимой задачи.
            </p>
            <p class="text-base text-gray-700 leading-relaxed">
              Для внесения новых специалистов в таблицу, пожалуйста, свяжитесь с координатором Ассоциации.
            </p>
          </div>

          <!-- Right Column - Moose Image -->
          <div class="moose-image-wrapper">
            <div class="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/images/experts/moose.png" 
                alt="Wildlife Research"
                class="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Experts List Section -->
    <section class="experts-list py-20 bg-gray-50" data-section="experts">
      <div class="container mx-auto px-4 max-w-7xl">

        <!-- Experts Grid -->
        <div class="experts-grid grid md:grid-cols-2 gap-8 mb-12">
          <!-- Expert Card -->
          <div 
            v-for="(expert, index) in experts" 
            :key="index"
            class="expert-card bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6"
          >
            <div class="flex gap-6">
              <!-- Profile Photo -->
              <div class="flex-shrink-0">
                <div class="w-24 h-24 rounded-full overflow-hidden bg-gray-200">
                  <img 
                    :src="expert.photo"
                    :alt="expert.name"
                    class="w-full h-full object-cover"
                  />
                </div>
              </div>

              <!-- Expert Info -->
              <div class="flex-1">
                <h3 class="text-sm font-bold mb-2 uppercase tracking-wide">
                  {{ expert.name }}
                </h3>
                <p class="text-sm text-blue-600 font-semibold mb-3">
                  {{ expert.organization }}
                </p>
                <p class="text-sm text-gray-700 mb-3 leading-relaxed">
                  {{ expert.specialization }}
                </p>
                <div class="text-sm space-y-1 text-gray-600">
                  <p v-if="expert.phone">{{ expert.phone }}</p>
                  <a 
                    v-if="expert.email"
                    :href="`mailto:${expert.email}`" 
                    class="text-gray-600 hover:text-blue-600 underline block"
                  >
                    {{ expert.email }}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
interface Expert {
  name: string
  organization: string
  specialization: string
  photo: string
  phone?: string
  email?: string
}

const experts: Expert[] = [
  {
    name: 'Шубницина Елена Игоревна',
    organization: 'Национальный парк «Югыд ва», замдиректора по НИР',
    specialization: 'Историческая география. Познавательный туризм, экотропы, фото- и видеотуры.',
    photo: '/images/experts/ShubnitsynaEI.jpg',
    phone: '+79042710013',
    email: 'shub07@yandex.ru'
  },
  {
    name: 'Кулебякина Елена Викторовна',
    organization: 'Национальный парк «Водлозерский», старший научный сотрудник',
    specialization: 'Экология летяги обыкновенной (Pteromys volans L.).',
    photo: '/images/experts/KulebyakinaEV.jpg',
    email: 'vodloz_no@mail.ru'
  },
  {
    name: 'Мамонтов Виктор Николаевич',
    organization: 'Национальный парк «Водлозерский», к.б.н., начальник научного отдела',
    specialization: 'Экология европейского лесного северного оленя (Rangifer tarandus L.).',
    photo: '/images/experts/MamontovVN.jpg',
    email: 'vodloz_no@mail.ru'
  },
  {
    name: 'Желтухин Анатолий Семенович',
    organization: 'Центрально-Лесной заповедник, к.б.н., замдиректора по НИР',
    specialization: 'Экология европейской рыси (Lynx lynx L.).',
    photo: '/images/experts/ZheltukhinAS.jpg',
    email: 'azheltukhin@mail.ru'
  },
  {
    name: 'Хохряков Владимир Рафаэльевич',
    organization: 'Национальный парк «Смоленское Поозерье», к.б.н., начальник отдела инвентаризации и мониторинга природных комплексов',
    specialization: 'Интересы: ихтиология, лимнология, гидробиология, ЗМУ.',
    photo: '/images/experts/KhohryakovVR.jpg',
    phone: '8(481 47) 2 62 04',
    email: 'khokhryakovy@yandex.ru'
  },
  {
    name: 'Андрей Петрович Карпачев',
    organization: 'Национальный парк «Орловское полесье», научный сотрудник',
    specialization: 'Специалист по ГИС, эколог, интересы: картография и дешифрирование космоснимков, ГИС, ДДЗ.',
    photo: '/images/experts/KarpachevAP.JPG',
    phone: '89208190089',
    email: 'cyberbison88@gmail.com'
  }
]

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

.moose-image-wrapper {
  position: relative;
}

.moose-image-wrapper::before {
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

.expert-card {
  transform: translateY(0);
  transition: all 0.3s ease;
}

.expert-card:hover {
  transform: translateY(-2px);
}
</style>

