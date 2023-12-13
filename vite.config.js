import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // You might want to customize the output directory as well
  },
  server: {
    fs: {
      // Allow serving files from the root directory
      allow: ['.', './public'],
    },
  },
})
