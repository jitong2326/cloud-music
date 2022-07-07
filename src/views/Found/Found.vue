<template>
  <div class="home-container">
    <div class="banner">
      <Swiper
        :modules="modules"
        :loop="true"
        navigation
        :pagination="{ clickable: true }"
        :scrollbar="{ draggable: true }"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false
        }"
      >
        <SwiperSlide v-for="(banner, index) in banners" :key="index" class="swiper-slide">
          <!-- {{ index }} -->
          <img :src="banner.imageUrl" alt="" />
          <div class="banner-tag" :style="{ backgroundColor: banner.titleColor }">
            {{ banner.typeTitle }}
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    <div class="nav">
      <div v-for="e in 8" :key="e" class="nav-item">
        <div
          v-if="settingStore.cssVar"
          class="nav-icon"
          :style="{
            backgroundColor: '#ecfafd'
          }"
        >
          <svg-icon name="playlists" :color="settingStore.cssVar.themeColor"></svg-icon>
        </div>
        <span class="nav-item-title">歌单</span>
      </div>
    </div>
    <Menu />
  </div>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { getBanner } from '@/api/modules/found'

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper'
import Menu from '@/components/Menu/index.vue'
import 'swiper/css'
import 'swiper/css/effect-cube'
import 'swiper/css/pagination'
import { onMounted, ref } from 'vue'
import { useSettingStore } from '@/store/setting'

interface IBanner {
  imageUrl: string
  typeTitle: string
  titleColor: string
  targetType: number
  targetId: bigint
}

let modules = [Navigation, Pagination, Scrollbar, A11y, Autoplay]
let banners = ref<Array<IBanner>>([])

let settingStore = useSettingStore()
onMounted(async () => {
  let res = await getBanner()
  banners.value = res.data.banners
})
// const changeThemeCOlor = () => {
//   settingStore.setThemeColor('#21cedf')
//   console.log(settingStore.cssVar.themeColor)
// }
</script>

<style lang="less">
.home-container {
  width: 100%;
  height: calc(100vh - 120px);
  box-sizing: border-box;
  padding: 20px;
  overflow-y: scroll;
  h1 {
    color: @themeColor;
  }
  .banner {
    width: 100%;
    height: 340px;
    box-sizing: border-box;
  }
  .swiper {
    width: 100%;
    height: 100%;
    border-radius: 22px;
    overflow: hidden;
    .swiper-slide {
      position: relative;
      img {
        width: 100%;
        height: 100%;
      }
      .banner-tag {
        position: absolute;
        right: 0;
        bottom: 0;
        color: #ffffff;
        padding: 10px;
        border-radius: 22px 0 22px 0;
        font-size: 12px;
      }
    }
  }
  .nav {
    display: flex;
    margin-top: 30px;
    overflow-x: scroll;
    &::-webkit-scrollbar {
      width: 0 !important;
    }
    &::-webkit-scrollbar {
      width: 0 !important;
      height: 0;
    }
    // background-color: blueviolet;
    .nav-item {
      padding: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 0 12px;
      .nav-icon {
        width: 90px;
        height: 90px;
        border-radius: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;
      }
      .icon-playlists {
        width: 60px;
        height: 60px;
      }
      .nav-item-title {
        font-size: 12px;
        color: @text-color-gray;
      }
    }
  }
}
</style>
