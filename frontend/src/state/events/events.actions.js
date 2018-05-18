import Vue from 'vue'

export default {
  getEvents (context) {
    return new Promise((resolve, reject) => {
      Vue.http
        .get('/api/events/get')
        .then(async ({ body }) => {
          console.log('body', body)
          context.commit('SET_EVENTS', body)
          resolve()
        })
        .catch(error => reject(error))
    })
  }
}
