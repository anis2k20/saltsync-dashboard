<script setup lang="ts">
import { ref } from 'vue'
import { useReferralStore } from '@/stores/referral.store'
import { normalizePhone } from '@/services/phone'
import InputField from '@/components/ui/InputField.vue'
import Button from '@/components/ui/Button.vue'
const props = defineProps({ onClose: Function })
const referral = useReferralStore()
const name = ref('')
const email = ref('')
const phone = ref('')
const submitting = ref(false)
const emailError = ref<string | null>(null)

function reset() {
  name.value = ''
  email.value = ''
  phone.value = ''
  emailError.value = null
}

async function onSubmit() {
  emailError.value = null
  if (!name.value || !email.value) return // rely on required but double-check
  submitting.value = true
  const dto = {
    name: name.value.trim(),
    email: email.value.trim().toLowerCase(),
    phone: normalizePhone(phone.value),
  }

  try {
    await referral.addReferral(dto)
    reset()
    props.onClose?.() // close drawer
    // show success toast (implement your own toast)
  } catch (e: any) {
    if (e.status === 409) emailError.value = 'This email has already been referred.'
    else emailError.value = 'Failed to add referral'
  } finally {
    submitting.value = false
  }
}

function cancel() {
  props.onClose?.()
}
</script>
<template>
  <form @submit.prevent="onSubmit" class="space-y-4">
    <InputField v-model="name" label="Name *" type="text" placeholder="Name" required />
    <InputField v-model="email" label="Email *" type="email" placeholder="Email" required />
    <div v-if="emailError" class="text-sm text-red-500">{{ emailError }}</div>
    <InputField v-model="phone" label="Phone (Optional)" type="tel" placeholder="Phone" />
    <div class="flex gap-2">
      <Button
        @click="onSubmit"
        type="submit"
        class="w-full !bg-brand-solid text-white outline-none"
        :disabled="submitting"
        >Add Referral</Button
      >
    </div>
  </form>
</template>
