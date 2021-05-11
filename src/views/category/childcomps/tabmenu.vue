<template>
 
    
  <scroll id="tabmenu">
     <div class="menulist">
               <div class="menulistitem"
                   v-for="(item,index) in categories"
                   :key="index"
                   :class="{active:index===currentindex}"
                   @click="itemclick(index)">

                    {{item.title}}
               </div>

     </div>

  </scroll>
 

</template>

<script>
import scroll from 'components/common/scroll/scroll'

export default {
name:'tabmenu',
components:{
       scroll,
},
props:{
  categories:Array
},
data(){
  return{
    currentindex:0
  }
},
methods: {
  itemclick(index){
    this.currentindex = index;
    this.$emit('selectitem',index)
  }
}
}
</script>

<style scoped>

#tabmenu{
  background-color: #f6f6f6;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
}
.menulistitem{
 height: 45px;
 line-height: 45px;
 text-align: center;
 font-size: 14px;
 width: 70px;
 /* margin: 0 10px; */
}
.menulistitem.active {
    font-weight: 700;
    color:rgb(127, 174, 236);
    background-color: #fff;
    border-left: 3px solid rgb(127, 174, 236);
  }

</style>