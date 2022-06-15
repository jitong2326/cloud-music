<template>
  <!-- <div>header</div> -->
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>
  <TabBar />
</template>

<script lang="ts" setup>
import TabBar from '@/components/TabBar/index.vue'
</script>
