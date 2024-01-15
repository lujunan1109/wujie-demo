<template>
  <router-view></router-view>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { bus } from 'wujie';

const $router = useRouter();
bus.$on('sub-vue-change', (msg) => {
  console.log(msg);
  $router.push(msg.path);
})
</script>
