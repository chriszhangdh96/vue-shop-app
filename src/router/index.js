import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import Home from '../views/Home'
import Index from '../views/Index/Index'
import Category from '../views/Category'
import Cart from '../views/Cart'
import User from '../views/User'
import Sousuo from '../views/Sousuo'
import Detail from '../views/Detail'
import Collect from '../views/Collect'
import Cang from '../views/Cang'
import remai from '../views/shoucang/remai.vue'
import jijiang from '../views/shoucang/jijiang.vue'
import ProductList from '../views/ProductList'


import Reg from '../views/login/Reg'
import Login from '../views/login/Login'
import Feedback from '../views/Feedback'



Vue.use(VueRouter)

// 路由规则
const routes = [
  {
    path: '/',
    redirect: '/home',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path:'/home',
    redirect:'/index',
    name:'home',
    component:Home,
    children: [
      {
        path: '/index',
        name:'index',
<<<<<<< HEAD
=======
        name:'home',
>>>>>>> hmy
        component: Index
      },
      {
        path: '/category',
        name: 'category',
        component: Category
      },
      {
        path: '/cart',
        name: 'cart',
        component: Cart
      },
      {
        path: '/user',
        name: 'user',
        component: User,
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/reg',
    name: 'reg',
    component: Reg
  },
  {
    path: '/feedback',
    name: 'feedback',
    component: Feedback
  },
  {
    path:'/sousuo',
    name:'sousuo',
    component:Sousuo
  },
  {
    path:'/detail',
    name:'detail',
    component:Detail
  },
  //收藏页面
  {
    path:'/collect',
    name:'collect',
    component:Collect,
    children:[{
      path:'/cang',
      name:'cang',
      component:Cang
    },{
      path:'/remai',
      name:'remai',
      component:remai
    },{
      path:'/jijiang',
      name:'jijiang',
      component:jijiang
    }]
  },
  {
    path:'/productlist',
    name:'productlist',
    component: ProductList
  }
]

// 创建路由对象
const router = new VueRouter({
  routes
})

export default router
