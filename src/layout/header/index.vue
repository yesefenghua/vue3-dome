<template>
    <div class="header">
        <div>
            <el-button link @click="menusFu">
                <el-icon class="transition-box" size="20" v-if="!store.menus">
                    <Fold />
                </el-icon>
                <el-icon class="transition-box" size="20" v-if="store.menus">
                    <Expand />
                </el-icon>
            </el-button>

        </div>
        <div>
            <settings />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import settings from "./settings.vue";
import { useStore } from "@/stores/index";
const store = useStore()
const menusFu = () => {
    store.getMenus(!store.menus)
}

</script>

<style scoped lang="scss">
.header {
    display: flex;
    justify-content: space-between;
    align-content: center;
    height: 60px;
    align-items: center;
}
</style>