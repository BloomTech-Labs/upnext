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

    fullName: {
      get () {
        return this.$store.state.User.user.fullName
      },

      set (fullName) {
        this.$store.commit('SET_USER_NAME', fullName)
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
    async signup () {
      const user = {
        email: this.email,
        fullName: this.fullName,
        password: this.password
      }
      const result = await this.$store.dispatch('postUser', user)
      console.log(result)
    }
  },
  ...mapMutations({
    setIsUserAuthenticated: 'SET_IS_USER_AUTHENTICATED'
  })
  // ...mapActions(['postUser'])
}
