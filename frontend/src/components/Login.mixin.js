import { mapMutations } from 'vuex'

export default {
  computed: {
    user: {
      get () {
        return this.$store.state.User.user
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
    }
  },

  methods: {
    async login () {
      let { token, cookies } = await this.$store.dispatch(
        'loginUser',
        this.user
      )

      window.localStorage.setItem('token', token)
      window.localStorage.setItem('username', this.name)
      this.setCookie('user', cookies.user, 3600 * 24 * 7)
      if (cookies.isAdmin) {
        this.setCookie('isAdmin', cookies.isAdmin, 3600 * 24 * 7)
      }
      this.setIsAdmin(true)
      this.setIsUserAuthenticated(true)

      this.$router.push({ name: 'AdminEventCreate' })
    },

    setCookie (name, value, seconds) {
      const expires = seconds
        ? '; expires=' +
          new Date(new Date().getTime() + seconds * 1000).toGMTString()
        : ''
      document.cookie =
        name + '=' + encodeURIComponent(value) + expires + '; path=/'
    },

    ...mapMutations({
      setIsUserAuthenticated: 'SET_IS_USER_AUTHENTICATED',
      setIsAdmin: 'SET_IS_ADMIN'
    })
  }
}
