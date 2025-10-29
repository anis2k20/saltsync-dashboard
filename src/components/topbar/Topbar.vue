<script setup lang="ts">
import Search from '@/components/ui/Search.vue'
import MessageIcon from '@/components/icons/message-icon.vue'
import BellIcon from '@/components/icons/bell.vue'
import DownIcon from '@/components/icons/down-icon.vue'
</script>

<template>
  <nav
    class="flex items-center justify-between gap-2 border-b border-border-tertiary px-2 py-base lg:px-3xl dark:border-border-primary-dark"
  >
    <Search
      placeholder="Type a command or search..."
      class="placeholder:text-text-placeholder-light"
    />
    <!--profile info-->
    <div class="flex items-center gap-2 md:gap-4">
      <div
        class="flex h-10 items-center gap-2.5 rounded-md bg-secondary-light px-2.5 py-1 text-fg-gray dark:bg-bg-secondary_subtle-dark dark:text-text-placeholdder-dark"
      >
        <message-icon class="hidden sm:block" />
        <bell-icon />
      </div>

      <div
        class="flex h-10 items-center gap-1.5 rounded-md bg-secondary-light px-2.5 py-1 text-fg-gray dark:bg-bg-secondary_subtle-dark dark:text-text-placeholdder-dark"
      >
        <img
          src="@/assets/images/user.webp"
          alt="user-photo"
          class="h-8 w-8 flex-shrink-0 rounded-full object-cover"
        />
        <down-icon />
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
