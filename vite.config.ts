import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@landing': fileURLToPath(new URL('./src/modules/landing', import.meta.url)),
      '@auth': fileURLToPath(new URL('./src/modules/auth', import.meta.url)),
      '@common': fileURLToPath(new URL('./src/modules/common', import.meta.url)),
      '@pokemons': fileURLToPath(new URL('./src/modules/pokemons', import.meta.url)),
    },
  },
})
