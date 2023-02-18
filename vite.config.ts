import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import autoprefixer from 'autoprefixer'

export default defineConfig({
  server: {
    port: 8888,
  },
  css: {
    postcss: {
      plugins: [autoprefixer],
    },
  },
  plugins: [react()],
})
