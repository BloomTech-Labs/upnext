import { mapActions } from 'vuex'

export default {
  created () {
    this.getEvents(this)

    console.log('Made it!', this.$store.state.Events)
  },

  computed: {
    events: {
      get () {
        return this.$store.state.Events.events.events
      }
    }
  },

  methods: {
    ...mapActions(['getEvents', 'deleteEvent']),
    deleteSingleEvent (id) {
      console.log('ABOUT TO DELETE, ID:', id, '\nThis:', this)
      this.deleteEvent(id).then(() => {
        console.log('SUCCESSFUL DELETION: WORLD SAVED')
        this.getEvents(this)
      })
    }
  }
}
