
<template>
  <RouterView />
</template>
<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { toggleDark, isDark } from '@/hooks/dark'
import { onBeforeMount } from 'vue';
onBeforeMount(() => {
  if (!isDark) {
    toggleDark()
  }
})


</script>
<style scoped></style>
