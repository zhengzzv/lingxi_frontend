import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig( ({command, mode}) => {
  const envs = loadEnv(mode, process.cwd())
  return {
    server: {
      hmr: true,
      port: Number.parseInt(envs.VITE_PORT),
      proxy: {
          [envs.VITE_PROXY_DOMAIN]: {
              target: envs.VITE_PROXY_DOMAIN_REAL,
              changeOrigin: true,
              rewrite: (path: string) => regExps(path, envs.VITE_PROXY_DOMAIN)
          }
      }
        
    },
    plugins: [vue(), vueJsx()],
    resolve: {
      alias: {
          "@": path.resolve(__dirname, "/src"),
          "~@": path.resolve(__dirname, "/src"),
      },
    },
  }
})

// 跨域代理重写
const regExps = (value: string, reg: string): string => {
  return value.replace(new RegExp(reg, "g"), "");
};