<template>
  <div>
    <div class="menu-ctrl">
      <van-icon size="20" name="wap-nav" @click="openMenu" />
    </div>
    <router-view v-slot="{ Component }">
      <keep-alive>
        <transition name="fade">
          <component :is="Component" />
        </transition>
      </keep-alive>
    </router-view>
    <TabBar />
    <Menu ref="menuRef" />
  </div>
</template>

<script lang="ts" setup>
import TabBar from '@/components/TabBar/index.vue'
import Menu from '@/components/Menu/index.vue'
import { ComponentPublicInstance, ref } from 'vue'
let menuRef = ref<ComponentPublicInstance<typeof Menu>>()
const openMenu = () => {
  if (menuRef.value) menuRef.value.open()
}
</script>

<style>
.menu-ctrl {
  position: fixed;
  top: 20px;
  left: 20px;
  height: 40px;
  display: flex;
  align-items: center;
  z-index: 998;
}
</style>
