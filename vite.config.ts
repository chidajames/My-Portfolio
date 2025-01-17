import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Use the repository name as the base for GitHub Pages
  base: "/",
  plugins: [react()],
  build: {
    outDir: 'dist', // Ensure build outputs to dist folder
    // Ensure proper file naming and chunking
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        }
      }
    }
  }
})