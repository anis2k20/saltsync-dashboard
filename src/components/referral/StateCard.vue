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
    class="relative flex flex-1 flex-col items-center justify-center overflow-hidden rounded-xl border border-border-primary bg-white px-base py-md shadow md:h-[100px] md:px-lg lg:py-base dark:border-border-primary-dark dark:bg-transparent dark:text-text-secondary-dark"
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
        class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#BBD1F4] md:h-12 md:w-12"
      >
        <component :is="stat.icon" class="h-5 w-5 md:h-6 md:w-6" />
      </div>
      <div class="w-full space-y-2 text-text-quaternary-light">
        <p class="font-secondary text-xs font-semibold md:text-base dark:text-text-secondary-dark">
          {{ stat.label }}
        </p>

        <h3
          class="font-secondary text-sm font-bold text-primary-light md:text-4xl md:font-semibold dark:text-text-primary-dark"
        >
          {{ stat.count }}
        </h3>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
