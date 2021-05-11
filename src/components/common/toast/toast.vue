<template>
  <div class="toast">
  <div :v-show="{istrue:false}">{{message}}</div>
  </div>
</template>

<script>
export default {
name:'toast',
data(){
 return {
message:' ',
istrue:false,
times:0
}
},
methods:{
  show(message,duration =2000){
    this.times = 0,
    this.istrue = true,
    this.message = message,
     this.times = setTimeout(()=>{
     this.istrue = false,
     this.message = ''
     },duration)
  }
}
}




//将toast.vue组件封装到插件里，在安装插件，一旦安装插件之后将组建创建出来
//然后在最开始的时候将其添加到body里面，在通过this.toast.show 将其显现出来
//





</script>

<style scoped>

.toast{
  position:fixed;
  z-index: 999;
  left: 50%;
  top: 50%;
  color: aliceblue;
  /* padding: 8px 10px; */
  transform:translate(-50%,-50%);
  background-color:rgba(0,0,0,.5);
  
}
</style>