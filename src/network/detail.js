//这里是对详情页的网络请求
import {request} from './request'

export function detail(iid){
     return request({
       url:'/detail',
       params:{
         iid
       }
      }
     )
    }


export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.services = services
    this.realPrice = itemInfo.lowNowPrice
  }
}
export class Shop {
   constructor(shopInfo)
    {
     this.logo = shopInfo.shopLogo;
     this.name = shopInfo.name;
     this.fans = shopInfo.cFans;
     this.sells = shopInfo.cSells;
     this.score = shopInfo.score;
     this.goodsCount = shopInfo.cGoods
    }

}
export class GoodsParam {
  constructor(info, rule) {
    // 注: images可能没有值(某些商品有值, 某些没有值)
    this.image = info.images ? info.images[0] : '';
    
    this.infos = info.set;
    this.sizes = rule.tables;
  }
}

 export  function debounc(func, delay) {
  let timer = null
  return function (...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
    //定义一个防抖函数
  }
}
export function getrecommend(){
return request ({
  url:'/recommend'
})
}