import { mapActions } from 'vuex'

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
      get () {
        return this.$store.state.Groups.groups
      }
    }
  },
  methods: {
    ...mapActions(['addEvent']),
    addSingleEvent () {
      const groupObj = this.groupsWithTime.map(group => {
        return group
      })
      const newEvent = {
        title: this.title,
        startDate: this.startDate,
        description: this.description,
        groupsWithTime: groupObj
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
