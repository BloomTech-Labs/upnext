<template>
  <div id="button-container">
    <button id="checkout-button" @click="checkout">Checkout</button>
  </div>
</template>

<script>
export default {
  methods: {
    async checkout() {
      this.$checkout.open({
        name: "Enter Payment Details:",
        currency: "USD",
        amount: 9.99,
        token: token => {
          console.log("This went through correctly**********************");
          let details = await this.$store.dispatch('makePayment', token);
          console.log(details)
        }
      });
    }
  }
};
</script>
<style>
#checkout-button {
  background-color: gold;
  padding: 1% 5%;
  margin: auto;
}
#button-container {
  width: 100%;
  margin: auto;
  text-align: center;
}
</style>

