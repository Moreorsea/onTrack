<script setup>
import { navigate, currentPage } from '@/router'
import { computed } from 'vue'
import BaseIcon from './BaseIcon.vue'

const props = defineProps({
  navItem: {
    type: Object,
    required: true
  }
})

const classes = computed(() => [
  'flex flex-col items-center p-2 text-xs capitalize',
  { 'bg-gray-200 pointer-events-none': currentPage.value === props.navItem.page }
])
</script>

<template>
  <li class="flex-1">
    <a :href="`#${navItem.page}`" :class="classes" @click="navigate(navItem.page)">
      <BaseIcon :name="navItem.icon" class="h-6 w-6" />{{ navItem.page }}
    </a>
  </li>
</template>
