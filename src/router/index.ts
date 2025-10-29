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
          path: 'dashboard',
          name: 'dashboard',
          component: () => import('@/pages/NotFoundPage.vue'),
        },
        {
          path: 'referrals',
          name: 'referrals',
          component: () => import('@/pages/ReferralPage.vue'),
        },
        {
          path: 'payments',
          name: 'payments',
          component: () => import('@/pages/NotFoundPage.vue'),
        },
        {
          path: 'account',
          name: 'account',
          component: () => import('@/pages/NotFoundPage.vue'),
        },
        {
          path: 'offer',
          component: () => import('@/pages/NotFoundPage.vue'),
        },
        {
          path: 'package',
          component: () => import('@/pages/NotFoundPage.vue'),
        },
        {
          path: 'activity',
          component: () => import('@/pages/NotFoundPage.vue'),
        },
        {
          path: 'tasks',
          component: () => import('@/pages/NotFoundPage.vue'),
        },
        {
          path: 'report',
          component: () => import('@/pages/NotFoundPage.vue'),
        },
        {
          path: 'accounting',
          component: () => import('@/pages/NotFoundPage.vue'),
        },
        {
          path: 'others',
          component: () => import('@/pages/NotFoundPage.vue'),
        },
        {
          path: 'notifications',
          component: () => import('@/pages/NotFoundPage.vue'),
        },
      ],
    },
  ],
})

export default router
