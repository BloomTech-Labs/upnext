
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

    phoneNumber: {
      get () {
        return this.$store.state.User.user.phone
      },
      set (phoneNumber) {
        this.$store.commit('SET_USER_PHONE_NUMBER', phoneNumber)
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
    },
    showAccountSettings: true,
    showBillingSettings: false,
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
    confirmPasswordRules: (v) => v === this.newPassword || 'Passwords do not match'
  },

  methods: {
    async updateSettings () {
      const preferences = {
        phoneNumber: this.phoneNumber,
        receiveEmails: this.receiveEmails,
        receiveTexts: this.receiveTexts
      }

      const result = await this.$store.dispatch('updateSettings', preferences)
      console.log(result)
    },
    goToEvents () {
      this.$router.push('viewevents')
    }
  }
}
