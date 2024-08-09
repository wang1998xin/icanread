<script setup lang="ts">
import CommonFooter from '../components/CommonFooter.vue';
import CommonHeader from '../components/CommonHeader.vue';
import { useCssVar } from '@vueuse/core'

const color1 = useCssVar("--vt-c-white");
// 修改body背景色
color1.value = '#f0f0f0'

const color2 = useCssVar("--vt-c-indigo");
// 修改段落文字颜色
color2.value = '#9e9e9e';
</script>

<template>
  <!--公共头部 开始-->
  <CommonHeader />
  <!--公共头部 结束-->

  <!--嵌套子路由 页面内容部分 开始-->
  <RouterView />
  <!--嵌套子路由 页面内容部分 结束-->

  <!--公共底部 开始-->
  <CommonFooter />
  <!--公共底部 结束-->
</template>

<style scoped></style>
