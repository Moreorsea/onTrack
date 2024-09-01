import { activities } from './activities'
import { ref } from 'vue'
import { HOURS_IN_DAY } from '../src/components/constants'

export const timeLineItems = ref(generateTimelineItems())

export function setTimelineItemActivity(timelineItem, activityId) {
  timelineItem.activityId = activityId
}

export function updateSeconds(timeline, seconds) {
  timeline.activitySeconds += seconds
}

export function resetTimelineItemActivities(activity) {
  timeLineItems.value.forEach((timeline) => {
    if (timeline.activityId === activity.id) {
      timeline.activityId = null
      timeline.activitySeconds = 0
    }
  })
}

export function getTotalActivitySeconds(activity) {
  const items = timeLineItems.value
    .filter((item) => item.activityId === activity.id)
    .reduce((totalSeconds, item) => Math.round(totalSeconds + item.activitySeconds), 0)
  return items
}

function generateTimelineItems() {
  return [...Array(HOURS_IN_DAY).keys()].map((hour) => ({
    hour,
    activityId: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].includes(hour)
      ? activities.value[hour % 3].id
      : null,
    activitySeconds: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].includes(hour)
      ? hour * 600
      : 0
    // activityId: hour % 4 === 0 ? null : activities[hour % 2].id,
    // activitySeconds: hour % 4 === 0 ? 0 : (15 * SECONDS_IN_MINUTE * hour) % SECONDS_IN_HOUR
  }))
}
