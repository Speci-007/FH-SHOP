<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import bscroll from "better-scroll";

export default {
  name: "scroll",
  props: {
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
    probeType: {
      type: Number,
      default: 3,
    },
  },
  data() {
    return {
      scroll: null,
    };
  },

  mounted() {
    this.scroll = new bscroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad, //为true时监听滚动到底部
    });
    if (this.probeType === 2 || this.probeType === 3) {
      this.scroll.on("scroll", (position) => {
        this.$emit("scroll", position); //监听滚动事件的位置
      });
    }

    if (this.pullUpLoad) {
      //监听到底部时实现上拉
      this.scroll.on(
        "pullingUp",
        () => {
          this.$emit("pullingUp");
        }
        // console.log('上拉加载更多');//监听上拉事件,不应该在此处加载更多，而是在home.vue中，所以将监听上拉事件发送给 home
      );
    }
    //  this.scroll.scrollTo(0,0)
  },
  methods: {
    scrollTo(x, y, time = 300) {
      this.scroll && this.scroll.scrollTo(x, y, time); //此步用于判断scroll有无加载出在做处理
    },
    finishpullup() {
      this.scroll.finishPullUp(); //scroll自带的方法，用于上拉之后再次刷新
    },
    refresh() {
      this.scroll && this.scroll.refresh();
    },
  },
};
</script>

<style scoped>
</style>