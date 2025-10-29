<script setup>
import { computed } from 'vue'

const models = defineModel()

const meta = computed(() => {
  return models.value.meta
})

const props = defineProps({
  maxVisiblePages: {
    type: Number,
    default: 5,
  },
  darkMode: {
    type: Boolean,
    default: false,
  },
})

const totalPages = computed(() => {
  return Math.ceil(meta.value?.total / meta.value?.per_page)
})

const visiblePages = computed(() => {
  const total = meta.value?.last_page
  const current = meta.value?.current_page
  const maxPages = props.maxVisiblePages

  let start = Math.max(1, current - Math.floor(maxPages / 2))
  const end = Math.min(total, start + maxPages - 1)

  const diff = end - start
  if (start > props.maxVisiblePages - 1) {
    start -= Math.abs(diff + 1 - props.maxVisiblePages)
  }

  return Array.from({ length: end - start + 1 }, (_, i) => start + i)
})

const emit = defineEmits(['pageChange'])

const prevPage = computed(() => {
  return meta.value?.current_page - 1
})

const nextPage = computed(() => {
  return meta.value?.current_page + 1
})

function changePage(page) {
  emit('pageChange', page)
}
</script>

<template>
  <!--   Pagination -->
  <div class="flex w-full flex-wrap items-center justify-between gap-4 p-4 lg:max-w-full">
    <p class="text-sm" :class="darkMode ? 'text-white' : 'text-gray-500'">
      Showing {{ meta?.from }} to {{ meta?.to }} of {{ meta?.total }}
    </p>
    <ul class="flex gap-2 text-sm">
      <!--  previous button -->
      <li
        :class="{
          'pointer-events-none': prevPage < 1,
          'cursor-pointer': prevPage > 1,
        }"
        class="flex h-9 w-9 items-center justify-center rounded-lg border border-border-primary text-fg-gray dark:border-border-primary-dark dark:text-text-placeholdder-dark"
        @click="changePage(1)"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
          <path
            fill="currentColor"
            d="M6 4.75a.75.75 0 0 0-.743.648L5.25 5.5v9a.75.75 0 0 0 1.493.102l.007-.102v-9A.75.75 0 0 0 6 4.75m8.28.22a.75.75 0 0 0-.976-.073l-.084.073l-4.5 4.5a.75.75 0 0 0-.073.976l.073.084l4.5 4.5a.75.75 0 0 0 1.133-.976l-.073-.084L10.31 10l3.97-3.97a.75.75 0 0 0 0-1.06"
          />
        </svg>
      </li>
      <li
        :class="{
          'pointer-events-none': prevPage < 1,
          'cursor-pointer': prevPage > 1,
        }"
        class="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-border-primary text-fg-gray dark:border-border-primary-dark dark:text-text-placeholdder-dark"
        @click="changePage(prevPage)"
      >
        <svg height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m14 7l-5 5l5 5"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          />
        </svg>
      </li>
      <!--  end previous button  -->
      <template v-if="visiblePages">
        <li
          v-for="page in visiblePages"
          :class="{
            'bg-brand-solid text-white hover:text-white dark:text-white':
              meta?.current_page === page,
          }"
          class="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-border-primary hover:border hover:text-blue-500 md:px-4 dark:border-border-primary-dark dark:text-text-placeholdder-dark"
          @click="changePage(page)"
        >
          {{ page }}
        </li>
      </template>
      <!--  next button -->
      <li
        :class="{
          'pointer-events-none': nextPage > totalPages,
          'cursor-pointer': nextPage < totalPages,
        }"
        class="flex h-9 w-9 items-center justify-center rounded-lg border border-border-primary text-fg-gray dark:border-border-primary-dark dark:text-text-placeholdder-dark"
        @click="changePage(nextPage)"
      >
        <svg height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m10 17l5-5m0 0l-5-5"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          />
        </svg>
      </li>
      <li
        :class="{
          'pointer-events-none': nextPage > totalPages,
          'cursor-pointer': nextPage < totalPages,
        }"
        class="flex h-9 w-9 items-center justify-center rounded-lg border border-border-primary text-fg-gray dark:border-border-primary-dark dark:text-text-placeholdder-dark"
        @click="changePage(meta?.last_page)"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
          <path
            fill="currentColor"
            d="M13.75 4.75a.75.75 0 0 1 .743.648l.007.102v9a.75.75 0 0 1-1.493.102L13 14.5v-9a.75.75 0 0 1 .75-.75m-8.28.22a.75.75 0 0 1 .976-.073l.084.073l4.5 4.5a.75.75 0 0 1 .073.976l-.073.084l-4.5 4.5a.75.75 0 0 1-1.133-.976l.073-.084L9.44 10L5.47 6.03a.75.75 0 0 1 0-1.06"
          />
        </svg>
      </li>
      <!--  end next button  -->
    </ul>
  </div>
  <!--   end pagination  -->
</template>

<style scoped></style>
