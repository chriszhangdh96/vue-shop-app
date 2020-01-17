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
// import ProductList from '../views/ProductList'

// import Change_address from '../views/Change_address.vue' 写多了这个没用了
import People_change from '../views/People_change'
import Add_address from '../views/Add_address'
import Address_list from '../views/Address_list'

import Order from '../views/Order'
import Goods_list from '../views/Goods_list'

import Reg from '../views/login/Reg'
import Login from '../views/login/Login'
import Feedback from '../views/Feedback'
import Pay from '../views/Pay'

import Aboutus from '../views/Aboutus'

import AddressEdit from '../views/AddressEdit'

Vue.use(VueRouter)

// 路由规则
const routes = [{
    path: '/',
    redirect: '/home',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/home',
    redirect: '/index',
    name: 'home',
    component: Home,
    children: [{
        path: '/index',
        name: 'index',
        component: Index
      },
      {
        path: '/category',
        name: 'category',
        component: Category,

      },
      {
        path: '/cart',
        name: 'cart',
        component: Cart,
        meta: {
          needLogin: true
        },
      },
      {
        path: '/user',
        name: 'user',
        component: User,   
      },
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
    path: '/sousuo',
    name: 'sousuo',
    component: Sousuo
  },
  {
    path: '/feedback',
    name: 'feedback',
    component: Feedback
  },
  {
    path: '/sousuo',
    name: 'sousuo',
    component: Sousuo,
  },
  {
    path: '/detail',
    name: 'detail',
    component: Detail
  },
  //收藏页面
  {
    path: '/collect',
    name: 'collect',
    component: Collect,
    children: [{
      path: '/cang',
      name: 'cang',
      component: Cang
    }, {
      path: '/remai',
      name: 'remai',
      component: remai
    }, {
      path: '/jijiang',
      name: 'jijiang',
      component: jijiang
    }]
  },
  // {
  //   path:'/productlist',
  //   name:'productlist',
  //   component: ProductList
  // },
  {
    path: '/order',
    name: 'order',
    component: Order,
    meta: {
      needLogin: true
    },
  },
  {
    path: '/goods_list',
    name: 'goods_list',
    component: Goods_list
  },
  {
    path: '/people_change',
    name: 'people_change',
    component: People_change
  },
  {
<<<<<<< HEAD
    path:'/pay',
    name:'pay',
    component:Pay
  },
=======
    path: '/pay',
    name: 'pay',
    component: Pay
  },
  {
    path:'/aboutus',
    name:'aboutus',
    component:Aboutus
  }
  ,
>>>>>>> c21d1d775e5a44efa447e681554baac2c4824998
  {
    path:'/addressEdit',
    name:'addressEdit',
    component:AddressEdit
  }
  ,
  // {
  //   path:'/change_address',
  //   name:'change_address',
  //   component:Change_address,
  //   children:[
  //     {
  //       path:'/address_list',
  //       name:'address_list',
  //       component:Address_list
  //      }
  //   ]
  // },
  ,{
      path:'/add_address',
      name:'add_address',
      component:Add_address
     },
     {
      path:'/address_list',
      name:'address_list',
      component:Address_list
     }



]
// 创建路由对象
const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  if (to.meta.needLogin) {
    if (isLogin()) {
      next()
    } else {
      next({
        name: 'login'
      })
    }
  }else{
    next()
  }
})
function isLogin() {
  if (localStorage.getItem('token')) {
    return true
  } else {
    return false
  }
} 
export default router