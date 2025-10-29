<script setup lang="ts">
import Sidebar from '@/components/sidebar/Sidebar.vue'
import Topbar from '@/components/topbar/Topbar.vue'
import MobileBaottomNav from '@/components/bottom-nav/MobileBaottomNav.vue'
</script>

<template>
  <div
    class="fixed inset-0 flex bg-bg-secondary_subtle font-primary dark:bg-bg-secondary_subtle-dark"
  >
    <Sidebar />
    <!--page render container-->
    <div class="flex-1 overflow-y-auto transition-all duration-200 md:p-6">
      <div
        class="border border-border-primary bg-white md:rounded-2xl dark:border-border-primary-dark dark:bg-bg-primary"
      >
        <Topbar />
        <div class="p-base md:p-8">
          <RouterView />
        </div>
      </div>
    </div>
    <!--end page render container-->
    <!--mobile bottom nav-->
    <MobileBaottomNav />
  </div>
</template>

<style scoped></style>
