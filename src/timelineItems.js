import { ref } from 'vue'
import { HOURS_IN_DAY, MIDNIGHT_HOUR } from '../src/components/constants'
import { currentHour } from './components/functions'
import { activities } from './activities'

export const timeLineItems = ref(generateTimelineItems())
export const timelineItemRefs = ref([])

export function updateTimelineItem(timelineItem, fields) {
  return Object.assign(timelineItem, fields)
}

export function resetTimelineItemActivities(activity) {
  timeLineItems.value
    .filter((timeline) => timeline.activityId === activity.id)
    .forEach((timeline) => updateTimelineItem(timeline, { activityId: null, activitySeconds: 0 }))
}

export function calculateTrackedActivitySeconds(activity) {
  const items = timeLineItems.value
    .filter((item) => item.activityId == activity.id)
    .reduce((totalSeconds, item) => Math.round(totalSeconds + item.activitySeconds), 0)
  return items
}

export function scrollToCurrentTimelineItem(hour, isSmooth = true) {
  hour ??= currentHour()

  const el = hour === MIDNIGHT_HOUR ? document.body : timelineItemRefs.value[hour - 1].$el

  el.scrollIntoView({ behavior: isSmooth ? 'smooth' : 'instant' })
}

function generateTimelineItems() {
  return [...Array(HOURS_IN_DAY).keys()].map((hour) => ({
    hour,
    // activityId: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].includes(hour)
    //   ? activities.value[hour % 3].id
    //   : null,
    // activitySeconds: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].includes(hour)
    //   ? hour * 600
    //   : 0
    activityId: null,
    activitySeconds: 0
  }))
}
