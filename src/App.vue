
<template>
  <el-config-provider :locale="zhCn">
    <RouterView />
  </el-config-provider>
</template>
<script setup lang="ts">
import { RouterView } from 'vue-router'
import { toggleDark, isDark } from '@/hooks/dark'
import { onBeforeMount } from 'vue';
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import 'dayjs/locale/zh-cn'
onBeforeMount(() => {
  // 如果不是暗色模式，则打开暗色模式
  if (!isDark.value) {
    // 打开暗色模式
    toggleDark()
  }
})


</script>
<style scoped lang="scss"></style>