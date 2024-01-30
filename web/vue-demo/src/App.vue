<template>
  <router-view></router-view>
</template>

<script setup lang="ts">
import { bus } from 'wujie';

bus.$on('mainPostMsg', (msg: any) => {
  console.log(msg, '接收主应用消息');
  cb()
})

const cb = () => {
  bus.$emit('vueDemoPostMsg', "子应用向主应用发送消息")
}
</script>
