export interface Park {
  id: number
  name: string
  image: string
  url: string
}

export const useTourismParks = () => {
  const parks: Park[] = [
    {
      id: 1,
      name: 'Полистовский заповедник',
      image: '/images/gallery/gallery-01.png',
      url: 'http://polistovsky.ru/tourism'
    },
    {
      id: 2,
      name: 'Кандалакшский заповедник',
      image: '/images/gallery/gallery-02.png',
      url: 'http://www.kandalaksha-reserve.ru/prosveshenie/turistam-i-mestnym-zhitelyam/kandalaksha-i-okrestnosti/'
    },
    {
      id: 3,
      name: 'Ненецкий заповедник',
      image: '/images/gallery/gallery-03.png',
      url: 'http://www.nenetz.ru/index.php/info'
    },
    {
      id: 4,
      name: 'Дарвинский заповедник',
      image: '/images/gallery/gallery-04.png',
      url: 'http://дарвинский.рф/ekoturizm/route/'
    },
    {
      id: 5,
      name: 'Нижне-Свирский заповедник',
      image: '/images/gallery/gallery-05.png',
      url: 'http://www.n-svirsky.ru/ecotourism/'
    },
    {
      id: 6,
      name: 'Костомукшский заповедник',
      image: '/images/gallery/gallery-06.png',
      url: 'https://www.kostzap.com/turizm-1'
    },
    {
      id: 7,
      name: 'Костомукшский заповедник (карта)',
      image: '/images/gallery/gallery-07.png',
      url: 'https://www.kostzap.com/turizm-1'
    },
    {
      id: 8,
      name: 'Заповедник Кивач',
      image: '/images/gallery/gallery-08.png',
      url: 'http://www.zapkivach.ru/posewenie/obwaya_informaciya/'
    },
    {
      id: 9,
      name: 'Заповедник Пасвик',
      image: '/images/gallery/gallery-09.png',
      url: 'http://www.pasvik51.ru/index.php/ru/posetitelyam/territoriya-zapovednika'
    },
    {
      id: 10,
      name: 'Пинежский заповедник',
      image: '/images/gallery/gallery-10.png',
      url: 'http://www.zapovednik-pinega.ru/visitor/page.php'
    },
    {
      id: 11,
      name: 'Рдейский заповедник',
      image: '/images/gallery/gallery-11.png',
      url: 'http://rdeysky.org/prosveshhenie/deti-i-pticy/'
    },
    {
      id: 12,
      name: 'Печоро-Илычский заповедник',
      image: '/images/gallery/gallery-12.png',
      url: 'https://www.pechora-reserve.ru/ecoturizm'
    },
    {
      id: 13,
      name: 'Национальный парк Куршская коса',
      image: '/images/gallery/gallery-13.png',
      url: 'http://park-kosa.ru/cn_posetitelyam/karta-skhema-turisticheskoy-infrastruktury/'
    },
    {
      id: 14,
      name: 'Кенозерский национальный парк',
      image: '/images/gallery/gallery-14.png',
      url: 'http://www.kenozero.ru/gostyam/'
    },
    {
      id: 15,
      name: 'Онежское Поморье',
      image: '/images/gallery/gallery-15.jpg',
      url: 'http://onpomor.ru/visit/posetitelyam.php'
    },
    {
      id: 16,
      name: 'Национальный парк Паанаярви',
      image: '/images/gallery/gallery-16.png',
      url: 'http://paanajarvi-park.com/pamyatka-posetitelyu/'
    },
    {
      id: 17,
      name: 'Национальный парк Мещера',
      image: '/images/gallery/gallery-17.png',
      url: 'http://www.park-meshera.ru/services/ekologicheskie-tropy-/'
    },
    {
      id: 18,
      name: 'Национальный парк Орловское Полесье',
      image: '/images/gallery/gallery-18.png',
      url: 'http://orlpolesie.ru/poseshchenie/ekologicheskie-tropy-i-marshruty'
    },
    {
      id: 19,
      name: 'Центрально-Лесной заповедник',
      image: '/images/gallery/gallery-19.png',
      url: 'http://clgz.ru/?page_id=3107'
    },
    {
      id: 20,
      name: 'Национальный парк Русский Север',
      image: '/images/gallery/gallery-20.png',
      url: 'http://russever.region35.ru/tourism/tours'
    },
    {
      id: 21,
      name: 'Национальный парк Себежский',
      image: '/images/gallery/gallery-21.png',
      url: 'http://www.poozerie.ru/turizm/'
    },
    {
      id: 22,
      name: 'Национальный парк Югыд Ва',
      image: '/images/gallery/gallery-22.png',
      url: 'https://yugyd-va.ru/Turizm-i-otdih/Turisticheskie-marshruti'
    },
    {
      id: 23,
      name: 'Водлозерский национальный парк',
      image: '/images/gallery/gallery-23.png',
      url: 'http://vodlozero.ru/tourizm/'
    },
    {
      id: 24,
      name: 'Русская Арктика',
      image: '/images/gallery/gallery-24.png',
      url: 'http://www.rus-arc.ru/ru/Tourism/ForVisitors'
    },
    {
      id: 25,
      name: 'Себежский национальный парк',
      image: '/images/gallery/gallery-25.png',
      url: 'http://seb-park.ru/blogs/?page_id=59'
    },
    {
      id: 26,
      name: 'Национальный парк Угра',
      image: '/images/gallery/gallery-26.png',
      url: 'https://parkugra.ru/otdih/places/'
    },
    {
      id: 27,
      name: 'Валдайский национальный парк',
      image: '/images/gallery/gallery-27.png',
      url: 'http://valdaypark.ru/информация-для-туристов/'
    },
    {
      id: 28,
      name: 'Приокско-Террасный заповедник',
      image: '/images/gallery/gallery-28.png',
      url: 'https://pt-zapovednik.ru/uslugi/'
    }
  ]

  return {
    parks
  }
}

