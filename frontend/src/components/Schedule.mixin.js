// import { mapMutations } from 'vuex'

export default {
  data: function () {
    return {
      title: '',
      startDate: '',
      description: ''
    }
  },
  computed: {
    groups: {
      get () {
        return this.$store.state.Groups.groups
      }
    }
  },
  methods: {}
}
