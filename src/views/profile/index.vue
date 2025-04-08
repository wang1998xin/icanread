<template>
<PubBookTab :tabTitle=tabTitle :bookList=bookList />
</template>

<script setup lang=ts>
import { ref, reactive, computed } from "vue";
import PubBookTab from '@/components/PubBookTab.vue'

defineProps<{

}>()

let tabTitle = ref('二十四史');

let bookList = ref([]);


</script>

<style scoped>



</style>