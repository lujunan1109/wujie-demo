import { createApp } from 'vue'
import './style.css'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

// 导入你的组件
import HelloWorld from './components/HelloWorld.vue'

// 创建路由实例
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HelloWorld },
  ]
})

const app = createApp(App)

// 使用路由实例
app.use(router).mount('#app')
