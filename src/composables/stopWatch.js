import { updateTimelineItem } from '@/timelineItems'
import { MILISECONDS_IN_SECOND } from '@/components/constants'
import { watch, ref } from 'vue'

export function useStopWatch(timelineItem) {
  const temp = 120
  const seconds = ref(timelineItem.activitySeconds)
  const isRunning = ref(false)

  watch(
    () => timelineItem.activityId,
    () => {
      updateTimelineItem(timelineItem, { activitySeconds: seconds.value })
    }
  )

  function start() {
    isRunning.value = setInterval(() => {
      updateTimelineItem(timelineItem, {
        activitySeconds: timelineItem.activitySeconds + temp
      })

      seconds.value += temp
    }, MILISECONDS_IN_SECOND)
  }

  function stop() {
    clearInterval(isRunning.value)

    isRunning.value = false
  }

  function reset() {
    stop()

    updateTimelineItem(timelineItem, {
      activitySeconds: timelineItem.activitySeconds - seconds.value
    })

    seconds.value = 0
  }

  return {
    start,
    stop,
    reset,
    seconds,
    isRunning
  }
}
