module.exports = {
  editGroupTime: {
    friendlyName: 'EditGroupTime',

    description:
      'Edits the time a group is up and changes all others for that event accordingly',

    extendedDescription: `EDIT GROUP TIMES`,

    inputs: {
      groupId: {
        description: 'Name of user to get events for',
        type: 'string',
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
      // regardless of which database we're using

      //const page = req.param('page');
      User.findOne({ name: inputs.user })
        .populate('subscribedEvents')
        .populate('adminEvents')
        .exec((err, user) => {
          if (user.isAdmin) {
            exits.success({ events: user.adminEvents });
          } else {
            exits.success({ events: user.subscribedEvents });
          }
        });

      // Send success response (this is where the session actually gets persisted)
    }
  }
};
