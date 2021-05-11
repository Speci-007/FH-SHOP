<template>
<div class="goods">
<goodslistitem v-for='item in goods' :goodsitem='item' :key='item.id'>

</goodslistitem>

</div>


</template>

<script>
import goodslistitem from './goodslistitem'
// import goodslistitem from './goodslistitem'
export default {
name:'goodslist',
components:{
  goodslistitem,
},
props:{
    goods:{
      type:Array,
      default(){
        return[]
      }
    }
},

}
</script>

<style>

.goods {

display:flex;
flex-wrap: wrap;
}
</style>