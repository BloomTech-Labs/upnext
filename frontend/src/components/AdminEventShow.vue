<template>
  <v-container grid-list-xs>

    <AddGroup></AddGroup>

    <br>

    <Schedule :adminCreate="true" :adminShow="true" :nonAdmin="false"></Schedule>

  </v-container>
</template>



<script>
import AddGroup from './AddGroup';
import Schedule from './Schedule';
export default {
  components: {
    AddGroup,
    Schedule
  }
};
</script>
