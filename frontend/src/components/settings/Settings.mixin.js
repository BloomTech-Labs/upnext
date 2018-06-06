import router from '../../router/router.desktop'
export default {
  data () {
    return ({
      showAccountSettings: true,
      showBillingSettings: false,
      oldPassword: '',
      newPassword: '',
      confirmPassword: '',
      confirmPasswordRules: [(v) => v === this.newPassword || 'Passwords do not match'],
      valid: true,
      phoneRules: {
        required: true,
        pattern: /\D*([2-9]\d{2})(\D*)([2-9]\d{2})(\D*)(\d{4})\D*/,
        message: 'Please input phone',
        trigger: 'blur'
      },
      editPhone: false
    })
  },
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
    editPhoneFn () {
      if (this.editPhone) this.editPhone = !this.editPhone
    },
    stopEditFn () {
      if (!this.editPhone) this.editPhone = true
    }
  },

  methods: {
    async submitNewSettings () {
      const preferences = {
        password: this.confirmPassword,
        receiveEmails: this.receiveEmails,
        receiveTexts: this.receiveTexts
      }

      const result = await this.$store.dispatch('updateSettings', preferences)
      console.log(result)
    },
    goToEvents () {
      router.push('ViewEvents')
      console.log('navigating to events')
    },
    displayBillingSettings () {
      this.showAccountSettings = !this.showAccountSettings
      this.showBillingSettings = !this.showBillingSettings
    },
    displayAccountSettings () {
      this.showAccountSettings = !this.showAccountSettings
      this.showBillingSettings = !this.showBillingSettings
    },
    clear () {
      this.oldPassword = ''
      this.newPassword = ''
      this.confirmPassword = ''
    }
  }
}

