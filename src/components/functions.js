import { PAGE_TIMELINES, HOURS_IN_DAY, MIDNIGHT_HOUR } from '../components/constants'
import { isPageValid } from './validators'

export function normilazePageHash() {
  const page = window.location.hash.slice(1)
  if (isPageValid(page)) {
    return page
  }

  window.location.hash = PAGE_TIMELINES

  return PAGE_TIMELINES
}

export function generateTimelineItems() {
  const timelineItems = []
  for (let hour = MIDNIGHT_HOUR; hour < HOURS_IN_DAY; hour++) {
    timelineItems.push({ hour })
  }
  return timelineItems
}

export function generateActivitySelectOptions(activities) {
  console.log(activities.map((label, value) => ({ label, value })))
  return activities.map((label, value) => ({ label, value }))
}
