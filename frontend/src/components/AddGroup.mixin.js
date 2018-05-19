import { mapMutations } from 'vuex'

export default {
  data: {
    name: '',
    time: ''
  },
  computed: {
    group () {
      return { name: this.name, time: this.time }
    }
  },
  methods: {
    ...mapMutations({ addGroup: 'ADD_GROUP' }),
    addSingleGroup () {
      console.log('group', this.group)
      this.addGroup(this.group)
      // this.$store.commit('ADD_GROUP', this.group)
      this.name = ''
      this.time = ''
    }
  }
}
