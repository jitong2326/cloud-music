import request from '@/utils/axios'

export const getUserInfo = () => {
  return request.get('/homepage/dragon/ball')
}

