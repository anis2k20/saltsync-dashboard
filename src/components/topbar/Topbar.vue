<script setup lang="ts">
import Search from '@/components/ui/Search.vue'
import MessageIcon from '@/components/icons/message-icon.vue'
import BellIcon from '@/components/icons/bell-icon.vue'
</script>

<template>
  <nav
    class="flex items-center justify-between border-b border-border-tertiary px-3xl py-base dark:border-border-primary-dark"
  >
    <Search
      placeholder="Type a command or search..."
      class="placeholder:text-text-placeholder-light"
    />
    <!--profile info-->
    <div class="flex items-center gap-4">
      <div
        class="flex h-10 items-center gap-2.5 rounded-md bg-secondary-light px-2.5 py-1 text-fg-gray"
      >
        <message-icon />
        <bell-icon />
      </div>

      <div
        class="flex h-10 w-10 items-center rounded-md bg-secondary-light px-2.5 py-1 text-fg-gray"
      ></div>
    </div>
  </nav>
</template>

<style scoped></style>
