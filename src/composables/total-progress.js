import { computed } from 'vue'
import { calculateCompletionPercentage } from '@/activities'
import { calculateTrackedActivitySeconds } from '@/timelineItems'
import { getProgressColorClass } from '@/components/functions'
import { activities } from '@/activities'

export function useTotalProgress() {
  const colorClass = computed(() => getProgressColorClass(percentage.value))

  const percentage = computed(() => calculateCompletionPercentage(totalTrackedSeconds.value))

  const totalTrackedSeconds = computed(() => {
    return activities.value
      .filter((activity) => activity.secondsToComplete)
      .reduce((total, activity) => {
        let trackedSeconds = calculateTrackedActivitySeconds(activity)

        return total + Math.min(trackedSeconds, activity.secondsToComplete)
      }, 0)
  })

  return {
    percentage,
    colorClass
  }
}
