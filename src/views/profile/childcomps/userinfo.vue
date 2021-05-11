<template>
<div class="userinfo">

     <div class="left">
     <img src="~assets/img/profile/user3.jpg" alt="error">
     </div>

     <div class="center">
      <a href="#">
         <div>登录 / 注册</div>
       <div><span class="span1"></span>暂无绑定手机号</div>
      </a>
      </div>  
</div>
</template>

<script>
export default {
name:'userinfo'
}
</script>

<style scoped>
@font-face {
  font-family: 'icomoon';
  src:  url('~assets/fonts/icomoon.eot?18jwfd');
  src:  url('~assets/fonts/icomoon.eot?18jwfd#iefix') format('embedded-opentype'),
    url('~assets/fonts/icomoon.ttf?18jwfd') format('truetype'),
    url('~assets/fonts/icomoon.woff?18jwfd') format('woff'),
    url('~assets/fonts/icomoon.svg?18jwfd#icomoon') format('svg');
  font-weight: normal;
  font-style: normal;
  font-display: block;
}
.span1{
   font-family: 'icomoon';
}
.userinfo{
  /* text-align: center; */
  margin: 0 auto;
}
.left{
width: 70px;
height: 70px;
float: left;
margin-left:15px ;
margin-top: 15px;

}
.left img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.center{
  position: relative;
  top:30px;
  left: 20px;

  /* float: left; */
  /* margin-left:100px ;
  margin-top: 15px; */
}
.center a{
  color: aliceblue;

}
</style>