<script setup>
import { isActivityValid } from './validators'
import BaseButton from './BaseButton.vue'
import { PlusIcon } from '@heroicons/vue/24/outline'
import { nextTick, ref } from 'vue'
import { id } from './functions'

const activity = ref('')

async function submit() {
  emit('submit', {
    id: id(),
    name: activity.value,
    secondsToComplete: 0
  })

  activity.value = ''

  await nextTick()

  window.scrollTo(0, document.body.scrollHeight)
}

const emit = defineEmits({
  submit: isActivityValid
})
</script>

<template>
  <form class="sticky bottom-[57px] flex gap-2 border-t bg-white p-4" @submit.prevent="submit">
    <input
      type="text"
      class="w-full rounded border px-4 text-xl"
      placeholder="Activity name"
      v-model="activity"
    />
    <BaseButton :disabled="!activity.trim()">
      <PlusIcon class="h-8" />
    </BaseButton>
  </form>
</template>
