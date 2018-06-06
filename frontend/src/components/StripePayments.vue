<template>
  <div id="button-container">
    <button id="checkout-button" @click="checkout">Checkout</button>
  </div>
</template>

<script>
export default {
  methods: {
    checkout() {
      this.$checkout.open({
        name: "Enter Payment Details:",
        currency: "USD",
        amount: 9.99,
        token: token => {
          console.log(token);
          console.log("This went through correctly**********************");
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
    margin: auto;
    width: 100%;
    text-align: center;
  }
</style>

