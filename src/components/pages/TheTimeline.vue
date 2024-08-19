<template>
  <div class="mt-7">
    <ul>
      <TimelineItem
        v-for="timelineItem in timeLineItems"
        :key="timelineItem.hour"
        :timeline-item="timelineItem"
        :activity-select-options="activitySelectOptions"
        :activities="activities"
        @select-activity="getSelect"
        ref="timelineItemRefs"
      />
    </ul>
  </div>
</template>

<script setup>
import TimelineItem from '../TimelineItem.vue'
import { validateTimelineItems } from '../validators'
import { nextTick, ref, watchPostEffect } from 'vue'
import { MIDNIGHT_HOUR, PAGE_TIMELINES } from '../constants'

const emit = defineEmits(['setTimelineItemActivity'])

function getSelect({ timelineItem, activity }) {
  emit('setTimelineItemActivity', { timelineItem, activity })
}

const timelineItemRefs = ref([])
const currentHour = new Date().getHours()

watchPostEffect(async () => {
  if (props.currentPage === PAGE_TIMELINES) {
    await nextTick()

    scrollToCurrentTimelineItem()
  }
})

function scrollToCurrentTimelineItem() {
  if (currentHour === MIDNIGHT_HOUR) {
    document.body.scrollIntoView()
  } else {
    timelineItemRefs.value[currentHour - 1].$el.scrollIntoView({ behavior: 'smooth' })
  }
}

const props = defineProps({
  timeLineItems: {
    type: Array,
    required: true
  },
  activitySelectOptions: {
    type: Array,
    required: true
  },
  activities: {
    required: true,
    type: Array
  },
  currentPage: {
    required: true,
    type: String
  }
})
</script>
