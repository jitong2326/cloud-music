<template>
  <div class="tabs-wrapper">
    <div v-for="tab in tabs" :key="tab.name">
      {{ tab.name }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
interface tabItem {
  name: string
  target: string
  icon: string
  active: boolean
}

let tabs = reactive<Array<tabItem>>([
  {
    name: '发现',
    icon: '',
    target: '',
    active: false
  },
  {
    name: '我的',
    icon: '',
    target: '',
    active: false
  },
  {
    name: '关注',
    icon: '',
    target: '',
    active: false
  }
])
</script>

<style lang="less" scoped>
.tabs-wrapper {
  width: 100%;
  height: 80px;
}
</style>
