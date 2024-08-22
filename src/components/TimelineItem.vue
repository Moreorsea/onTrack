<template>
  <li class="relative flex flex-col gap-2 border-t border-gray-200 py-10 px-4">
    <TimelineHour :hour="timelineItem.hour" @scroll-to-hour="scrollToHour" />

    <BaseSelect
      :selected="timelineItem.activityId"
      :options="activitySelectOptions"
      placeholder="Rest"
      @select="selectActivity"
    />

    <TimelineStopwatch :hour="timelineItem.hour" :seconds="timelineItem.activitySeconds" />
  </li>
</template>

<script setup>
import BaseSelect from '../components/BaseSelect.vue'
import TimelineHour from '../components/TimelineHour.vue'
import { isTimelineItemValid } from './validators'
import TimelineStopwatch from './TimelineStopwatch.vue'

const props = defineProps({
  timelineItem: {
    type: Object,
    required: true,
    validator: isTimelineItemValid
  },
  activities: {
    required: true,
    type: Array
  },
  activitySelectOptions: {
    required: true,
    type: Array
  }
})

const emit = defineEmits(['selectActivity', 'scrollToHour'])

const selectActivity = ($event) => {
  const id = $event?.target?.value || null
  emit('selectActivity', {
    timelineItem: props.timelineItem,
    activity: props.activities.find((activity) => activity.id == id)
  })
}

function scrollToHour({ hour }) {
  emit('scrollToHour', hour)
}
</script>
