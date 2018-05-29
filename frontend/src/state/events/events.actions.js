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
  },
  deleteEvent (context, id) {
    return new Promise((resolve, reject) => {
      console.log('INSIDE deleteEvent Action, ID:', id)
      Vue.http
        .delete('/api/events/delete', { params: { id } })
        .then(() => resolve())
        .catch(error => reject(error))
    })
  },
  addEvent (context, event) {
    return new Promise((resolve, reject) => {
      console.log('INSIDE addEvent Action, eventObj:', event)
      Vue.http
        .post('http://localhost:1337/api/events/add', event)
        .then(() => resolve())
        .catch(error => reject(error))
    })
  },
  getEventsForUser (context, user) {
    return new Promise((resolve, reject) => {
      console.log('INSIDE getEventsForUser Action, eventObj:', event)
      Vue.http
        .get('http://localhost:1337/api/user', { params: { user } })
        .then(async ({ body }) => {
          console.log('body', body)
          context.commit('SET_EVENTS', body)
          resolve()
        })
        .catch(error => reject(error))
    })
  }
}
