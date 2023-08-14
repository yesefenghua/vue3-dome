<template>
    <div style="max-width: 400px;">
        <keep-alive>
            <logoFrom v-if="storeLogin.isfelse == '1'" />
            <registration v-else-if="storeLogin.isfelse == '2'" />
        </keep-alive>
    </div>
</template>

<script setup lang="ts">
import logoFrom from "./components/logoFrom.vue";
import registration from "./components/registration.vue";
import { useStoreLogin } from "@/stores/components/login";
const storeLogin = useStoreLogin();
</script>
  
<style lang="scss"></style>
  