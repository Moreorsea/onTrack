import { computed, ref, onActivated, onDeactivated, watchEffect } from 'vue'
import {
  SECONDS_IN_DAY,
  HUNDRED_PERCENT,
  SECONDS_IN_MINUTE,
  MINUTES_IN_HOUR,
  MILISECONDS_IN_SECOND
} from '@/components/constants'
import { calculateSecondsSinceMidnight } from '@/components/functions'

export function useSecondsSinceMidnight() {
  const secondsSinceMidnight = ref(calculateSecondsSinceMidnight())

  const topOffset = computed(
    () => (secondsSinceMidnightInPercentage.value * getTimelineHeight()) / HUNDRED_PERCENT
  )

  const secondsSinceMidnightInPercentage = computed(
    () => (HUNDRED_PERCENT * secondsSinceMidnight.value) / SECONDS_IN_DAY
  )

  const indicatorRef = ref()

  function getTimelineHeight() {
    return indicatorRef.value?.parentNode.getBoundingClientRect().height
  }

  let timer = null

  onActivated(() => {
    secondsSinceMidnight.value = calculateSecondsSinceMidnight()

    timer = setInterval(() => secondsSinceMidnight.value++, MILISECONDS_IN_SECOND)
  })

  onDeactivated(() => clearInterval(timer))

  watchEffect(() => {
    if (secondsSinceMidnight.value > SECONDS_IN_DAY) {
      secondsSinceMidnight.value = 0
    }
  })

  return {
    topOffset,
    indicatorRef
  }
}
