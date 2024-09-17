<template>
  <li class="flex flex-col gap-2 p-4">
    <div class="flex items-center gap-2">
      <BaseButton :type="BUTTON_TYPES.danger" @click="deleteAndResetActivity(props.activity)">
        <BaseIcon name="Trash" />
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

      <ActivitySecondsToComplete :activity="activity" v-if="activity.secondsToComplete" />
    </div>
  </li>
</template>

<script setup>
import BaseIcon from './BaseIcon.vue'
import BaseButton from './BaseButton.vue'
import BaseSelect from './BaseSelect.vue'
import ActivitySecondsToComplete from './ActivitySecondsToComplete.vue'
import { BUTTON_TYPES, PERIOD_SELECT_OPTIONS } from './constants'
import { setSecondsToComplete, deleteActivity } from '../activities'
import { resetTimelineItemActivities } from '../timelineItems'

function deleteAndResetActivity(activity) {
  resetTimelineItemActivities(activity)

  deleteActivity(activity)
}

const props = defineProps({
  activity: {
    type: Object,
    required: true
  }
})
</script>
