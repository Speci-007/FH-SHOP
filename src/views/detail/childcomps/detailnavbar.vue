<template>
  <navbar >
    <div slot="left" class="left" @click="backclick"> <img src="~assets/img/common/back.svg" alt=""> </div>
 <div slot="center" class="navbar" >
   <div :key="item" v-for="(item ,index ) in title"
    class="navbaritem"
    @click="navclick(index)"
    :class="{active:index===currentindex}"
    >{{item}}</div>
  </div>
  </navbar>
</template>

<script>
import navbar from 'components/common/navbar1/navbar'
export default {
name:'detailnavbar',
components:{
  navbar
},
data(){
  return{
    title:['商品','参数','评论','推荐'],
    // iscolor:false,
    currentindex:0
  }
},
methods:{
  navclick(index){
    this.currentindex = index
    // console.log(this.currentindex);
    this.$emit('titleclick',index)
  },
  backclick(){
  this.$router.back()
  }
}
 
}

</script>

<style scoped>
 .navbar{
   display: flex;
   justify-content: space-between
 };
 .navbaritem{
   flex:1,
   
 }
 .active{
   color: red;
 }
 .left{
   margin:6px 6px 5px 2px;
 }
</style>