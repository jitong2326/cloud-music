<template>
  <div class="login-form">
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field v-model="email" name="邮箱" placeholder="邮箱" />
        <div class="login-captcha">
          <van-field v-model="password" name="密码" placeholder="密码" />
        </div>
      </van-cell-group>
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit"> 登录 </van-button>
      </div>
    </van-form>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useUserStore } from '@/store/user'

const email = ref('')
const password = ref('')

const userStore = useUserStore()
const onSubmit = () => {
  userStore.login({
    email: email.value,
    password: password.value
  })
}
</script>

<style lang="less" scoped>
.login-form {
  height: 100vh;
  padding-top: 400px !important;
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
