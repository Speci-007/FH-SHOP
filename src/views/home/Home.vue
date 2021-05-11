<template>
  <div id="home" class="wrapper">
    <nav-bar class="home-nav"><div slot="center">购物车</div></nav-bar>
    <tabcontrol
      class="tabcontrol"
      ref="tabcontrol1"
      :title="['流行', '新款', '精选']"
      @tabclick="tabclick"
      v-show="istabfixed"
    >
      <!-- //这里是对子组件点击事件的监听 -->
    </tabcontrol>
    <scroll
      class="content"
      ref="scroll"
      :pull-up-load="true"
      @scroll="contentscroll"
      @pullingUp="pullscroll"
    >
      <homeswiper :banners="banners" @imageloadover="imageset"></homeswiper>
      <recommendview :recommends="recommends"></recommendview>
      <featureview></featureview>
      <tabcontrol
        ref="tabcontrol2"
        class="tabcontrol"
        :title="['流行', '新款', '精选']"
        @tabclick="tabclick"
      >
        <!-- //这里是对子组件点击事件的监听 -->
      </tabcontrol>
      <goodslist :goods="goods[currenttype].list"></goodslist>
    </scroll>
    <backtop @click.native="backclick" v-show="isshow"></backtop>
  </div>
</template>


<script>
import backtop from "components/content/backtop/backtop";
import scroll from "components/common/scroll/scroll";
import NavBar from "components/common/navbar1/navbar";
import homeswiper from "./childcomps/homeswiper";
import { gethomedata, gethomegoods, debounc } from "network/home";
import recommendview from "./childcomps/homerecommendview";
import featureview from "./childcomps/featureview";
import tabcontrol from "components/content/tabcontrol/tabcontrol";
import goodslist from "components/content/goods/goodslist";

export default {
  name: "Home",
  components: {
    NavBar,
    homeswiper,
    recommendview,
    featureview,
    tabcontrol,
    goodslist,
    scroll,
    backtop,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      currenttype: "pop",
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      isshow: false,
      offsettop: 0,
      istabfixed: false,
      savey: 0,
      itemimglisten: null,
    };
  },

  mounted() {
    //组件挂载后执行
    //   this.$bus.$on('itemimageload',()=>{
    //  this.$refs.scroll.scroll.refresh()
    //    console.log('itemimageload>>>')

    //  })
    const refresh = debounc(this.$refs.scroll.refresh, 500);

    this.itemimglisten = () => {
      // console.log('在home.vue里监听图片加载完后的刷新次数')
      refresh();
    };

    this.$bus.$on("itemimageload", this.itemimglisten);
    //这里是监听孙子组件发射的时间总线。需要自己通过

    //     setTimeout(()=>{
    //  console.log(this.$refs.tabcontrol.$el.offsetTop);
    //     },500)
  },
  computed: {},
  activated() {
    //这两个方法在路由中才有
    this.$refs.scroll.scrollTo(0, this.savey); //处于活跃时，跳转到离开时保留的位置
    this.$refs.scroll.refresh(); //重新做一次刷新
  },
  deactivated() {
    this.savey = this.$refs.scroll.scroll.y; //离开时保留当前滚动的位置
    this.$bus.$off("itemimageload", this.itemimglisten);
    //此处是取消全局事件的监听，参数一为要取消的事件，参数二为监听的函数，当不在home组件里时，便不再对goodsitem里图片的加载是否完成去监听
  },
  destroyed() {
    console.log(huimieba);
  },
  created() {
    //当组件创建完成时就会执行，mounted里面用来获取数据，因为create可能会在dom还没有创建完成就去获取数据，会报错
    this.gethomedata2();
    // console.log("首页被创建");
    // gethomedata().then(res=>{
    //   this.banners= res.data.banner.list;//由于函数内部的数据在函数执行结束后会被回收销毁
    //   this.recommends= res.data.recommend.list;//由于函数内部的数据在函数执行结束后会被回收销毁
    // })//这里的this之所以可用，是拿到的created的this
    //请求商品数据
    this.gethomegoods2("pop");
    this.gethomegoods2("new");
    this.gethomegoods2("sell");
  },
  //  updated(){
  //            console.log(this.$refs.tabcontrol.$el.offsetTop);

  //  },
  methods: {
    //将具体的执行封装在方法里面，再在created里this调用
    gethomedata2() {
      gethomedata().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
        // console.log(this.banners);
      });
    },
    gethomegoods2(type) {
      //这样做的目的是也可以同时获得多个接口的数据
      let page = this.goods[type].page + 1; //获取的是更新的数据
      gethomegoods(type, page).then((res) => {
        // console.log(res);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1; //下次请求的时候页码+1
        this.$refs.scroll.finishpullup();
      });
    },
    //********************以上为网络请求相关代码 */
    tabclick(index) {
      // console.log(index);
      switch (index) {
        case 0:
          this.currenttype = "pop";
          break;
        case 1:
          this.currenttype = "new";
          break;
        case 2:
          this.currenttype = "sell";
          break;
      }
      this.$refs.tabcontrol1.currentindex = index;
      this.$refs.tabcontrol2.currentindex = index;
    },
    imageset() {
      this.offsettop = this.$refs.tabcontrol2.$el.offsetTop;
    },
    backclick() {
      this.$refs.scroll.scrollTo(0, 0);
      // console.log(555);
    },
    contentscroll(position) {
      //内容区域滚动事件
      this.isshow = -position.y > 1000; //判断是否显示
      // console.log(position);
      this.istabfixed = -position.y > this.offsettop;
      // console.log(55555555555555);
    },

    pullscroll() {
      console.log("正在加载更多数据");
      this.gethomegoods2(this.currenttype);
      //当点击哪个时，上面的tabclick会得到当前点击的currenttype,在调用请求数据方法即可自动完成对数据的push及展示
    },
    debounc(func, delay) {
      let timer = null;
      return function (...args) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
          func.apply(this, args);
        }, delay);
        //定义一个防抖函数
      };
    },
  },
};
</script>

<style scoped>
.home {
  height: 100vh;
  position: relative;
}
.home-nav {
  background-color: rgb(127, 174, 236);
  color: white;
  /* position: fixed;
left: 0;
right: 0;
top: 0;
z-index: 9;  */
}
.tabcontrol {
  background-color: #fff;
  position: relative;
  /* position: sticky; 
   top: 44px; */
  z-index: 12;
}
/* .content{
  height: 400px;
} */
.content {
  overflow: hidden;
  position: absolute;
  top: 45px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>
