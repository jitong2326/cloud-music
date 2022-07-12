import request from '@/utils/axios'

export const getBanner = () => {
  return request.get('/banner')
}

export const getNavList = () => {
  return request.get('/homepage/dragon/ball')
}

export const getFound = () => {
  return request.get('/homepage/block/page')
}
