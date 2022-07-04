import request from '@/utils/axios'

export const getBanner = () => {
  return request.get('/banner')
}
