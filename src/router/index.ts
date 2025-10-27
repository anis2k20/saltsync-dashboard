import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/layouts/MainLayout.vue'),
      children: [
        {
          path: 'referrals',
          name: 'referrals',
          component: () => import('@/pages/ReferralPage.vue'),
        },
      ],
    },
  ],
})

export default router
