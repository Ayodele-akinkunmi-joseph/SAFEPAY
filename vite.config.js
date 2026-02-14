import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // This ensures files in public folder are copied to dist root
  publicDir: 'public'
})
