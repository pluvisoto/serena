import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        descobrindo: resolve(__dirname, 'descobrindo-serena.html'),
      },
    },
  },
})
