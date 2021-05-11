<template>
  <div class="check-button">
    <img src="~/assets/img/detail/cart/tick.svg" :class="{check:ischecked}" alt="55">
  </div>
</template>

<script>
export default {
name:'checkbutton',
// data(){
//    return{
//      ischecked:false
//    }
// },
props:{
  ischecked:{
    type:Boolean,
    default: false
 
}
}
}

</script>

<style scoped>
.check-button,img{
  border-radius: 50%;
  border: 0.5px solid #aaa;
}
.check{
  border: 2px solid red;
  background-color:red;
}
</style>