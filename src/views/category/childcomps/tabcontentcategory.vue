<template>

  <div>
 <gridview :cols="3" :linespace="15" :vmargin="15" v-if="subcategories.list">
      <div class="item" v-for="(item ,index) in subcategories.list" :key="index">
         <a :href="item.link">
              <img  class="itemimg" :src="item.image" alt="">
                 <div class="itemtext">{{item.title}}</div>
         </a>
      </div>
 </gridview>
  </div>
</template>

<script>
import gridview from 'components/common/gridview/gridview'
export default {
name:'tabcontentcategory',
components:{
  gridview,
},
props:{
   subcategories: {
        type: Object,
        default() {
          return []
        }
      }
},
methods: {
  imgload(){
    console.log("图片已加载");
    this.$emit('imgload')

  }
}
}
</script>

<style scoped>
  /* .panel img {
    width: 100%;
  } */
  /* .item{
    width:90px;
    height: 90px;
  } */

  .item {
    text-align: center;
    font-size: 12px;
  }

  .itemimg {
    width: 80%;
  }

  .itemtext {
    margin-top: 15px;
  }
</style>
