<template>
  <div class="flex flex-col grow">
    <ul v-if="activities.length" class="divide-y grow">
      <ActivityItem v-for="activity in activities.value" :activity="activity" :key="activity.id" />
    </ul>

    <TheActivitiesEmptyState v-else />

    <TheActivityForm />
  </div>
</template>

<script setup>
import ActivityItem from '../ActivityItem.vue'
import { validateActivities } from '../validators'
import TheActivityForm from '../TheActivityForm.vue'
import TheActivitiesEmptyState from '../TheActivitiesEmptyState.vue'
import { activities } from '@/activities'
</script>
