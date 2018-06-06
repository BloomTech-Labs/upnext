<template>

  <div>
    <Toolbar></Toolbar>

  <v-container  class="margin" fluid grid-list-sm>
    <v-layout justify-center>
      <v-flex xs8 lg8>
        <v-card>
          <v-toolbar class="eventInfo">
            <v-toolbar-title>Event Info</v-toolbar-title>

          </v-toolbar>

          <v-layout >
            <!-- <v-flex xs4>
            <v-subheader style="font-family: Roboto;" class="subheading mt-2">Event Title</v-subheader>
            </v-flex> -->
            <v-flex class="mr-3 px-4" xs8>
              <v-text-field
                class="inputBoxes"
                id="title"
                name="input-1"
                label="Event Name"
                v-model="title"
              ></v-text-field>
            </v-flex>
          </v-layout>

          <v-layout>
            <!-- <v-flex xs4>
            <v-subheader style="font-family: Roboto;" class="subheading mt-2">Event Date</v-subheader>
            </v-flex> -->
            <v-flex class="mr-3 px-4" xs8>
              <v-text-field
                class="inputBoxes"
                id="title"
                name="input-1"
                label="Date"
                v-model="startDate"
              ></v-text-field>
            </v-flex>
          </v-layout>

          <v-layout>
            <!-- <v-flex xs4>
            <v-subheader style="font-family: Roboto;" class="subheading mt-2">Event Description</v-subheader>
            </v-flex> -->
            <v-flex class="mr-3 px-4" xs8>
              <v-text-field
                class="inputBoxes"
                id="title"
                name="input-1"
                label="Give a brief description"
                v-model="description"
              ></v-text-field>
            </v-flex>
          </v-layout>

        </v-card>
      </v-flex>
    </v-layout>

    <br>

    <AddGroup></AddGroup>

    <br>

    <Schedule :adminCreate="true" :adminShow="false" :nonAdmin="false"></Schedule>

    <v-layout justify-center>
      <v-flex xs8>
        <v-btn class="darkBlueButton" @click="addSingleEvent">PROCEED TO CHECKOUT</v-btn>
      </v-flex>
    </v-layout>



  </v-container>
  </div>
</template>


<script>
import AddGroup from "./AddGroup.desktop";
import Schedule from "./Schedule.desktop";
import EventAddMixin from "./AdminEventCreate.mixin";
import Toolbar from './Toolbar.desktop.vue'

export default {
  components: {
    AddGroup,
    Schedule,
    Toolbar
  },
  mixins: [EventAddMixin]
};
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