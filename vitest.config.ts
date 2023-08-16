import { fileURLToPath } from 'node:url'
import { mergeConfig, defineConfig } from 'vite'
import { configDefaults } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  // vite配置
  viteConfig,
  // 定义配置
  defineConfig({
    // 测试环境
    test: {
      // 测试环境
      environment: 'jsdom',
      // 排除默认配置中的文件
      exclude: [...configDefaults.exclude, 'e2e/*'],
      // 根目录
      root: fileURLToPath(new URL('./', import.meta.url)),
      // 转换模式
      transformMode: {
        // web环境
        web: [/\.[jt]sx$/]
      }
    }
  })
)