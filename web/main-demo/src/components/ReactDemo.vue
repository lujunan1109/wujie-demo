<template>
  <WujieVue url="http://127.0.0.1:5175" name="react-demo" :props="forRatMsg"></WujieVue>
</template>

<script setup lang="ts">
const forRatMsg = {
  msg: '给react信息'
}
</script>