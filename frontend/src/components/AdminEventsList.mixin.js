import {
  mapActions,
  mapMutations
} from 'vuex'

export default {
  created () {
    this.getEvents()

    console.log('Made it!', this.$store.state.Events)
  },

  computed: {
    events: {
      get () {
        return this.$store.state.Events.events
      }
    }
  },

  methods: {
    ...mapActions(['getEvents', 'deleteEvent', 'addEvent']),
    ...mapMutations({
      setEventId: 'SET_EVENT_ID'
    }),
    deleteSingleEvent (id) {
      console.log('ABOUT TO DELETE, ID:', id, '\nThis:', this)
      this.deleteEvent(id).then(() => {
        console.log('SUCCESSFUL DELETION: WORLD SAVED')
        this.getEvents()
      })
    },
    gotoEventDetails (id) {
      this.setEventId(id)
      this.$router.push({
        name: 'EventDetails'
      })
    }
  }
}
