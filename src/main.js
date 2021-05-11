import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import fastclick from 'fastclick'
import vuelazyload from 'vue-lazyload'
import toast from 'components/common/toast'//导入此插件

Vue.config.productionTip = false//产品生产时的提示信息

Vue.use(toast)
//安装此插件，会自动调用然后执行里面的函数
Vue.use(vuelazyload)//图片懒加载

fastclick.attach(document.body)//解决移动端300s延时的插件的调用


Vue.prototype.$bus = new Vue()//此处是给vue实例添加一个原型，总线，以方便子孙之间的通信

new Vue({
  render: h => h(App),
  router,//挂载
  store,
  
}).$mount('#app')
//挂载的app为index.html中的 <div id='app'></div>最终被render函数出来的替换掉


