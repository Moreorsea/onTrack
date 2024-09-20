import { computed, ref, watchEffect } from 'vue'
import {
  SECONDS_IN_DAY,
  HUNDRED_PERCENT,
  SECONDS_IN_MINUTE,
  MINUTES_IN_HOUR,
  MILISECONDS_IN_SECOND
} from '@/components/constants'
import { calculateSecondsSinceMidnight } from '@/components/functions'

const secondsSinceMidnight = ref(calculateSecondsSinceMidnight())

let timer = null

export function startTimer() {
  secondsSinceMidnight.value = calculateSecondsSinceMidnight()

  timer = setInterval(() => secondsSinceMidnight.value++, MILISECONDS_IN_SECOND)
}

export function stopTimer() {
  clearInterval(timer)
}

export const secondsSinceMidnightInPercentage = computed(
  () => (HUNDRED_PERCENT * secondsSinceMidnight.value) / SECONDS_IN_DAY
)

watchEffect(() => {
  if (secondsSinceMidnight.value > SECONDS_IN_DAY) {
    secondsSinceMidnight.value = 0
  }
})
