<template>

  <div>

  <v-container fluid grid-list-sm>

    <v-layout justify-center>
      <v-flex xs8>
        <v-card>
          <v-toolbar color="yellow darken-1">
            <v-toolbar-title>Event Info</v-toolbar-title>

          </v-toolbar>

          <v-layout >
            <v-flex xs4>
            <v-subheader class="subheading mt-2">Event Title</v-subheader>
            </v-flex>
            <v-flex class="mr-3" xs8>
              <v-text-field
                id="title"
                name="input-1"
                label="Title"
              ></v-text-field>
            </v-flex>
          </v-layout>

          <v-layout>
            <v-flex xs4>
            <v-subheader class="subheading mt-2">Event Date</v-subheader>
            </v-flex>
            <v-flex class="mr-3" xs8>
              <v-text-field
                id="title"
                name="input-1"
                label="Date"
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
        <v-btn color="yellow darken-3">PROCEED TO CHECKOUT</v-btn>
      </v-flex>
    </v-layout>



  </v-container>
  </div>
</template>

<style>

</style>

<script>
import AddGroup from './AddGroup.desktop';
import Schedule from './Schedule.desktop';

export default {
  components: {
    AddGroup,
    Schedule
  }
};
</script>
