<template>
  <div :class="classes">{{ sign }}{{ formatSeconds(secondsDiff) }}</div>
</template>

<script setup>
import { formatSeconds } from './functions'
import { calculateTrackedActivitySeconds } from '../timelineItems'
import { computed } from 'vue'

const props = defineProps({
  activity: {
    required: true,
    type: Object
  }
})

const classes = computed(() => [
  'flex items-center rounded px-2 font-mono text-xl',
  secondsDiff.value < 0 ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'
])

const sign = computed(() => (secondsDiff.value >= 0 ? '+' : '-'))

const secondsDiff = computed(
  () => calculateTrackedActivitySeconds(props.activity) - props.activity.secondsToComplete
)
</script>
