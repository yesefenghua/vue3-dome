<template>
  <div class="common-layout">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu default-active="2" class="el-menu-vertical-demo" @click="handleOpen">
            <el-sub-menu v-for="item in  men" :index="item.path">
              <template #title>
                {{ item.name }}
              </template>

              <el-menu-item v-for="ites in item.children" :index="ites.path">
                <app-link :to="ites.path">
                  {{ ites.name
                  }}
                </app-link></el-menu-item>
            </el-sub-menu>
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
import router from "@/router";

import { ref } from 'vue'
const men = ref(router.options.routes)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>