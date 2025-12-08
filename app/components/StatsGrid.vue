<template>
  <div 
    class="stats-grid-wrapper"
    :class="variantClasses.wrapper"
    data-component="stats-grid"
  >
    <div 
      class="stats-grid grid gap-8 text-center container mx-auto px-4 max-w-6xl"
      :class="gridColsClass"
    >
      <div 
        v-for="stat in stats" 
        :key="stat.label" 
        class="stat-item p-2"
      >
        <div class="font-bold mb-2" :class="variantClasses.value">
          {{ stat.value }}
        </div>
        <div :class="variantClasses.label">
          {{ stat.label }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Stat {
  value: string
  label: string
}

interface Props {
  stats: Stat[]
  variant?: 'dark' | 'light' | 'green'
  columns?: number
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'green',
  columns: 0
})

const variantClasses = computed(() => {
  switch (props.variant) {
    case 'dark':
      return {
        wrapper: 'bg-gray-900 py-12',
        value: 'text-3xl md:text-4xl text-teal-400',
        label: 'text-xs font-semibold text-white uppercase tracking-wide leading-tight'
      }
    case 'light':
      return {
        wrapper: 'bg-cyan-500 py-12',
        value: 'text-3xl md:text-4xl text-white',
        label: 'text-xs font-semibold text-white uppercase tracking-wide leading-tight'
      }
    case 'green':
    default:
      return {
        wrapper: 'bg-green-800 py-16 text-white',
        value: 'text-4xl md:text-5xl text-white',
        label: 'text-sm md:text-base opacity-90'
      }
  }
})

const gridColsClass = computed(() => {
  const cols = props.columns || props.stats.length
  
  if (cols <= 3) return 'grid-cols-2 md:grid-cols-3'
  if (cols <= 4) return 'grid-cols-2 md:grid-cols-4'
  if (cols <= 5) return 'grid-cols-2 md:grid-cols-3 lg:grid-cols-5'
  return 'grid-cols-2 md:grid-cols-3 lg:grid-cols-6'
})
</script>

<style scoped>
.stat-item {
  position: relative;
}

/* Dark variant dividers */
.stats-grid-wrapper.bg-gray-900 .stat-item::after {
  content: '';
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 1px;
  height: 60%;
  background: rgba(255, 255, 255, 0.1);
}

.stats-grid-wrapper.bg-gray-900 .stat-item:last-child::after {
  display: none;
}

@media (max-width: 1024px) {
  .stats-grid-wrapper.bg-gray-900 .stat-item:nth-child(3)::after {
    display: none;
  }
}

@media (max-width: 768px) {
  .stats-grid-wrapper.bg-gray-900 .stat-item:nth-child(2)::after,
  .stats-grid-wrapper.bg-gray-900 .stat-item:nth-child(4)::after {
    display: none;
  }
}
</style>
