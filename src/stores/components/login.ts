import { defineStore } from 'pinia'


// 使用持久化插件
export const useStoreLogin = defineStore({
  id: 'login',
  state: () => ({
    // login 状态
    isfelse:'1'
  }),
  getters: {
    
  },
  actions: {
    isfelseFu(data:string){
      this.isfelse = data
    }
  },
  // persist: {
  //   key: 'globalState',
  //   storage: localStorage,
  // }
})
