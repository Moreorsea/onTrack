<template>
  <div class="flex flex-col grow">
    <ul v-if="activities.length" class="divide-y grow">
      <ActivityItem
        v-for="activity in props.activities"
        :activity="activity"
        :key="activity.id"
        :timeline-items="timelineItems"
        @delete="emit('deleteActivity', activity)"
        @set-seconds-to-complete="setSecondsToComplete($event)"
      />
    </ul>

    <TheActivitiesEmptyState v-else />

    <TheActivityForm @submit="emit('addActivity', $event)" />
  </div>
</template>

<script setup>
import ActivityItem from '../ActivityItem.vue'
import { isActivityValid, validateActivities } from '../validators'
import TheActivityForm from '../TheActivityForm.vue'
import TheActivitiesEmptyState from '../TheActivitiesEmptyState.vue'

const props = defineProps({
  activities: {
    type: Array,
    required: true,
    validator: validateActivities
  },
  timelineItems: {
    type: Array,
    required: true
  }
})

function setSecondsToComplete($event) {
  emit('setSecondsToComplete', $event)
}

const emit = defineEmits(['deleteActivity', 'addActivity', 'setSecondsToComplete'])
</script>
