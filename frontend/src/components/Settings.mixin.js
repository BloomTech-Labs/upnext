
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
      set (bool) {
        this.$store.commit('SET_EMAIL_NOTIFICATIONS', bool)
      }
    },

    receiveTexts: {
      get () {
        return this.$store.state.User.user.receiveTexts
      },
      set (bool) {
        this.$store.commit('SET_TEXT_NOTIFICATIONS', bool)
      }
    }
  }
}
