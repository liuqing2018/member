import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';
import eslint from 'vite-plugin-eslint';
import Components from 'unplugin-vue-components/dist/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/dist/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    eslint({
      lintOnStart: true,
    }),
    Components({
      resolvers: [
        AntDesignVueResolver({
          importStyle: false, // css in js
        }),
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'), // 设置'@'指向'src'目录
    }
  },
  server: {
    port: 4000, // 服务器端口
    open: true, // 是否自动打开浏览器
    cors: true,
    proxy: {
      '/api': {
        target: 'https://cupid-service.qa.linkdoc.com',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => {
          return path.replace('/api/', '/');
        }
      }
    }
  },
})
