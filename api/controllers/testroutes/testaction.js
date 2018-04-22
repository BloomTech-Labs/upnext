module.exports = {
  friendlyName: 'Hi Raymond',

  description: 'Documenting the description',

  inputs: {
    text: {
      description: 'Required text to pass onto the response',
      type: 'string',
      required: true
    }
  },
  exits: {
    success: {
      responseType: '',
      outputSuccess: 'output'
    }
  },

  fn: async function(inputs, exits) {
    // console.log(
    //   `Hi ${inputs.text} ${sails.config.custom.stripeSecret} ${JSON.stringify(
    //     sails.helpers.stripe.saveBillingInfo,
    //     null,
    //     2
    //   )}`
    // );
    return exits.success();
  }
};
