import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '~@campgladiator': path.join(__dirname, '/node_modules/@campgladiator/')
    }
  },
  css: {
    //CSS preprocessor
    preprocessorOptions: {
      sassLoader: {
      },
      scss: {
        charset: false,
        additionalData: `@import "./src/styles/global";`
      },
    },
  }
})
