
export default {
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

    phone: {
      get () {
        return this.$store.state.User.user.phone
      },
      set (phone) {
        this.$store.commit('SET_USER_PHONE', phone)
      }
    },

    receiveEmails: {
      get () {
        return this.$store.state.User.user.receiveEmails
      },
      set (receiveEmails) {
        this.$store.commit('SET_EMAIL_NOTIFICATIONS', receiveEmails)
      }
    },

    receiveTexts: {
      get () {
        return this.$store.state.User.user.receiveTexts
      },
      set (receiveTexts) {
        this.$store.commit('SET_TEXT_NOTIFICATIONS', receiveTexts)
      }
    }
  },

  methods: {
    async updateSettings () {
      const preferences = {
        email: this.email,
        phone: this.phone,
        receiveEmails: this.receiveEmails,
        receiveTexts: this.receiveTexts
      }

      const result = await this.$store.dispatch('updateSettings', preferences)
      console.log(result.body)
    }
  }
}
