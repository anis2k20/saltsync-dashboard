<script setup lang="ts">
defineProps({
  stat: {
    type: Object,
    default: () => ({}),
  },
})
</script>

<template>
  <div
    class="relative flex h-[100px] flex-1 flex-col items-center justify-center overflow-hidden rounded-xl border border-border-primary bg-white px-lg py-base shadow"
  >
    <img
      src="@/assets/images/gradient-small-1.svg"
      alt="gradient"
      class="absolute -top-20 left-20 h-72 w-56 border blur-2xl"
    />
    <img
      src="@/assets/images/gradient-small-2.svg"
      alt="gradient"
      class="absolute -left-10 w-60 border opacity-50 blur-2xl"
    />
    <div class="relative z-10 flex w-full items-center gap-3">
      <div
        class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#BBD1F4]"
      >
        <component :is="stat.icon" class="h-6 w-6" />
      </div>
      <div class="w-full space-y-2 text-text-quaternary-light">
        <p class="text-md font-secondary font-semibold">{{ stat.label }}</p>

        <h3 class="font-secondary text-4xl font-semibold text-primary-light">{{ stat.count }}</h3>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
