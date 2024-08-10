<template>
    <!--轮播图 开始-->
    <div class="recom">
        <div class="recomWrap">
            <div class="title" id="recommend_book_current_book">
                <h2>
                    <a>
                        {{ title }}
                    </a>
                </h2>
                <p>
                    {{ desc }}
                </p>
            </div>
            <div class="swiper">
                <el-carousel height="200px" padding-top="26px">
                    <el-carousel-item v-for="(img,index) in imgList" :key="index">
                        <img :src=img class="lazy">
                    </el-carousel-item>
                </el-carousel>
            </div>
        </div>
    </div>
    <!--轮播图 结束-->
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import 赵云 from '../assets/images/赵云.jpg'

defineProps<{
    title: string;
    desc: string
}>()

const imgList = reactive([
    赵云,
    赵云,
    赵云,
    赵云
])
</script>

<style scoped>
.recom {
    min-width: 62.5rem;
    background: url(../assets/bg.gif) no-repeat center top;
}

.recomWrap {
    width: 62.5rem;
    height: 17.6875rem;
    margin: 0 auto;
    text-align: center;
    padding: 1rem 0 1.875rem;
}

.recomWrap .title a {
    display: block;
    color: #fff;
    font-weight: normal;
    font-style: normal;
    max-width: 44rem;
    font-size: 1.5rem;
    overflow: hidden;
    margin: 0 auto;
    padding: .375rem 0;
}

.recomWrap .title p {
    color: #fff;
    max-width: 32.25rem;
    font-size: 1rem;
    height: 1.25rem;
    overflow: hidden;
    margin: 0 auto;
    padding-top: .625rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    opacity: 0.3;
}

.swiper {
    padding-top: 1.25rem;
}
</style>
