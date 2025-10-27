<script setup lang="ts">
import Search from '@/components/ui/Search.vue'
import Button from '@/components/ui/Button.vue'
import MailIcon from '@/components/icons/mail-icon.vue'
import FacebookIcon from '@/components/icons/facebook-icon.vue'
import WhatsappIcon from '@/components/icons/whatsapp-icon.vue'
import CopyIcon from '@/components/icons/copy-icon.vue'
import { useToast } from 'vue-toastification'
import { ref } from 'vue'

const toast = useToast()

const referralLink = ref('saltsync.com/EApVpttjlL3')
function copyLink() {
  toast.success('Referral link copied to clipboard!')
  navigator.clipboard.writeText(referralLink.value)
}
</script>

<template>
  <div
    class="relative max-w-96 space-y-8 overflow-hidden rounded-2xl bg-bg-brand-primary p-3xl text-white"
  >
    <img
      src="../../assets/images/gradient-small-1.svg"
      alt="gradient"
      class="absolute top-0 -left-10 h-40 blur-2xl"
    />
    <!--    title-->
    <h2 class="relative z-10 text-3xl font-bold">
      Refried friend and Get ৳10 off. Get up to ৳600.
    </h2>

    <!--content-->
    <div class="relative z-10">
      <h6 class="pb-1 text-sm">Your referral invite link</h6>
      <div class="flex gap-2">
        <Search v-model="referralLink" class="w-full placeholder:text-white" />
        <Button @click="copyLink"><copy-icon class="mr-2" />Copy</Button>
      </div>
      <div class="flex items-start justify-between pt-3">
        <div>
          <span class="text-sm">Share with</span>
          <!--social medial link-->
          <div class="flex items-center gap-2.5 pt-1">
            <a href="#" class="social-icon-container"><whatsapp-icon /></a>
            <a href="#" class="social-icon-container">
              <mail-icon />
            </a>
            <a href="#" class="social-icon-container">
              <facebook-icon />
            </a>
          </div>
        </div>
        <div>
          <span class="text-sm">Scan Me</span>
          <img src="@/assets/images/qr-code.webp" alt="qr-code" />
        </div>
      </div>
    </div>

    <!--action button-->
    <Button class="w-full">Request for New Connection</Button>
  </div>
</template>

<style scoped>
@reference '@/styles/tailwind.css';
.social-icon-container {
  @apply flex h-10 w-10 items-center justify-center rounded-lg bg-white text-fg-gray;
}
</style>
