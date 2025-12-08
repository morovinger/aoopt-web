<template>
  <div class="volunteer-page" data-page="volunteer">

    <!-- Two Column Hero Section -->
    <TwoColumnHero
      title="ЗАПОВЕДНЫЙ
ВОЛОНТЕР"
      :paragraphs="heroParagraphs"
      image-url="/images/heroes/volunteer-hero.jpg"
      image-alt="Волонтер в заповеднике"
      section-id="volunteer-hero"
    />

    <!-- Stats Section -->
    <StatsGrid :stats="volunteerStats" variant="dark" />

    <!-- Map Section -->
    <MapSection />

    <!-- Gallery Section -->
    <ParkGallery
      title="Волонтерство в национальных парках и заповедниках"
      :parks="volunteerParks"
      component-id="volunteer-gallery"
    />

  </div>
</template>

<script setup lang="ts">
const { parks: volunteerParks } = useVolunteerParks()

const heroParagraphs = [
  '– это доброволец, который безвозмездно оказывает помощь особо охраняемым природным территориям (ООПТ): заповедникам, национальным паркам, заказникам. Взамен он получает возможность побывать в уникальных, нетронутых уголках дикой природы, получить яркие впечатления, новые знания об окружающем мире, познакомиться с новыми людьми и природоохранной работой.',
  'На ООПТ Северо-Запада добровольцы участвуют в проектировании и благоустройстве, наблюдают за природой, проводят экскурсии, занимаются дизайном, снимают фото и видео и делают много других, интересных и полезных дел. Волонтерские программы проводятся как "очно", так и дистанционно. Идеальный проект найдется для каждого!'
]

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
