

<template>
     <div class="container">
      <div class="menu">
        <button @click="goMsg">点击发送消息-vue</button>
       <router-link to="/vue-demo">Vue</router-link>
      <router-link to="/react-demo">React</router-link>
    </div>
    <router-view class="show-item"></router-view>
     </div>

</template>

<script setup lang="ts">
import { bus } from 'wujie';
import { useRouter } from 'vue-router';

const $router = useRouter();

import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
const goMsg = () => {
  bus.$emit('mainPostMsg', '主应用向子应用发送消息')
}
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
.menu {
  flex-direction: column;
  a {
    display: block;
  }
}
.show-item {
  flex: 1;
}
</style>
