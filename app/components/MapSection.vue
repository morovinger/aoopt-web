<template>
  <section class="map-section py-16 bg-gray-100" data-component="map">
    <div class="container mx-auto px-4">
      <div class="text-center mb-8">
        <h2 class="text-3xl md:text-6xl font-bold text-gray-400 mb-4 uppercase relative inline-block">
          Карта
          <span class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-cyan-400"></span>
        </h2>
      </div>
      
      <!-- Map Container -->
      <div class="w-full h-[500px] bg-white rounded-lg shadow-lg overflow-hidden relative">
        <!-- Placeholder for embedded map -->
        <iframe 
          class="w-full h-full border-0"
          src="https://www.google.com/maps/d/u/2/embed?mid=1l86OcrxbvZbesh2GWuraDKQM0RU2JeWr"
          allowfullscreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </section>
</template>
