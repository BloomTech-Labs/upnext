<template>

  <v-layout justify-center>
    <v-flex xs8>
      <v-toolbar class="eventInfo">
        <v-toolbar-title>Schedule</v-toolbar-title>
      </v-toolbar>

      <v-list>

        <v-list-tile :key="group.name" v-for="(group, index) in groups">
          <v-list-tile-content>
            <v-layout justify-space-between>
              <v-flex class="mt-3" xs4>{{index+1}})</v-flex>
              <v-flex class="ml-3 mt-3" xs4>{{group.name}}</v-flex>
              <v-flex class="ml-3 mt-3" xs4>{{group.time}}</v-flex>
            </v-layout>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-layout v-show="adminCreate" justify-space-between>
              <v-flex v-show="adminShow" class="mx-3" xs4><v-btn icon><v-icon>flag</v-icon></v-btn></v-flex>
              <v-flex xs4 class="mx-3"><v-btn icon><v-icon>edit</v-icon></v-btn></v-flex>
              <v-flex xs4 class="mx-3"><v-btn icon><v-icon>delete</v-icon></v-btn></v-flex>
            </v-layout>
            <v-checkbox v-show="nonAdmin" class="mr-5 mt-3" label="Sub" v-model="value" value="value"></v-checkbox>
          </v-list-tile-action>
        </v-list-tile>

      </v-list>

    </v-flex>
  </v-layout>

</template>

<script>
import ScheduleMixin from './Schedule.mixin'

export default {
  props: ['adminCreate', 'adminShow', 'nonAdmin'],
  mixins: [ScheduleMixin]
}
</script>

<style scoped>
  .eventInfo {
    background-color: #7D4A33; 
    color: white;  
    font-family: Roboto; 
    text-shadow: 1px 1px 2px black;
  }
  .margin {
    margin-top: 10%;
  }

  .inputBoxes {
    font-family: Roboto;
    font-weight: 500;
  }

  .darkBlueButton {
    background-color: #051760; 
    color: white; 
    text-shadow: 1px 1px 2px black; 
    font-family: Roboto
  }

</style>