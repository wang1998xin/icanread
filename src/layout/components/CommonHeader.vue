<template>
  <div class="common_header">
    <div class="common_header_log">
      <div class="common_header_left">
        <img alt="Vue logo" class="common_header_logo" src="@/assets/logo.svg" width="25" />
        <span class="common_header_title">iCanRead</span>
      </div>
      <div class="common_header_right">
        <!-- 顶级路由导航 -->
        <div class="common_header_route">
          <RouterLink to="/">主页</RouterLink>
          <RouterLink to="/imageEditorView">图片编辑页</RouterLink>
          <RouterLink to="/other">其他页面</RouterLink>
          <RouterLink to="/permission">阅读页面</RouterLink>
        </div>
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
        <!-- 登录 -->
        <div class="common_login">
          <el-button @click.native.prevent="logout">
            退出登录
          </el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import useUserStore from "@/store/user"
import { ref, reactive } from "vue"
import { useRoute, useRouter } from 'vue-router';
import usePermissionStore from '@/store/permission'

const permissionStore = usePermissionStore()
const permission_routes = permissionStore.PermissionRoutes()

const input = ref("明朝那些事儿")

const userStore = useUserStore()

const router = useRouter();
const route = useRoute();

const logout = async () => {
  await userStore.LogOut()
  router.push(`/login?redirect=${route.fullPath}`)
}

</script>

<style scoped>
.common_header {
  position: relative;        
  width: 100%;
  min-width: 62.5rem;
}

.common_header::before{
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: url('../../assets/images/commonhead-bg.jpg');
    opacity: 0.5;
    z-index: -1;
}

.common_header_title {
  font-size: 14px;
  padding: 0 0 0 1rem;
}

.common_header_log {
  width: 62.5rem;
  height: 15rem;
  margin: 0 auto;
}

.common_header_left {
  float: left;
  height: 8rem;
  display: flex;
  align-items: center;
}

.common_header_right {
  float: right;
  height: 8rem;
  display: flex;
  align-items: center;
}

.common_header_route {
  float: left;
  font-size: .875rem;
}

.common_header_route a.router-link-exact-active {
  color: var(--color-text);
}

.common_header_route a.router-link-exact-active:hover {
  background-color: transparent;
}

.common_header_route a {
  display: inline-block;
  padding: 0 1rem;
  /* border-left: .0625rem solid var(--color-border); */
}

/* .common_header_route a:first-of-type {
  border: 0;
} */

.common_search {
  float: left;
  position: relative;
}

.el-input {
  padding: 0 2rem 0 .75rem;
  font-size: .75rem;
}

.el-icon {
  position: absolute;
  right: 2.8125rem;
  top: 0.625rem;
}

.common_login {
  float: left;
}
</style>
