import { MILISECONDS_IN_SECOND, SECONDS_IN_MINUTE, MINUTES_IN_HOUR } from '../components/constants'
import { isNull } from './validators'

export function id() {
  return Math.random().toString()
}

export function normalizeSelectValue(value) {
  return isNull(value) || isNaN(value) ? value : +value
}

export function formatSeconds(seconds) {
  const date = new Date()

  date.setTime(Math.abs(seconds) * MILISECONDS_IN_SECOND)

  const utc = date.toUTCString()

  return utc.substring(utc.indexOf(':') - 2, utc.indexOf(':') + 6)
}

export function currentHour() {
  return new Date().getHours()
}

function generatePeriodSelectOptionsLabel(minute) {
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

export function getProgressColorClass(percentage) {
  if (percentage < 33) return 'bg-red-500'

  if (percentage < 66) return 'bg-yellow-500'

  if (percentage < 100) return 'bg-blue-500'

  return 'bg-green-500'
}

export function calculateSecondsSinceMidnight() {
  const now = new Date()

  return (
    SECONDS_IN_MINUTE * MINUTES_IN_HOUR * now.getHours() +
    SECONDS_IN_MINUTE * now.getMinutes() +
    now.getSeconds()
  )
}
