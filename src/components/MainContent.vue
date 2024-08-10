<template>
  <!--轮播图 开始-->
  <SwiperTitle :title=bookTitle :desc=bookdesc />
  <!--轮播图 结束-->

  <!--公共阅读图书 结束-->
  <PubBookTab :tabTitle=tabTitle :bookList=bookList />
  <!--公共阅读图书 结束-->
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import axiosInstance from '@/api/axios';
import { type BookData } from '../types/MainContentType';
import SwiperTitle from '../components/SwiperTitle.vue';
import PubBookTab from '../components/PubBookTab.vue';

let tabTitle = ref('二十四史');

let bookList = reactive([]);

let bookTitle = ref('');

let bookdesc = ref('');

onMounted(() => {
  // 发起一个post请求
  axiosInstance({
    method: 'get',
    url: 'http://localhost:8080/test',
  }).then((dataList) => {
    bookList = dataList.data;
    bookTitle.value = dataList.data[0].title;
    bookdesc.value = dataList.data[0].desc;
  });
})

</script>

<style scoped></style>
