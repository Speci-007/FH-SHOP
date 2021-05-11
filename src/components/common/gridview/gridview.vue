<template>
  <div class="gridview" ref="gridview">
   <slot>
      <!-- <div class="item" v-for="(item ,index) in subcategories.list" :key="index">
         <a :href="item.link">
              <img  class="itemimg" :src="item.image" alt="">
                 <div class="itemtext">{{item.title}}</div>
         </a>
      </div> -->
   </slot>
 </div>
</template>

<script>
export default {
 name:'gridview',
 props:{
   cols:{
     type:Number,
     default:2
   },
   hmargin:{
     type:Number,
     default:4
   },
   vmargin:{
    type:Number,
     default:8
   },
   itemspace:{
      type:Number,
     default:4
 },
 linespace:{
    type:Number,
     default:8
 }
},
mounted:function () {
		  setTimeout(this.autolayout, 20)
    },
updated:function () {
  this.autolayout()
},
methods: {
  autolayout:function () {
    let gridel = this.$refs.gridview;
    let children = gridel.children;
    gridel.style.padding = `${this.vmargin}px ${this.hmargin}px`//设置gridel的内边距

     let itemwidth = (gridel.clientWidth - 2 * this.hmargin - (this.cols - 1) * this.itemspace) / this.cols;
        for (let i = 0; i < children.length; i++) {
          let item = children[i];
          item.style.width = itemwidth + 'px';
          if ((i+1) % this.cols !== 0) {
            item.style.marginRight = this.itemspace + 'px'
          }
          if (i >= this.cols) {
            item.style.marginTop = this.linespace + 'px'
          }
        }
  }
}
}
</script>

<style scoped>
  .gridview {
    display: flex;
    flex-wrap: wrap;
  }
</style>
