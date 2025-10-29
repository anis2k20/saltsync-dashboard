<script setup lang="ts">
import type { SidebarItem as SidebarItemType } from '@/components/sidebar/sidebar.data.ts'

defineProps<{
  item: SidebarItemType
  isOpen?: boolean
}>()
</script>

<template>
  <li class="mb-1">
    <!-- Render group title if present -->
    <span
      v-if="item.title && isOpen"
      class="text-sm text-text-secondary-light dark:text-text-secondary-dark"
    >
      {{ item.title }}
    </span>

    <!-- Render menu item if it has a name -->
    <router-link
      :to="item.path ?? '#'"
      v-if="item.name"
      class="flex cursor-pointer items-center justify-between rounded-lg border border-transparent p-2 text-fg-gray hover:bg-gray-100 dark:text-text-primary-dark dark:hover:bg-gray-800"
      exact-active-class="bg-red-400 bg-gradient-to-r min-w-10  border border-[#6C9BE8] from-[#143A7A] to-[#0F172A] text-white"
    >
      <div class="flex items-center gap-2">
        <component v-if="item.icon" :is="item.icon" class="h-5 w-5" />
        <span v-if="isOpen" class="text-md">{{ item.name }}</span>
      </div>
      <span
        v-if="item.count && isOpen"
        class="h-6 w-6 content-center rounded-[6px] bg-fg-brand-primary-alt-light px-2 py-0.5 text-xs text-primary-light dark:bg-fg-brand-primary-alt-dark dark:text-text-primary-dark"
      >
        {{ item.count }}
      </span>
    </router-link>

    <!-- Render children recursively -->
    <ul v-if="item.children?.length" class="mt-1 ml-4 space-y-1">
      <SidebarItem
        v-for="child in item.children"
        :key="child.path || child.name"
        :item="child"
        :is-open
      />
    </ul>
  </li>
</template>
