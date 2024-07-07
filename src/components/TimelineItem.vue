<template>
  <li class="relative flex flex-col gap-2 border-t border-gray-200 py-10 px-4">
    <TimelineHour :hour="timelineItem.hour" />

    <BaseSelect
      :selected="selectedActivityId"
      :options="activitySelectOptions"
      placeholder="Rest"
      @select="updateSelectedActivityId"
    />
  </li>
</template>

<script setup>
import BaseSelect from '../components/BaseSelect.vue'
import TimelineHour from '../components/TimelineHour.vue'
import { isTimelineItemValid } from './validators'
import { ref } from 'vue'

const selectedActivityId = ref(0)

defineProps({
  timelineItem: {
    type: Object,
    required: true,
    validator: isTimelineItemValid
  },
  activitySelectOptions: {
    required: true,
    type: Array
  }
})

const updateSelectedActivityId = (value) => {
  selectedActivityId.value = value
}
</script>
