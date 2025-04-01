<template>
  <!--嵌套子路由 页面内容部分 开始-->
    <!-- <transition name="fade-transform" mode="out-in">
      <keep-alive> -->
        <router-view :key="key" />
      <!-- </keep-alive>
    </transition> -->
  <!--嵌套子路由 页面内容部分 结束-->

  <!--公共阅读图书 结束-->
  <!-- <PubBookTab :tabTitle=tabTitle :bookList=bookList /> -->
  <!--公共阅读图书 结束-->
</template>

<script setup lang="ts">
import { ref, reactive, computed } from "vue";
// import { type BookData } from '../../types/MainContentType';
import { useRoute } from 'vue-router';

const route = useRoute();

let tabTitle = ref('二十四史');

let bookList = reactive([]);

let bookTitle = ref('A Place for Entrepreneurs to Share and Discover New Stories');

let bookdesc = ref('');

const key = computed(() => route.path)

</script>

<style scoped></style>
