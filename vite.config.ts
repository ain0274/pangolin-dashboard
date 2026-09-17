import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/pangolin-dashboard/',
  plugins: [react()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
            '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
            '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
            '@pages': fileURLToPath(new URL('./src/pages', import.meta.url)),
            '@data': fileURLToPath(new URL('./src/data', import.meta.url)),
        },
    },
    // SCSS 전역 사용
    css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@assets/styles/main.scss" as *;`,
      },
    },
  },
})
