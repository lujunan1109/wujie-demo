<template>
  <div class="test-style">
    投票数量{{count}}
    <div @click="addCount" class="btn-text">点击我+1</div>
    <img src="../static/favicon.png" alt="png">
  </div>
</template>

<script setup>
import {ref} from 'vue'
const count = ref(0)
const addCount = () => {
  count.value++
}
</script>

<style scoped lang="scss">
.test-style{
  color: aquamarine;
}
.btn-text {
  color: red;
  cursor: pointer;
}
</style>