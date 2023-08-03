<template>
  <div class="common-layout">
    <el-container style="height: 100vh;">
      <el-header>
        <MyHeader />
      </el-header>
      <el-container>
        <el-aside style="width: 200px;">
          <!-- 左侧菜单 -->
          <el-menu :default-active="router.currentRoute.value.path" class="el-menu-vertical-demo" :router="true">
            <Menu :menuList="router.options.routes" />
          </el-menu>
        </el-aside>
        <el-main>
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

</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  height: 100%;
}
</style>
