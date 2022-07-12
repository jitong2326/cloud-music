import { storage } from '@/utils/Storage'
import { PageEnum } from '@/enums/pageEnum'
import { Router } from 'vue-router'
const LOGIN_PATH = PageEnum.BASE_LOGIN
const whitePathList = [LOGIN_PATH]

export function createRouterGuards(router: Router) {
  router.beforeEach(async (to, from, next) => {
    if (from.path === LOGIN_PATH && to.name === 'errorPage') {
      next(PageEnum.BASE_HOME)
      return
    }
    if (whitePathList.includes(to.path as PageEnum)) {
      next()
      return
    }
    const token = storage.get('ACCESS_TOKEN')
    if (!token) {
      if (to.meta.ignoreAuth) {
        next()
        return
      }
      console.log(22222222)
      const redirectData: { path: string; replace: boolean; query?: any } = {
        path: LOGIN_PATH,
        replace: true
      }
      if (to.path) {
        redirectData.query = {
          ...redirectData.query,
          redirect: to.path
        }
      }
      next(redirectData)
      return
    } else {
      next()
      return
    }
  })
  // router.onError((error) => {
  //   console.log(error, '路由错误');
  // })
}
