import { Vue, store, LocaleMixin } from './bootstrap.mixin'
import App from './App.desktop'

import router from './router/router.desktop'
import Vuetify from 'vuetify'
import Animate from 'animate.css'
import VueStripeCheckout from 'vue-stripe-checkout'

import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)
Vue.use(Animate)

const options = {
  key: 'pk_test_YwwFFUpskxZbjMNL5k12llgi',
  image: 'https://image.ibb.co/dv67Y8/upnextlogo.png',
  locale: 'auto',
  currency: 'USD',
  billingAddress: true,
  panelLabel: 'Subscribe {{amount}}'
}
Vue.use(VueStripeCheckout, options)

Vue.http.interceptors.push((request, next) => {
  console.log('In Intercptor')
  if (request.url !== '/api/login/post') {
    let token = window.localStorage.getItem('token')
    request.headers.set('token', token)
  }

  next(response => {
    if (response.status === 404 || response.status === 504) {
      router.push({ name: 'Home' })
    }

    if (response.status === 403) router.push({ name: 'Login' })
  })
})

router.beforeEach((to, from, next) => {
  console.log('In Router')
  if (to.matched.some(record => record.meta.userOnly)) {
    const getCookie = name => {
      let a = `; ${document.cookie}`.match(`;\\s*${name}=([^;]+)`)
      return a ? a[1] : ''
    }

    if (getCookie('user')) {
      next()
    } else router.push({ name: 'Login' })
  } else next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  mixins: [LocaleMixin],
  components: {
    App
  }
})
