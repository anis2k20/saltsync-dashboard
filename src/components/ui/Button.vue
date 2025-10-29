<script setup lang="ts">
import { computed } from 'vue'

// Props for a reusable button
const props = withDefaults(
  defineProps<{
    variant?: 'primary' | 'secondary' | 'ghost'
    size?: 'sm' | 'md' | 'lg'
    disabled?: boolean
    type?: 'button' | 'submit' | 'reset'
    fullWidth?: boolean
  }>(),
  {
    variant: 'primary',
    size: 'md',
    disabled: false,
    type: 'button',
    fullWidth: false,
  },
)

const emit = defineEmits<{ (e: 'click', ev: MouseEvent): void }>()

const base = 'cursor-pointer rounded-lg font-normal flex items-center justify-center'

const sizeClasses = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'h-8 px-3 text-sm'
    case 'lg':
      return 'h-12 px-6 text-lg'
    default:
      return 'h-10 px-xl text-base'
  }
})

const widthClass = computed(() => (props.fullWidth ? 'w-full' : ''))

function onClick(e: MouseEvent) {
  if (!props.disabled) emit('click', e)
}
</script>

<template>
  <button
    :type="props.type"
    :class="[base, sizeClasses, widthClass]"
    :disabled="props.disabled"
    @click="onClick"
  >
    <slot />
  </button>
</template>

<style scoped></style>
