import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { join } from "path";
import { manualChunksPlugin } from "vite-plugin-webpackchunkname";


export default defineConfig({
  plugins: [react(), manualChunksPlugin()],
  resolve: {
    alias: [{
        find: '@namespace/some-tools',
        replacement: join(__dirname, "/src/myfile.tsx")
      }],
  }
})
