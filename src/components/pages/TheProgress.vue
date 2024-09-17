<template>
  <ul class="divide-y">
    <ProgressItem
      v-for="(activity, index) in activities"
      :key="activity.id"
      :index="index"
      :activity="activity"
    />
  </ul>
</template>

<script setup>
import ProgressItem from '../ProgressItem.vue'
import { activities } from '@/activities'
</script>
