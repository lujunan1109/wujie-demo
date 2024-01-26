<template>
  <router-view></router-view>
</template>

<script setup lang="ts">
import { RouteLocationRaw, useRouter } from 'vue-router';
import { bus } from 'wujie';

const $router = useRouter();
bus.$on('sub-vue-change', (msg: { path: RouteLocationRaw; }) => {
  $router.push(msg.path);
})
</script>
