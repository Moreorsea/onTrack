import { id } from './components/functions'
import { computed, ref } from 'vue'
import { SECONDS_IN_HOUR } from '../src/components/constants'

export const activities = ref(generateActivities())

export const activitySelectOptions = computed(() => generateActivitySelectOptions(activities.value))

export function addActivity(activity) {
  activities.value.push(activity)
}

export function deleteActivity(activity) {
  activities.value.splice(activities.value.indexOf(activity), 1)
}

export function setSecondsToComplete(activity, seconds) {
  activity.secondsToComplete = seconds
}

export function calculateActivityCompletionPercentage({ secondsToComplete }, trackedSeconds) {
  return Math.floor((trackedSeconds * 100) / secondsToComplete)
}

function generateActivities() {
  return ['Coding', 'Training', 'Reading', 'Sleeping'].map((name, hours) => ({
    id: id(),
    name,
    secondsToComplete: 15 * 60 //hours * SECONDS_IN_HOUR
  }))
}

function generateActivitySelectOptions(activities) {
  return activities.map((activity) => ({ label: activity.name, value: activity.id }))
}
