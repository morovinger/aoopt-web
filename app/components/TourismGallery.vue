<template>
  <section class="tourism-gallery py-16 bg-gray-50" data-component="tourism-gallery">
    <div class="container mx-auto px-4 max-w-7xl">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-4">
        Туризм в заповедниках и национальных парках
      </h2>
      <p class="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
        Нажмите на карточку территории для перехода на официальный сайт заповедника или национального парка
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
    image: 'https://static.wixstatic.com/media/b08f14_e28b5c4544904b239b2d7393b1a8dafd~mv2.png',
    url: 'http://polistovsky.ru/tourism'
  },
  {
    id: 2,
    name: 'Кандалакшский заповедник',
    image: 'https://static.wixstatic.com/media/b08f14_04e6806ab4b44257b3e50dc4e61bed36~mv2.png',
    url: 'http://www.kandalaksha-reserve.ru/prosveshenie/turistam-i-mestnym-zhitelyam/kandalaksha-i-okrestnosti/'
  },
  {
    id: 3,
    name: 'Ненецкий заповедник',
    image: 'https://static.wixstatic.com/media/b08f14_18200aea06cb4895b83e1ad605b43d17~mv2.png',
    url: 'http://www.nenetz.ru/index.php/info'
  },
  {
    id: 4,
    name: 'Дарвинский заповедник',
    image: 'https://static.wixstatic.com/media/b08f14_46346d8976a54439a1d6952e38f9067b~mv2.png',
    url: 'http://дарвинский.рф/ekoturizm/route/'
  },
  {
    id: 5,
    name: 'Нижне-Свирский заповедник',
    image: 'https://static.wixstatic.com/media/b08f14_c65e0613a154420b9d198c734256535a~mv2.png',
    url: 'http://www.n-svirsky.ru/ecotourism/'
  },
  {
    id: 6,
    name: 'Костомукшский заповедник',
    image: 'https://static.wixstatic.com/media/b08f14_ab4c6e9a46eb4b0f817f3bd860686b07~mv2.png',
    url: 'https://www.kostzap.com/turizm-1'
  },
  {
    id: 7,
    name: 'Костомукшский заповедник (карта)',
    image: 'https://static.wixstatic.com/media/b08f14_59c04a63c3484cf1bb21da7c3b20ca32~mv2.png',
    url: 'https://www.kostzap.com/turizm-1'
  },
  {
    id: 8,
    name: 'Заповедник Кивач',
    image: 'https://static.wixstatic.com/media/b08f14_340719fb1dad44fa8e040ed69137264a~mv2.png',
    url: 'http://www.zapkivach.ru/posewenie/obwaya_informaciya/'
  },
  {
    id: 9,
    name: 'Заповедник Пасвик',
    image: 'https://static.wixstatic.com/media/b08f14_3e437de5658a48f9ad24ca81b8e91a30~mv2.png',
    url: 'http://www.pasvik51.ru/index.php/ru/posetitelyam/territoriya-zapovednika'
  },
  {
    id: 10,
    name: 'Пинежский заповедник',
    image: 'https://static.wixstatic.com/media/b08f14_0ef5dbc605df420191adfb43ac7ae893~mv2.png',
    url: 'http://www.zapovednik-pinega.ru/visitor/page.php'
  },
  {
    id: 11,
    name: 'Рдейский заповедник',
    image: 'https://static.wixstatic.com/media/b08f14_96f62f152393423f9a8a5f059c57d602~mv2.png',
    url: 'http://rdeysky.org/prosveshhenie/deti-i-pticy/'
  },
  {
    id: 12,
    name: 'Печоро-Илычский заповедник',
    image: 'https://static.wixstatic.com/media/b08f14_b12abdaf065d4652b409899213dd1f89~mv2.png',
    url: 'https://www.pechora-reserve.ru/ecoturizm'
  },
  {
    id: 13,
    name: 'Национальный парк Куршская коса',
    image: 'https://static.wixstatic.com/media/b08f14_b618b5dc1f014e8cadfe53c67534c68e~mv2.png',
    url: 'http://park-kosa.ru/cn_posetitelyam/karta-skhema-turisticheskoy-infrastruktury/'
  },
  {
    id: 14,
    name: 'Кенозерский национальный парк',
    image: 'https://static.wixstatic.com/media/b08f14_ef6f33a6946e4ec292fa00cfe45aab74~mv2.png',
    url: 'http://www.kenozero.ru/gostyam/'
  },
  {
    id: 15,
    name: 'Онежское Поморье',
    image: 'https://static.wixstatic.com/media/b08f14_4a5ce9329b344d94922c8834f01b4402~mv2.jpg',
    url: 'http://onpomor.ru/visit/posetitelyam.php'
  },
  {
    id: 16,
    name: 'Национальный парк Паанаярви',
    image: 'https://static.wixstatic.com/media/b08f14_9a75dce356e74466a5bdd92f3f8b1847~mv2.png',
    url: 'http://paanajarvi-park.com/pamyatka-posetitelyu/'
  },
  {
    id: 17,
    name: 'Национальный парк Мещера',
    image: 'https://static.wixstatic.com/media/b08f14_1065c710135b46fbbce599a41af7d666~mv2.png',
    url: 'http://www.park-meshera.ru/services/ekologicheskie-tropy-/'
  },
  {
    id: 18,
    name: 'Национальный парк Орловское Полесье',
    image: 'https://static.wixstatic.com/media/b08f14_67d0f4310e224b28821374a16a425b72~mv2.png',
    url: 'http://orlpolesie.ru/poseshchenie/ekologicheskie-tropy-i-marshruty'
  },
  {
    id: 19,
    name: 'Центрально-Лесной заповедник',
    image: 'https://static.wixstatic.com/media/b08f14_61dc9be19e504b10921732dc2e438b35~mv2.png',
    url: 'http://clgz.ru/?page_id=3107'
  },
  {
    id: 20,
    name: 'Национальный парк Русский Север',
    image: 'https://static.wixstatic.com/media/b08f14_458f4bfa5df14d3888d497494e1034c3~mv2.png',
    url: 'http://russever.region35.ru/tourism/tours'
  },
  {
    id: 21,
    name: 'Национальный парк Себежский',
    image: 'https://static.wixstatic.com/media/b08f14_3ce494bda9be4eedbfb93f1fa25bd8f0~mv2.png',
    url: 'http://www.poozerie.ru/turizm/'
  },
  {
    id: 22,
    name: 'Национальный парк Югыд Ва',
    image: 'https://static.wixstatic.com/media/b08f14_1b0ec32b53f849429862e0ec92ea88c7~mv2.png',
    url: 'https://yugyd-va.ru/Turizm-i-otdih/Turisticheskie-marshruti'
  },
  {
    id: 23,
    name: 'Водлозерский национальный парк',
    image: 'https://static.wixstatic.com/media/b08f14_748b7f5777404026b2d20a98d37615b5~mv2.png',
    url: 'http://vodlozero.ru/tourizm/'
  },
  {
    id: 24,
    name: 'Русская Арктика',
    image: 'https://static.wixstatic.com/media/b08f14_3c4e22d61c324e5aa729e45ec7e28964~mv2.png',
    url: 'http://www.rus-arc.ru/ru/Tourism/ForVisitors'
  },
  {
    id: 25,
    name: 'Себежский национальный парк',
    image: 'https://static.wixstatic.com/media/b08f14_b43e902fcbd94c70b2f4c523c71b51ba~mv2.png',
    url: 'http://seb-park.ru/blogs/?page_id=59'
  },
  {
    id: 26,
    name: 'Национальный парк Угра',
    image: 'https://static.wixstatic.com/media/b08f14_79c69947445e442ca2ca0533a4ef3c5e~mv2.png',
    url: 'https://parkugra.ru/otdih/places/'
  },
  {
    id: 27,
    name: 'Валдайский национальный парк',
    image: 'https://static.wixstatic.com/media/b08f14_667d11b103fe491fa5c78fac7107695c~mv2.png',
    url: 'http://valdaypark.ru/информация-для-туристов/'
  },
  {
    id: 28,
    name: 'Приокско-Террасный заповедник',
    image: 'https://static.wixstatic.com/media/b08f14_de99e0bfadb04080a411a39a376aad86~mv2.png',
    url: 'https://pt-zapovednik.ru/uslugi/'
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
