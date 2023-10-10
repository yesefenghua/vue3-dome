<template>
    <div style="width: 100%;;">
        <div style="max-width: 400px;min-width: 300px;  margin: 0 auto;">
            <div style="height: 200px;">
                <!-- 提示内容区域 -->
            </div>
            <div style="padding:0 20px;">
                <keep-alive>
                    <logoFrom v-if="storeLogin.isfelse == '1'" />
                    <registration v-else-if="storeLogin.isfelse == '2'" />
                    <reset v-else-if="storeLogin.isfelse == '3'" />
                </keep-alive>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import logoFrom from "./components/logoFrom.vue";
import registration from "./components/registration.vue";
import reset from "./components/reset.vue";

import { useStoreLogin } from "@/stores/components/login";
const storeLogin = useStoreLogin();


</script>
  
<style lang="scss"></style>