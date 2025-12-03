import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Setting base to an empty string '' or './' ensures all assets use relative paths.
  // This is critical for GitHub Pages subdirectory deployment.
  base: '',
})