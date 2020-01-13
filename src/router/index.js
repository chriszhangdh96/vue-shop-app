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
  }
]

// 创建路由对象
const router = new VueRouter({
  routes
})

export default router
