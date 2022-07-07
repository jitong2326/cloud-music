<template>
  <div
    v-if="showMenu"
    class="menu-container"
    @touchstart.stop="touchStart"
    @touchend.stop="touchEnd"
    @touchmove.stop="touchMove"
  >
    <div class="menu-mask" :style="{ backgroundColor: maskOpacity }" @click.stop="close">
      <div
        :class="['menu-side', { 'menu-side-transition': useTransition }]"
        :style="{
          width: `${menuWidth}vw`,
          left: `${menuLeft}`
        }"
      >
        111111
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const menuWidth = 85
let menuLeft = ref<string>('0')
let maskOpacity = ref<string>('rgba(0, 0, 0, 0.5)')
let showMenu = ref<boolean>(true)
let useTransition = ref<boolean>(true)

const pxToVw = (px: number): number => {
  return px / (document.body.clientWidth / 100)
}

const close = () => {
  menuLeft.value = `-${menuWidth}vw`
  maskOpacity.value = 'rgba(0, 0, 0, 0)'
  setTimeout(() => {
    showMenu.value = false
  }, 200)
}

let startX = 0
let offsetX = 0
const touchStart = (e: any) => {
  useTransition.value = false
  startX = e.touches[0].pageX
}

const touchMove = (e: any) => {
  if (!startX) return
  useTransition.value = false
  offsetX = startX - e.touches[0].pageX
  menuLeft.value = `-${pxToVw(offsetX)}vw`
}
const touchEnd = (e: any) => {
  useTransition.value = true
  if (pxToVw(offsetX) > menuWidth / 2) {
    menuLeft.value = `-${menuWidth}vw`
    maskOpacity.value = 'rgba(0, 0, 0, 0)'
  } else {
    menuLeft.value = '0'
  }
}
</script>

<style lang="less" scoped>
.menu-container {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  .menu-mask {
    position: relative;
    width: 100vw;
    height: 100vh;
    transition: background 0.2s ease-in-out;
    .menu-side {
      position: absolute;
      height: 100vh;
      background-color: #fff;
      &-transition {
        transition: left 0.2s ease-in-out;
      }
    }
  }
}
</style>
