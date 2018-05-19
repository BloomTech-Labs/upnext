export default {
  SET_GROUPS (state, groups) {
    state.groups = groups
  },
  ADD_GROUP (state, group) {
    console.log('INSIDE ADD_GROUP DOOD GROUP:', group, 'STATE:', state)
    let newGroups = [...state.groups, group]
    state.groups = newGroups
    console.log('UPDATE GROUP:', group, 'STATE:', state)
  }
}
