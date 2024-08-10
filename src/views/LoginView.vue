<template>
  <div class="login">
    <div class="login-box">
      <div class="top">
        <div class="logo"><img src="../assets/images/login-logo.png" alt=""></div>
      </div>
      <div class="mid">
        <el-form :model="dataForm" :rules="dataRule" ref="dataForm" @keyup.enter.native="dataFormSubmit()" status-icon>
          <el-form-item prop="userName">
            <el-input class="info" v-model="dataForm.userName" placeholder="帐号"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input class="info" v-model="dataForm.password" type="password" placeholder="密码"></el-input>
          </el-form-item>
          <!-- <el-form-item prop="captcha">
            <el-row :gutter="20">
              <el-col :span="14">
                <el-input v-model="dataForm.captcha"
                          placeholder="验证码">
                </el-input>
              </el-col>
              <el-col :span="10"
                      class="login-captcha">
                <img :src="captchaPath"
                     @click="getCaptcha()"
                     alt="">
              </el-col>
            </el-row>
          </el-form-item> -->
          <el-form-item>
            <div class="item-btn"><input type="button" value="登录" @click="login()">
            </div>
            <!-- <div class="item-btn"><input type="button"
                    value="登录"
                    @click="dataFormSubmit()">
            </div> -->
          </el-form-item>
        </el-form>
      </div>

      <div class="bottom">Copyright © 2019 广州市蓝海创新科技有限公司</div>
    </div>
    <!-- <Verify
      ref="verify"
      :captcha-type="'blockPuzzle'"
      :img-size="{width:'400px',height:'200px'}"
      @success="login"
    /> -->
  </div>
</template>

<script setup lang=ts>
import { ref, reactive, onMounted } from 'vue';

let dataForm = reactive({
  userName: '',
  password: '',
  uuid: '',
  captcha: ''
});

let dataRule = reactive({
  userName: [
    { required: true, message: '帐号不能为空', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '密码不能为空', trigger: 'blur' }
  ],
  captcha: [
    { required: true, message: '验证码不能为空', trigger: 'blur' }
  ]
});

let captchaPath = ref('');

    // 提交表单
   const dataFormSubmit = ()=> {}

   const login = ()=> {}
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
  transform: translateX(-50%);
  height: 100%;
  padding-top: 10%;
}

.login .login-box .top {
  margin-bottom: 30px;
  text-align: center;
}

.login .login-box .top .logo {
  font-size: 0;
  max-width: 50%;
  margin: 0 auto;
}

.login .login-box .top .company {
  font-size: 16px;
  margin-top: 10px;
}

.login .login-box .mid {
  font-size: 14px;
}

.login .login-box .mid .item-btn {
  margin-top: 20px;
}

.login .login-box .mid .item-btn input {
  border: 0;
  width: 100%;
  height: 40px;
  box-shadow: 0;
  background: #1f87e8;
  color: #fff;
  border-radius: 3px;
}

.info {
  width: 410px;
}

.login-captcha {
  height: 40px;
}

.login .login-box .bottom {
  position: absolute;
  bottom: 10%;
  width: 100%;
  color: #999;
  font-size: 12px;
  text-align: center;
}
</style>