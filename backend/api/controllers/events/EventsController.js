module.exports = {
  getEvents: {
    friendlyName: 'GetEvents',

    description: 'Gets all the events',

    extendedDescription: `EVENTS`,

    inputs: {},

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

      Event.find().exec((err, events) => {
        exits.success({ events: events });
      });

      // Send success response (this is where the session actually gets persisted)
    }
  }
};
