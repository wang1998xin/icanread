<template>
  <!--公共头部 开始-->
  <CommonHeader />
  <!--公共头部 结束-->

  <div class="app_main">
    <app-main />
  </div>

  <!--公共底部 开始-->
  <CommonFooter />
  <!--公共底部 结束-->
</template>

<script setup lang="ts">
import CommonFooter from '@/layout/components/CommonFooter.vue';
import CommonHeader from '@/layout/components/CommonHeader.vue';
import AppMain from '@/layout/components/AppMain.vue';
import { useCssVar } from '@vueuse/core'

// const color1 = useCssVar("--vt-c-white");
// // 修改body背景色
// color1.value = '#f0f0f0'

// const color2 = useCssVar("--vt-c-indigo");
// // 修改段落文字颜色
// color2.value = '#9e9e9e';
</script>

<style scoped>
.app_main {
  position: relative;
  left: 50%;
  width: 98%;
  height: 100%;
  transform: translate(-50%, -3rem);
  background-color: #fff;
  border-radius: 0.5%;
  box-shadow: 1px 1px 10px #888888,-1px 1px 10px #888888
}
</style>