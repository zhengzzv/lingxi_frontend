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
        port: Number.parseInt(envs.VITE_PORT),
        
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
