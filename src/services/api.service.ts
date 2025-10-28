import referralsData from './mock.referrals.json'
import type { Referral, Points, PostReferralDTO } from '@/types'
const MIN = 300,
  MAX = 800
let referrals: Referral[] = ((referralsData as any).data || []) as Referral[]
let nextId = referrals.length + 1

let points: Points = { current: 120, lifetime: 420 }

function delay() {
  return new Promise((res) => setTimeout(res, Math.floor(Math.random() * (MAX - MIN)) + MIN))
}

export const api = {
  async getMyProfile() {
    await delay()
    return { id: 1, name: 'You', referralCode: 'EApVpt1jL3' }
  },

  async getPoints() {
    await delay()
    return { ...points }
  },

  async getMyHistory({
    page = 1,
    perPage = 10,
    q = '',
    status,
  }: {
    page?: number
    perPage?: number
    q?: string
    status?: string
  }) {
    await delay()
    let items = [...referrals]

    if (q) {
      const s = q.toLowerCase()
      items = items.filter(
        (r) =>
          r.name.toLowerCase().includes(s) ||
          r.email.toLowerCase().includes(s) ||
          (r.phone || '').includes(s),
      )
    }
    if (status) items = items.filter((r) => r.status === status)

    const total = items.length
    const start = (page - 1) * perPage
    const data = items.slice(start, start + perPage)
    const last_page = Math.ceil(total / perPage)
    return { data, meta: { current_page: page, per_page: perPage, total, last_page } }
  },

  async postManual(payload: PostReferralDTO) {
    await delay()
    const exists = referrals.some((r) => r.email.toLowerCase() === payload.email.toLowerCase())
    if (exists) {
      const err: any = new Error('Duplicate email')
      err.status = 409
      throw err
    }
    const newReferral: Referral = {
      id: nextId++,
      name: payload.name,
      email: payload.email,
      phone: payload.phone ?? null,
      status: 'pending',
      referredAt: new Date().toISOString(),
    }
    referrals.unshift(newReferral)

    return newReferral
  },
}
