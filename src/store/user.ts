// stores/counter.js
import { defineStore } from 'pinia'
import { login, ILogin } from '@/api/modules/login'
import { createStorage } from '@/utils/Storage'
const storage = createStorage()
interface IUserState {
  token: string
}
export const useUserStore = defineStore('counter', {
  state: (): IUserState => {
    return {
      token: ''
    }
  },
  actions: {
    setToken(token: string) {
      this.token = token
    },
    login(params: ILogin) {
      login(params).then((res) => {
        console.log(res)
        const ex = 7 * 24 * 60 * 60 * 1000
        storage.set('ACCESS_TOKEN', res.data.token, ex)
        this.setToken(res.data.token)
      })
    }
  }
})
