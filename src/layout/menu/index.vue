<template>
    <template v-for="menu in  props.menuList">
        <el-sub-menu v-if="menu.children && !menu.hidden && menu.children.length > 1" :index="menu.path">
            <template #title>
                <el-icon>
                    <component :is="menu.meta.icon" />
                </el-icon>
                {{ menu.name }}
            </template>
            <index :menuList="menu.children" />
        </el-sub-menu>
        <el-menu-item v-else-if="menu.children && !menu.hidden && menu.children.length === 1"
            :index="menu.children[0].path">
            <template #title>
                <el-icon>
                    <component :is="menu.children[0].meta.icon" />
                </el-icon>
                {{ menu.children[0].name }}</template>
        </el-menu-item>
        <el-menu-item :index="menu.path" v-else-if="!menu.children && !menu.hidden">
            <template #title>
                <el-icon>
                    <component :is="menu.meta.icon" />
                </el-icon>
                {{ menu.name }}
            </template>
        </el-menu-item>
    </template>
</template>
  
<script setup lang="ts">
type Props = {
    menuList: any;
};
const props = defineProps<Props>();
</script>
  
<style scoped></style>
  