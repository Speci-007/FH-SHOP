<template>
  <div class="button-bar">
<div class="check-content">

    <checkbutton :ischecked='isselectall'  class="check-button" @click.native="checkall"></checkbutton>
    <span>全选</span>
</div>
   <div class="total">
     合计:{{totalprice}}
   </div>
   <div class="calculate" @click="aaa">
     结算:{{totalnumber}}
   </div>
  </div>
</template>

<script>
 import checkbutton from './checkbutton'

export default {
 
   name:'cartbuttonbar',
   data(){
     return{
       ischeck:false
     }
   },
   components:{
     checkbutton,
  
   },
   computed:{
      totalprice() {
       return '￥'+ this.$store.state.cartlist.filter(item => {
          return item.checked
        }).reduce((preValue, item) => {
          return preValue + item.count * item.price
        }, 0).toFixed(2)
      },
      totalnumber(){
        return this.$store.state.cartlist.filter(item=>{
          return item.checked 
        }).length
      

      },
      isselectall(){
       if(this.$store.state.cartlist.length===0)
       return false
      else {
        return  this.$store.state.cartlist.every(item=>
            item.checked
           )
         
          }
      }
   }
   ,
   methods:{
     aaa(){
 console.log(this.$store.state.cartlist);
     },
     checkall(){
        //  this.ischecked = !this.ischecked 
          if(this.isselectall){
         this.$store.state.cartlist.forEach((item,index)=>{
          item.checked = false
         })}
         else{
          this.$store.state.cartlist.forEach((item,index)=>{
           item.checked = true
 })
 }
         }
   
   }
   }

   
</script>

<style scoped>
.button-bar{
  height: 48px;
  background-color:#eee;
  position: relative;
  display: flex;
  justify-content:space-between;
  
}
.check-button{
  width: 19px ;
  height: 19px;
  margin-right: 8px;
  
}
.check-content{
  display: flex;
  align-items: center;
  /* padding-top:5px ; */
}
.total {
  margin-left:60px ;
  margin-top: 14px;
}
.calculate{
  margin-right:0px ;
  height: 100%;
 width: 80px;
  background-color:rgb(127, 174, 236);
  line-height: 48px;
  text-align: center;

}

</style>