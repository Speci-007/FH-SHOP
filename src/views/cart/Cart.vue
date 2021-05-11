  <template>
  <div class="cart">
    <div class="nav-bar">
        <navbar>
          <div slot="center">购物车   ({{$store.state.cartlist.length}})</div>
        </navbar>
  </div>


     <scroll ref="scroll" class="content">
        <cartlist></cartlist>
    </scroll>

  <cartbuttonbar></cartbuttonbar>
  </div>
</template>

<script>
import navbar from 'components/common/navbar1/navbar'
import scroll from 'components/common/scroll/scroll'
import cartlist from './childcomps/cartlist'
import cartbuttonbar from './childcomps/cartbuttonbar'
  export default {
    name: "Cart",
    components:{
      navbar,
      cartlist,
      scroll,
      cartbuttonbar
    },
    activated () {//每次进入购物车时防止betterscroll未能检测到数据的更新从而进行刷新
  this.$refs.scroll.refresh()
},
    computed: {
      
    }
  }
</script>

<style scoped>
.cart {
  height: 100vh;
  position: relative;
 } 
.nav-bar{
  height: 49px;
  width: 100%;
  background-color:rgb(127, 174, 236);
  line-height: 49px;
  color: aliceblue;
  /* position: relative;*/
  /* position: fixed; */
  /* top: 0; */
  z-index: 20;
}
.content{
  height: calc(100% - 48px - 49px - 48px);
  /* position: relative; */
  overflow: hidden;
}
</style>
