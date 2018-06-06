export default {
  SET_USER (state, user) {
    console.log(user)
    state.user = user
  },

  SET_USER_NAME (state, name) {
    console.log('in mutations name ' + name)
    state.user.name = name
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

  SET_USER_PHONE (state, phoneNumber) {
    console.log('The phone number has just been set')
    state.user.phoneNumber = phoneNumber
  },

  SET_EMAIL_NOTIFICATIONS (state, receiveEmailNotifications) {
    state.user.receiveEmails = !state.user.receiveEmails
  },

  SET_TEXT_NOTIFICATIONS (state, bool) {
    state.user.receiveTexts = !state.user.receiveTexts
  }
}
