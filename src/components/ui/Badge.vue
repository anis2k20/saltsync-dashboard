<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    status?: 'Success' | 'Pending' | 'Rejected' | string
    label?: string
    size?: 'sm' | 'md' | 'lg'
  }>(),
  {
    status: 'pending',
    label: '',
    size: 'md',
  },
)

const colorClasses = computed(() => {
  switch (props.status) {
    case 'Success':
      return 'bg-[#F0FDF4] text-[#16A34A] border-[#86EFAC]'
    case 'Rejected':
      return 'bg-[#FEF2F2] text-[#DC2626] border-[#FCA5A5]'
    case 'Pending':
    default:
      return 'bg-[#FFFBEB] text-[#D97706] border-[#FCD34D]'
  }
})

const sizeClasses = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'text-xs px-2 py-0.5'
    case 'lg':
      return 'text-sm px-3 py-1'
    default:
      return 'text-sm px-2.5 py-0.5'
  }
})
</script>

<template>
  <span
    :class="['inline-flex items-center rounded-full border font-medium', colorClasses, sizeClasses]"
  >
    <slot>{{ props.label || props.status }}</slot>
  </span>
</template>

<style scoped></style>
