import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/Fucking-TO-Gym/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        explore: resolve(__dirname, 'explore.html'),
        login: resolve(__dirname, 'login.html')
      }
    }
  }
})
