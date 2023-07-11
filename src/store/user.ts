import { defineStore } from 'pinia';

export const user = defineStore('user', {
  state: () => {
    return {
      user: {},
    }
  },
  getters: {
    getUserName: ({ user }) => {
      return user.name;
    }
  },
  actions: {
    // async getUserInfo () {
    //   await api.getUserInfo();
    // },
    setUser: (payload) => {
      this.user = payload;
    }
  }
});
