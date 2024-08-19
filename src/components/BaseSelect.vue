<template>
  <div class="flex gap-2">
    <BaseButton @click="select(null)" :type="BUTTON_TYPES.default">
      <XMarkIcon class="h-8" />
    </BaseButton>

    <select
      name=""
      id=""
      class="w-full truncate rounded bg-gray-100 py-1 px-2 text-2xl"
      @change="select($event)"
    >
      <option :selected="isNotSelected" disabled value="">{{ placeholder }}</option>
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
import { validateSelectOptions, isUndefinedOrNull, isSelectValueValid } from './validators'
import { computed } from 'vue'
import { BUTTON_TYPES } from './constants'
import { normalizeSelectValue } from './functions'

const emits = defineEmits(['select'])

const props = defineProps({
  selected: [Number, String],
  options: {
    type: Array,
    required: true
  },
  placeholder: {
    type: String,
    default: 'Rest'
  }
})

const isNotSelected = computed(() => {
  return isUndefinedOrNull(props.selected)
})

function select(value) {
  emits('select', normalizeSelectValue(value))
}
</script>
