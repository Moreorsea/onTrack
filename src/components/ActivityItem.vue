<template>
  <li class="flex flex-col gap-2 p-4">
    <div class="flex items-center gap-2">
      <BaseButton :type="BUTTON_TYPES.danger" @click="deleteActivity(props.activity)">
        <TrashIcon class="h-8" />
      </BaseButton>
      <span class="truncate text-xl">{{ props.activity.name }}</span>
    </div>
    <div class="flex gap-2">
      <BaseSelect
        class="font-mono grow"
        placeholder="hh:mm"
        :options="periodSelectOptions"
        :selected="activity.secondsToComplete || null"
        @select="setSecondsToComplete(activity, $event ? $event.target.value : 0)"
      />

      <ActivitySecondsToComplete :activity="activity" v-if="activity.secondsToComplete" />
    </div>
  </li>
</template>

<script setup>
import { TrashIcon } from '@heroicons/vue/24/outline'
import BaseButton from './BaseButton.vue'
import BaseSelect from './BaseSelect.vue'
import ActivitySecondsToComplete from './ActivitySecondsToComplete.vue'
import { BUTTON_TYPES } from './constants'
import { inject } from 'vue'
import { periodSelectOptionsKey, setSecondsToCompleteKey, deleteActivityKey } from '../keys'

const periodSelectOptions = inject(periodSelectOptionsKey)
const setSecondsToComplete = inject(setSecondsToCompleteKey)
const deleteActivity = inject(deleteActivityKey)

const props = defineProps({
  activity: {
    type: Object,
    required: true
  }
})
</script>
