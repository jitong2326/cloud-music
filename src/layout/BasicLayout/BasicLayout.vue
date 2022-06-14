<template>
  <div>header</div>
  <keep-alive>
    <router-view></router-view>
  </keep-alive>
  <TabBar />
</template>

<script lang="ts" setup>
import TabBar from '@/components/TabBar/TabBar.vue';
</script>