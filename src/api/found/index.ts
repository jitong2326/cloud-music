import request from '@/utils/request'

export const getBanner = () => {
  return request.get('/banner')
}
