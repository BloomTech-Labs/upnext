module.exports = {
  getEvents: {
    friendlyName: 'GetEvents',

    description: 'Gets events for the particular user',

    extendedDescription: `EVENTS FOR USER`,

    inputs: {
      user: {
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
      // regardless of which database we're using)

      //const page = req.param('page');
      User.findOne({ name: inputs.user })
        .populate('isAdmin')
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
  },
  deleteEvent: {
    friendlyName: 'DeleteEvent',

    description: 'Deletes a given event with a single',

    extendedDescription: `DELETE EVENT`,

    inputs: {
      id: {
        description: 'id of event to delete',
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
      console.log(inputs);

      Event.destroy({ id: inputs.id }).exec((err, deleted) => {
        return exits.success({ deleted: deleted });
      });
      // Send success response (this is where the session actually gets persisted)
    }
  },
  addEvent: {
    friendlyName: 'AddEvent',

    description: 'Adds an event with a given date, title, and initial groups',

    extendedDescription: `ADD EVENT`,

    inputs: {
      title: {
        description: 'Title of event',
        type: 'string',
        required: true
      },
      startDate: {
        description: 'Date of event',
        type: 'number',
        required: true
      },
      groupsWithTime: {
        description: 'Groups object with ',
        type: 'json',
        required: true
      },
      description: {
        description: 'Description of event',
        type: 'string',
        required: true
      },
      owner: {
        description: 'Admin/creator of event',
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
      // regardless of which database we're using)

      //const page = req.param('page');
      console.log(inputs);

      // Event.destroy({ id: inputs.id }).exec((err, deleted) => {
      //   return exits.success({ deleted: deleted });
      // });

      User.findOne({ name: inputs.owner }).exec((err, user) => {
        console.log(user);
        Event.create({
          title: inputs.title,
          groupsWithTime: inputs.groupsWithTime,
          startDate: inputs.startDate,
          description: inputs.description,
          owner: user.id
        }).exec((err, result) => {
          return exits.success({ result: result });
        });
      });

      // Send success response (this is where the session actually gets persisted)
    }
  }
};
