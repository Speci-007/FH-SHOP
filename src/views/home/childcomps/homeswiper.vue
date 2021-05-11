<template>
  <swiper>
    <swiper-item v-for="item in banners" :key="item.id" >
<a :href="item.link">
<img :src="item.image" alt="" @load="imageload">
</a>
    </swiper-item>
  </swiper>
</template>

<script>
 import {Swiper,SwiperItem} from 'components/common/swiper'

export default {
name:'homeswiper',
data(){
  return{
    isload:false 
  }
},
 props: {
      banners: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods:{
      imageload(){
  if(!this.isload){
    this.$emit('imageloadover')
    this.isload = true
  }
      }
    },
components:{
Swiper,SwiperItem
}
}
</script>

<style>

</style>