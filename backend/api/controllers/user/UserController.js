module.exports = {
  updatePassword: {
    friendlyName: 'Update Password',

    description:
      'Hashes the new password and updates the logged in user if old password matches',

    extendedDescription: `UPDATES USER PASSWORD`,

    inputs: {
      oldPassword: {
        description:
          'oldPassword to check against the logged in users current password',
        type: 'string',
        required: true
      },
      newPassword: {
        description: 'newPassword to hash an put on the user',
        type: 'string',
        required: true
      }
    },

    exits: {
      success: {
        statusCode: 200
      },

      badCombo: {
        description: `The provided password does not `,
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

      const userId = CryptographyService.decrypt(this.req.cookies.user);

      User.findOne({ id: userId }).exec(async (err, user) => {
        User.checkIfPasswordIsValid(oldPassword, user, (err, isValid) => {
          if (error) return res.serverError(error);
          if (!isValid) return res.forbidden();

          bcrypt.genSalt(10, (error, salt) => {
            if (error) return res.serverError(error);

            bcrypt.hash(inputs.newPassword, salt, async (error, hash) => {
              if (error) return res.serverError(error);

              await User.update({ id: userId }).set({ password: hash });

              return exits.success({ msg: 'success' });
            });
          });
        });
      });

      //const page = req.param('page');

      // Send success response (this is where the session actually gets persisted)
    }
  }
}