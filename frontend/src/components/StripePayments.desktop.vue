<template>
  <v-content>
      <div id="button-container">
      <button id="checkout-button" @click="checkout">Checkout</button>
    </div>
  </v-content>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  methods: {
    async checkout() {
      await this.$checkout.open({
        name: 'Enter Payment Details:',
        currency: 'USD',
        amount: 9.99,
        token: async token => {
          console.log(token)
          const source = token
          let result = await this.$store.dispatch('makePayment', source);
          console.log(result)
          }
        })  
      }
    }
  }
</script>
<style>
#checkout-button {
  background-color: gold;
  padding: 1% 5%;
  margin: auto;
}
#button-container {
  margin: auto;
  width: 100%;
  text-align: center;
}
</style>  

