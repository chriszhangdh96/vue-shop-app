import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import Home from '../views/Home'
import Index from '../views/Index'
import Category from '../views/Category'
import Cart from '../views/Cart'
import User from '../views/User'
<<<<<<< HEAD
import Sousuo from '../views/Sousuo'


import Reg from '../views/login/Reg'
import Login from '../views/login/Login'

=======
import Detail from '../views/goods_detail.vue'
>>>>>>> cqh

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
    path:'detail',
    name:'detail',
    component:Detail
  },
  {
    path:'/home',
    redirect:'/index',
    name:'home',
    component:Home,
    children:[
      {
        path: '/index',
        name: 'index',
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
    path:'/login',
    name:'login',
    component:Login
  },
  {
    path:'/reg',
    name:'reg',
    component:Reg
  },
  {
    path:'/sousuo',
    name:'sousuo',
    component:Sousuo
  },
]

// 创建路由对象
const router = new VueRouter({
  routes
})

export default router
