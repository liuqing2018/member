import { defineStore } from 'pinia';

export const global = defineStore('global', {
  state: () => {
    return {
      theme: '#646cff'
    }
  },
  getters: {
    getTheme: (state) => {
      return state.theme;
    }
  },
  actions: {
    setTheme (theme: string): void {
      this.theme = theme;
    }
  }
});
