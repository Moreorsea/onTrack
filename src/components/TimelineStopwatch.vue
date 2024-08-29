<template>
  <div class="flex w-full gap-2">
    <BaseButton :type="BUTTON_TYPES.danger" :disabled="!seconds" @click="reset">
      <ArrowPathIcon class="h-8" />
    </BaseButton>
    <div class="flex flex-grow items-center rounded bg-gray-100 px-2 font-mono text-3xl">
      {{ formatSeconds(seconds) }}
    </div>
    <BaseButton v-if="isRunning" :type="BUTTON_TYPES.warning" @click="stop">
      <PauseIcon class="h-8" />
    </BaseButton>
    <BaseButton
      v-else
      :type="BUTTON_TYPES.success"
      @click="start"
      :disabled="timelineItem.hour != date"
    >
      <PlayIcon class="h-8" />
    </BaseButton>
  </div>
</template>

<script setup>
import { ArrowPathIcon, PauseIcon, PlayIcon } from '@heroicons/vue/24/outline'
import BaseButton from './BaseButton.vue'
import { BUTTON_TYPES, MILISECONDS_IN_SECOND } from './constants'
import { formatSeconds } from './functions'
import { ref, inject } from 'vue'
import { updateSecondsKey } from '../keys'

const props = defineProps({
  timelineItem: {
    type: Object,
    required: true
  }
})

const updateSeconds = inject(updateSecondsKey)

const seconds = ref(props.timelineItem.activitySeconds)
const isRunning = ref(false)
const date = new Date().getHours()

function start() {
  isRunning.value = setInterval(() => {
    updateSeconds(props.timelineItem, 1)

    seconds.value++
  }, MILISECONDS_IN_SECOND)
}

function stop() {
  clearInterval(isRunning.value)

  isRunning.value = false
}

function reset() {
  stop()

  updateSeconds(props.timelineItem, -seconds.value)

  seconds.value = 0
}
</script>
