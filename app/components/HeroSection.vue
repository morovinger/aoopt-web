<template>
  <section class="hero-section relative h-[500px] w-full bg-gray-900 text-white overflow-hidden" data-component="hero" ref="heroRef">
    <!-- Background Image with Overlay -->
    <div class="absolute inset-0">
      <NuxtImg 
        src="/images/hero-wildlife.jpg" 
        alt="Wildlife background" 
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-black/50"></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
      <h1 class="text-3xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-5xl tracking-wide uppercase">
        АССОЦИАЦИЯ ЗАПОВЕДНИКОВ И<br />
        НАЦИОНАЛЬНЫХ ПАРКОВ<br />
        СЕВЕРО-ЗАПАДА РОССИИ
      </h1>
      
      <!-- Scroll Down Arrow -->
      <button 
        class="absolute bottom-8 animate-bounce cursor-pointer hover:opacity-80 transition-opacity"
        @click="scrollToNextSection"
        aria-label="Scroll to content"
      >
        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
const heroRef = ref<HTMLElement | null>(null)

const scrollToNextSection = () => {
  if (heroRef.value?.nextElementSibling) {
    heroRef.value.nextElementSibling.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

