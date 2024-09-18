import { computed } from 'vue'
import { calculateActivityCompletionPercentage } from '@/activities'
import { calculateTrackedActivitySeconds } from '@/timelineItems'
import { getProgressColorClass } from '@/components/functions'

export function useProgress(activity) {
  const colorClass = computed(() => getProgressColorClass(percentage.value))

  const percentage = computed(() =>
    calculateActivityCompletionPercentage(activity, calculateTrackedActivitySeconds(activity))
  )

  return {
    percentage,
    colorClass
  }
}
