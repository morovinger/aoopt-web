<template>
  <section class="volunteer-gallery py-16 bg-gray-50" data-component="volunteer-gallery">
    <div class="container mx-auto px-4 max-w-7xl">
      <h2 class="text-3xl md:text-6xl font-bold text-gray-800 text-center mb-4">
        Волонтерство в национальных парках и заповедниках
      </h2>
      <p class="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
        Нажмите на карточку территории для перехода на страницу волонтерских программ
      </p>
      
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        <a 
          v-for="park in parks" 
          :key="park.id"
          :href="park.url"
          target="_blank"
          rel="noopener noreferrer"
          class="park-card group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 aspect-[4/3]"
        >
          <img 
            :src="park.image" 
            :alt="park.name"
            class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div class="absolute bottom-0 left-0 right-0 p-3">
              <p class="text-white text-sm font-medium line-clamp-2">{{ park.name }}</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Park {
  id: number
  name: string
  image: string
  url: string
}

const parks: Park[] = [
  {
    id: 1,
    name: 'Полистовский заповедник',
    image: '/images/gallery/gallery-01.png',
    url: 'http://polistovsky.ru/com-virtuemart-menu-categories/volontjoram1'
  },
  {
    id: 2,
    name: 'Кандалакшский заповедник',
    image: '/images/gallery/gallery-02.png',
    url: 'http://www.kandalaksha-reserve.ru/studentam-yunnatam-volonteram-storonnim-specialistam/predlozheniya-volonteram/'
  },
  {
    id: 3,
    name: 'Ненецкий заповедник',
    image: '/images/gallery/gallery-03.png',
    url: 'http://www.nenetz.ru/index.php/about/fr'
  },
  {
    id: 4,
    name: 'Дарвинский заповедник',
    image: '/images/gallery/gallery-04.png',
    url: 'http://дарвинский.рф/volontyerstvo/'
  },
  {
    id: 5,
    name: 'Нижне-Свирский заповедник',
    image: '/images/gallery/gallery-05.png',
    url: 'http://www.n-svirsky.ru/'
  },
  {
    id: 6,
    name: 'Костомукшский заповедник',
    image: '/images/gallery/gallery-06.png',
    url: 'https://www.kostzap.com/'
  },
  {
    id: 7,
    name: 'Костомукшский заповедник (карта)',
    image: '/images/gallery/gallery-07.png',
    url: 'https://www.kostzap.com/'
  },
  {
    id: 8,
    name: 'Заповедник Кивач',
    image: '/images/gallery/gallery-08.png',
    url: 'http://www.zapkivach.ru/'
  },
  {
    id: 9,
    name: 'Заповедник Пасвик',
    image: '/images/gallery/gallery-09.png',
    url: 'http://www.pasvik51.ru/index.php/ru/novosti/59-volontery-v-pasvike'
  },
  {
    id: 10,
    name: 'Пинежский заповедник',
    image: '/images/gallery/gallery-10.png',
    url: 'http://www.zapovednik-pinega.ru/index.php'
  },
  {
    id: 11,
    name: 'Рдейский заповедник',
    image: '/images/gallery/gallery-11.png',
    url: 'http://rdeysky.org/'
  },
  {
    id: 12,
    name: 'Печоро-Илычский заповедник',
    image: '/images/gallery/gallery-12.png',
    url: 'https://www.pechora-reserve.ru/volonteram'
  },
  {
    id: 13,
    name: 'Национальный парк Куршская коса',
    image: '/images/gallery/gallery-13.png',
    url: 'http://park-kosa.ru/cn_volontery/'
  },
  {
    id: 14,
    name: 'Кенозерский национальный парк',
    image: '/images/gallery/gallery-14.png',
    url: 'http://www.kenozero.ru/o-parke/materialy/volonterstvo'
  },
  {
    id: 15,
    name: 'Онежское Поморье',
    image: '/images/gallery/gallery-15.jpg',
    url: 'http://www.kenozero.ru/o-parke/materialy/volonterstvo'
  },
  {
    id: 16,
    name: 'Национальный парк Паанаярви',
    image: '/images/gallery/gallery-16.png',
    url: 'http://paanajarvi-park.com/'
  },
  {
    id: 17,
    name: 'Национальный парк Мещера',
    image: '/images/gallery/gallery-17.png',
    url: 'http://www.park-meshera.ru/'
  },
  {
    id: 18,
    name: 'Национальный парк Орловское Полесье',
    image: '/images/gallery/gallery-18.png',
    url: 'http://orlpolesie.ru/'
  },
  {
    id: 19,
    name: 'Центрально-Лесной заповедник',
    image: '/images/gallery/gallery-19.png',
    url: 'http://clgz.ru/?page_id=3493'
  },
  {
    id: 20,
    name: 'Национальный парк Русский Север',
    image: '/images/gallery/gallery-20.png',
    url: 'http://russever.region35.ru/volunteers/about-volunteers'
  },
  {
    id: 21,
    name: 'Национальный парк Себежский',
    image: '/images/gallery/gallery-21.png',
    url: 'http://www.poozerie.ru/about/volonterstvo/'
  },
  {
    id: 22,
    name: 'Национальный парк Югыд Ва',
    image: '/images/gallery/gallery-22.png',
    url: 'https://yugyd-va.ru/Napravleniya-deyatelnosti/Volonterskaya-kampaniya'
  },
  {
    id: 23,
    name: 'Водлозерский национальный парк',
    image: '/images/gallery/gallery-23.png',
    url: 'http://vodlozero.ru/about/volonterstvo/'
  },
  {
    id: 24,
    name: 'Русская Арктика',
    image: '/images/gallery/gallery-24.png',
    url: 'http://www.rus-arc.ru/ru/Volunteer'
  },
  {
    id: 25,
    name: 'Себежский национальный парк',
    image: '/images/gallery/gallery-25.png',
    url: 'http://seb-park.ru/blogs/'
  },
  {
    id: 26,
    name: 'Национальный парк Угра',
    image: '/images/gallery/gallery-26.png',
    url: 'https://parkugra.ru/index.php?id=104'
  },
  {
    id: 27,
    name: 'Валдайский национальный парк',
    image: '/images/gallery/gallery-27.png',
    url: 'http://valdaypark.ru/предложение-для-волонтеров-спонсоро/'
  },
  {
    id: 28,
    name: 'Приокско-Террасный заповедник',
    image: '/images/gallery/gallery-28.png',
    url: 'https://pt-zapovednik.ru/volonteram/'
  }
]
</script>

<style scoped>
.park-card {
  background-color: #f3f4f6;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
