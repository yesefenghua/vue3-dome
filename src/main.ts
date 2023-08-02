import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPersistPlugin from 'pinia-plugin-persist'
import App from './App.vue'
import router from './router'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/theme-chalk/dark/css-vars.css'
// 路由拦截
import { useStore } from "@/stores/index";

router.beforeEach((to, from, next) => {
  const Store = useStore()
  if (to.fullPath == '/'|| to.fullPath=='/login' &&  Store?.info?.name) {
     next('/about')
  } else if(to.fullPath !== '/' && to.fullPath!=='/login' &&  !Store?.info?.name) {
    next('/')
  }else{
    next()
  }
})
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

const pinia =createPinia()
pinia.use(piniaPersistPlugin)
app.use(router).use(pinia).mount('#app')
console.log(import.meta.env.VITE_API_URL);



