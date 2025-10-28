<script setup lang="ts">
import { onMounted, watch } from 'vue'
import Search from '@/components/ui/Search.vue'
import Badge from '@/components/ui/Badge.vue'
import Pagination from '@/components/ui/Pagination.vue'
import { storeToRefs } from 'pinia'
import { useReferralStore } from '@/stores/referral.store'

const store = useReferralStore()
const { list, meta, loading, error, search, status } = storeToRefs(store)
const { fetchHistory, setPage } = store

onMounted(() => fetchHistory())

watch(search, () => fetchHistory())
watch(status, () => fetchHistory())
</script>

<template>
  <div class="rounded-lg border border-border-primary p-xl">
    <h2 class="font-secondary text-2xl font-semibold text-primary-light">My Referral History</h2>
    <div class="flex items-start gap-2 py-base">
      <Search v-model="search" @search="fetchHistory" placeholder="Search" />
      <select
        v-model="status"
        @change="fetchHistory"
        class="flex h-10 items-center justify-center gap-2 rounded-md border border-dashed border-border-primary bg-transparent px-3 py-2 text-fg-gray"
      >
        <option value="">All Status</option>
        <option value="Success">Success</option>
        <option value="Pending">Pending</option>
        <option value="Rejected">Rejected</option>
      </select>
    </div>
    <!-- Referral history table -->
    <div class="overflow-hidden rounded-2xl border border-border-secondary">
      <table class="w-full">
        <thead>
          <tr>
            <th>Date</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Status</th>
            <th>Discount</th>
            <th>point</th>
          </tr>
        </thead>
        <tbody v-if="loading">
          <tr>
            <td colspan="7" class="py-4 text-center">Loading...</td>
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
            <td>{{ user.discount }}</td>
            <td>{{ user.point }}</td>
          </tr>
        </tbody>
      </table>
      <div v-if="!loading && !error && meta.total > 0">
        <Pagination :model-value="{ meta }" @page-change="(setPage($event), fetchHistory())" />
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
