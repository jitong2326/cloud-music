// stores/counter.js
import { defineStore } from 'pinia'
import variable from '@/style/variable.module.less'
import { storage } from '@/utils/Storage'
interface ITheme {
  themeColor: string
}
interface ISettingState {
  activeTab: string
  variable: ITheme
}
export const useSettingStore = defineStore('setting', {
  state: (): ISettingState => {
    return {
      activeTab: 'found',
      variable: {
        themeColor: storage.get('THEME_COLOR') || variable.themeColor
      }
    }
  },
  getters: {
    cssVar(state) {
      return state.variable
    }
  },
  actions: {
    switchActiveTab(newTab: string): void {
      this.activeTab = newTab
    },
    setThemeColor(newThemeCOlor: string): void {
      this.variable.themeColor = newThemeCOlor
      storage.set('THEME_COLOR', newThemeCOlor)
    }
  }
})
