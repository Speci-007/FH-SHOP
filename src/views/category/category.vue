<template>
  <div id="category">
   <navbar class="navbar">
   <div slot="center" class="top">商品分类</div>
   </navbar>
   <div class="content">
              <tabmenu :categories='categories'
                @selectitem = 'selectitem' >    
              </tabmenu>


       <scroll id="tabcontent" :data='[categorydata]' ref="scroll">
         <div>
          <tabcontentcategory :subcategories = 'showsubcategory' >
            </tabcontentcategory>
          <tabcontrol :title="['综合','新品','销量']"
          class="tabcontrol"
          @tabclick='tabclick'></tabcontrol>
          <tabcontentdetail :categorydetail = 'showcategorydetail'>

          </tabcontentdetail>
         </div>
     </scroll>
   </div>
  </div>
</template>

<script>
import navbar from 'components/common/navbar1/navbar'
import scroll from 'components/common/scroll/scroll'
import {getcategory,getsubcategory,getcategorydetail} from 'network/category'
import tabmenu from './childcomps/tabmenu'
import tabcontentcategory from './childcomps/tabcontentcategory'
import tabcontrol from 'components/content/tabcontrol/tabcontrol'
import { tabcontrolmixin,itemmixin} from 'common/mixin'
import tabcontentdetail from './childcomps/tabcontentdetail'
export default {
name:'category',
components:{
  navbar,
  scroll,
  tabmenu,
  tabcontentcategory,
  tabcontrol,
  tabcontentdetail

},
mixins:[tabcontrolmixin,itemmixin],
data(){

  return{
    categories:[],
    categorydata:{},
    currentindex:-1

  }
},

created(){

this.getcategory1()//请求数据的分类

},
computed: {
  showsubcategory(){
    if(this.currentindex===-1){
       return {}
    }else{
      return this.categorydata[this.currentindex].subcategories
    }
  },
  showcategorydetail(){
    if(this.currentindex===-1){
       return []
    }else{
      return this.categorydata[this.currentindex].categorydetail[this.currenttype]
    }
  }

},
//  mounted() {
//     //组件挂载后执行
//     //   this.$bus.$on('itemimageload',()=>{
//     //  this.$refs.scroll.scroll.refresh()
//     //    console.log('itemimageload>>>')

//     //  })
//     const refresh = debounc(this.$refs.scroll.refresh, 500);

//     this.itemimglisten = () => {
//       // console.log('在home.vue里监听图片加载完后的刷新次数')
//       refresh();
//     };

//     this.$bus.$on("itemimageload", this.itemimglisten);
//     //这里是监听孙子组件发射的时间总线。需要自己通过

//     //     setTimeout(()=>{
//     //  console.log(this.$refs.tabcontrol.$el.offsetTop);
//     //     },500)
//   },
methods: {
 
  getcategory1(){
      getcategory().then(res=>{
        console.log(res);

        this.categories = res.data.category.list//拿到数据存储
        
       for( let i = 0;i<this.categories.length;i++ ){// 2.初始化每个类别的子数据
       
               this.categorydata[i]={
                       subcategories:{},
                       categorydetail:{
                           'pop':[],
                           'new':[],
                           'sell':[]
                       }
               }
        }
        //请求第一个数据的分类
        this.getsubcategory1(0)
      })
  },

   getsubcategory1(index){
              this.currentindex = index
              const mailkey = this.categories[index].maitKey//根据这个，去往不同路径相关
          console.log(mailkey);
        getsubcategory(mailkey).then(res=>{
          console.log(res.data);
                  this.categorydata[index].subcategories= res.data
                  this.categorydata = {...this.categorydata}//没看懂
                   this.getcategorydetail1('pop')
                   this.getcategorydetail1('sell')
                   this.getcategorydetail1('new')
        }
         )
          },
          getcategorydetail1(type){
            const miniwallkey = this.categories[this.currentindex].miniWallkey//拿到路径的细分
                  getcategorydetail(miniwallkey,type).then(res=>{
                      console.log(res);
                      this.categorydata[this.currentindex].categorydetail[type] = res
                      this.categorydata = {...this.categorydata}
                  }
                  )
 
 
 },


   selectitem(index){
          this.getsubcategory1(index)//将侧边栏点击的索引号传出
   }
}

}
</script>

<style scoped>
 .content {
    position: absolute;
    left: 0;
    right: 0;
    top: 44px;
    bottom: 49px;
    display: flex;
    overflow: hidden;
  }
#category{
  height: 100vh;
  position: relative;
}
.navbar{
  background-color:  rgb(127, 174, 236);
  /* width: 100%; */
  /* position: relative;  */


}
.tabcontrol{
  margin-top: 30px;
}
#tab-content {
    height: 100%;
    flex: 1;
  }
/* 
.top{
  color: #fff;
  font: 16px;
  font-weight: 800;
}
.scroll{
  height: calc(100% - 44px - 49px);
  overflow: hidden;
  /* background-color: red; */


/* }  */
</style>