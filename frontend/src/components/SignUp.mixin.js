import {
  mapMutations
} from 'vuex'

export default {
  // data () {
  //   return {
  // valid: false
  // emailRules: [
  //   v => !!v || 'E-mail is required',
  //   v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
  // ],
  // pas
  // },
  computed: {
    user: {
      get () {
        return this.$store.state.User.user
      }
    },

    email: {
      get () {
        return this.$store.state.User.user.email
      },

      set (email) {
        this.$store.commit('SET_USER_EMAIL', email)
      }
    },

    name: {
      get () {
        return this.$store.state.User.user.name
      },

      set (name) {
        this.$store.commit('SET_USER_NAME', name)
      }
    },

    password: {
      get () {
        return this.$store.state.User.user.password
      },

      set (password) {
        this.$store.commit('SET_USER_PASSWORD', password)
      }
    },

    phoneNumber: {
      get () {
        return this.$store.state.User.user.phoneNumber
      },

      set (phoneNumber) {
        this.$store.commit('SET_USER_PHONE_NUMBER', phoneNumber)
      }
    }
  },
  methods: {
    async signup () {
      const user = {
        email: this.email,
        name: this.name,
        password: this.password,
        phoneNumber: this.phoneNumber
      }
      const result = await this.$store.dispatch('postUser', user)
      const { token, cookie } = result

      window.localStorage.setItem('token', token)
      window.localStorage.setItem('email', this.email)
      this.setCookie('user', cookie, 3600 * 24 * 7)
      this.setIsUserAuthenticated(true)

      this.$router.push({name: 'ViewEvents'})
    },

    setCookie (name, value, seconds) {
      const expires = seconds
      ? '; expires=' + new Date(new Date().getTime() + seconds * 1000).toGMTString()
      : ''
      document.cookie = name + '=' + encodeURIComponent(value) + expires + '; path=/'
    },

    ...mapMutations({
      setIsUserAuthenticated: 'SET_IS_USER_AUTHENTICATED'
    })
  }
}
