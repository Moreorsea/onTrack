import { generatePeriodSelectOptions } from '../components/functions'

export const PAGE_TIMELINES = 'timeline'
export const PAGE_ACTIVITIES = 'activities'
export const PAGE_PROGRESS = 'progress'

export const HOURS_IN_DAY = 24
export const MIDNIGHT_HOUR = 0
export var MINUTES_IN_HOUR = 60
export var SECONDS_IN_MINUTE = 60
export var SECONDS_IN_HOUR = MINUTES_IN_HOUR * SECONDS_IN_MINUTE
export const MILISECONDS_IN_SECOND = 1000

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
