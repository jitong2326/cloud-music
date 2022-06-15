import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import styleImport, { VantResolve } from 'vite-plugin-style-import'
const path = require('path')
import { svgBuilder } from './src/plugins/svgBuilder.js'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    styleImport({
      resolves: [VantResolve()]
    }),
    svgBuilder('./src/assets/icons/tabs/')
  ],
  css: {
    preprocessorOptions: {
      less: {
        charset: false,
        javascriptEnabled: true,
        additionalData: `@import "${path.resolve(__dirname, 'src/style/index.less')}";` // 加载全局样式，使用less特性
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
