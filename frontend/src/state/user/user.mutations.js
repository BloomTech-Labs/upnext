export default {
  SET_USER (state, user) {
    console.log(user)
    state.user = user
  },

  SET_USER_NAME (state, fullName) {
    console.log('in mutations name ' + name)
    state.user.fullName = fullName
  },

  SET_USER_EMAIL (state, email) {
    console.log('IN MUTATIONS! IN MUTATIONS! IN MUTATIONS!' + email)
    state.user.email = email
  },

  SET_USER_PASSWORD (state, password) {
    console.log('In mutation password ' + password)
    state.user.password = password
  },

  RESET_USER (state) {
    state.user.name = ''
    state.user.password = ''
  },

  SET_USER_PHONE (state, phone) {
    console.log('The phone number has just been set')
    state.user.phone = phone
  },

  SET_EMAIL_NOTIFICATIONS (state, bool) {
    state.user.receiveEmails = bool
  },

  SET_TEXT_NOTIFICATIONS (state, bool) {
    state.user.receiveTexts = bool
  }
}
