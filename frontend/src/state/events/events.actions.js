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
      console.log('INSIDE deleteEvent Action, eventObj:', event)
      Vue.http
        .post('/api/events/add', { params: event })
        .then(() => resolve())
        .catch(error => reject(error))
    })
  }
}
