<template>
    <!--轮播图 开始-->
    <div class="recom">
        <div class="recomWrap">
            <div class="title" id="recommend_book_current_book">
                <h2>
                    <a>
                        <i>{{ title }}</i>
                    </a>
                </h2>
                <p>
                    {{ introduction }}
                </p>
            </div>
            <div class="swiper">
                <el-carousel height="150px" padding-top="26px">
                    <el-carousel-item v-for="item in 4" :key="item">
                        <h3>{{ item }}</h3>
                    </el-carousel-item>
                </el-carousel>
            </div>
        </div>
    </div>
    <!--轮播图 结束-->
</template>

<script setup lang="ts">
import { ref, reactive } from "vue"

defineProps<{
    title: string;
    introduction: string
}>()

</script>

<style scoped>
.recom {
    min-width: 62.5rem;
    background: url(../assets/bg.gif) no-repeat center top;
}

.recomWrap {
    width: 62.5rem;
    height: 14.6875rem;
    margin: 0 auto;
    text-align: center;
    padding: 1.875rem 0;
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
