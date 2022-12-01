import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import PkgPlugin from './PkgPlugin.js'

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  build: {
    outDir: "../docs",
    assetsDir: '', 
  },
  plugins: [vue(), vueJsx(), PkgPlugin()]
})