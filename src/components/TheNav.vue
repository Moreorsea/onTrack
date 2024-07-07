<script setup>
import NavItem from './NavItem.vue'
import { NAV_ITEMS } from './constants'
import { isPageValid } from './validators'

defineProps({
  currentPage: {
    type: String,
    required: true,
    validator: isPageValid
  }
})

const emit = defineEmits({
  navigate: isPageValid // выполнение валидации тех данных, которые будут отправлены вместе с этим событием компоненту-родителю
})
</script>

<template>
  <nav class="sticky bottom-0 z-20 bg-white">
    <ul class="flex items-center justify-around border-t">
      <NavItem
        v-for="(icon, page) in NAV_ITEMS"
        :key="page"
        :href="`#${page}`"
        :class="{ 'bg-gray-200 pointer-events-none': currentPage === page }"
        @click="emit('navigate', page)"
      >
        <component :is="icon" class="h-6 w-6" />{{ page }}
      </NavItem>
    </ul>
  </nav>
</template>
