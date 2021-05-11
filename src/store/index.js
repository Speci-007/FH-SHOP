import vue from 'vue'
import vuex from 'vuex'

vue.use(vuex)
const store =new vuex.Store({
  state:{
    cartlist:[]
  },
  
  mutations:{//这里离这样做的原因是mutation里最好实现单一功能
    addcounter(state,payload){
        payload.count++
    },
    addtocart(state,payload){
      payload.checked= true
      state.cartlist.push(payload)}
  },
  actions:{
  addcart(context, payload) {
    return new Promise((res,rej)=>{
      let oldproduct = context.state.cartlist.find(item => item.iid === payload.iid)//查找数组之前有无该商品

      if (oldproduct) {
        // oldproduct.count += 1
        //添加存在的商品数量
        context.commit('addcounter', oldproduct)
        res(`添加成功, 在购物车等亲~ 数量+1`)
      } else {
        payload.count = 1
    
        // state.cartlist.push(payload)
        //添加不存在的商品

        context.commit('addtocart', payload)
        res('添加成功，购物车商品+1')
      }
    // state.cartlist.push(payload)//将商品添加到购物车里，但这样的话无法辨别商品是否不同
    })
  }
  }



})
export default store