<script setup>
import TheHeader from './components/TheHeader.vue'
import TheNav from './components/TheNav.vue'
import TheTimeLine from './components/pages/TheTimeline.vue'
import TheActivities from './components/pages/TheActivities.vue'
import TheProgress from './components/pages/TheProgress.vue'
import { normilazePageHash, generateTimelineItems } from './components/functions'
import { PAGE_TIMELINES, PAGE_ACTIVITIES, PAGE_PROGRESS } from './components/constants'
import { ref } from 'vue'

const currentPage = ref(normilazePageHash())
const timeLineItems = generateTimelineItems()

function goTo(page) {
  currentPage.value = page
}
</script>

<template>
  <TheHeader @go-to-timeline="goTo(PAGE_TIMELINES)" @go-to-progress="goTo(PAGE_PROGRESS)" />
  <main class="flex flex-grow flex-col">
    <TheTimeLine :time-line-items="timeLineItems" v-show="currentPage === PAGE_TIMELINES" />
    <TheActivities v-show="currentPage === PAGE_ACTIVITIES" />
    <TheProgress v-show="currentPage === PAGE_PROGRESS" />
  </main>
  <TheNav :current-page="currentPage" @navigate="goTo($event)" />
</template>
