const bcrypt = require('bcryptjs');

module.exports = {
  attributes: {
    fullName: {
      description: 'The full name of the user',
      type: 'string',
      required: true
    },
    email: {
      description: 'The user\'s email address',
      type: 'string',
      required: true
    },
    password: {
      description: 'The password used to sign in to the user\'s account',
      type: 'string',
      required: true
    },
    isAdmin: {
      description: 'Boolean identifying whether this user has paid to create an event, which grants additional options in terms of event planning.',
      type: 'boolean',
      required: false
    },
    phone: {
      description: 'Phone number on which user can receive text notifications',
      type: 'string',
      required: false
    },
    receiveTexts: {
      description: 'A boolean which identifies whether a user has signed up to receive text notifications',
      type: 'boolean',
      required: false
    },
    receiveEmails: {
      description: 'A boolean which identifies whether a user has signed up to receive email notifications',
      type: 'boolean',
      required: false
    },

    ///////////////////////////////////////////////////////////////////////
    stripeCustomerId: {
      type: 'string',
      protect: true,
      description:
        'The id of the customer entry in Stripe associated with this user (or empty string if this user is not linked to a Stripe customer -- e.g. if billing features are not enabled).',
      extendedDescription: `Just because this value is set doesn't necessarily mean that this user has a billing card.
It just means they have a customer entry in Stripe, which might or might not have a billing card.`
    },

    hasBillingCard: {
      type: 'boolean',
      description:
        'Whether this user has a default billing card hooked up as their payment method.',
      extendedDescription: `More specifically, this indcates whether this user record's linked customer entry in Stripe has
a default payment source (i.e. credit card).  Note that a user have a \`stripeCustomerId\`
without necessarily having a billing card.`
    },

    billingCardBrand: {
      type: 'string',
      example: 'Visa',
      description:
        "The brand of this user's default billing card (or empty string if no billing card is set up).",
      extendedDescription:
        "To ensure PCI compliance, this data comes from Stripe, where it reflects the user's default payment source."
    },

    billingCardLast4: {
      type: 'string',
      example: '4242',
      description:
        "The last four digits of the card number for this user's default billing card (or empty string if no billing card is set up).",
      extendedDescription:
        "To ensure PCI compliance, this data comes from Stripe, where it reflects the user's default payment source."
    },

    billingCardExpMonth: {
      type: 'string',
      example: '08',
      description:
        "The two-digit expiration month from this user's default billing card, formatted as MM (or empty string if no billing card is set up).",
      extendedDescription:
        "To ensure PCI compliance, this data comes from Stripe, where it reflects the user's default payment source."
    },

    billingCardExpYear: {
      type: 'string',
      example: '2023',
      description:
        "The four-digit expiration year from this user's default billing card, formatted as YYYY (or empty string if no credit card is set up).",
      extendedDescription:
        "To ensure PCI compliance, this data comes from Stripe, where it reflects the user's default payment source."
    },

    //////////////////////////////////////////////////

    subscribedEvents: {
      collection: 'event',
      via: 'subscribers'
    },
    subscribedGroups: {
      collection: 'group',
      via: 'subscribers'
    },
    adminEvents: {
      collection: 'event',
      via: 'owner'
    }
  },

  customToJSON: function() {
    // let user = this.toObject();
    // delete user.password;

    return _.omit(this, ['password']);
    // return user;
    // return this.toObject();
  },

  beforeCreate: (user, next) => {
    bcrypt.genSalt(10, (error, salt) => {
      if (error) return next(error);

      bcrypt.hash(user.password, salt, (error, hash) => {
        if (error) return next(error);

        user.password = hash;
        next();
      });
    });
  },

  checkIfPasswordIsValid: (password, user, callback) => {
    bcrypt.compare(password, user.password, (error, isMatch) => {
      if (error) callback(error);

      if (isMatch) {
        callback(null, true);
      } else callback(error, false);
    });
  }
};
