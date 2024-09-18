<template>
  <ul v-if="activities.filter((activity) => activity.secondsToComplete).length" class="divide-y">
    <ProgressItem v-for="activity in activities" :key="activity.id" :activity="activity" />
  </ul>

  <TheProgressEmptyState v-else />
</template>

<script setup>
import ProgressItem from '../ProgressItem.vue'
import { activities } from '@/activities'
import TheProgressEmptyState from '../TheProgressEmptyState.vue'
</script>
