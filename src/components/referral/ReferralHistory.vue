<script setup lang="ts">
import Search from '@/components/ui/Search.vue'
import CirclePlusIcon from '@/components/icons/circle-plus-icon.vue'
import Badge from '@/components/ui/Badge.vue'
import Pagination from '@/components/ui/Pagination.vue'

const data = [
  {
    id: 1,
    date: '29 January, 2019',
    name: 'Forhad Sheikh',
    phone: '(270) 555-0117',
    email: 'nathan@gmail.com',
    status: 'Success',
    discount: 200,
    point: 200,
  },
  {
    id: 2,
    date: '29 January, 2019',
    name: 'Forhad Sheikh',
    phone: '(603) 555-0123',
    email: null,
    status: 'Pending',
    discount: null,
    point: null,
  },
  {
    id: 3,
    date: '29 January, 2019',
    name: 'Forhad Sheikh',
    phone: '(671) 555-0110',
    email: 'jessica@gmail.com',
    status: 'Rejected',
    discount: null,
    point: null,
  },
  {
    id: 4,
    date: '29 January, 2019',
    name: 'Forhad Sheikh',
    phone: '(225) 555-0118',
    email: 'tanya@gmail.com',
    status: 'Success',
    discount: 10,
    point: 100,
  },
  {
    id: 5,
    date: '29 January, 2019',
    name: 'Forhad Sheikh',
    phone: '(302) 555-0107',
    email: null,
    status: 'Success',
    discount: 10,
    point: 100,
  },
]
</script>

<template>
  <div>
    <h2 class="font-secondary text-2xl font-semibold text-primary-light">My Referral History</h2>
    <div class="flex items-start gap-2 py-base">
      <Search placeholder="Search" />
      <button
        class="flex h-10 items-center justify-center gap-2 rounded-md border border-dashed border-border-primary px-3 py-2 text-fg-gray"
      >
        <circle-plus-icon /><span>Status</span>
      </button>
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
        <tbody>
          <tr v-for="user in data">
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
      <div>
        <Pagination :model-value="data" />
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
