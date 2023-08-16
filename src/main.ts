import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/theme-chalk/dark/css-vars.css'
// 路由拦截
import { useStore } from "@/stores/index";
import piniaPersistPersistedstate from 'pinia-plugin-persistedstate'

// 路由拦截
router.beforeEach((to, from, next) => {
  // 获取store
  const Store = useStore()
  // 如果跳转到的路径为'/'或'/login'，并且store中有name属性，则跳转到'/about'
  if (to.fullPath == '/'|| to.fullPath=='/login' &&  Store.info.name) {
     next('/about')
  // 如果跳转到的路径不为'/'或'/login'，但store中没有name属性，则跳转到'/'
  } else if(to.fullPath!== '/' && to.fullPath!=='/login' &&  !Store.info.name) {
    next('/')
  // 否则，直接跳转
  }else{
    next()
  }
})
const app = createApp(App)
// 遍历ElementPlusIconsVue对象，将其中的key和component映射到app中
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

// 创建Pinia实例
const pinia =createPinia()
// 使用pinia创建一个pinia实例
pinia.use(piniaPersistPersistedstate)
// 使用pinia插件，挂载路由和pinia实例
app.use(router).use(pinia).mount('#app')
// 打印VITE_API_URL
console.log(import.meta.env.VITE_API_URL);