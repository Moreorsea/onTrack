<template>
  <a :href="`#${PAGE_TIMELINES}`" @click="navigate(PAGE_TIMELINES)">
    <img src="../assets/logo.png" alt="Logo" class="h-9" />
  </a>
</template>

<script setup>
import { PAGE_TIMELINES } from '../components/constants'
import { navigate } from '@/router'
</script>
