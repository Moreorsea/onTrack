<template>
  <div class="mt-7">
    <ul>
      <TimelineItem
        v-for="timelineItem in timeLineItems"
        :key="timelineItem.hour"
        :timeline-item="timelineItem"
        @scroll-to-hour="scrollToCurrentTimelineItem"
        ref="timelineItemRefs"
      />
    </ul>
  </div>
</template>

<script setup>
import TimelineItem from '../TimelineItem.vue'
import { nextTick, ref, watchPostEffect } from 'vue'
import { MIDNIGHT_HOUR, PAGE_TIMELINES } from '../constants'
import { currentPage } from '../../router'

const timelineItemRefs = ref([])

watchPostEffect(async () => {
  if (currentPage.value === PAGE_TIMELINES) {
    await nextTick()

    scrollToCurrentTimelineItem(null, false)
  }
})

function scrollToCurrentTimelineItem(hour, isSmooth = true) {
  hour ??= new Date().getHours()

  const el = hour === MIDNIGHT_HOUR ? document.body : timelineItemRefs.value[hour - 1].$el

  el.scrollIntoView({ behavior: isSmooth ? 'smooth' : 'instant' })
}

const props = defineProps({
  timeLineItems: {
    type: Array,
    required: true
  }
})
</script>
