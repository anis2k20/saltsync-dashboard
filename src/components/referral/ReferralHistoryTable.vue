<script setup lang="ts">
import { onMounted, watch } from 'vue'
import Search from '@/components/ui/Search.vue'
import Badge from '@/components/ui/Badge.vue'
import Pagination from '@/components/ui/Pagination.vue'
import { storeToRefs } from 'pinia'
import { useReferralStore } from '@/stores/referral.store'
import CirclePlusIcon from '@/components/icons/circle-plus-icon.vue'
import Button from '@/components/ui/Button.vue'
import Loader from '@/components/ui/Loader.vue'

const store = useReferralStore()
const { list, meta, loading, error, search, status } = storeToRefs(store)
const { fetchHistory, setPage } = store

const emit = defineEmits<{ (e: 'add-referral'): void }>()

function pageChange(page: number) {
  setPage(page)
  fetchHistory()
}

onMounted(() => fetchHistory())

watch(search, () => fetchHistory())
watch(status, () => fetchHistory())
</script>

<template>
  <div class="space-y-2 rounded-lg border border-border-primary p-xl">
    <div class="flex items-center justify-between">
      <h2 class="font-secondary text-2xl font-semibold text-primary-light">My Referral History</h2>
    </div>
    <div class="flex flex-wrap items-center justify-between">
      <div class="flex items-start gap-2 py-base">
        <Search v-model="search" @search="fetchHistory" placeholder="Search" />
        <div class="relative">
          <select
            v-model="status"
            @change="fetchHistory"
            class="relative z-10 h-10 cursor-pointer appearance-none rounded-md border border-dashed border-border-primary bg-transparent px-3 py-2 text-fg-gray outline-none"
          >
            <option value="Success">Success</option>
            <option value="Pending">Pending</option>
            <option value="Rejected">Rejected</option>
          </select>
          <button
            v-if="!status"
            class="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center gap-2 bg-white text-fg-gray"
          >
            <circle-plus-icon /><span>Status</span>
          </button>
        </div>
      </div>
      <Button @click="$emit('add-referral')" class="space-x-2 bg-bg-brand-primary text-brand-white">
        <circle-plus-icon class="h-4 w-4" /> <span>Add Referral</span></Button
      >
    </div>
    <!-- Referral history table -->
    <div
      class="custom-scrollbar overflow-hidden overflow-x-auto rounded-2xl border border-border-secondary"
    >
      <table class="w-full">
        <thead>
          <tr>
            <th>Date</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Status</th>
            <th>Discount</th>
            <th>Point</th>
          </tr>
        </thead>
        <tbody v-if="loading">
          <tr>
            <td colspan="7" class="py-4 text-center">
              <Loader />
            </td>
          </tr>
        </tbody>
        <tbody v-else-if="error">
          <tr>
            <td colspan="7" class="py-4 text-center text-red-500">{{ error }}</td>
          </tr>
        </tbody>
        <tbody v-else-if="list.length === 0">
          <tr>
            <td colspan="7" class="py-4 text-center">No referrals found.</td>
          </tr>
        </tbody>
        <tbody v-else>
          <tr v-for="user in list" :key="user.id">
            <td>{{ user.date }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.phone }}</td>
            <td>{{ user.email }}</td>
            <td><Badge :status="user.status" size="sm" /></td>
            <td>{{ user.discount ?? 'N/A' }}</td>
            <td>{{ user.point ?? 'N/A' }}</td>
          </tr>
        </tbody>
      </table>
      <div v-if="!loading && !error && meta.total > 0">
        <Pagination :model-value="{ meta }" @page-change="pageChange" />
      </div>
    </div>
  </div>
</template>

<style scoped>
@reference '@/styles/tailwind.css';
tr {
  @apply cursor-pointer hover:bg-bg-secondary-light;
}
th {
  @apply border-b border-border-secondary bg-bg-secondary-light px-3xl py-lg text-left font-secondary text-sm font-semibold text-primary-light;
}
td {
  @apply border-b border-border-secondary px-3xl py-xl text-sm font-medium text-nowrap text-primary-light;
}
</style>
