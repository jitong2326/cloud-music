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

<script lang="ts">
import TabBar from '@/components/TabBar/index.vue'
import { defineComponent } from 'vue-demi'
export default defineComponent({
  name: 'BasicLayout',
  components: {
    TabBar
  }
})
</script>
