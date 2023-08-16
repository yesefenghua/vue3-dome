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
    // 模块编译目标
    target: "modules",
    // 压缩模块
    minify: "terser",
    // 编译输出目录
    outDir: "dist",
    // 资源文件夹
    assetsDir: "assets",
    // 资源内联限制
    assetsInlineLimit: 4096,
    // CSS分割
    cssCodeSplit: true,
    // 是否生成sourcemap
    sourcemap: process.env.NODE_ENV === 'production'? false : 'inline',
    // rollup插件
    rollupOptions: {
      plugins: [],
    },
    // terser插件
    terserOptions: {
      // 压缩
      compress: {
        // 是否输出调试信息
        drop_console: process.env.NODE_ENV === 'production',
        // 是否输出调试信息
        drop_debugger: process.env.NODE_ENV === 'production',
      },
    },
    // 内联大小警告限制
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