export type ReferralStatus = 'Success' | 'Pending' | 'Rejected'
export interface Referral {
  id: number
  date: string
  name: string
  phone: string | null
  email: string | null
  status: ReferralStatus
  discount: number | null
  point: number | null
  referredAt: string | null
}
export interface Points {
  current: number
  lifetime: number
}
export interface PostReferralDTO {
  name: string
  email: string
  phone?: string | null
}
