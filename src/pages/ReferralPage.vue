<script setup lang="ts">
import CopyReferralLink from '@/components/referral/CopyReferralLink.vue'
import { ref } from 'vue'
import RewardPointCard from '@/components/referral/RewardPointCard.vue'
import StateCard from '@/components/referral/StateCard.vue'
import ReferralHistoryTable from '@/components/referral/ReferralHistoryTable.vue'
import GlobalDrawer from '@/components/referral/GlobalDrawer.vue'
import ReferralForm from '@/components/referral/ReferralForm.vue'
import shareIcon from '@/components/icons/share-icon.vue'
import hourglassIcon from '@/components/icons/hourglass-icon.vue'
import checkIcon from '@/components/icons/check-icon.vue'
import xIcon from '@/components/icons/x-icon.vue'

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
    <!--main container-->
    <div class="space-y-6 pb-24 md:pb-0">
      <div class="flex flex-wrap items-start gap-6 md:flex-nowrap">
        <!--copy referral link-->
        <CopyReferralLink />

        <!--points balance card-->
        <div class="w-full space-y-4 md:space-y-6">
          <RewardPointCard />
          <div class="grid grid-cols-2 gap-base md:gap-6">
            <StateCard v-for="stat in stats" :stat />
          </div>
        </div>
      </div>

      <!--referral history table-->
      <div>
        <ReferralHistoryTable @add-referral="isDrawerOpen = true" />
      </div>
    </div>

    <!--drawer for new referral-->
    <GlobalDrawer v-model="isDrawerOpen" title="Add New Referral" side="right" size="lg">
      <ReferralForm />
    </GlobalDrawer>
  </div>
</template>

<style scoped></style>
