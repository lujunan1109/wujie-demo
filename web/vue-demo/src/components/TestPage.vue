<template>
  <button @click="postMsgReact">点击发送消息给react</button>
  <div :style="{color: tColor}" >
    {{ data.name }} {{ data.data }}
  </div>
</template>

<script setup lang="ts">
const data = window?.$wujie?.props;
const tColor = 'red';

const postMsgReact = () => {
window.$wujie?.bus.$emit('vuePostMsg', 'vue子应用向react子应用发送消息')
}
</script>


