<template>
  <li class="relative flex flex-col gap-2 border-t border-gray-200 py-10 px-4">
    <TimelineHour :hour="timelineItem.hour" />

    <BaseSelect
      :selected="timelineItem.activityId"
      :options="activitySelectOptions"
      placeholder="Rest"
      @select="updateTimelineItem(timelineItem, { activityId: $event })"
    />

    <TimelineStopwatch :timeline-item="timelineItem" />
  </li>
</template>

<script setup>
import BaseSelect from '../components/BaseSelect.vue'
import TimelineHour from '../components/TimelineHour.vue'
import { isTimelineItemValid } from './validators'
import TimelineStopwatch from './TimelineStopwatch.vue'
import { activitySelectOptions } from '@/activities'
import { updateTimelineItem } from '@/timelineItems'

const props = defineProps({
  timelineItem: {
    type: Object,
    required: true,
    validator: isTimelineItemValid
  }
})
</script>
