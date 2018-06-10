import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: resolve => {
        require(['./../components/Landing.desktop.vue'], resolve)
      }
    },
    {
      path: '/viewevents',
      name: 'ViewEvents',
      component: resolve => {
        require(['./../components/ViewEvents.desktop.vue'], resolve)
      }
    },
    {
      path: '/admincreate',
      name: 'AdminEventCreate',
      component: resolve => {
        require(['./../components/AdminEventCreate.desktop.vue'], resolve)
      }
    },
    {
      path: '/eventdetails',
      name: 'EventDetails',
      component: resolve => {
        require(['./../components/EventDetails.desktop.vue'], resolve)
      }
    },
    {
      path: '/adminlist',
      name: 'AdminEventsList',
      component: resolve => {
        require(['./../components/AdminEventsList.desktop.vue'], resolve)
      }
    },
    {
      path: '/nonadminshow',
      name: 'NonAdminShow',
      component: resolve => {
        require(['./../components/NonAdminEventShow.desktop.vue'], resolve)
      }
    },
    {
      path: '/settings',
      name: 'Settings',
      component: resolve => {
        require(['./../components/settings/Settings.vue'], resolve)
      }
    },
    {
      path: '/events',
      name: 'TestEvents',
      component: resolve => {
        require(['./../components/TestEvents.desktop.vue'], resolve)
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
      path: '/pay',
      name: 'StripePayment',
      component: resolve => {
        require(['./../components/StripePayments.desktop.vue'], resolve)
      }
    },
    {
      path: '*',
      component: resolve => {
        require(['./../components/Landing.desktop.vue'], resolve)
      }
    }
  ]
})
