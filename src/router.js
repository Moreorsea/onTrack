import { ref } from 'vue'
import { NAV_ITEMS } from './components/constants'
import { PAGE_TIMELINES, PAGE_ACTIVITIES, PAGE_PROGRESS } from './components/constants'
import TheTimeLine from './components/pages/TheTimeline.vue'
import TheActivities from './components/pages/TheActivities.vue'
import TheProgress from './components/pages/TheProgress.vue'

export const routes = {
  [PAGE_TIMELINES]: TheTimeLine,
  [PAGE_ACTIVITIES]: TheActivities,
  [PAGE_PROGRESS]: TheProgress
}

export function isPageValid(page) {
  return Object.keys(NAV_ITEMS).includes(page)
}

function normilazePageHash() {
  const page = window.location.hash.slice(1)
  if (isPageValid(page)) {
    return page
  }

  window.location.hash = PAGE_TIMELINES

  return PAGE_TIMELINES
}

export const currentPage = ref(normilazePageHash())

export function navigate(page) {
  currentPage.value = page

  if (page != PAGE_TIMELINES) {
    document.body.scrollIntoView()
  }
}
