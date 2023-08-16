<template>
    <div style="max-width: 350px;">
        <keep-alive>
            <logoFrom v-if="storeLogin.isfelse == '1'" />
            <registration v-else-if="storeLogin.isfelse == '2'" />
            <reset v-else-if="storeLogin.isfelse == '3'" />
        </keep-alive>
    </div>
</template>

<script setup lang="ts">
import { onBeforeMount } from "vue";
import logoFrom from "./components/logoFrom.vue";
import registration from "./components/registration.vue";
import reset from "./components/reset.vue";
import { toggleDark, isDark } from '@/hooks/dark'

import { useStoreLogin } from "@/stores/components/login";
const storeLogin = useStoreLogin();
onBeforeMount(() => {
    // 判断是否为暗色模式
    if (!isDark) {
        // 打开暗色模式
        toggleDark()
    }
})

</script>
  
<style lang="scss"></style>