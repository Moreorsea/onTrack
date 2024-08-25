import {
  PAGE_TIMELINES,
  HOURS_IN_DAY,
  MIDNIGHT_HOUR,
  SECONDS_IN_HOUR,
  MINUTES_IN_HOUR,
  SECONDS_IN_MINUTE,
  MILISECONDS_IN_SECOND
} from '../components/constants'
import { isNull, isPageValid } from './validators'

export function normilazePageHash() {
  const page = window.location.hash.slice(1)
  if (isPageValid(page)) {
    return page
  }

  window.location.hash = PAGE_TIMELINES

  return PAGE_TIMELINES
}

export function generateTimelineItems(activities) {
  return [...Array(HOURS_IN_DAY).keys()].map((hour) => ({
    hour,
    activityId: [0, 1, 2, 3, 4, 5, 6, 7].includes(hour) ? activities[hour % 3].id : null,
    activitySeconds: [0, 1, 2, 3, 4, 5, 6, 7].includes(hour) ? hour * 600 : 0
    // activityId: hour % 4 === 0 ? null : activities[hour % 2].id,
    // activitySeconds: hour % 4 === 0 ? 0 : (15 * SECONDS_IN_MINUTE * hour) % SECONDS_IN_HOUR
  }))
}

export function generateActivitySelectOptions(activities) {
  return activities.map((activity) => ({ label: activity.name, value: activity.id }))
}

export function id() {
  return Date.now().toString() + Math.random().toString()
}

export function generateActivities() {
  return ['Coding', 'Training', 'Reading'].map((name, hours) => ({
    id: id(),
    name,
    secondsToComplete: hours * SECONDS_IN_HOUR
  }))
}

export function normalizeSelectValue(value) {
  return isNull(value) || isNaN(value) ? value : +value
}

export function generatePeriodSelectOptionsLabel(minute) {
  const hour = Math.floor(minute / MINUTES_IN_HOUR)
    .toString()
    .padStart(2, 0)
  const minutes = (minute % MINUTES_IN_HOUR).toString().padStart(2, 0)
  return `${hour}:${minutes}`
}

export function generatePeriodSelectOptions() {
  const periods = [
    15, 30, 45, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360, 390, 420, 450, 480
  ]

  return periods.map((minute) => {
    return {
      value: minute * SECONDS_IN_MINUTE,
      label: generatePeriodSelectOptionsLabel(minute)
    }
  })
}

export function formatSeconds(seconds) {
  const date = new Date()

  date.setTime(Math.abs(seconds) * MILISECONDS_IN_SECOND)

  const utc = date.toUTCString()

  return utc.substring(utc.indexOf(':') - 2, utc.indexOf(':') + 6)
}

export function getTotalActivitySeconds(activity, timelineItems) {
  const items = timelineItems
    .filter((item) => item.activityId === activity.id)
    .reduce((totalSeconds, item) => Math.round(totalSeconds + item.activitySeconds), 0)

  return items
}
