import { createApp } from 'vue'
import App from './App.vue'
import WujieVue from 'wujie-vue3'
import {router} from './router'

createApp(App).use(WujieVue).use(router).mount('#app')
