<template>
  <div class="flex w-full gap-2">
    <BaseButton :type="BUTTON_TYPES.danger" :disabled="!seconds" @click="reset">
      <BaseIcon name="ArrowPath" />
    </BaseButton>
    <div class="flex flex-grow items-center rounded bg-gray-100 px-2 font-mono text-3xl">
      {{ formatSeconds(seconds) }}
    </div>
    <BaseButton v-if="isRunning" :type="BUTTON_TYPES.warning" @click="stop">
      <BaseIcon name="Pause" />
    </BaseButton>
    <BaseButton
      v-else
      :type="BUTTON_TYPES.success"
      @click="start"
      :disabled="timelineItem.hour != date"
    >
      <BaseIcon name="Play" />
    </BaseButton>
  </div>
</template>

<script setup>
import BaseIcon from './BaseIcon.vue'
import BaseButton from './BaseButton.vue'
import { BUTTON_TYPES, MILISECONDS_IN_SECOND } from './constants'
import { formatSeconds, currentHour } from './functions'
import { ref, watch } from 'vue'
import { updateTimelineItem } from '@/timelineItems'

const props = defineProps({
  timelineItem: {
    type: Object,
    required: true
  }
})

const seconds = ref(props.timelineItem.activitySeconds)
const isRunning = ref(false)
const date = currentHour()

const temp = 120

watch(
  () => props.timelineItem.activityId,
  () => {
    updateTimelineItem(props.timelineItem, { activitySeconds: seconds.value })
  }
)

function start() {
  isRunning.value = setInterval(() => {
    updateTimelineItem(props.timelineItem, {
      activitySeconds: props.timelineItem.activitySeconds + temp
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

  updateTimelineItem(props.timelineItem, {
    activitySeconds: props.timelineItem.activitySeconds - seconds.value
  })

  seconds.value = 0
}
</script>
