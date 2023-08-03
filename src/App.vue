
<template>
  <el-config-provider :locale="zhCn">
    <RouterView />
  </el-config-provider>
</template>
<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { toggleDark, isDark } from '@/hooks/dark'
import { onBeforeMount } from 'vue';
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import 'dayjs/locale/zh-cn'
onBeforeMount(() => {
  if (!isDark) {
    toggleDark()
  }
})


</script>
<style scoped></style>
