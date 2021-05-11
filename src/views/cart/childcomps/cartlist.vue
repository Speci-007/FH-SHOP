<template>
  <div class="cart-list">
   <!-- <ul v-for="item in cartlist" :key="item.iid">
     <li>{{item}}</li></ul> -->
    <cartlistitem v-for="(item, index) in cartlist" 
    :iteminfo='item' 
    :key="index">

    </cartlistitem>
  </div>
</template>

<script>
import cartlistitem from './cartlistitem'
export default {
name:"cartlist",
components:{
  cartlistitem
},
updated(){
console.log(this.$store.state.cartlist)
},
computed:{
  cartlist(){
    return this.$store.state.cartlist
  }
}
}
</script>

<style>

</style>