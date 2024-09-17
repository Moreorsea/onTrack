<template>
  <li class="flex flex-col gap-1 p-4" v-if="activity.secondsToComplete">
    <div class="truncate text-xl">{{ activity.name }}</div>
    <div class="flex h-5 overflow-hidden rounded bg-neutral-200">
      <div :class="getProgressColorClass(progress)" :style="`width: ${progress}%`"></div>
    </div>
    <div class="flex justify-between font-mono text-sm">
      <span>{{ progress }}%</span>
      <span>{{ timeProgress }}</span>
    </div>
  </li>
</template>

<script setup>
import { getActivityProgress } from '@/activities'
import { getTotalActivitySeconds } from '@/timelineItems'
import { computed } from 'vue'

const props = defineProps(['index', 'activity'])
const timeProgress = ['03:00 / 30:00', '15:00 / 30:00', '21:00 / 30:00', '30:00 / 30:00'][
  props.index
]
const progress = computed(() => getActivityProgress(props.activity))

function getProgressColorClass(percentage) {
  if (percentage < 33) return 'bg-red-500'

  if (percentage < 66) return 'bg-yellow-500'

  if (percentage < 100) return 'bg-blue-500'

  return 'bg-green-500'
}
</script>
