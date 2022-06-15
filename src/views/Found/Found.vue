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
          delay: 2500,
          disableOnInteraction: false
        }"
      >
        <SwiperSlide v-for="(banner, index) in banners" :key="index">
          <!-- {{ index }} -->
          <img :src="banner.imageUrl" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<script lang="ts" setup>

import { Swiper, SwiperSlide } from 'swiper/vue'
import { getBanner } from '@/api/found/index'

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/effect-cube'
import 'swiper/css/pagination'
import { onMounted, ref } from 'vue'


interface IBanner {
  imageUrl: string
}

let modules = [Navigation, Pagination, Scrollbar, A11y, Autoplay]
let banners = ref<Array<IBanner>>([])

onMounted(() => {
  getBanner().then((res: any) => {
    banners.value = res.data.banners
  })
})
</script>

<style lang="less" scoped>
.home-container {
  width: 100%;
  height: calc(100vh - 120px);
  box-sizing: border-box;
  overflow-y: scroll;
  h1 {
    color: @themeColor;
  }
  .banner {
    width: 100%;
    height: 300px;
    padding: 20px;
    box-sizing: border-box;
  }
  .swiper {
    width: 100%;
    height: 300px;
    border-radius: 10px;
    overflow: hidden;
    .swiper-slide {
      img {
        width: 100%;
        height: 300px;
      }
    }
  }
}
</style>
