import { ClockIcon, ListBulletIcon, ChartBarIcon } from '@heroicons/vue/24/outline'
import { generatePeriodSelectOptions } from './functions'

export const PAGE_TIMELINES = 'timeline'
export const PAGE_ACTIVITIES = 'activities'
export const PAGE_PROGRESS = 'progress'

export const BUTTON_TYPES = {
  danger: 'danger',
  default: 'default',
  primary: 'primary',
  success: 'success',
  warning: 'warning'
}

export const NAV_ITEMS = {
  [PAGE_TIMELINES]: ClockIcon,
  [PAGE_ACTIVITIES]: ListBulletIcon,
  [PAGE_PROGRESS]: ChartBarIcon
}

export const HOURS_IN_DAY = 24
export const MIDNIGHT_HOUR = 0
export const MINUTES_IN_HOUR = 60
export const SECONDS_IN_MINUTE = 60
export const SECONDS_IN_HOUR = MINUTES_IN_HOUR * SECONDS_IN_MINUTE
export const MILISECONDS_IN_SECOND = 1000
