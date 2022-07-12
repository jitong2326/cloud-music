<template>
  <div class="container">
    <div class="logo-box">
      <svg-icon name="logo" color="#FFFFFF"></svg-icon>
    </div>
    <div class="place"></div>
    <div class="login-form">
      <van-form @submit="onSubmit">
        <van-cell-group inset>
          <van-field v-model="email" name="邮箱" placeholder="邮箱" />
          <div class="login-captcha">
            <van-field v-model="password" name="密码" placeholder="密码" />
          </div>
        </van-cell-group>
        <div style="margin: 16px">
          <van-button round block type="primary" color="#FFFFFF" native-type="submit">
            <span style="color: #dd2d1e">登录</span>
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useUserStore } from '@/store/user'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')

const userStore = useUserStore()
const router = useRouter()
const onSubmit = async () => {
  const res = await userStore.login({
    email: email.value,
    password: password.value
  })
  if (res?.data.code === 200) {
    router.push({
      path: '/found'
    })
  }
  // router.push({
  //   path: '/found'
  // })
}
</script>

<style lang="less" scoped>
.container {
  height: 100vh;
  background-color: #dd2d1e;
  overflow: hidden;
  .logo-box {
    width: 160px;
    height: 160px;
    border-radius: 50%;
    background-color: #eb2d21;
    display: flex;
    justify-content: center;
    align-content: center;
    margin: 10vh auto 0;
    .icon-logo {
      width: 140px;
      height: 140px;
    }
  }
}
.login-form {
  width: 100%;
  box-sizing: border-box;
  padding: 0 5vw;
  margin-top: 10vh;
}
.login-captcha {
  display: flex;
  align-items: center;
  &-btn {
    width: 240px;
    height: 60px;
    line-height: 50px;
    text-align: center;
    box-sizing: border-box;
    padding: 5px 10px;
    border-radius: 30px;
    color: #57606f;
    border: 1px solid #57606f;
  }
}
</style>
