import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [
        AntDesignVueResolver(),
      ],
    }),
    eslint({
      lintOnStart: true,
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'), // 设置'@'指向'src'目录
    }
  },
  server: {
    // port: 4000, // 服务器端口
    // open: true, // 是否自动打开浏览器
    // cors: true,
    // proxy: {
    //   '/api': {
    //     target: 'http://www.baidu.com',
    //     changeOrigin: true,
    //     secure: false,
    //     rewrite: (path) => {
    //       return path.replace('/api/', '/');
    //     }
    //   }
    // }
  },
})
