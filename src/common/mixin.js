import {debounc} from 'network/detail'

export const itemmixin = {


  mounted(){
    const refresh2 = debounc(this.$refs.scroll.refresh, 500)
    this.itemimglisten2 = () => {
      console.log('在detail.vue里监听图片加载完后的刷新次数')
      refresh2()
    }
    this.$bus.$on('itemimageload', this.itemimglisten2)
  },
}

export const tabcontrolmixin = {
  data(){
    return {
      currenttype:'pop'
    }
  },
  methods: {
    tabclick(index){
      switch(index){
        case 0: this.currenttype = 'pop' 
         break
        case 1: this.currenttype = 'new'
          break
        case 2: this.currenttype = 'sell'
          break
      }
      console.log(this.currenttype);
    }
  }
}





