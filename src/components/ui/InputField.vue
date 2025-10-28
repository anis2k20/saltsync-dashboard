<script setup lang="ts">
import { ref, computed } from 'vue'

const props = defineProps<{
  modelValue: string
  label?: string
  placeholder?: string
  required?: boolean
}>()

const emit = defineEmits(['update:modelValue'])

const inputValue = computed({
  get: () => props.modelValue,
  set: (value: string) => emit('update:modelValue', value),
})

const isInvalid = ref(false)

function validate() {
  if (props.required) {
    isInvalid.value = !inputValue.value.trim()
  }
}
</script>

<template>
  <div class="input-field">
    <label v-if="props.label" class="block text-sm font-medium text-[#020617]">
      {{ props.label }}
    </label>
    <input
      :placeholder="props.placeholder"
      v-model="inputValue"
      @blur="validate"
      class="mt-2 block w-full rounded-lg border border-[#E2E8F0] bg-white px-3 py-2.5 outline-none sm:text-sm"
    />
    <p v-if="isInvalid" class="mt-2 text-xs text-red-600">This field is required.</p>
  </div>
</template>

<style scoped>
.input-field {
  display: flex;
  flex-direction: column;
}
</style>
