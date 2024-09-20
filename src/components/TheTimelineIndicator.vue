<template>
  <hr
    ref="indicatorRef"
    class="pointer-events-none absolute z-10 w-full border-b-2 border-red-600"
    :style="{ top: `${topOffset}px` }"
  />
</template>

<script setup>
import { useSecondsSinceMidnight } from '../composables/seconds-since-midnight'

const { topOffset, indicatorRef } = useSecondsSinceMidnight()
</script>
