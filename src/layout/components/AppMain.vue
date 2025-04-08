<template>
  <!--嵌套子路由 页面内容部分 开始-->
    <!-- <transition name="fade-transform" mode="out-in">
      <keep-alive> -->
        <router-view :key="key" />
      <!-- </keep-alive>
    </transition> -->
  <!--嵌套子路由 页面内容部分 结束-->
</template>

<script setup lang="ts">
import { ref, reactive, computed } from "vue";
// import { type BookData } from '../../types/MainContentType';
import { useRoute } from 'vue-router';

const route = useRoute();

const key = computed(() => route.path)

</script>

<style scoped></style>
