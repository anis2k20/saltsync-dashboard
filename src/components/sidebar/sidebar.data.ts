import homeIcon from './icons/home-icon.vue'
import accountIcon from './icons/account-icon.vue'
import accountingIcon from './icons/accounting-icon.vue'
import bellIcon from './icons/bell-icon.vue'
import packageIcon from './icons/package-icon.vue'
import reportIcon from './icons/report-icon.vue'
import shareIcon from './icons/share-icon.vue'
import OthersIcon from '@/components/sidebar/icons/others-icon.vue'
import DiscountIcon from '@/components/sidebar/icons/discount-icon.vue'
import TaskIcon from '@/components/sidebar/icons/task-icon.vue'
import ActivityIcon from '@/components/sidebar/icons/activity-icon.vue'

export interface SidebarItem {
  name?: string
  title?: string
  path?: string
  icon?: string | object
  count?: number | null
  children?: SidebarItem[]
}

export const sidebarItems: SidebarItem[] = [
  {
    title: 'Main',
    children: [
      { name: 'Home', path: '/dashboard', icon: homeIcon, count: null },
      { name: 'Offer', path: '/offer', icon: DiscountIcon, count: null },
      { name: 'Package', path: '/package', icon: packageIcon, count: null },
      { name: 'Activity', path: '/activity', icon: ActivityIcon, count: null },
      { name: 'Task', path: '/tasks', icon: TaskIcon, count: null },
      { name: 'Referral', path: '/referrals', icon: shareIcon, count: null },
      { name: 'Accounting', path: '/accounting', icon: accountingIcon, count: null },
      { name: 'Report', path: '/report', icon: reportIcon, count: null },
      { name: 'Others', path: '/others', icon: OthersIcon, count: null },
    ],
  },
  {
    title: 'Others',
    children: [
      { name: 'Notification', path: '/notifications', icon: bellIcon, count: 8 },
      { name: 'My Account', path: '/account', icon: accountIcon, count: null },
    ],
  },
]
