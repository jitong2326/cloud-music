<template>
  <div class="home-container">
    <div class="home-header"></div>
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
      <div v-for="(e, i) in navList" :key="i" class="nav-item">
        <div
          v-if="settingStore.cssVar"
          class="nav-icon"
          :style="{
            backgroundColor: `${settingStore.cssVar.themeColor}11`,
            position: 'relative'
          }"
        >
          <svg-icon
            class="nav-icon-item"
            :name="e.iconName"
            :color="settingStore.cssVar.themeColor"
          >
          </svg-icon>
          <span v-if="i === 0" class="days-icon">{{ new Date().getDate() }}</span>
        </div>
        <span class="nav-item-title">{{ e.name }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { getBanner, getNavList, getFound } from '@/api/modules/found'
import { navList } from '@/config/config'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper'
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

let settingStore = useSettingStore()
onMounted(async () => {
  await loadBanner()
  await loadBlocks()
})


let banners = ref<Array<IBanner>>([])
const loadBanner = async (): Promise<void> => {
  let res = await getBanner()
  banners.value = res.data.banners
}



let blocks = ref([])
const loadBlocks = async (): Promise<void> => {
  let res = await getFound()
  blocks.value = res.data.data.blocks
  console.log(blocks.value)
}
</script>

<style lang="less">
.home-container {
  width: 100%;
  height: calc(100vh - 120px);
  box-sizing: border-box;
  padding: 20px;
  overflow-y: scroll;
  .home-header {
    height: 40px;
    margin-bottom: 20px;
  }
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
        width: 100px;
        height: 100px;
        border-radius: 50%;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;
        &-item {
          width: 60px;
          height: 60px;
        }
      }
      // .icon-fm {
      //   width: 60px;
      //   height: 60px;
      // }
      .nav-item-title {
        font-size: 12px;
        color: @text-color-gray;
      }
    }
  }
  .days-icon {
    display: flex;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    line-height: 100%;
    justify-content: center;
    align-items: center;
    padding-top: 20%;
    box-sizing: border-box;
    font-size: 12px;
    color: #ffffff;
  }
}
</style>
