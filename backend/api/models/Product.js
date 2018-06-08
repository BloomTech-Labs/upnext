module.exports = {
  attributes: {
    title: {
      type: 'string',
      required: true
    },
    description: {
      type: 'string'
    },
    price: {
      type: 'number',
      required: true
    },

    user: {
      model: 'user'
    }
  }
};
