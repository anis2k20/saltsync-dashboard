<script setup lang="ts">
import SearchIcon from '@/components/icons/search-icon.vue'

const props = withDefaults(defineProps<{ modelValue?: string }>(), {
  modelValue: '',
})

const emit = defineEmits<{
  (e: 'update:modelValue', v: string): void
  (e: 'search', v: string): void
}>()

function onInput(e: Event) {
  const val = (e.target as HTMLInputElement).value
  emit('update:modelValue', val)
}

function onSubmit(e: Event) {
  e.preventDefault()
  emit('search', props.modelValue ?? '')
}
</script>

<template>
  <form @submit.prevent="onSubmit" class="relative">
    <input
      type="text"
      v-bind="$attrs"
      :value="props.modelValue"
      @input="onInput"
      class="placeholder:text-text-placeholder-light h-10 rounded-lg border border-border-primary px-3 py-2.5 pl-7 text-sm outline-none focus:border-brand-solid dark:border-border-secondary-dark dark:text-text-placeholdder-dark dark:text-shadow-text-placeholdder-dark dark:placeholder:text-text-placeholdder-dark"
    />
    <search-icon class="absolute top-1/2 left-2 -translate-y-1/2 dark:text-[#E2E8F0]" />
  </form>
</template>

<style scoped></style>
