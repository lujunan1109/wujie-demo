<script setup>
import { bus } from 'wujie'
// 通信
bus.$on('postMsg', (msg) => {
  console.log(msg, '接受到子应用信息')
})

</script>

<template>
    <router-view/>

</template>

<style scoped>
.container {
  width: 100%;
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
