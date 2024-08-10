<template>
    <div class=''>
        我是ImageEditorView页面！
        {{ res }}

    </div>
</template>

<script setup lang=ts>
import { ref, onMounted } from 'vue';
import axiosInstance from '@/api/axios';

let res = ref('');

onMounted(() => {
    // 发起一个post请求
    axiosInstance({
        method: 'get',
        url: 'http://localhost:8080/test',
    }).then(response => {
        res.value = JSON.stringify(response)
    });
})


</script>

<style scoped></style>