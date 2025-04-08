<template>
    <div class='recommend_card' >

        <img src="../assets/images/img.png" alt="">

        <div class="author text">        
            ENTERPRISE
        </div>

        <div class="title text">
            Autodesk looks to future of 3D 
            printing with Project Escher
        </div>

        <div class="detail text">
            Like so many organizations these days, 
            Autodesk is a company in transition. 
            It was until recently a traditional boxed software company selling licenses.
            Read More
        </div>
    </div>
</template>

<script setup lang=ts>
defineProps<{

}>()



</script>

<style scoped>
.recommend_card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: pink;
    border-radius: 10px;
    gap: 1rem;
}

.recommend_card>img{
    width: 89%;
}

.text {
    text-align: start;
    width: 85%;
}

/* .detail {
    margin-top: 1%;
}

.author {
    margin-top: 1%;
} */


</style>