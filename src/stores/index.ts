import { defineStore } from 'pinia'


// 使用持久化插件
export const useStore = defineStore({
  id: 'globalState',
  state: () => ({
    // 登录密码等信息
    info: {
      name:null,
      pass:null,
    },
    // 菜单权限
    menus:false,
  }),
  getters: {
    
  },
  actions: {
    key(data:any){
      this.info =data
    },
    getMenus(data: boolean){
      this.menus =data
    }
  },
  persist: {
    key: 'globalState',
    storage: localStorage,
  }
})
