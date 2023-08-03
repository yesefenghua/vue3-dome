import { defineStore,createPinia } from 'pinia'


// 使用持久化插件
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
