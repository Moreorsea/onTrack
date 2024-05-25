import {
  PAGE_TIMELINES,
  PAGE_ACTIVITIES,
  PAGE_PROGRESS,
  HOURS_IN_DAY
} from '../components/constants'

export function normilazePageHash() {
  const hash = window.location.hash.slice(1)
  if ([PAGE_TIMELINES, PAGE_ACTIVITIES, PAGE_PROGRESS].includes(hash)) {
    return hash
  }

  window.location.hash = PAGE_TIMELINES

  return PAGE_TIMELINES
}

export function generateTimelineItems() {
  const timelineItems = []
  for (let hour = 0; hour < HOURS_IN_DAY; hour++) {
    timelineItems.push({ hour })
  }
  return timelineItems
}
