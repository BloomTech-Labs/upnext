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
    ...mapActions(['getEvents'])
  }
}
