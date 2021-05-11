<template>
  
  <div class="goodsitem" @click="clickitem">
    <img v-lazy="showimg" alt="" @load="imageload">
    <!-- //load用于监听图片是否加载完成 -->
     <div class="goodsinfo">
       <p>{{goodsitem.title}}</p>
       <span class="price">{{goodsitem.price}}</span>
       <span class="collect">{{goodsitem.cfav}}</span>
     </div>
  
  </div>
</template>

<script>
export default {
name:'goodslistitem',
props:{
  goodsitem:{
    type:Object,
    default(){
      return {}
    }
  }
},
computed:{
showimg(){
  return  this.goodsitem.img|| this.goodsitem.image || this.goodsitem.show.img
  //前面为空则执行后面，
}
},
methods:{
  imageload(){
 this.$bus.$emit('itemimageload','')//也可传参，图片加载完成时，调用此方法发射总线监听，home.vue接收此事件并调用它的方法refesh
  },
  //当处于详情页调用此组件时，不应该发射时间总线给home.vue进行refresh刷新
 //此时就应该根据当前路由判断处于home中还是detail里，在发射不同的时事件总线
 clickitem(){
    this.$router.push('./detail/'+ this.goodsitem.iid)
  }//动态绑定路由
}
}
</script>

<style scoped>
 .goodsitem {
    padding-bottom: 40px;
    position: relative;
     justify-content: space-evenly;
    padding-right:4px ;
    width: 48%; 
  }

  .goodsitem img {
    width: 100%;
    border-radius: 5px;
  }

  .goodsinfo {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goodsinfo p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goodsinfo .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .goodsinfo .collect {
    position: relative;
  }

  .goodsinfo .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: 5px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>