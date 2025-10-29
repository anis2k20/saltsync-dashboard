<script setup lang="ts">
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
  <form @submit.prevent="onSubmit">
    <input
      type="text"
      v-bind="$attrs"
      :value="props.modelValue"
      @input="onInput"
      class="placeholder:text-text-placeholder-light h-10 rounded-lg border border-border-primary px-3 py-2.5 text-sm outline-none dark:border-border-secondary-dark dark:placeholder:text-text-placeholdder-dark"
    />
  </form>
</template>

<style scoped></style>
