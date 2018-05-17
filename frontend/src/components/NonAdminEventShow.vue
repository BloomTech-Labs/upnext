<template>
  <v-container grid-list-xs>

    <schedule :adminCreate="false" :adminShow="false" :nonAdmin="true"></schedule>

  </v-container>
</template>



<script>
import Schedule from './Schedule';
export default {
  components: {
    Schedule
  }
};
</script>
