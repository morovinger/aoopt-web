<template>
  <section class="py-16 bg-gray-100">
    <div class="container mx-auto px-4">
      <div class="text-center mb-8">
        <h2 class="text-3xl font-bold text-gray-400 mb-4 uppercase relative inline-block">
          Карта
          <span class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-cyan-400"></span>
        </h2>
      </div>
      
      <!-- Map Container -->
      <div class="w-full h-[500px] bg-white rounded-lg shadow-lg overflow-hidden relative">
        <!-- Placeholder for embedded map -->
        <iframe 
          class="w-full h-full border-0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2176534.8264487!2d30.0!3d60.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNjDCsDAwJzAwLjAiTiAzMMKwMDAnMDAuMCJF!5e0!3m2!1sen!2s!4v1234567890"
          allowfullscreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </section>
</template>




