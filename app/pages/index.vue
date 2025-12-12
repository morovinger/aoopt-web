<template>
  <div class="home-page" data-page="home">
    <HeroSection data-section="hero" />
    <NewsSection data-section="news" />
    <StatsSection data-section="stats" />
    <ParkGallery
      title="Туризм в заповедниках и национальных парках test"
      :parks="tourismParks"
      component-id="home-gallery"
    />
    <MapSection data-section="map" />
    <ContactsSection data-section="contacts" />
  </div>
</template>

<script setup lang="ts">
const { parks: tourismParks } = useTourismParks()

useHead({
  title: 'Ассоциация ООПТ Северо-Запада | заповедники и парки Северо-Запада',
  meta: [
    { name: 'description', content: 'Ассоциация заповедников и национальных парков Северо-запада России создана 25 февраля 1995 года' }
  ]
})
</script>
