<template>
    <div class='bookcard'>
        <p class="title text">
            {{ props.bookInfo.title }}
        </p>

        <p class="author text">
            {{ props.bookInfo.author }}
        </p>

        <p class="detail text">
            {{ props.bookInfo.detail }}
        </p>

        <el-button @click="readClick" type="primary" round>
            阅读文章
        </el-button>
    </div>
</template>

<script setup lang=ts>
import { useRoute, useRouter } from 'vue-router'

const props = defineProps<{
    bookInfo: {
        title: string,
        author: string,
        detail: string,
    }
}>()

const router = useRouter();

const readClick = ()=>{
    router.push({ path: '/read' })
}

</script>

<style scoped>
.bookcard {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    border-radius: 10px;
    margin-bottom: 2rem;
}

.bookcard::before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 10px;
    background: url('../assets/images/book.png');
    z-index: -1;
}

.text {
    text-align: center;
    width: 90%;
    color: #fff;
    font-family: Verdana;
}

.title {
    font-size: 20px;
    font-weight: bolder;
}

.detail {
    font-size: 15px;
    text-indent: 2em;
    line-height: 30px;
}

.author {
    font-size: 17px;
}

.bookcard>button {
    width: 12.5rem;
}
</style>