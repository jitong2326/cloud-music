<template>
  <div>
    <!-- <div>header</div> -->
    <router-view v-slot="{ Component }">
      <keep-alive>
        <transition name="fade">
          <component :is="Component" />
        </transition>
      </keep-alive>
    </router-view>
    <TabBar />
  </div>
</template>

<script lang="ts" setup>
import TabBar from '@/components/TabBar/index.vue'
</script>
