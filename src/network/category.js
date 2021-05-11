//这里是请求category的数据
import {request} from './request'

export function getcategory(){
  return request({
    url:'/category'
  })
}


export function getsubcategory(maitKey) {
  return request({
    url: '/subcategory',
    params: {
      maitKey
    }
  })
}

export function getcategorydetail(miniWallkey, type) {
  return request({
    url: '/subcategory/detail',
    params: {
      miniWallkey,
      type
    }
  })
}
