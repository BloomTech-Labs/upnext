const sgMail = require('@sendgrid/mail');

const accountSid = '';
const authToken = '';
const client = 0; //require('twilio')(accountSid, authToken);

module.exports = {
  sendgrid: {
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
  },
  twilio: {
    friendlyName: 'Twilio Endpoint',

    description: 'Sends a message to a specified recipient',

    inputs: {
      body: {
        description: 'Text body to send in the message',
        type: 'string',
        required: true,
        example: "Let's grab lunch at Milliways tomorrow!"
      },
      to: {
        description: 'Phone number to send to',
        type: 'string',
        required: true,
        example: '+15558675310'
      },
      from: {
        description: 'Twilio phone number to send from',
        type: 'string',
        required: false,
        example: '+14158141829'
      },
      mediaUrl: {
        description: 'Url of an image to send with the message',
        type: 'string',
        required: false,
        example: 'http://www.example.com/cheeseburger.png'
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
      const { body, to, from, mediaUrl } = inputs;
      const newMsg = { body: body, to: to };

      const addToObj = (obj, prop, name) => {
        if (prop) {
          obj[name] = prop;
        }
      };

      addToObj(newMsg, from, 'from');
      addToObj(newMsg, mediaUrl, 'mediaUrl');
      console.log(JSON.stringify(newMsg));
      client.messages
        .create(newMsg)
        .then(message => process.stdout.write(message.sid))
        .catch(err => {
          console.log(err);
        });

      return exits.success();
    }
  }
};
