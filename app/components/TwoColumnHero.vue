<template>
  <section class="two-column-hero" :data-section="sectionId">
    <div class="hero-container">
      <!-- Left Column: Content -->
      <div class="hero-content">
        <div class="content-wrapper">
          <!-- Title -->
          <h1 class="hero-title">
            {{ title }}
          </h1>
          
          <!-- Accent Bar -->
          <div class="accent-bar" />
          
          <!-- Text Content -->
          <div class="hero-text">
            <slot>
              <p v-for="(paragraph, index) in paragraphs" :key="index">
                {{ paragraph }}
              </p>
            </slot>
          </div>
          
          <!-- Scroll Indicator (optional) -->
          <div v-if="showScrollIndicator" class="scroll-indicator">
            <svg 
              class="scroll-icon" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor"
            >
              <path 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>
      
      <!-- Right Column: Image -->
      <div class="hero-image">
        <img 
          :src="imageUrl" 
          :alt="imageAlt"
          class="image"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Props {
  title: string
  paragraphs?: string[]
  imageUrl: string
  imageAlt?: string
  sectionId?: string
  showScrollIndicator?: boolean
}

withDefaults(defineProps<Props>(), {
  paragraphs: () => [],
  imageAlt: 'Hero image',
  sectionId: 'hero',
  showScrollIndicator: true
})
</script>

<style scoped>
.two-column-hero {
  width: 100%;
  background-color: #fff;
}

.hero-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 600px;
}

.hero-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem 3rem 4rem 6rem;
  background-color: #fff;
}

.content-wrapper {
  max-width: 560px;
}

.hero-title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 300;
  color: #b8c4c8;
  text-transform: uppercase;
  line-height: 1.1;
  margin: 0 0 1.5rem 0;
  letter-spacing: 0.02em;
  white-space: pre-line;
}

.accent-bar {
  width: 80px;
  height: 4px;
  background-color: #4db6ac;
  margin-bottom: 2rem;
}

.hero-text {
  color: #5a6a6e;
  font-size: 1rem;
  line-height: 1.8;
}

.hero-text :deep(p) {
  margin-bottom: 1.5rem;
}

.hero-text :deep(p:last-child) {
  margin-bottom: 0;
}

.scroll-indicator {
  margin-top: 3rem;
  display: flex;
  justify-content: center;
}

.scroll-icon {
  width: 32px;
  height: 32px;
  color: #c0c0c0;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-8px);
  }
  60% {
    transform: translateY(-4px);
  }
}

.hero-image {
  position: relative;
  overflow: hidden;
}

.hero-image .image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .hero-content {
    padding: 3rem 2rem 3rem 3rem;
  }
}

@media (max-width: 768px) {
  .hero-container {
    grid-template-columns: 1fr;
    min-height: auto;
  }
  
  .hero-content {
    padding: 3rem 1.5rem;
    order: 1;
  }
  
  .hero-image {
    order: 0;
    height: 300px;
  }
  
  .content-wrapper {
    max-width: 100%;
  }
  
  .hero-title {
    font-size: 2rem;
  }
  
  .scroll-indicator {
    display: none;
  }
}
</style>
