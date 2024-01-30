import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
console.log(import.meta,' import.meta.env');
// https://vitejs.dev/config/
// const isProd = !import.meta.env.VITE_DEV;
export default defineConfig(({ command, mode })=>{
  return {
    base: mode === "production" ?'/vue/' : '/',
    plugins: [vue()],
  }
})
