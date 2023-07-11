import { defineStore } from 'pinia';

export const user = defineStore('user', {
  state: () => {
    return {
      user: {},
    }
  },
  getters: {
    getUserName: (state ) => {
      return state.user;
    }
  },
  actions: {
    // async getUserInfo () {
    //   await api.getUserInfo();
    // },
    setUser(payload: any): void {
      this.user = payload;
    },
  }
});
