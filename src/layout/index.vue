<template>
  <div class="common-layout">
    <el-container style="height: 100vh;">
      <el-aside :width="store.menus ? '65px' : '200px'" style="box-shadow: 2px 2px 3px #252525; margin-right: 2px;">
        <!-- 左侧菜单 -->
        <el-image style="width: 100%; height: 60px" src="logo" fit="cover" />
        <el-menu :collapse="store.menus" :default-active="router.currentRoute.value.path" class="el-menu-vertical-demo"
          :router="true">
          <Menu :menuList="router.options.routes" />
        </el-menu>
      </el-aside>
      <el-container>
        <el-header style="box-shadow: 2px 2px 3px #252525;">
          <!-- 头部区域 -->
          <MyHeader />
        </el-header>
        <el-main>
          <!-- 内容区域 -->
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import Menu from "./menu/index.vue";
import router from "@/router";
import MyHeader from "./header/index.vue"
import { ref, onMounted, onBeforeUnmount } from "vue";
import logo from '@/assets/logo.svg';
import { useStore } from "@/stores/index";
const store = useStore()


// 监听屏幕宽度变化
const handleResize = () => {
  const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  // 设置设备类型
  if (screenWidth <= 767) { // 手机端
    store.getMenus(true)
  } else if (screenWidth >= 768 && screenWidth <= 1024) {
    store.getMenus(true)
  } else {
    store.getMenus(false)
  }
};
// 在组件挂载时添加事件监听器
onMounted(() => {
  window.addEventListener('resize', handleResize);
});

// 在组件卸载时移除事件监听器
onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
});
</script>

<style>
.el-menu-vertical-demo {
  border-right: none;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>
