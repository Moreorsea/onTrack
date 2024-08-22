<template>
  <li class="flex flex-col gap-2 p-4">
    <div class="flex items-center gap-2">
      <BaseButton :type="BUTTON_TYPES.danger" @click="emit('delete')">
        <TrashIcon class="h-8" />
      </BaseButton>
      <span class="truncate text-xl">{{ props.activity.name }}</span>
    </div>
    <div class="flex gap-2">
      <BaseSelect
        class="font-mono grow"
        placeholder="hh:mm"
        :options="PERIOD_SELECT_OPTIONS"
        :selected="activity.secondsToComplete || null"
        @select="setSecondsToComplete(activity, $event)"
      />

      <ActivitySecondsToComplete
        :timeline-items="timelineItems"
        :activity="activity"
        v-if="activity.secondsToComplete"
      />
    </div>
  </li>
</template>

<script setup>
import { TrashIcon } from '@heroicons/vue/24/outline'
import BaseButton from './BaseButton.vue'
import BaseSelect from './BaseSelect.vue'
import ActivitySecondsToComplete from './ActivitySecondsToComplete.vue'
import { PERIOD_SELECT_OPTIONS, BUTTON_TYPES } from './constants'

const props = defineProps({
  activity: {
    type: Object,
    required: true
  },
  timelineItems: {
    type: Array,
    required: true
  }
})

function setSecondsToComplete(activity, $event) {
  emit('setSecondsToComplete', { activity, seconds: $event?.target?.value || null })
}

const emit = defineEmits(['delete', 'setSecondsToComplete'])
</script>
