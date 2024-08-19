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
  id
} from './components/functions'
import { PAGE_TIMELINES, PAGE_ACTIVITIES, PAGE_PROGRESS } from './components/constants'
import { ref, computed } from 'vue'

const currentPage = ref(normilazePageHash())

const activities = ref(generateActivities())

const timeLineItems = ref(generateTimelineItems(activities.value))

const activitySelectOptions = computed(() => generateActivitySelectOptions(activities.value))

function goTo(page) {
  currentPage.value = page
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

function setTimelineItemActivity(item) {
  const { timelineItem, activity } = item
  timelineItem.activityId = activity?.id || null
}

function setSecondsToComplete(item) {
  const { activity, seconds } = item

  activities.value.forEach((activ) => {
    if (activ.id == activity.id) {
      activ.secondsToComplete = +seconds
    }
  })
}
</script>

<template>
  <TheHeader @navigate="goTo($event)" />
  <main class="flex flex-grow flex-col">
    <TheTimeLine
      :time-line-items="timeLineItems"
      v-show="currentPage === PAGE_TIMELINES"
      :activity-select-options="activitySelectOptions"
      :activities="activities"
      :current-page="currentPage"
      @set-timeline-item-activity="setTimelineItemActivity"
    />
    <TheActivities
      v-show="currentPage === PAGE_ACTIVITIES"
      :activities="activities"
      @delete-activity="deleteActivity"
      @add-activity="addActivity"
      @set-seconds-to-complete="setSecondsToComplete"
    />
    <TheProgress v-show="currentPage === PAGE_PROGRESS" />
  </main>
  <TheNav :current-page="currentPage" @navigate="goTo($event)" />
</template>
