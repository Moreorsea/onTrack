<template>
  <li class="flex flex-col gap-1 p-4" v-if="activity.secondsToComplete">
    <div class="truncate text-xl">{{ activity.name }}</div>
    <div class="flex h-5 overflow-hidden rounded bg-neutral-200">
      <div :class="colorClass" :style="`width: ${percentage}%`"></div>
    </div>
    <div class="flex justify-between font-mono text-sm">
      <span>{{ percentage }}%</span>
      <span
        >{{ formatSeconds(calculateTrackedActivitySeconds(activity)) }} /
        {{ formatSeconds(activity.secondsToComplete) }}</span
      >
    </div>
  </li>
</template>

<script setup>
import { calculateTrackedActivitySeconds } from '@/timelineItems'
import { formatSeconds } from './functions'
import { useProgress } from '@/composables/progress'

const props = defineProps(['activity'])

const { colorClass, percentage } = useProgress(props.activity)
</script>
