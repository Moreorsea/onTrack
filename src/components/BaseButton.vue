<script>
import { BUTTON_TYPES } from './constants'

const typeClasses = {
  [BUTTON_TYPES.default]: 'bg-gray-100 enabled:hover:bg-gray-200',
  [BUTTON_TYPES.danger]: 'bg-red-500 enabled:hover:bg-red-600 text-white',
  [BUTTON_TYPES.primary]: 'bg-purple-500 enabled:hover:bg-purple-600 text-white',
  [BUTTON_TYPES.success]: 'bg-green-500 enabled:hover:bg-green-600 text-white',
  [BUTTON_TYPES.warning]: 'bg-yellow-500 enabled:hover:bg-yellow-600 text-white'
}
</script>

<template>
  <button
    :class="`${typeClasses[type]} rounded p-3 disabled:cursor-not-allowed disabled:opacity-50`"
  >
    <slot></slot>
  </button>
</template>

<script setup>
defineProps({
  type: {
    default: BUTTON_TYPES.primary,
    type: String
  }
})
</script>
