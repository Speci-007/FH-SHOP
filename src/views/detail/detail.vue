<template>
  <div id="detail">
    
   <!-- <div>{{$store.state.cartlist.length}}</div> -->
    <!-- <h1> this is detail {{iid}}</h1> -->
    <detailnavbar  ref="nav" class="detail-nav" @titleclick='bbb'>
     </detailnavbar>
      <scroll class="content" 
      ref="scroll"
      @scroll="scrolling" >
       <!-- <ul v-for="item in $store.state.cartlist">
      <li>{{item}}</li>
    </ul> -->
     <detailswiper :swiperimage="topimage"/>
     <detailbaseinfo :goods="goods"></detailbaseinfo>
         <detailshop :shop ='shops' @click.native="ccc" ref="shops"></detailshop>
       <!-- <div class="desc"> -->
         <!-- <div class="start"></div>
         {{detailinfo.desc }}</div> -->
         <detailgoodsinfo :detail-info ="detailgoodsinfo" @imageLoad="imageLoad"></detailgoodsinfo>
          <detailparames  ref="params" :parames='parames'></detailparames>
         <detailcomment  ref="comment" :commentInfo = 'detailcomments'></detailcomment>
            <goodslist :goods='recommends' ref="recommend"></goodslist>
   </scroll>
<detailbottonbar @addToCart ='addtocart'></detailbottonbar>
<backtop v-show= 'istrue' @click.native="backtopclick"></backtop>
  <!-- <total/> -->
  </div>
</template>

<script>
//在这里做详情页的展示
 import detailbaseinfo from './childcomps/detailbaseinfo'
import detailswiper from './childcomps/detailswiper'
import {detail,Goods,Shop,GoodsParam,getrecommend,debounc} from 'network/detail'
import detailnavbar from './childcomps/detailnavbar'
import detailshop from './childcomps/detailshop'
import detailgoodsinfo from './childcomps/detailgoodsinfo'
import detailparames from './childcomps/detailparames'
import detailcomment from './childcomps/detailcomment'
import detailrecommend from './childcomps/detailrecommend'
import scroll from 'components/common/scroll/scroll'
import goodslist from 'components/content/goods/goodslist'
import detailbottonbar from './childcomps/detailbottonbar'
import Detailbottonbar from './childcomps/detailbottonbar.vue'
import backtop from 'components/content/backtop/backtop'
import toast from 'components/common/toast'
// import {itemmixin} from 'common/mixin'
//混路


import {mapActions} from 'vuex'
// import {mapGetters} from 'vuex'
//映射，将vuex中定义的actions或getters属性映射在这里。从而可以在这里使用属性

export default {
name:'detail',
components:{
detailnavbar,
detailswiper,
detailbaseinfo ,
detailshop,
detailgoodsinfo,
scroll,
detailparames,
detailcomment,
detailrecommend,
goodslist,
detailbottonbar,
Detailbottonbar,
backtop,

},
// mixins:[itemmixin],//混路的使用
data(){
  return{
    iid:null,
    topimage:[],
    goods:{},
    shops:{},
    paramsinfo:{},
   detailgoodsinfo:{},
   parames:{},
   detailcomments:{},
   recommends:[],
   itemimglisten2:null,
   themetopys:[],
   currentindex:0,
   istrue:false,
   numbers:0
  }

},
props:{
  curindex:Number
}
,
created(){
 

  this.iid = this.$route.params.iid//保存从动态路由路径传过来的ID
 detail(this.iid).then(res=>{//发送网络请求获取详情数据
   console.log(res);
 
// console.log( res.result.itemInfo.topImages);
this.topimage = res.result.itemInfo.topImages//获取轮播图的图片保存再传递给detailswiper展示

  const data = res.result;
  // console.log(data);
this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
//创建一个goods实例，就可以通过这个实例访问数据
   this.shops = new Shop(data.shopInfo)
  //  console.log(this.shops.logo);
  // this.detailinfo = data.datailInfo
      this.detailgoodsinfo =  data.detailInfo
  // this.params = new 
  this.parames= new GoodsParam(data.itemParams.info,data.itemParams.rule)
   console.log(this.parames);

   if(data.rate.cRate !== 0){
  this.detailcomments = data.rate.list[0]
  // console.log(this.detailcomments);
  }

// this.$nextTick(()=>{
//   //根据最新的数据，对应的dom是被渲染完，但是图片没有加载完，获取到的offsettop不包含图片

// })

})

//发送网络请求获取推荐数据,然后展示
getrecommend().then(res=>{
  console.log(res);
  this.recommends = res.data.list
})

},
// updated(){
//    this.$refs.scroll.scroll.on('scroll',()=>{
//   console.log('滚动');//监听滚动事件的位置
//   })

// },
// mounted(){
//     this.$refs.scroll.scroll.on('scroll',()=>{
//   console.log('滚动');//监听滚动事件的位置
//   })
// },
mounted(){//此处与home中的mounted为重复部分，可以利用mixin放在一起，使用混路之后在此便不用在写了
const refresh2 = debounc(this.$refs.scroll.refresh,500)
 this.itemimglisten2=()=>{
  // console.log('在detail.vue里监听图片加载完后的刷新次数')
   refresh2()
     }
  this.$bus.$on('itemimageload',this.itemimglisten2)
},


destroyed(){//注意这里不能像home里那样使用diactived,
  this.$bus.$off('itemimageload',this.itemimglisten2)
},
methods:{

...mapActions(['addcart']),//把vuex中的方法属性映射在这里

  addtocart(){//获取商品数据
         const product ={}
         product.image = this.topimage[0]
         product.title = this.goods.title
         product.desc = this.goods.desc
         product.price = this.goods.realPrice
         product.iid = this.iid
        //  console.log(product);
        //将商品添加到购物车，也就是添加商品值vuex里面。我们需要在商品添加成功后显示一个弹窗，所以需要知道
        //什么时候添加成功，通过promise.then,而dispatch方法可以访问到.then
          // this.$store.dispatch('addcart', product).then(res=>{
          //   console.log(res);
          // })   //指定调用vuex中的addcart方法
             this.addcart(product).then((res)=>{
              //  console.log(res[1]);
                //  this.numbers += res[1]
                //  console.log(this.numbers);
           //在此处封装一个弹窗的组件
          this.$toast.show(res,1500)
                  // console.log(this.$toast);




             })
            //这里相当于是在调用detail里 
            }, 













   ccc(){
     console.log( this.$refs.detailshop.$el.offsetTop); 
  },
  backtopclick(){
    console.log(666);

 this.$refs.scroll.scrollTo(0,0)
  },
bbb(index){
  console.log(index);
  // this.$refs.scroll.push()
   this.$refs.scroll.scrollTo(0,(-this.themetopys[index]),200)
},
  scrolling(position){//监听detail滚动的方法
  //  console.log("我正在滚动");
    if(-(position.y)>=600)
  //  console.log(position.y)
{
   this.istrue = true
}else if(-(position.y)<600) 
{
  this.istrue = false
}

 const positionY = -position.y
 const length = this.themetopys.length
for(let i = 0;i<length-1;i++)
{

if(this.currentindex!==i &&(positionY>=this.themetopys[i] && positionY<this.themetopys[i+1])){
  // console.log(i);
     this.currentindex = i
      this.$refs.nav.currentindex = this.currentindex
}
}

  },
  
  imageLoad() {
        this.$refs.scroll.refresh()
        this.themetopys = []
        this.themetopys.push(0)
        this.themetopys.push(this.$refs.params.$el.offsetTop)
        this.themetopys.push(this.$refs.comment.$el.offsetTop)
        this.themetopys.push(this.$refs.recommend.$el.offsetTop)
        this.themetopys.push(Number.MAX_VALUE)
    //  console.log(this.themetopys);
     }
}
}
</script>

<style scoped>
/* .ull{
  width: 100%;

} */
 #detail {
    position: relative;
    z-index: 20;
    background-color: #fff;
    height: 100vh;
  }

  .detail-nav {
    position: relative;
    z-index: 20;
    background-color: #fff;
  }

  .content {
    height: calc(100% - 44px - 49px);
    background-color: #fff;
    position: relative;
    /* z-index: 15; */
  }
</style>