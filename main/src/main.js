import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Wujie from 'wujie-vue3'

const app = createApp(App)

app.use(Wujie)

app.mount('#app')
