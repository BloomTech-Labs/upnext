// import { mapMutations } from 'vuex'

export default {
  data: {
    title: '',
    startDate: '',
    description: ''
  },
  computed: {
    groups: {
      get () {
        return this.$store.state.Groups.groups.groups
      }
    }
  },
  methods: {}
}
