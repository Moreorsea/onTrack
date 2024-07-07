<template>
  <div>
    <ul class="divide-y">
      <ActivityItem
        v-for="activity in props.activities"
        :activity="activity"
        :key="activity"
        @delete="emit('deleteActivity', activity)"
      />
    </ul>
    <form class="sticky bottom-[57px] flex gap-2 border-t bg-white p-4">
      <input type="text" class="w-full rounded border px-4 text-xl" placeholder="Activity name" />
      <BaseButton :type="BUTTON_TYPES.primary">
        <PlusIcon class="h-8" />
      </BaseButton>
    </form>
  </div>
</template>

<script setup>
import { PlusIcon } from '@heroicons/vue/24/outline'
import ActivityItem from '../ActivityItem.vue'
import { isActivityValid, validateActivities } from '../validators'
import BaseButton from '../BaseButton.vue'
import { BUTTON_TYPES } from '../constants'

const props = defineProps({
  activities: {
    type: Array,
    required: true,
    validator: validateActivities
  }
})

const emit = defineEmits({
  deleteActivity: isActivityValid
})
</script>
