<script setup lang="ts">
import { sidebarItems } from './sidebar.data'
import { useSidebar } from './useSidebar'
import SidebarItem from './SidebarItem.vue'
import { useDarkMode } from '@/composeables/useDarkMode.ts'
import PanelRightOpenIcon from '@/components/icons/panel-right-open-icon.vue'
import SunIcon from '@/components/icons/sun-icon.vue'
import MoonIcon from '@/components/icons/moon-icon.vue'

const { isDarkMode, toggleDarkMode } = useDarkMode()

const { isOpen, toggleSidebar } = useSidebar()

function switchToLightMode() {
  if (isDarkMode.value) {
    toggleDarkMode()
  }
}

function switchToDarkMode() {
  if (!isDarkMode.value) {
    toggleDarkMode()
  }
}
</script>

<template>
  <aside
    :class="[
      'relative z-10 flex h-screen flex-col justify-between bg-secondary-light transition-all duration-300 ease-in dark:bg-secondary-dark',
      isOpen ? 'w-60' : 'w-20',
    ]"
  >
    <img
      src="../../assets/images/sidebar-gradient.svg"
      alt="gradient"
      class="absolute top-0 z-0 h-[480px] w-full rotate-[8.6] opacity-80"
    />
    <div>
      <!--header-->
      <header
        class="relative z-20 flex h-[72px] items-center justify-between"
        :class="isOpen ? 'p-4' : 'px-10'"
      >
        <img
          v-if="isDarkMode && isOpen"
          src="@/assets/images/saltsync-logo-white.webp"
          alt="logo"
          class="w-36 object-cover"
        />
        <img
          v-if="!isDarkMode && isOpen"
          src="@/assets/images/logo.svg"
          alt="logo"
          class="w-36 object-cover"
        />

        <button
          @click="toggleSidebar"
          class="cursor-pointer text-fg-gray dark:text-text-primary-dark"
        >
          <panel-right-open-icon class="h-5 w-5" />
        </button>
      </header>

      <!--sidebar items-->
      <ul class="relative z-10 space-y-2 p-base">
        <SidebarItem
          v-for="item in sidebarItems"
          :key="item.title || item.path"
          :item="item"
          :isOpen
        />
      </ul>
    </div>

    <!--footer-->
    <Transition name="fade">
      <footer>
        <div v-if="isOpen" class="space-y-[10px] p-4">
          <div class="h-14 rounded-lg bg-primary-light px-base py-xx3 dark:bg-white">
            <h3
              class="font-secondary font-semibold text-text-primary-light dark:text-text-placeholder"
            >
              Enterprise
            </h3>
            <span class="text-xs text-brand-secondary">Next billing on May 1, 2025</span>
          </div>

          <div class="flex justify-between gap-2 rounded-lg bg-white p-1 dark:bg-bg-primary">
            <button
              @click="switchToLightMode"
              class="flex h-8 flex-1 cursor-pointer items-center gap-2 rounded-lg px-base py-1"
              :class="
                isDarkMode
                  ? 'text-text-brand-tertiary-alt'
                  : 'bg-brand-white text-text-brand-tertiary'
              "
            >
              <SunIcon /><span class="text-sm">Light</span>
            </button>

            <button
              @click="switchToDarkMode"
              class="flex h-8 flex-1 cursor-pointer items-center gap-2 rounded-lg px-base py-1"
              :class="
                isDarkMode
                  ? 'bg-bg-brand-primary text-text-brand-tertiary-alt'
                  : 'text-text-secondary-light dark:text-primary-light'
              "
            >
              <MoonIcon /><span class="text-sm">Dark</span>
            </button>
          </div>
        </div>
        <div v-else class="p-4">
          <button
            v-if="isDarkMode"
            @click="switchToLightMode"
            class="flex h-8 flex-1 cursor-pointer items-center gap-2 rounded-lg px-6 py-1"
            :class="
              isDarkMode
                ? 'text-text-brand-tertiary-alt'
                : 'bg-brand-white text-text-brand-tertiary'
            "
          >
            <SunIcon />
          </button>

          <button
            v-else
            @click="switchToDarkMode"
            class="flex h-8 flex-1 cursor-pointer items-center gap-2 rounded-lg px-6 py-1"
            :class="
              isDarkMode
                ? 'bg-bg-brand-primary text-text-brand-tertiary-alt'
                : 'text-text-secondary-light dark:text-primary-light'
            "
          >
            <MoonIcon />
          </button>
        </div>
      </footer>
    </Transition>
  </aside>
</template>
