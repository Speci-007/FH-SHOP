
import Toast from './toast'
const obj = {}


obj.install = function(Vue){
  // console.log('执行了install函数',Vue);
 
   const toastconstructor  = Vue.extend(Toast)//创建组件构造器

   const toast = new toastconstructor()//根据new的方式，创建一个组件对象

  toast.$mount(document.createElement('div'))//将组建挂载到div元素上

  document.body.appendChild(toast.$el)//toast.$el对应的是div 

  Vue.prototype.$toast = toast



}











export  default obj