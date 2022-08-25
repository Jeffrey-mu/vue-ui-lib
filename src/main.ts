import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import vuelibs from "vue-ui-libs"
import './assets/main.css'
const app = createApp(App)
app.use(createPinia())
app.use(vuelibs)
app.mount('#app')
