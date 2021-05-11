//对首页所有的URL请求进行管理
//就无须去request.js中请求
import {request} from './request'
export function gethomedata(){
 return request(
   {
     url:'/home/multidata'
   }
 )

}
export function gethomegoods(type,page){
return request({
  url:'/home/data',
  params:{
    type,page
  }
})
}

export function debounc(func, delay) {
  let timer = null
  return function (...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
    //定义一个防抖函数
  }
}