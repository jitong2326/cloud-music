<template>
  <div class="tabs-wrapper">
    <div v-for="tab in tabs" :key="tab.name" class="tabs-item" @click="handleClickTab(tab)">
      <div
        :class="{ 'icon-wrapper': true }"
        :style="{
          backgroundColor: tab.icon === setting.activeTab ? setting.cssVar.themeColor : '#FFFFFF'
        }"
      >
        <svg-icon
          class="tab-icon-item"
          :name="tab.icon"
          :color="tab.icon === setting.activeTab ? '#FFFFFF' : '#515151'"
        />
      </div>
      <span
        :style="{ color: tab.icon === setting.activeTab ? setting.cssVar.themeColor : '#515151' }"
        >{{ tab.name }}</span
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useSettingStore } from '@/store/setting'
interface ITabItem {
  name: string
  target: string
  icon: string
}

let tabs = reactive<Array<ITabItem>>([
  {
    name: '发现',
    icon: 'found',
    target: 'found'
  },
  {
    name: '音乐',
    icon: 'music',
    target: 'music'
  },
  {
    name: '关注',
    icon: 'focus',
    target: 'focus'
  }
])

const setting = useSettingStore()
let themeColor = ref<string>(setting.cssVar.themeColor)

const router = useRouter()
const handleClickTab = (tab: ITabItem): void => {
  console.log(setting.activeTab)
  if (tab.icon !== setting.activeTab) {
    setting.switchActiveTab(tab.icon)
    router.push({
      path: `/${tab.target}`
    })
  }
}

watch(
  () => router.currentRoute.value.path,
  (newValue) => {
    const findTab = tabs.find((tab) => newValue.includes(tab.target))
    if (findTab) {
      setting.switchActiveTab(findTab?.icon)
    }
  },
  { immediate: true }
)
</script>

<style lang="less" scoped>
.tabs-wrapper {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 120px;
  display: flex;
  background-color: #ffffff;
  .tabs-item {
    height: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    box-sizing: border-box;
    padding: 15px 0;
    font-size: 14px;
    color: #515151;
    .icon-wrapper {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      .tab-icon-item {
        width: 60px !important;
        height: 60px !important;
      }
      .icon {
        &-found,
        &-music,
        &-focus {
          width: 60px;
          height: 60px;
        }
      }
      .icon-found {
        width: 60px;
        height: 60px;
      }
    }
  }
}
</style>
