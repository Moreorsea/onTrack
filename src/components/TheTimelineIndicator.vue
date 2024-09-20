<template>
  <hr
    ref="indicatorRef"
    class="pointer-events-none absolute z-10 w-full border-b-2 border-red-600"
    :style="{ top: `${topOffset}px` }"
  />
</template>

<script setup>
import { onActivated, onDeactivated, ref, computed } from 'vue'
import { secondsSinceMidnightInPercentage, startTimer, stopTimer } from '@/time'
import { HUNDRED_PERCENT } from '@/components/constants'

const indicatorRef = ref()

const topOffset = computed(
  () => (secondsSinceMidnightInPercentage.value * getTimelineHeight()) / HUNDRED_PERCENT
)

function getTimelineHeight() {
  return indicatorRef.value?.parentNode.getBoundingClientRect().height
}

onActivated(startTimer)

onDeactivated(stopTimer)
</script>
