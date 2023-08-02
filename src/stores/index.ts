import { defineStore } from 'pinia'
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
    enabled: true,
    strategies: [
      {
        key: 'globalState',
        storage: localStorage,
      },
    ],
  }
})