<template>
  <div class="tourism-page" data-page="tourism">

    <!-- Two Column Hero Section -->
    <TwoColumnHero
      title="ЭКОТУРИЗМ"
      :paragraphs="heroParagraphs"
      image-url="/images/heroes/tourism-hero.jpg"
      image-alt="Экотуризм в заповедниках"
      section-id="tourism-hero"
    />

    <!-- Stats Section -->
    <StatsGrid :stats="tourismStats" variant="dark" />

    <!-- Map Section -->
    <MapSection />

    <!-- Gallery Section -->
    <ParkGallery
      title="Туризм в заповедниках и национальных парках"
      :parks="tourismParks"
      component-id="tourism-gallery"
    />

  </div>
</template>

<script setup lang="ts">
const { parks: tourismParks } = useTourismParks()

const heroParagraphs = [
  'Все территории, входящие в Ассоциацию заповедников и национальных парков Северо-Запада России, занимаются развитием экологического, познавательного туризма.',
  'Экотуризм основан на принципах устойчивого развития: это путешествие в дикую природу, воздействие на окружающую среду минимально и контролируемо, туризм содержит познавательный компонент и интегрирован в местную экономику.',
  'Планируя путешествие на Северо-Запад России, ознакомьтесь с туристическими предложениями заповедников и национальных парков, а также с правилами их посещения.'
]

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
