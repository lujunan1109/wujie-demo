<template>
  <div :style="{color: tColor}">
    {{ data }}
  </div>
</template>

<script setup lang="ts">
const data = 'test-page';
const tColor = 'red';
</script>


