<template>
    <swiper class="detail-swiper">
    <swiper-item  :key="item" v-for="item in swiperimage">
      <img :src="item" alt="" @load="isload()">
    </swiper-item>
  </swiper>

</template>

<script>
import {Swiper , SwiperItem} from 'components/common/swiper'

export default {
name:'detailswiper',
components:{
  Swiper,
  SwiperItem
},
props:{
  swiperimage:{
    type:Array,
    default(){
      return []
    }
  }
},
methods:{
  isload(){
    // console.log('图片已加载');
  }
}
}
</script>

<style>

.detail-swiper{
height: 300px;
overflow: hidden;
}
</style>