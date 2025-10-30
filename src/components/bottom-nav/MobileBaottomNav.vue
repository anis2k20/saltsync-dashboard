<script setup lang="ts">
import { useIcons } from '@/components/sidebar/icons/useIcons.ts'
import MobileNav from '@/components/bottom-nav/mobile-nav.vue'

const { HomeIcon, AccountingIcon, ShareIcon, AccountIcon } = useIcons()

interface Menu {
  id: number
  label: string
  icon?: any
  link: string
}

const menus: Menu[] = [
  {
    id: 1,
    label: 'Home',
    icon: HomeIcon,
    link: '/dashboard',
  },
  {
    id: 2,
    label: 'Payment',
    icon: AccountingIcon,
    link: '/payments',
  },
  {
    id: 3,
    label: 'Referral',
    icon: ShareIcon,
    link: '/referrals',
  },
  {
    id: 4,
    label: 'Account',
    icon: AccountIcon,
    link: '/account',
  },
]
</script>

<template>
  <nav class="fixed bottom-0 z-40 w-full sm:hidden">
    <mobile-nav
      class="fixed -bottom-2 w-full text-white drop-shadow-[0_4px_16px_var(--alphalight300)] filter dark:text-primary-light"
    />
    <div
      class="fixed bottom-14 left-1/2 z-40 flex h-14 w-14 -translate-x-1/2 items-center justify-center overflow-hidden rounded-full bg-white p-1.5 shadow-[0_8px_20px_0_#005D5D3D]"
    >
      <img
        src="@/assets/images/logo-dark.webp"
        alt="logo"
        class="relative h-full w-full rounded-full"
      />
    </div>
    <div class="relative z-50 flex justify-around px-2 pb-base text-fg-gray dark:text-brand-white">
      <router-link
        :to="menu.link"
        v-for="(menu, index) in menus"
        class="flex flex-col items-center gap-1 text-sm"
        :class="index === 2 ? 'pl-[20%]' : ''"
        exact-active-class="text-blue-500  "
      >
        <component :is="menu.icon" class="h-5 w-5" />
        {{ menu.label }}
      </router-link>
    </div>
  </nav>
</template>

<style scoped></style>
