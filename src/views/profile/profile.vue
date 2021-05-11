<template>

 
   <scroll>
    <div class="content">

    <div class="top">
      <div class="title">小顾的商城</div>
      <userinfo></userinfo>
    </div>

    <div class="middle">
      <div class="first">
        <div class="four">99900.58元</div>
        <span>我的余额</span>
      </div>
      <div class="second">
        <div class="four">6个</div>
        <span>我的优惠</span>
      </div>
      <div class="third">
        <div class="four">32210分</div>
        <span>我的积分</span>
      </div>
    </div>


    <div class="other">
      <div class="mymessage">
        <img src="~assets/img/profile/message.svg" alt="error" />
        <span> 我的消息</span>
      </div>

      <div class="mymessage">
        <img src="~assets/img/profile/pointer.svg" alt="error" />
        <span> 积分商城</span>
      </div>
      <div class="mymessage">
        <img src="~assets/img/profile/vip.svg" alt="error" />
        <span> 会员卡</span>
      </div>
    </div>
    <div class="other">
      <div class="mymessage buttom">
        <img src="~assets/img/profile/cart.svg" alt="error" />
        <span> 我的购物车</span>
      </div>
      <div class="mymessage buttom">
        <img src="~assets/img/profile/shopping.svg" alt="error" />
        <span> 下载购物APP</span>
      </div>
    </div>
  </div> 
 
   </scroll>
</template>

<script>
import userinfo from "./childcomps/userinfo";
import scroll from 'components/common/scroll/scroll'

export default {
  name: "profile",
  components:{
    userinfo,
    scroll
 
  },
};
</script>
<style scoped>

.content {
  height: 100vh;
   width: 100%;
  position: relative;
  background-color: rgb(233, 229, 229);
}
.top {
  height: 20%;
  width: 100%;
  background-color: rgb(127, 174, 236);
}

.title {
  /* position: fixed; */
  height: 30%;
  text-align: center;
  line-height: 200%;
  color: aliceblue;
  font-weight: 900;
  font-size: 18px;
  border-bottom: 1px rgba(214, 214, 231, 0.5) solid;
}
.left {
  width: 80px;
  height: 80px;
}
.middle {
  display: flex;
  padding: 18px;
  width: 100%;
  background-color: whitesmoke;
}
.four {
  margin-bottom: 8px;
}
.first,
.second,
.third {
  flex: 1;
  text-align: center;
  border-right: 1px solid #ccc;
}
.third{
   border-right:0;
}
.other {
  margin-top: 12px;
  background-color: whitesmoke;
}
.mymessage {
  height: 45px;
  border-bottom: 1px rgba(214, 214, 231, 0.5) solid;
}
.mymessage img {
  height: 100%;
  width: 30px;
  vertical-align: middle;
  margin: 0 10px;
}
</style>