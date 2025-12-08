<template>
  <div 
    class="stats-grid grid gap-8 text-center py-12 px-4 rounded-lg"
    :class="[
      gridColsClass,
      variant === 'dark' ? 'bg-gray-900' : 'bg-cyan-500'
    ]"
    data-component="stats-grid"
  >
    <div 
      v-for="stat in stats" 
      :key="stat.label" 
      class="stat-item p-2"
    >
      <div 
        class="text-3xl md:text-4xl font-bold mb-2"
        :class="variant === 'dark' ? 'text-teal-400' : 'text-white'"
      >
        {{ stat.value }}
      </div>
      <div class="text-xs font-semibold text-white uppercase tracking-wide leading-tight">
        {{ stat.label }}
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
  variant?: 'dark' | 'light'
  columns?: number
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'light',
  columns: 0
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

.stats-grid.bg-gray-900 .stat-item::after {
  content: '';
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 1px;
  height: 60%;
  background: rgba(255, 255, 255, 0.1);
}

.stats-grid.bg-gray-900 .stat-item:last-child::after {
  display: none;
}

@media (max-width: 1024px) {
  .stats-grid.bg-gray-900 .stat-item:nth-child(3)::after {
    display: none;
  }
}

@media (max-width: 768px) {
  .stats-grid.bg-gray-900 .stat-item:nth-child(2)::after,
  .stats-grid.bg-gray-900 .stat-item:nth-child(4)::after {
    display: none;
  }
}
</style>
