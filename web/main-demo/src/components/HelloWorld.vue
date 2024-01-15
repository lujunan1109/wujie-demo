

<template>
     <div class="container">
      <div class="menu">
        <div @click="goTes('/')">Vue</div>
      <router-link to="/react">React</router-link>
      <div @click="goTes('/test')">Test</div>
    </div>
    <router-view class="show-item"></router-view>
     </div>

</template>

<script setup lang="ts">
import { bus } from 'wujie';
import { useRouter } from 'vue-router';

const $router = useRouter();
const goTes = (path) => {
  if (path === '/') {
    $router.push('/vue');
  }
  bus.$emit('sub-vue-change', { path});
}

import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
.container {
  display: flex;
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
