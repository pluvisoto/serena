import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        descobrindo: resolve(__dirname, 'descobrindo-serena.html'),
        imersao: resolve(__dirname, 'imersao-serena.html'),
        exclusive: resolve(__dirname, 'exclusive-serena.html'),
        programa_exclusive: resolve(__dirname, 'programa-exclusive-serena.html'),
        programa_imersao: resolve(__dirname, 'programa-imersao-serena.html'),
      },
    },
  },
})
