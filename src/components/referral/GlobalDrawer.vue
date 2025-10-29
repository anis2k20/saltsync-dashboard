<template>
  <!-- Background overlay -->
  <transition name="fade">
    <div v-if="modelValue" class="fixed inset-0 z-40 bg-[#020617B2]/70" @click="close"></div>
  </transition>

  <!-- Drawer panel -->
  <transition name="slide">
    <aside
      v-if="modelValue"
      :class="[
        'fixed z-50 flex flex-col space-y-10 overflow-hidden bg-white px-10 py-6 shadow-2xl transition-all',
        sideClass,
        sizeClass,
      ]"
      role="dialog"
      aria-modal="true"
    >
      <!--gradient-->
      <img
        src="@/assets/images/sidebar-gradient.svg"
        alt="gradient"
        class="absolute top-0 -left-4 h-[80%] blur-[5px]"
      />
      <!-- Header -->
      <header class="relative z-10 flex items-center justify-between dark:border-slate-800">
        <h2 class="font-secondary text-2xl font-semibold text-primary-light">{{ title }}</h2>
        <button
          @click="close"
          class="h-8 w-8 cursor-pointer rounded-full bg-[#FEF2F2] font-semibold text-[#EF4444] transition-colors duration-200 hover:bg-[#EF4444] hover:text-[#FEF2F2]"
          aria-label="Close drawer"
        >
          ✕
        </button>
      </header>

      <!-- Main content -->
      <div class="relative z-10 flex-1 overflow-y-auto">
        <slot />
      </div>

      <!-- Footer -->
      <footer v-if="$slots.footer" class="border-t p-3 dark:border-slate-800">
        <slot name="footer" />
      </footer>
    </aside>
  </transition>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  modelValue: boolean
  title?: string
  side?: 'right' | 'left' | 'bottom'
  size?: 'sm' | 'md' | 'lg' | 'xl'
}>()

const emit = defineEmits(['update:modelValue'])

function close() {
  emit('update:modelValue', false)
}

// side position class
const sideClass = computed(() => {
  switch (props.side) {
    case 'left':
      return 'top-0 left-0 h-full'
    case 'bottom':
      return 'bottom-0 left-0 w-full'
    default:
      return 'top-0 right-0 h-full'
  }
})

// width/height size class
const sizeClass = computed(() => {
  const base = props.side === 'bottom' ? 'w-full' : ''
  switch (props.size) {
    case 'sm':
      return base + (props.side === 'bottom' ? ' h-1/4' : ' w-64')
    case 'md':
      return base + (props.side === 'bottom' ? ' h-1/3' : ' w-80')
    case 'lg':
      return base + (props.side === 'bottom' ? ' h-1/2' : 'w-full md:w-[510px]')
    case 'xl':
      return base + (props.side === 'bottom' ? ' h-2/3' : ' w-[480px]')
    default:
      return base + (props.side === 'bottom' ? ' h-1/3' : ' w-96')
  }
})
</script>

<style scoped></style>
