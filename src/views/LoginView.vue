<template>
  <div class="login">
    <div class="login-box">
      <img src="../assets/images/login-logo.png" alt="">

    <div class="profile">
        <span>
          Or Be Classical
        </span>
    </div>

    <div class="mid">

      <el-form :model="dataForm" :rules="dataRule" ref="dataData" @keyup.enter.native="login" status-icon>

        <el-form-item prop="username">
          <el-input class="info" v-model="dataForm.username" placeholder="Email"></el-input>
        </el-form-item>
        
        <el-form-item prop="password">
          <el-input class="info" v-model="dataForm.password" type="password" placeholder="Password" show-password></el-input>
        </el-form-item>
        
        <el-button :loading="loading" type="primary" @click.native.prevent="login">LETS GO</el-button>
      
      </el-form>
    </div>

  </div>

    <div class="bottom">Copyright © 2025 王哥出品</div>
  </div>
</template>

<script setup lang=ts>
import { ref, reactive, onMounted } from 'vue';
import useUserStore from '@/store/user'
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();

let dataForm = reactive({
  username: 'admin',
  password: 'admin',
});

let dataRule = reactive({
  username: [
    { required: true, message: '帐号不能为空', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '密码不能为空', trigger: 'blur' }
  ],
  // captcha: [
  //   { required: true, message: '验证码不能为空', trigger: 'blur' }
  // ]
});

let loading = ref(false);

let redirect = ref('');

let otherQuery = reactive({})

const userStore = useUserStore()

const login = () => {
  userStore.Login({ username: 'wx', password: dataForm.password })
    .then(() => {
      router.push({ path: redirect.value || '/', query: otherQuery })
    })
    .catch(error => {
      console.log(error);
    })

}
</script>

<style scoped>
.login {
  width: 100%;
  height: 100%;
  background: url(../assets/images/login-bg.png) no-repeat;
  background-size: cover;
  position: fixed;
}

.login .login-box {
  position: absolute;
  left: 50%;
  top: 20%;
  transform: translateX(-50%);
}

.login .login-box .profile{
  text-align: center;
}

.login .login-box .mid {
  position: absolute;
  left: 50%;
  top: 25%;
  width: 21rem;
  transform: translateX(-50%);
  padding: 50% 7% 12%;
  z-index: -1;
  background-color: #fff;
  border-radius: 3%;
}

.login .login-box .mid button {
  width:100%;
}

.login .bottom {
  position: absolute;
  bottom: 5%;
  width: 100%;
  color: #fff;
  font-size: 1.25rem;
  text-align: center;
}
</style>