<template>
    <div style="margin-top: 220px;">
        <div class="demo" style="width:1000px;height: 281px;">
            <BookCard :style="outCss1" />
            <BookCard :style="outCss2" />
        </div>
        <BookCard :style="outCss3" />
    </div>

</template>

<script setup lang=ts>
import BookCard from '@/components/BookCard.vue'
defineProps<{

}>()

const outCss1 = { width: '480px', height: '281px' }
const outCss2 = { width: '480px', height: '281px' }
const outCss3 = { width: '990px', height: '293px', marginTop: '20px' }

</script>

<style scoped>
.demo {
    display: flex;
    margin: 0 auto;
}
</style>