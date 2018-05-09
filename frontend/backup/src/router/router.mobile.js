import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: resolve => {
        require(['./../components/Home.mobile.vue'], resolve)
      }
    },
    {
      path: '/register',
      name: 'Register',
      component: resolve => {
        require(['./../components/Register.mobile.vue'], resolve)
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: resolve => {
        require(['./../components/Login.mobile.vue'], resolve)
      }
    },
    {
      path: '/user/products/index',
      name: 'Products',
      component: resolve => {
        require(['../components/user/products/ProductsIndex.mobile.vue'], resolve)
      },
      meta: {
        userOnly: true
      }
    },
    {
      path: '/user/shop/index',
      name: 'Shop',
      component: resolve => {
        require(['../components/user/shop/ShopIndex.mobile.vue'], resolve)
      },
      meta: {
        userOnly: true
      }
    },
    {
      path: '/user/shop/basket/index',
      name: 'Basket',
      component: resolve => {
        require(['../components/user/shop/BasketIndex.mobile.vue'], resolve)
      },
      meta: {
        userOnly: true
      }
    },
    {
      path: '*',
      component: resolve => {
        require(['./../components/Home.mobile.vue'], resolve)
      }
    }
  ]
})
