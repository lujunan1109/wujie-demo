<template>
  <WujieVue :url="reactUrl" name="react-demo" :props="forRatMsg"></WujieVue>
</template>

<script setup lang="ts">
const forRatMsg = {
  msg: '给react信息'
}
const reactUrl = import.meta.env.VITE_REACT
</script>