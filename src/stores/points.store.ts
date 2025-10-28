import { defineStore } from 'pinia'
import { ref } from 'vue'
import { api } from '@/services/api.service'

export const usePointsStore = defineStore('points', () => {
  const current = ref(0)
  const lifetime = ref(0)
  const loading = ref(false)

  async function fetchPoints() {
    loading.value = true
    try {
      const res = await api.getPoints()
      current.value = res.current
      lifetime.value = res.lifetime
    } finally {
      loading.value = false
    }
  }

  return { current, lifetime, loading, fetchPoints }
})
