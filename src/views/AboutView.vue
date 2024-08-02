<script setup lang="ts">
import ReadView from '../components/ReadView.vue'
import { useCssVar } from '@vueuse/core'

const color1 = useCssVar("--vt-c-white");
// 修改body背景色
color1.value = '#e3d1bd';

const color2 = useCssVar("--vt-c-indigo");
// 修改段落文字颜色
color2.value = '##333';
</script>

<template>
    <ReadView />
</template>

<style></style>
