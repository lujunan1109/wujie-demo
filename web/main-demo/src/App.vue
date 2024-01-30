<script setup>
import { bus } from 'wujie'
// 通信


bus.$on('vueDemoPostMsg', (msg) => {
  console.log(msg, '接收子应用消息')
})
</script>

<template>
    <router-view/>

</template>

<style scoped>
.container {
  display: flex;

  .menu {
    width: 200px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    flex: 1;
  }
}
</style>
