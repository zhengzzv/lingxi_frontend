import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import { setupStore } from "@/store"

import 'element-plus/dist/index.css'
import './assets/main.css'

const app = createApp(App)


app.use(router)
app.use(ElementPlus)
setupStore(app)

app.mount('#app')
