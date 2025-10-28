export type ReferralStatus = 'pending' | 'accepted' | 'declined'
export interface Referral {
  id: number
  name: string
  email: string
  phone: string | null
  status: ReferralStatus
  referredAt: string // ISO
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
