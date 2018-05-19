const sgMail = require('@sendgrid/mail');
module.exports = {
  friendlyName: 'Sendgrid endpoint',

  description: 'sendgrid description',

  inputs: {
    text: {
      description: 'Required text to pass onto the response',
      type: 'string',
      required: true
    },
    to: {
      description: 'email address to send to',
      type: 'string',
      required: true
    },
    from: {
      description: 'email address to send from',
      type: 'string',
      required: true
    },
    subject: {
      description: 'email subject',
      type: 'string',
      required: true
    },
    text: {
      description: 'text in the email',
      type: 'string',
      required: true
    },
    html: {
      description: 'html edit thingy',
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
    sgMail.setApiKey(sails.config.custom.sendgrid);
    console.log(sails.config.custom.sendgrid);
    const msg = {
      to: inputs.to,
      from: inputs.from,
      subject: inputs.subject,
      text: inputs.text,
      html: inputs.html
    };
    sgMail
      .send(msg)
      .then(watevs => {
        console.log(watevs);
      })
      .catch(err => {
        console.log(err);
      });
    return exits.success();
  }
};
