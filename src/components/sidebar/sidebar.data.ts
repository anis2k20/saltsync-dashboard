export interface SidebarItem {
  name?: string
  title?: string
  path?: string
  icon?: string
  count?: number | null
  children?: SidebarItem[]
}

export const sidebarItems: SidebarItem[] = [
  {
    title: 'Main',
    children: [
      { name: 'Home', path: '/home', icon: 'Home', count: null },
      { name: 'Offer', path: '/offer', icon: 'Tag', count: null },
      { name: 'Package', path: '/package', icon: 'Box', count: null },
      { name: 'Activity', path: '/activity', icon: 'Activity', count: null },
      { name: 'Task', path: '/tasks', icon: 'CheckSquare', count: null },
      { name: 'Referral', path: '/referrals', icon: 'Users', count: null },
      { name: 'Accounting', path: '/accounting', icon: 'Wallet', count: null },
      { name: 'Report', path: '/report', icon: 'BarChart', count: null },
      { name: 'Others', path: '/others', icon: 'MoreHorizontal', count: null },
      { name: 'Notification', path: '/notifications', icon: 'Bell', count: 8 },
    ],
  },
  {
    title: 'Account',
    children: [{ name: 'My Account', path: '/account', icon: 'User', count: null }],
  },
]
