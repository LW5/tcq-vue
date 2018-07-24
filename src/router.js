import Vue from 'vue'
import Router from 'vue-router'

import login from './components/app/login.vue'
import reg from './components/app/reg.vue'
import Info from './components/app/info.vue'
import Shop from "./components/shop/shop.vue"
import Service from "./components/service/service.vue"
import Clerk from "./components/clerk/clerk.vue"
import Order from "./components/order/order.vue"
import Pet from "./components/goods/pet.vue"
import Foods from "./components/goods/foods.vue"
import Artical from "./components/goods/artical.vue"
import Services from "./components/goods/services.vue"
import Platform from "./components/platform/platform.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/Platform',
      name: 'Platform',
      component: Platform
    },
    {
      path: '/reg',
      name: 'reg',
      component: reg
    },
    {
      path: '/Info',
      name: 'Info',
      component: Info,
      children: [{
        path: '/Info/Shop',
        name: 'Shop',
        component: Shop
      },{
        path: '/Info/Service',
        name: 'Service',
        component: Service
      },{
        path: '/Info/Clerk',
        name: 'Clerk',
        component: Clerk
      },{
        path: '/Info/Order',
        name: 'Order',
        component: Order
      },{
        path: '/Info/Pet',
        name: 'Pet',
        component: Pet
      },{
        path: '/Info/Foods',
        name: 'Foods',
        component: Foods
      },{
        path: '/Info/Artical',
        name: 'Artical',
        component: Artical
      },{
        path: '/Info/Services',
        name: 'Services',
        component: Services
      }],
      
    }
  ]
})
