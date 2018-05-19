import {
  mapActions
} from 'vuex'

export default {
  data: function () {
    return {
      title: '',
      startDate: '',
      description: ''
    }
  },
  computed: {
    groupsWithTime: {
      get() {
        return this.$store.state.Groups.groups.groups
      }
    },
    owner: {
      get() {
        return this.$store.state.User.user.name
      }
    }
  },
  methods: {
    ...mapActions(['addEvent']),
    addSingleEvent() {
      const newEvent = {
        title: this.title,
        startDate: this.startDate,
        description: this.description,
        groupsWithTime: this.groupsWithTime,
        owner: this.owner
      }
      console.log('inside addEvent', newEvent)
      this.addEvent(newEvent).then(() => {
        console.log('SUCCESSFUL ADDITION')
        this.title = ''
        this.startDate = ''
        this.description = ''
      })
    }
  }
}
