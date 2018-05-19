<template>
  <div>
    <v-container fluid grid-list-sm>
      {{/*NO EVENTS TO SHOW YET*/}}
      <v-layout v-show="false" column>
        <v-flex>
          No events added yet...
        </v-flex>
        <v-flex mt-3>

          <v-btn>
            ADD NEW EVENT~~<v-icon md>add_circle_outline</v-icon>
          </v-btn>
        </v-flex>

      </v-layout>

      {{/*SOME EVENTS TO SHOW*/}}
      <v-layout v-show="true" justify-center row wrap>


        <v-flex v-for="event in events" xs4>
          <v-card>
            <v-layout row>
              <v-card-title primary-title>
                  <h3 class="headline mb-0">{{event.title}}</h3>
              </v-card-title>
              <v-spacer></v-spacer>
              <v-btn @click="deleteSingleEvent(event.id)" icon class="mt-2 mr-2" >
                <v-icon medium >delete</v-icon>
              </v-btn>
            </v-layout>
            <v-card-text>
              <div class="text-sm-left">{{event.description}}</div>
            </v-card-text>
          </v-card>
        </v-flex>


      </v-layout>


    </v-container>



  </div>
</template>

<style>
</style>

<script>
import EventsMixin from './AdminEventsList.mixin'

export default {
  mixins: [EventsMixin]
}
</script>

