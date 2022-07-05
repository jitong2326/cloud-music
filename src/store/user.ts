// stores/counter.js
import { defineStore } from 'pinia'
import { login, ILogin } from '@/api/modules/login'
import { createStorage } from '@/utils/Storage'
import router from '@/router/index'
const storage = createStorage()
interface IUserState {
  token: string
  account: any
  bindings: Array<any>
  profile: any
  cookie: string
}
export const useUserStore = defineStore('user', {
  state: (): IUserState => {
    return {
      token: '',
      account: {},
      profile: {},
      bindings: [],
      cookie: ''
    }
  },
  actions: {
    setToken(token: string) {
      this.token = token
    },
    setAccount(account: any) {
      this.account = account
    },
    setProfile(profile: any) {
      this.profile = profile
    },
    setCookie(cookie: string) {
      this.cookie = cookie
    },
    setBindings(bindings: Array<any>) {
      this.bindings = bindings
    },
    async login(params: ILogin) {
      try {
        const res = await login(params)
        if (res.data.code === 200) {
          const ex = 7 * 24 * 60 * 60 * 1000
          storage.set('ACCESS_TOKEN', res.data.token, ex)
          storage.set('COOKIE', res.data.cookie)
          storage.set('ACCOUNT', res.data.account)
          storage.set('BINDINGS', res.data.bindings)
          storage.set('PROFILE', res.data.profile)
          this.setToken(res.data.token)
          this.setCookie(res.data.cookie)
          this.setAccount(res.data.account)
          this.setBindings(res.data.bindings)
          this.setProfile(res.data.profile)
        }
        return Promise.resolve(res)
      } catch (e) {
        Promise.reject(e)
      }
    }
  }
})
