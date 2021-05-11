import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home')
const category = () => import('../views/category/category')
const cart = () => import('../views/cart/Cart')
const profile = () => import('../views/profile/profile')
const detail = () => import('../views/detail/detail')

// 1.安装插件
Vue.use(VueRouter)

// 2.创建router
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: category
  },
  {
    path: '/cart',
    component: cart
  },
  {
    path: '/profile',
    component: profile
  },
  {
    path: '/detail/:iid',//动态传递iid
    component: detail
  }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})


export default router
