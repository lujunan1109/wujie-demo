<template>
    <WujieVue :url="vueUrl" name="vue-demo" :props="mainProps"></WujieVue>
</template>

<script setup lang="ts">
const mainProps = {
  name: '主应用的名称',
  data: '主应用信息'
}

const vueUrl = import.meta.env.VITE_VUE
</script>