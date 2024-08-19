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

export const PERIOD_IN_MINUTES = [
  15, 30, 45, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360, 390, 420, 450, 480
]

export const PERIOD_SELECT_OPTIONS = generatePeriodSelectOptions(PERIOD_IN_MINUTES)
//   {
//     value: 1 * SECONDS_IN_HOUR,
//     label: '01:00'
//   },
//   {
//     value: 2 * SECONDS_IN_HOUR,
//     label: '02:00'
//   },
//   {
//     value: 3 * SECONDS_IN_HOUR,
//     label: '03:00'
//   }
// ]
