<template>
    <WujieVue url="http://127.0.0.1:5173" name="vue-demo" :props="mainProps" sync></WujieVue>
</template>

<script setup lang="ts">
const mainProps = {
  name: '主应用的名称',
  data: '主应用信息'
}
</script>