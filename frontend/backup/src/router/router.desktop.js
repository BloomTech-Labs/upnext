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
        require(['./../components/Home.desktop.vue'], resolve)
      }
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: resolve => {
        require(['./../components/SignUp.desktop.vue'], resolve)
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: resolve => {
        require(['./../components/Login.desktop.vue'], resolve)
      }
    },
    {
      path: '*',
      component: resolve => {
        require(['./../components/Home.desktop.vue'], resolve)
      }
    }
  ]
})
