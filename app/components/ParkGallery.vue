<template>
  <section 
    class="park-gallery py-16 bg-gray-50" 
    :data-component="componentId"
  >
    <div class="container mx-auto px-4 max-w-7xl">
      <h2 class="text-3xl md:text-6xl font-bold text-gray-800 text-center mb-4">
        {{ title }}
      </h2>
      
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

interface Props {
  title: string
  parks: Park[]
  componentId?: string
}

const props = withDefaults(defineProps<Props>(), {
  componentId: 'park-gallery'
})
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

