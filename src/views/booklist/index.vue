<template>
  <!-- 搜索框 -->
  <div class="common_search">
    <!-- 输入框 -->
    <el-input v-model="input" placeholder="书名/作者名" />
    <!-- 放大镜图标 -->
    <el-icon>
      <Search />
    </el-icon>
    <!-- 结果列表 -->
    <ul class="list" id="search_suggestion_box"> </ul>
  </div>

  <div class="booklist">
    <div class="flex_spacebetween">
      <BookCard :style="outCss1" :bookInfo />
      <BookCard :style="outCss2" :bookInfo />
    </div>
    <BookCard :style="outCss3" :bookInfo />
  </div>

  <div class="recommend_title">
    你也可能感兴趣
  </div>

  <div class="flex_spacebetween recommend">
    <RecommendCard :style="outCss11" />
    <RecommendCard :style="outCss11" />
    <RecommendCard :style="outCss11" />
  </div>

  <!-- <div class="footer"> -->
  <!-- <div class="footer_item">
      <img src="../../assets/images/img.png" alt="">
      <div class="profile">

        Alec Thompson<br>

        AUTHOR OF THE MONTH<br>

        Don't be scared of the truth because we need to<br>

        restart the human foundation in truth...
      </div>
    </div> -->
  <!-- </div> -->
</template>

<script setup lang=ts>
import { ref, reactive } from "vue"
import BookCard from '@/components/BookCard.vue'
import RecommendCard from '@/components/RecommendCard.vue'

const input = ref("明朝那些事儿")

let bookInfo = reactive({
  title: '史记',
  author: '司马迁',
  detail: '《史记》被列为“二十四史”之首，对后世史学和文学的发展都产生了深远影响，其首创的纪传体编史方法为后来历代“正史”所传承。被鲁迅誉为“史家之绝唱，无韵之离骚”，有很高的文学价值。刘向等人认为此书“善序事理，辩而不华，质而不俚”。...',
})

const outCss1 = { width: '480px', height: '281px' }
const outCss2 = { width: '480px', height: '281px' }
const outCss3 = { width: '990px', height: '293px' }

const outCss11 = { width: '310px', height: '400px' }

</script>

<style scoped>
.common_search {
  width: 500px;
  margin-top: 50px;
  position: relative;
}

.el-input {
  padding: 0 2rem 0 .75rem;
  font-size: 1.1rem;
}

.el-icon {
  position: absolute;
  left: 28rem;
  top: .625rem;
}

.booklist {
  margin-top: 80px
}

.flex_spacebetween {
  display: flex;
  justify-content: space-between;
}

.recommend_title {
  margin-top: 150px;
  text-align: center;
  font-size: 20px;
  color: #3C4858;
  font-family: Verdana;
  font-weight: bold;
}

.recommend {
  width: 990px;
  height: 400px;
  margin: 100px 0;
}

.footer {
  position: relative;
  width: 100%;
  height: 18.125rem;
}

.footer::before {
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: url('../../assets/images/commonhead-bg.png');
  z-index: -1;
}

.footer_item {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.footer_item>img {
  width: 200px;
  height: 200px;
}

.profile {
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: pink;
  border-radius: 10px;
}
</style>