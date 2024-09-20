import { generatePeriodSelectOptions } from '../components/functions'

export const PAGE_TIMELINES = 'timeline'
export const PAGE_ACTIVITIES = 'activities'
export const PAGE_PROGRESS = 'progress'

export const HOURS_IN_DAY = 24
export const MIDNIGHT_HOUR = 0
export const MINUTES_IN_HOUR = 60
export const SECONDS_IN_MINUTE = 60
export const SECONDS_IN_HOUR = MINUTES_IN_HOUR * SECONDS_IN_MINUTE
export const MILISECONDS_IN_SECOND = 1000
export const SECONDS_IN_DAY = HOURS_IN_DAY * SECONDS_IN_HOUR
export const HUNDRED_PERCENT = 100

export const BUTTON_TYPES = {
  danger: 'danger',
  default: 'default',
  primary: 'primary',
  success: 'success',
  warning: 'warning'
}

export const NAV_ITEMS = [
  {
    page: PAGE_TIMELINES,
    icon: 'Clock'
  },
  {
    page: PAGE_ACTIVITIES,
    icon: 'ListBullet'
  },
  {
    page: PAGE_PROGRESS,
    icon: 'Chart'
  }
]

export const PERIOD_SELECT_OPTIONS = generatePeriodSelectOptions()
