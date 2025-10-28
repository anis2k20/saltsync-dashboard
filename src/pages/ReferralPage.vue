<script setup lang="ts">
import CopyReferralLink from '@/components/referral/CopyReferralLink.vue'

import { ref } from 'vue'
import RewardPointCard from '@/components/referral/RewardPointCard.vue'
import StateCard from '@/components/referral/StateCard.vue'
import ReferralHistoryTable from '@/components/referral/ReferralHistoryTable.vue'

const referralLink = ref('saltsync.com/EApVpttjlL3')

const stats = ref({
  rewardPoints: 200,
  rewardMax: 2000,
  totalReferral: 20,
  totalSuccess: 16,
  totalPending: 4,
  totalRejected: 0,
})
</script>

<template>
  <div class="space-y-6">
    <!--referral and reward section-->
    <div class="flex items-start gap-6">
      <CopyReferralLink />

      <!--point balance-->
      <div class="w-full space-y-6">
        <RewardPointCard />

        <!-- Stats Cards -->
        <div class="grid grid-cols-2 gap-6">
          <StateCard />
          <StateCard />
          <StateCard />
          <StateCard />
        </div>
      </div>
    </div>

    <!--referral history section-->
    <div>
      <ReferralHistoryTable />
    </div>
  </div>
</template>

<style scoped></style>
