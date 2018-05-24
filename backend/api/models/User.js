const bcrypt = require('bcryptjs');

module.exports = {
  attributes: {
    name: {
      type: 'string',
      required: true
    },
    password: {
      type: 'string',
      required: true
    },
    isAdmin: {
      type: 'Boolean',
      ///////////////////////////////////////////////////////////
      required: false
      /////////////////////////////////////////////////////////////
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

    products: {
      collection: 'product',
      via: 'user'
    },
    baskets: {
      collection: 'basket',
      via: 'user'
    },
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

  customToJSON() {
    //let user = this.toObject();
    //delete user.password;

    return _.omit(this, ['password']);
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
