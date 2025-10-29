<script setup lang="ts">
import Button from '@/components/ui/Button.vue'
</script>

<template>
  <div
    class="relative flex h-[170px] flex-1 flex-col items-center justify-center overflow-hidden rounded-xl border border-border-primary bg-white px-lg py-base shadow dark:border-border-primary-dark dark:bg-transparent"
  >
    <img
      src="@/assets/images/gradient-small-1.svg"
      alt="gradient"
      class="absolute top-0 left-0 w-56 border blur-2xl"
    />
    <img
      src="@/assets/images/gradient-small-2.svg"
      alt="gradient"
      class="absolute top-0 left-0 w-60 border opacity-50 blur-2xl"
    />
    <div class="relative z-10 flex w-full items-center gap-3">
      <img src="@/assets/images/toffee.webp" alt="toffee" class="h-20" />
      <div class="w-full space-y-2 text-text-quaternary-light dark:text-text-quaternary-dark">
        <p class="text-xl font-medium">Reward Point</p>
        <div class="flex w-full items-center justify-between">
          <div>
            <span
              class="font-secondary text-4xl font-semibold text-primary-light dark:text-text-primary-dark"
              >200</span
            >
            <span class="ml-2 text-2xl">৳ 2000</span>
          </div>
          <Button class="bg-brand-solid text-white">Upgrade</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
