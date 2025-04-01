<template>
    <div class='bookstore' >
        <div class="title text">
            The Best Productivity Apps on Market
        </div>

        <div class="author text">
            Market
        </div>

        <div class="detail text">
            Don't be scared of the truth
            because we need to restart the human foundation in truth
            And I love you like Kanye loves Kanye I love Rick Owens’ bed design
            but the back is...
        </div>

        <el-button type="primary" round>READ ARTICLE</el-button>
    </div>
</template>

<script setup lang=ts>

const props = defineProps<{
    // outCss: {
    //     width: {
    //         type: string,
    //         required: true,
    //         default:'0px'
    //     },
    //     height: {
    //         type: string,
    //         required: true,
    //         default:'0px'
    //     }
    // }
}>()

</script>

<style scoped>
.bookstore {
    margin: 0% auto;
    width: 1200px;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: pink;
    border-radius: 10px;
    margin-bottom: 1rem;
}

.text {
    text-align: center;
    width: 50%;
}

.detail {
    margin-top: 1%;
}

.author {
    margin-top: 1%;
}

.bookstore>button {
    margin-top: 2%;
}
</style>