<template>
    <div class="common_header">
      <div class="common_header_wrap">
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="25" />
        iCanRead
        <div class="common_headerR">
          <!-- 顶级路由导航 -->
          <nav>
            <RouterLink to="/">主页</RouterLink>
            <RouterLink to="/imageEditorView">图片编辑页</RouterLink>
            <RouterLink to="/other">其他页面</RouterLink>
          </nav>
          <!-- 搜索框 -->
          <div class="common_search">
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
          <div class="common_login">
            <el-button>登录</el-button>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">
import {ref,reactive} from "vue"

const input = ref("明朝那些事儿")



</script>

<style scoped>
.common_header {
  width: 100%;
  height: 3.875rem;
  min-width: 62.5rem;
  background-color: #fff;
}

.common_header_wrap {
  width: 62.5rem;
  height: 3.875rem;
  line-height: 3.875rem;
  margin: 0 auto;
}

.logo {
  float: left;
  height: 3.875rem;
}

.common_headerR {
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

.common_search {
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

.common_login {
  float: left;
}



</style>
