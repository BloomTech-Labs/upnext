import Vue from 'vue'

export default {
  getUser (context) {
    return new Promise((resolve, reject) => {
      Vue.http
        .get('/api/user/get')
        .then(({body}) => {
          context.commit('SET_USER', body)
          resolve()
        })
        .catch(error => reject(error))
    })
  },

  postUser (context, {email, fullName, password}) {
    return new Promise((resolve, reject) => {
      Vue.http
      .post('/api/signup/post', {
        email,
        fullName,
        password
      })
      .then(response => {
        context.commit('SET_IS_USER_AUTHENTICATED', true)
        resolve(response.body)
      })
        .catch(error => reject(error))
    })
  },

  loginUser (context, {email, password}) {
    return new Promise((resolve, reject) => {
      Vue.http
        .post('/api/login/post', {
          email,
          password
        })
        .then(response => {
          context.commit('SET_IS_USER_AUTHENTICATED', true)
          resolve(response.body)
        })
        .catch(error => reject(error))
    })
  },

  updateSettings (context, {email, phone, receiveTexts, receiveEmails}) {
    return new Promise((resolve, reject) => {
      Vue.http
        .put('/api/user/put', {
          email,
          phone,
          receiveEmails,
          receiveTexts
        })
        .then(response => {
          context.commit('SET_RECEIVED_RESPONSE', true)
          resolve(response.body)
        })
        .catch(err => reject(err))
    })
  }
}
