<template>
  <li class="relative flex flex-col gap-2 border-t border-gray-200 py-10 px-4">
    <TimelineHour :hour="timelineItem.hour" @scroll-to-hour="scrollToHour" />

    <BaseSelect
      :selected="timelineItem.activityId"
      :options="activitySelectOptions"
      placeholder="Rest"
      @select="setTimelineItemActivity(timelineItem, $event)"
    />

    <TimelineStopwatch :timeline-item="timelineItem" />
  </li>
</template>

<script setup>
import BaseSelect from '../components/BaseSelect.vue'
import TimelineHour from '../components/TimelineHour.vue'
import { isTimelineItemValid } from './validators'
import TimelineStopwatch from './TimelineStopwatch.vue'
import { inject } from 'vue'
import { activitySelectOptionsKey, setTimelineItemActivityKey } from '../keys'

const activitySelectOptions = inject(activitySelectOptionsKey)
const setTimelineItemActivity = inject(setTimelineItemActivityKey)

const props = defineProps({
  timelineItem: {
    type: Object,
    required: true,
    validator: isTimelineItemValid
  }
})

const emit = defineEmits(['scrollToHour'])

function scrollToHour({ hour }) {
  emit('scrollToHour', hour)
}
</script>
