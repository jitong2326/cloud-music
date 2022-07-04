import request from '@/utils/axios'

/**
 * 登录
 */
interface IResponseType<P = {}> {
  code?: number
  status: number
  msg: string
  data: P
}
export interface ILogin {
  email: string
  password: string
}

export const getCaptcha = (phone: string) => {
  return request.get('/captcha/sent?phone=' + phone)
}

export const verifyCaptcha = (params: ILogin) => {
  return request.get('/captcha/verify', {
    method: 'get',
    params
  })
}

export const login = (params: ILogin) => {
  return request.get('/login/email', {
    method: 'get',
    params
  })
}
