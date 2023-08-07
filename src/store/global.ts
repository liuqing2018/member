import { defineStore } from 'pinia';

export const global = defineStore('global', {
  state: () => {
    return {

      // 主题色
      theme: '#646cff',

      // 请求中接口的数量
      crossCount: 0,

      // 全局加载中状态
      loading: false,
    }
  },
  getters: {
    getTheme: (state) => {
      return state.theme;
    },
    loading: (state) => {
      return state.crossCount > 0;
    },
  },
  actions: {
    setTheme (theme: string): void {
      this.theme = theme;
    },
    setCrossCount (isIncrement: boolean = true) {
      if (isIncrement) {
        this.crossCount++;
      } else {
        this.crossCount--;
      }
    },
  }
});
