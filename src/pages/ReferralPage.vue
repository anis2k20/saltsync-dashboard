<script setup lang="ts">
import CopyReferralLink from '@/components/referral/CopyReferralLink.vue'

import { ref } from 'vue'
import RewardPointCard from '@/components/referral/RewardPointCard.vue'
import StateCard from '@/components/referral/StateCard.vue'
import ReferralHistoryTable from '@/components/referral/ReferralHistoryTable.vue'
import GlobalDrawer from '@/components/referral/GlobalDrawer.vue'
import ReferralForm from '@/components/referral/ReferralForm.vue'
import Button from '@/components/ui/Button.vue'
import shareIcon from '@/components/icons/share-icon.vue'
import hourglassIcon from '@/components/icons/hourglass-icon.vue'
import checkIcon from '@/components/icons/check-icon.vue'
import xIcon from '@/components/icons/x-icon.vue'

const referralLink = ref('saltsync.com/EApVpttjlL3')

const stats = ref([
  {
    label: 'Total Referrals',
    count: 20,
    icon: shareIcon,
  },
  {
    label: 'Total States',
    count: 16,
    icon: checkIcon,
  },
  { label: 'Total Pending', count: 4, icon: hourglassIcon },
  { label: 'Total Referrals', count: 0, icon: xIcon },
])
const isDrawerOpen = ref(false)
</script>

<template>
  <div>
    <div class="space-y-6">
      <!--referral and reward section-->
      <div class="flex items-start gap-6">
        <CopyReferralLink @add-new-connection="isDrawerOpen = true" />

        <!--point balance-->
        <div class="w-full space-y-6">
          <RewardPointCard />

          <!-- Stats Cards -->
          <div class="grid grid-cols-2 gap-6">
            <StateCard v-for="stat in stats" :stat />
          </div>
        </div>
      </div>

      <!--referral history section-->
      <div>
        <ReferralHistoryTable />
      </div>
    </div>
    <GlobalDrawer v-model="isDrawerOpen" title="New Connection Referred" side="right" size="lg">
      <ReferralForm />
    </GlobalDrawer>
  </div>
</template>

<style scoped></style>
