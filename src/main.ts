import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import vuelibs from "./index"
import { createRouter, createWebHashHistory } from 'vue-router'
// @ts-ignore
import routes from '~pages'
import "~/assets/base.css"
import 'uno.css'
const router = createRouter({
  routes,
  history: createWebHashHistory(),
})
const app = createApp(App)
app.use(createPinia()).use(vuelibs).use(router).mount('#app')
