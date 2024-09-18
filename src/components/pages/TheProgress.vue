<template>
  <ul class="divide-y">
    <ProgressItem v-for="activity in activities" :key="activity.id" :activity="activity" />
  </ul>
</template>

<script setup>
import ProgressItem from '../ProgressItem.vue'
import { activities } from '@/activities'
</script>
