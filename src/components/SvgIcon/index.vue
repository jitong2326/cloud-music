<template>
  <svg :class="svgClass" v-bind="$attrs" :style="{ color: svgColor }">
    <use :xlink:href="iconName" rel="external nofollow" />
  </svg>
</template>

<script lang="ts" setup>
import { computed, ref, watch } from 'vue'

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: ''
  }
})

let svgColor = ref<string>(props.color)
watch(
  () => props.color,
  (newValue: string) => {
    svgColor.value = newValue
  }
)

const iconName = computed(() => `#icon-${props.name}`)
const svgClass = computed(() => {
  console.log(props.name, 'props.name')
  if (props.name) {
    return `svg-icon icon-${props.name}`
  }
  return 'svg-icon'
})
</script>

<style lang="less">
.svg-icon {
  width: 1em;
  height: 1em;
  fill: currentColor;
  vertical-align: middle;
}
</style>
