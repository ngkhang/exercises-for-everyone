import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // 👇 Using it when script into package.json is "build": "tsc && vite build"
  // base: "./"

  // 👇 Alias path: https://vitejs.dev/config/shared-options.html#resolve-alias
  resolve: {
    alias: [
      { find: '~', replacement: '/src' }
      // 👇 Add new path similar below and config into tsconfig.json, if needed.
    ]
  }
})
