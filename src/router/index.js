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


Vue.use(VueRouter)

// 路由规则
const routes = [
  {
    path:'/',
    redirect:'/home',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path:'/home',
    redirect:'/index',
    name:'home',
    component:Home,
    children:[
      {
        path:'/index',
        name:'index',
        component:Index
      },
      {
        path:'/category',
        name:'category',
        component:Category
      },
      {
        path:'/cart',
        name:'cart',
        component:Cart
      },
      {
        path:'/user',
        name:'user',
        component:User
      }
    ]
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
