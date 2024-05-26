<template>
  <div class="mt-7">
    <ul>
      <TimelineItem
        v-for="timelineItem in timeLineItems"
        :key="timelineItem.hour"
        :timeline-item="timelineItem"
      />
    </ul>
  </div>
</template>

<script setup>
import TimelineItem from '../TimelineItem.vue'

const { timeLineItems } = defineProps({
  timeLineItems: {
    type: Array,
    required: true
  }
})
</script>
