import { createApp } from 'vue'
import './style.css'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

// 导入你的组件
import HelloWorld from './components/HelloWorld.vue'
import TestPage from './components/TestPage.vue'

// 创建路由实例
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/vue', component: HelloWorld },
    { path: '/vue/test', component: TestPage }
  ]
})

const app = createApp(App)

// 使用路由实例
app.use(router).mount('#app')
