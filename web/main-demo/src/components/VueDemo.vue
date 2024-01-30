<template>
    <WujieVue :url="vueUrl" name="vue-demo" :props="mainProps" exec></WujieVue>
</template>

<script setup lang="ts">
const mainProps = {
  name: 'main-demo',
  data: '主应用通过props传消息给子应用'
}

const vueUrl = import.meta.env.VITE_VUE
</script>