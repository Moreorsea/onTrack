import { PAGE_TIMELINES } from './components/constants'
import { ref } from 'vue'
import { NAV_ITEMS } from './components/constants'

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
