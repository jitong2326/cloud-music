// stores/counter.js
import { defineStore } from 'pinia'
import variable from '@/style/variable.module.less'
interface ITheme {
  themeColor?: string
}
interface ISettingState {
  activeTab: string,
  variable: ITheme
}
export const useSettingStore = defineStore('counter', {
  state: () : ISettingState => {
    return {
      activeTab: 'found',
      variable
    }
  },
  getters: {
    cssVar: (state) => state.variable
  },
  actions: {
    switchActiveTab(newTab: string): void {
      this.activeTab = newTab
    }
  }
})
