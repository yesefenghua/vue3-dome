<template>
  <div>
    <el-button @click="aaa">确定</el-button>
  </div>
</template>

<script setup lang="ts">
import { toggleDark, isDark } from '@/hooks/dark'
const aaa = () => {
  toggleDark()

}
</script>

<style scoped></style>