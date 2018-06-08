
<template>
  <v-app>
    <v-stepper v-model="e1" class="container">
      <v-stepper-header>
        <v-stepper-step :complete="e1 > 1" step="1">Events</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step :complete="e1 > 2" step="2">Groups</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step step="3">Confirm</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step step="4">Invitations</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step step="5">Payments</v-stepper-step>
      </v-stepper-header>
      <v-stepper-items>
        <v-stepper-content step="1">
          <v-layout>
            <v-flex class="mr-3 px-4" xs8>
              <v-text-field 
              class="inputBoxes" 
              id="title" 
              name="input-1" 
              label="Event Name" 
              v-model="title"></v-text-field>
            </v-flex>
          </v-layout>

          <v-layout>
            <v-flex class="mr-3 px-4" xs8>
              <v-text-field 
              class="inputBoxes" 
              id="title" 
              name="input-1" 
              label="Date of Event" 
              v-model="startDate"></v-text-field>
            </v-flex>
          </v-layout>

          <v-layout>
            <v-flex class="mr-3 px-4" xs8>
              <v-text-field 
              class="inputBoxes" 
              id="title" 
              name="input-1" 
              label="Give a brief description" 
              v-model="description"></v-text-field>
            </v-flex>
          </v-layout>

          <v-btn color="primary" @click.native="e1 = 2">
            Continue
          </v-btn>
          <v-btn flat>Cancel</v-btn>
        </v-stepper-content>

        <v-stepper-content step="2">
        <AddGroup></AddGroup>
          <v-btn color="primary" @click.native="e1 = 3">Continue</v-btn>
          <v-btn flat>Cancel</v-btn>
        </v-stepper-content>
        <v-stepper-content step="3">
    <Schedule :adminCreate="true" :adminShow="false" :nonAdmin="false"></Schedule>
          <v-btn color="primary" @click.native="e1 = 1">Continue</v-btn>
          <v-btn flat>Cancel</v-btn>
        </v-stepper-content>
        <v-stepper-content step="4">
    <InvitationForm></InvitationForm>
          <v-btn color="primary" @click.native="e1 = 1">Continue</v-btn>
          <v-btn flat>Cancel</v-btn>
        </v-stepper-content>
        <v-stepper-content step="5">
    <stripe-payments></stripe-payments>
          <v-btn color="primary" @click.native="e1 = 1">Continue</v-btn>
          <v-btn flat>Cancel</v-btn>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </v-app>
</template>


<script>
import AddGroup from "./AddGroup.desktop";
import Schedule from "./Schedule.desktop";
import EventAddMixin from "./AdminEventCreate.mixin";
import Toolbar from './Toolbar.desktop.vue';
import StripePayments from './StripePayments.desktop.vue';


export default {
  components: {
    AddGroup,
    Schedule,
    Toolbar,
    StripePayments,
  },
data () {
  return ({
    el: 0
  }) 
},
  mixins: [EventAddMixin]
}
</script>

<style scoped>
.eventInfo {
  background-color: #7d4a33;
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
  text-align: center;
  margin-top: 30px;
  margin-bottom: 30px;
}

.darkBlueButton {
  background-color: #051760;
  color: white;
  text-shadow: 1px 1px 2px black;
  font-family: Roboto;  
}
.container {
  max-width: 60%;
  max-height: 80%;
  text-align: center;
}
</style>