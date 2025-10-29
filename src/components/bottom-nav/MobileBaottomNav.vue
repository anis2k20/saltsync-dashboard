<script setup lang="ts"></script>

<template>
  <nav class="fixed bottom-0 z-40 w-full sm:hidden">
    <img
      src="@/assets/images/mobile-nav.svg"
      alt="nav-bg"
      class="block h-20 w-full object-cover object-top drop-shadow-[0_4px_16px_var(--alphalight300)] filter"
    />
    <div
      class="absolute -top-[35%] left-1/2 flex h-14 w-14 -translate-x-1/2 items-center justify-center overflow-hidden rounded-full bg-white p-1.5 shadow-[0_8px_20px_0_#005D5D3D]"
    >
      <img
        src="@/assets/images/logo-dark.webp"
        alt="logo"
        class="relative h-full w-full rounded-full"
      />
    </div>
  </nav>
</template>

<style scoped></style>
