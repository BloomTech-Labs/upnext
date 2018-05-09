module.exports = {
  friendlyName: 'GetProducts',

  description: 'Gets all the products',

  extendedDescription: `products`,

  inputs: {
    page: {
      description: 'page for pagination',
      type: 'number',
      required: true
    }
  },

  exits: {
    success: {
      statusCode: 200
    },

    badCombo: {
      description: `The provided email and password combination does not
      match any user in the database.`,
      responseType: 'unauthorized'
      // ^This uses the custom `unauthorized` response located in `api/responses/unauthorized.js`.
      // To customize the generic "unauthorized" response across this entire app, change that file
      // (see http://sailsjs.com/anatomy/api/responses/unauthorized-js).
      //
      // To customize the response for _only this_ action, replace `responseType` with
      // something else.  For example, you might set `statusCode: 498` and change the
      // implementation below accordingly (see http://sailsjs.com/docs/concepts/controllers).
    }
  },

  fn: async function(inputs, exits) {
    // Look up by the email address.
    // (note that we lowercase it to ensure the lookup is always case-insensitive,
    // regardless of which database we're using)

    //const page = req.param('page');

    Product.count().exec((error, amountOfProducts) => {
      console.log('amt of products', amountOfProducts);
      console.log(('skip', (inputs.page - 1) * 6));
      Product.find()
        .populate('user')
        .skip((inputs.page - 1) * 6)
        .limit(6)
        .exec((error, products) => {
          console.log(products.length);
          if (products)
            return exits.success({
              products: products,
              amountOfProducts: amountOfProducts
            });
        });
    });

    // Send success response (this is where the session actually gets persisted)
  }
};
