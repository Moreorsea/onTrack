<script setup>
import TheHeader from './components/TheHeader.vue'
import TheNav from './components/TheNav.vue'
import TheTimeLine from './components/pages/TheTimeline.vue'
import TheActivities from './components/pages/TheActivities.vue'
import TheProgress from './components/pages/TheProgress.vue'
import {
  normilazePageHash,
  generateTimelineItems,
  generateActivitySelectOptions,
  generateActivities,
  generatePeriodSelectOptions
} from './components/functions'
import { PAGE_TIMELINES, PAGE_ACTIVITIES, PAGE_PROGRESS } from './components/constants'
import { ref, computed, provide } from 'vue'

const currentPage = ref(normilazePageHash())

const activities = ref(generateActivities())

const timeLineItems = ref(generateTimelineItems(activities.value))

const activitySelectOptions = computed(() => generateActivitySelectOptions(activities.value))

function goTo(page) {
  currentPage.value = page

  if (page != PAGE_TIMELINES) {
    document.body.scrollIntoView()
  }
}

function deleteActivity(activity) {
  timeLineItems.value.forEach((timeline) => {
    if (timeline.activityId === activity.id) {
      timeline.activityId = null
      timeline.activitySeconds = 0
    }
  })

  activities.value.splice(activities.value.indexOf(activity), 1)
}

function addActivity(activity) {
  activities.value.push(activity)
}

function setTimelineItemActivity(timelineItem, activityId) {
  timelineItem.activityId = activityId
}

function setSecondsToComplete(activity, seconds) {
  activities.value.forEach((activ) => {
    if (activ.id == activity.id) {
      activ.secondsToComplete = +seconds
    }
  })
}

function updateSeconds(timeline, seconds) {
  timeline.activitySeconds += seconds
}

provide('updateSeconds', updateSeconds)
provide('timelineItems', timeLineItems.value)
provide('activitySelectOptions', activitySelectOptions.value)
provide('periodSelectOptions', generatePeriodSelectOptions())
provide('setTimelineItemActivity', setTimelineItemActivity)
provide('setSecondsToComplete', setSecondsToComplete)
provide('addActivity', addActivity)
provide('deleteActivity', deleteActivity)
</script>

<template>
  <TheHeader @navigate="goTo($event)" />
  <main class="flex flex-grow flex-col">
    <TheTimeLine
      :time-line-items="timeLineItems"
      v-show="currentPage === PAGE_TIMELINES"
      :current-page="currentPage"
    />
    <TheActivities v-show="currentPage === PAGE_ACTIVITIES" :activities="activities" />
    <TheProgress v-show="currentPage === PAGE_PROGRESS" />
  </main>
  <TheNav :current-page="currentPage" @navigate="goTo($event)" />
</template>
