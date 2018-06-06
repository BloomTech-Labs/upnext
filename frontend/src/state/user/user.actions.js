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

  postUser (context, {email, name, password}) {
    return new Promise((resolve, reject) => {
      Vue.http
      .post('/api/signup/post', {
        email,
        name,
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
  updateSettings (context, { receiveEmails, receiveTexts }) {
    return new Promise((resolve, reject) => {
      Vue.http
        .post('/api/user/post', {
          id: window.localStorage.user,
          receiveEmails,
          receiveTexts
        })
        .then(response => {
          context.commit('SET_UPDATED_SETTINGS', response.body)
          resolve(response.body)
        })
        .catch(error => reject(error))
    })
  }

}
