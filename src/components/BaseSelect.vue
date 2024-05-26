<template>
  <div class="flex gap-2">
    <BaseButton>
      <XMarkIcon class="h-8" />
    </BaseButton>

    <select name="" id="" class="w-full truncate rounded bg-gray-100 py-1 px-2 text-2xl">
      <option selected disabled value="">{{ placeholder }}</option>
      <option
        v-for="{ value, label } in options"
        :key="value"
        :value="value"
        :selected="value === selected"
      >
        {{ label }}
      </option>
    </select>
  </div>
</template>

<script setup>
import BaseButton from '../components/BaseButton.vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'

defineProps({
  selected: Number,
  options: {
    type: Array,
    required: true
  },
  placeholder: {
    type: String,
    default: 'Rest'
  }
})
</script>
