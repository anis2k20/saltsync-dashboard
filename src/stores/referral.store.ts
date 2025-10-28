import { defineStore } from 'pinia'
import { ref } from 'vue'
import { api } from '@/services/api.service'
import type { PostReferralDTO, Referral } from '@/types'

export const useReferralStore = defineStore('referral', () => {
  const list = ref<Referral[]>([])
  const meta = ref({ total: 0, current_page: 1, per_page: 10 })
  const loading = ref(false)
  const error = ref<string | null>(null)
  const search = ref('')
  const status = ref<string | null>(null)

  async function fetchHistory(opts = {}) {
    loading.value = true
    error.value = null
    try {
      const res = await api.getMyHistory({
        page: meta.value.current_page,
        perPage: meta.value.per_page,
        q: search.value,
        status: status.value || undefined,
      })
      list.value = res.data
      meta.value = res.meta
    } catch (e: any) {
      error.value = e.message || 'Failed to load'
    } finally {
      loading.value = false
    }
  }

  async function addReferral(payload: PostReferralDTO) {
    loading.value = true
    try {
      const created = await api.postManual(payload)
      list.value.unshift(created)
      meta.value.total = meta.value.total + 1
      return created
    } catch (e: any) {
      throw e
    } finally {
      loading.value = false
    }
  }

  function setPage(p: number) {
    meta.value.current_page = p
  }

  return { list, meta, loading, error, search, status, fetchHistory, addReferral, setPage }
})
