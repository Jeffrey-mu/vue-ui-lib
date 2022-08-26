import { fileURLToPath, URL } from 'node:url'
import Pages from 'vite-plugin-pages'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from "path";
import Unocss from 'unocss/vite'
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3333
  },
  plugins: [Vue({
    include: [/\.vue$/, /\.md$/],
    reactivityTransform: true,
  }), vueJsx(), Pages({ extensions: ["vue", "md"], }), Unocss(),],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      "~/": `${path.resolve(__dirname, "src")}/`,
    }
  }
})
