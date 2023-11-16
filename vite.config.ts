import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],

//   // 👇 Using it when script into package.json is "build": "tsc && vite build"
//   // base: "./"

//   // 👇 Alias path: https://vitejs.dev/config/shared-options.html#resolve-alias
//   resolve: {
//     alias: [
//       { find: '~', replacement: '/src' }
//       // 👇 Add new path similar below and config into tsconfig.json, if needed.
//     ]
//   }
// })

export default defineConfig(({command, mode}) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react()],
    resolve: {
      alias: [
        { find: '~', replacement: '/src' }
        // 👇 Add new path similar below and config into tsconfig.json, if needed.
      ]
    },
    define: {
      'process.env.REACT_APP_RAPID_API_KEY': JSON.stringify(env.REACT_APP_RAPID_API_KEY)
    }
  }
})