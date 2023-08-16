<template>
    <el-space :size="18">
        <el-dropdown>
            {{ Store.info.name }}
            <template #dropdown>
                <div style="margin: 10px; min-width: 100px;">
                    <div @click="getlogin">
                        退出登录
                    </div>
                </div>
            </template>
        </el-dropdown>
        <!-- 设置深色模式 -->
        <el-dropdown>
            <el-icon :size="20">
                <Setting />
            </el-icon>
            <template #dropdown>
                <div style="margin: 10px; min-width: 100px;">
                    <el-switch v-model="valueDark" @change="getToggleDark" size="small" inactive-text="深色模式" />
                </div>
            </template>
        </el-dropdown>
    </el-space>
</template>

<script setup lang="ts">
import { toggleDark, isDark } from '@/hooks/dark'
import { ref } from "vue";
const valueDark = ref(isDark.value)
const getToggleDark = () => {
    toggleDark()
}
import { useStore } from "@/stores/index";
import router from "@/router";
const Store = useStore()
const getlogin = () => {
    Store.key({ name: null, pass: null })
    router.push('/')
}
</script>

<style scoped></style>