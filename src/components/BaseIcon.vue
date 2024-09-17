<script setup>
import { ICONS } from '../icons'

defineProps({
  name: {
    type: String,
    required: true
  }
})
</script>

<template>
  <component :is="ICONS[name]" :class="$attrs.class || 'h-8'" />
</template>
