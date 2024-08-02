<script setup lang="ts">
import HelloWorld from './../components/HelloWorld.vue'
import { useCssVar } from '@vueuse/core'

const color1 = useCssVar("--vt-c-white");
// 修改body背景色
color1.value = '#f0f0f0'

const color2 = useCssVar("--vt-c-indigo");
// 修改段落文字颜色
color2.value = '#9e9e9e';
</script>

<template>
  <HelloWorld msg="出版图书" />
</template>

<style scoped>

</style>
