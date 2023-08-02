import { defineStore,createPinia } from 'pinia'
import piniaPersistPersistedstate from 'pinia-plugin-persistedstate'


// 创建Pinia实例
const pinia =createPinia()
pinia.use(piniaPersistPersistedstate)

// 使用持久化插件
pinia.use(piniaPersistPersistedstate)
export const useStore = defineStore({
  id: 'globalState',
  state: () => ({
    info: {
      name:null,
      pass:null,
    },
  }),
  getters: {
    
  },
  actions: {
    key(data:any){
      this.info =data
    }
  },
  persist: {
    key: 'globalState',
    storage: localStorage,
  }
})