<script setup>
import TheHeader from './components/TheHeader.vue'
import TheNav from './components/TheNav.vue'
import TheTimeLine from './components/pages/TheTimeline.vue'
import TheActivities from './components/pages/TheActivities.vue'
import TheProgress from './components/pages/TheProgress.vue'
import {
  generateTimelineItems,
  generateActivitySelectOptions,
  generateActivities,
  generatePeriodSelectOptions
} from './components/functions'
import { currentPage } from './router'
import { PAGE_TIMELINES, PAGE_ACTIVITIES, PAGE_PROGRESS } from './components/constants'
import * as keys from './keys'
import { ref, computed, provide, readonly } from 'vue'

const activities = ref(generateActivities())

const timeLineItems = ref(generateTimelineItems(activities.value))

const activitySelectOptions = computed(() => generateActivitySelectOptions(activities.value))

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

provide(keys.updateSecondsKey, updateSeconds)
provide(keys.timelineItemsKey, readonly(timeLineItems.value))
provide(keys.activitySelectOptionsKey, readonly(activitySelectOptions.value))
provide(keys.periodSelectOptionsKey, readonly(generatePeriodSelectOptions()))
provide(keys.setTimelineItemActivityKey, setTimelineItemActivity)
provide(keys.setSecondsToCompleteKey, setSecondsToComplete)
provide(keys.addActivityKey, addActivity)
provide(keys.deleteActivityKey, deleteActivity)
</script>

<template>
  <TheHeader />
  <main class="flex flex-grow flex-col">
    <TheTimeLine :time-line-items="timeLineItems" v-show="currentPage === PAGE_TIMELINES" />
    <TheActivities v-show="currentPage === PAGE_ACTIVITIES" :activities="activities" />
    <TheProgress v-show="currentPage === PAGE_PROGRESS" />
  </main>
  <TheNav />
</template>
