<script setup lang="ts">
import Sidebar from '@/components/sidebar/Sidebar.vue'
import Topbar from '@/components/topbar/Topbar.vue'
</script>

<template>
  <div class="fixed inset-0 flex bg-bg-secondary_subtle font-primary">
    <Sidebar />
    <!--page render container-->
    <div class="flex-1 overflow-y-auto p-6">
      <div class="rounded-2xl border border-border-primary bg-white">
        <Topbar />
        <div class="p-8">
          <RouterView />
        </div>
      </div>
    </div>
    <!--end page render container-->
  </div>
</template>

<style scoped></style>
