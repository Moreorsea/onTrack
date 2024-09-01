import { id } from '../src/components/functions'
import { computed, ref } from 'vue'
import { SECONDS_IN_HOUR, SECONDS_IN_MINUTE, MINUTES_IN_HOUR } from '../src/components/constants'

export const activities = ref(generateActivities())

export const activitySelectOptions = computed(() => generateActivitySelectOptions(activities.value))

export function deleteActivity(activity) {
  activities.value.splice(activities.value.indexOf(activity), 1)
}

export function addActivity(activity) {
  activities.value.push(activity)
}

export function setSecondsToComplete(activity, seconds) {
  activity.secondsToComplete = seconds ? seconds.target.value : 0
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

function generateActivitySelectOptions(activities) {
  return activities.map((activity) => ({ label: activity.name, value: activity.id }))
}

function generateActivities() {
  return ['Coding', 'Training', 'Reading'].map((name, hours) => ({
    id: id(),
    name,
    secondsToComplete: hours * SECONDS_IN_HOUR
  }))
}

function generatePeriodSelectOptionsLabel(minute) {
  const hour = Math.floor(minute / MINUTES_IN_HOUR)
    .toString()
    .padStart(2, 0)
  const minutes = (minute % MINUTES_IN_HOUR).toString().padStart(2, 0)
  return `${hour}:${minutes}`
}
