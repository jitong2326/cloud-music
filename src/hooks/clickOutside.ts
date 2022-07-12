/* 功能：传入一个DOM对象，判断是否点击除本身以外的其他dom上 */
import { Ref, ref, onMounted, onUnmounted } from 'vue'

interface Result {
  isClickOutside: Ref<boolean>
}
const useClickOutside = (DOM: Ref<null | HTMLElement>, cb: () => void): Result => {
  const isClickOutside = ref(false) // 是否点击到外部DOM
  const handler = (e: MouseEvent) => {
    // MouseEvent为ts内置类型
    // 直接写DOM.value.contains，ts会报错可能为null，所以要多个DOM.value判断
    // contains判断一个标签是否包含另一个标签，e.target不一定每次点击的都是Dom，ts提示可能是null，所以要断言一下
    if (DOM.value && DOM.value.contains(e.target as HTMLElement)) {
      isClickOutside.value = false
    } else {
      isClickOutside.value = true
      cb()
    }
  }
  onMounted(() => {
    document.addEventListener('click', handler) // document上加click监听事件
  })
  onUnmounted(() => {
    document.removeEventListener('click', handler)
  })
  return { isClickOutside }
}

export default useClickOutside
