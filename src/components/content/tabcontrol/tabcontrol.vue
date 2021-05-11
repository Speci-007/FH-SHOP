
<template>
<div class="tab-control">
  <div v-for="(item,index) in title" :key='item.id' class="tab-control-item"
   :class="{active:index === currentindex}" @click="itemclick(index)">
    <span>{{item}}</span>
  </div>
  </div>  
</template>

<script>
export default {
name:'tabcontrol',
props:{
  title:{
    type:Array,
default(){
  return[]
}
  }
},
data(){
  return{ currentindex :0}
},
methods:{
  itemclick(index){
 this.currentindex =index;
this.$emit('tabclick', index)
  }
}
}
</script>

<style>

.tab-control{
  display: flex;
  text-align: center;
}
.tab-control-item{
  flex: 1;
  height: 40px;
  line-height: 40px;

}
span{
  padding: 5px;
}
.active span{
  color:var(--color-hight-text);
  border-bottom:3px solid rgb(127, 174, 236);
}
/* span:hover {
    color: red;
} */
</style>