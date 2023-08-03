import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';
import vue from '@vitejs/plugin-vue';
// vite.config.ts
// element puls安需引入的插件
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'


export default defineConfig({
  plugins: [
    vue(),
    // element puls安需引入的插件
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    // element puls安需引入的插件
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)) // 别名配置
    }
  },
  build: {
    target: "modules",
    minify: "terser",
    outDir: "dist",
    assetsDir: "assets",
    assetsInlineLimit: 4096,
    cssCodeSplit: true,
    sourcemap: process.env.NODE_ENV === 'production' ? false : 'inline',
    rollupOptions: {
      plugins: [],
    },
    terserOptions: {
      compress: {
        drop_console: process.env.NODE_ENV === 'production',
        drop_debugger: process.env.NODE_ENV === 'production',
      },
    },
    chunkSizeWarningLimit: 500,
  },

  server: {
    hmr: true,
    host: '0.0.0.0', // 指定服务器主机名，默认为 localhost
    port: 3000, // 指定服务器端口号，默认为 3000
    open: false, // 是否自动打开浏览器，默认为 true
    // 配置代理
  },
});