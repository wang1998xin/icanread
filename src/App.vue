<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import CommonFooter from './views/CommonFooter.vue'
import { ref } from 'vue'

const input = ref("明朝那些事儿")
</script>

<template>
  <div class="common-layout">
    <el-container>
      <!--公共头部 开始-->
      <el-header>
        <div class="n1_header">
          <div class="n1_header_wrap">
            <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="25" />
            iCanRead
            <div class="n1_headerR">
              <!-- 路由导航 -->
              <nav>
                <RouterLink to="/">主页</RouterLink>
                <RouterLink to="/about">阅读页</RouterLink>
              </nav>
              <!-- 搜索框 -->
              <div class="n1_search">
                <form action="">
                  <!-- 输入框 -->
                  <el-input v-model="input" placeholder="书名/作者名" />
                  <!-- 放大镜图标 -->
                  <el-icon>
                    <Search />
                  </el-icon>
                </form>
                <!-- 结果列表 -->
                <ul class="list" id="search_suggestion_box"> </ul>
              </div>
              <!-- 登录 -->
              <div class="n1_login">
                <el-button>登录</el-button>
              </div>
            </div>
          </div>
        </div>
      </el-header>
      <!--公共头部 结束-->

      <!--轮播图 开始-->
      <div class="recom">
        <div class="recomWrap">
          <div class="title" id="recommend_book_current_book">
            <h2>
              <a href="https://www.ireader.com.cn/index.php?ca=bookdetail.index&amp;pca=channel.index&amp;bid=11005261"
                target="_blank" title="蝴蝶飞不过那片海">
                <i>蝴蝶飞不过那片海</i>
              </a>
            </h2>
            <p>
              夏朵朵的家庭是一个再婚重组的家庭，她父亲带着她，而继母带着弟弟张志康。继母对夏朵朵冷漠乃至冷酷，而懦弱的父亲在继母的淫威下也对夏朵朵逐渐忽视...
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

      <!--内容部分 开始-->
      <el-main>
        <div class="content">
          <RouterView />
        </div>
      </el-main>
      <!--内容部分 结束-->

      <!--公共底部 开始-->
      <el-footer>
        <CommonFooter />
      </el-footer>
      <!--公共底部 结束-->
    </el-container>
  </div>

</template>

<style scoped>
.el-header {
  padding: 0;
}

.n1_header {
  width: 100%;
  height: 3.875rem;
  min-width: 62.5rem;
  background-color: #fff;
}

.n1_header_wrap {
  width: 62.5rem;
  height: 3.875rem;
  line-height: 3.875rem;
  margin: 0 auto;
}

.logo {
  float: left;
  height: 3.875rem;
}

.n1_headerR {
  float: right;
  height: 3.875rem;
}

nav {
  float: left;
  font-size: .875rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 16px;
  border-left: .0625rem solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

.n1_search {
  float: left;
  position: relative;
}

.el-input {
  padding: 0 2rem 0 .75rem;
  font-size: .75rem;
}

.el-icon {
  width: .9375rem;
  height: .9375rem;
  position: absolute;
  right: 2.8125rem;
  top: 1.5625rem;
}

.n1_login {
  float: left;
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.content {
  width: 62.5rem;
  overflow: hidden;
  margin: 0 auto;
}

.recom {
  min-width: 62.5rem;
  background: url(./assets/bg.gif) no-repeat center top;
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

/* @media (min-width: 64rem) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 32px 0 0;
  }

  nav {
    text-align: left;
    margin-left: -16px;
    font-size: 16px;

    padding: 16px 0;
    margin-top: 16px;
  }
} */
</style>
