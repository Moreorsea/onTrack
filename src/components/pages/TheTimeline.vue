<template>
  <div class="mt-7">
    <ul>
      <TimelineItem
        v-for="timelineItem in timeLineItems"
        :key="timelineItem.hour"
        :timeline-item="timelineItem"
        ref="timelineItemRefs"
      />
    </ul>
  </div>
</template>

<script setup>
import TimelineItem from '../TimelineItem.vue'
import { onActivated, ref } from 'vue'
import { timeLineItems, scrollToCurrentTimelineItem, timelineItemRefs } from '../../timelineItems'

onActivated(() => {
  scrollToCurrentTimelineItem(null, false)
})
</script>
