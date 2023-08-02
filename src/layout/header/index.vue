<template>
    <div style="display: flex;
    justify-content: space-between;
    align-content: center; 
       height: 60px;
    align-items: center;">
        <div>
            logo
            <!-- <el-image style="width: 200px; height: 50px" :src="logo" fit="cover" /> -->
        </div>
        <div>
            <settings />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import logo from '@/assets/logo.svg';
import settings from "./settings.vue";
</script>

<style scoped></style>