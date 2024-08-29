<template>
  <div :class="classes">{{ sign }}{{ formatSeconds(secondsDiff) }}</div>
</template>

<script setup>
import { formatSeconds, getTotalActivitySeconds } from './functions'
import { computed, inject } from 'vue'
import { timelineItemsKey } from '../keys'

const timelineItems = inject(timelineItemsKey)

const props = defineProps({
  activity: {
    required: true,
    type: Object
  }
})

const colorClasses = computed(() =>
  secondsDiff.value < 0 ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'
)

const classes = computed(
  () => `flex items-center rounded px-2 font-mono text-xl ${colorClasses.value}`
)

const sign = computed(() => (secondsDiff.value >= 0 ? '+' : '-'))

const secondsDiff = computed(
  () => getTotalActivitySeconds(props.activity, timelineItems) - props.activity.secondsToComplete
)
</script>
