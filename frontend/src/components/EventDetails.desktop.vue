<template>

  <v-app light>

    <v-container class="eventDetailsContainer">
    <v-card class="wrappingCard">
      <v-card class="eventDetailsTitle">
      <v-btn class="backButton">
      <v-icon left> arrow_back</v-icon>
      Back
    </v-btn>
        <h1 class="titleFontConfig"> {{singleEvent.title}} </h1>
      </v-card>
      <br>
      <v-card class="eventLocationCard">
        <h2 class="fontConfig"> Location: {{eventLocation}} </h2>
        </v-card>
        <br>
        <v-card class="textAreaCard">
            <v-card class="textBoxStyle"> {{eventSummary}} </v-card>
          </v-card>
    </v-card>
    </v-container>
  </v-app>
</template>


<script>
//const axios = require('axios');

export default {
  // components {
  created() {
    console.log('this.eventId', this.eventId)
    console.log('this.singleEvent', this.singleEvent)
  },

  // },
  computed: {
    singleEvent() {
      return this.events.filter(event => {
        return event.id === this.eventId
      })[0]
    },

    eventId: {
      get() {
        return this.$store.state.eventId
      }
    },
    events: {
      get() {
        return this.$store.state.Events.events
      }
    }
  },
  data: () => ({
    eventName: 'ART EXPO!!!',
    eventLocation: 'Philadelphia Art Museum',
    eventSummary:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula diam ac dictum porta. Ut in tincidunt nunc. Vestibulum vulputate, ligula et pulvinar ornare, odio eros ullamcorper orci, sed egestas nisl ligula eu lacus. Morbi blandit sem sed fringilla posuere. Pellentesque dictum, magna vitae placerat suscipit, ligula mi rhoncus mauris, non sollicitudin massa nisi eu nunc. Curabitur ornare ac ante quis varius. Nullam vitae metus vitae lectus semper porta. Nunc maximus lectus eget blandit ultrices. Phasellus et sollicitudin magna. Vestibulum suscipit consequat auctor. Pellentesque vestibulum viverra rutrum. Sed commodo erat a nunc hendrerit condimentum. Phasellus consectetur vestibulum libero sit amet rutrum. Suspendisse a nibh in sem porta interdum a efficitur mauris.'
  })
}
</script>

<style scoped>
.eventDetailsContainer {
  margin-top: 6%;
  text-align: center;
  display: inline-block;
}

.wrappingCard {
  background-color: #4378a2;
  padding: 2rem;
}

.eventDetailsTitle {
  padding: 3rem;
  background-color: white;
  box-shadow: 1px 2px 1px #333;
  margin-left: 5%;
  margin-right: 5%;
}

.eventLocationCard {
  padding: 1rem;
  background-color: #ea7a22;
  box-shadow: 1px 2px 1px #333;
  margin-left: 10%;
  margin-right: 10%;
}

.textAreaCard {
  padding: 3rem;
  background-color: #051760;
  box-shadow: 1px 2px 1px #333;
  margin-left: 10%;
  margin-right: 10%;
}

.titleFontConfig {
  color: black;
  text-shadow: 1px 2px 1px #e5dcd6;
  font-size: 40px;
}

.fontConfig {
  color: white;
  text-shadow: 1px 2px 1px black;
  font-size: 20px;
}

.textBoxStyle {
  background-color: white;
  height: 500px;
  width: 100%;
  font-size: 18px;
  padding: 1rem;
  line-height: 2rem;
}

.backButton {
  display: flex;
  /* width: 10%; */
  float: left;
  margin-right: -10%;
  border-radius: 10px;
}
</style>