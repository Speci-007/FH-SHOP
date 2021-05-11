<template>
  
  <gridview>
    <goodslistitem v-for="(item,index) in categorydetail" :key="index"
    :goodsitem ='item'
    class="goodsitem"></goodslistitem>
  </gridview>
</template>

<script>
import goodslistitem from 'components/content/goods/goodslistitem'
import  gridview from 'components/common/gridview/gridview'
export default {
name:'tabcontentdetail',
components:{
  goodslistitem,
  gridview
},
props:{
  categorydetail:{
    type:Array,
    default(){
      return []
    }
  }
}

}
</script>

<style scoped>
.goodsitem{
  width: 100px;
  /* height: 100px; */
}
</style>