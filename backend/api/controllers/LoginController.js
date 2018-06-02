module.exports = {
  post: (req, res) => {
    const { email, password } = req.allParams();

    User.findOne({ email }).exec((error, user) => {
      if (error) return res.serverError(error);
      if (!user) return res.forbidden();

      User.checkIfPasswordIsValid(password, user, (error, isValid) => {
        if (error) return res.serverError(error);
        if (!isValid) return res.forbidden();

        sails.log.info('User logged in', user);

        const encryptedId = CryptographyService.encrypt(user.id);
        let encryptedAdmin = null;
        if (user.isAdmin) {
          encryptedAdmin = CryptographyService.encrypt(user.isAdmin);
        }

        return res.json({
          token: TokenService.issue({ id: user.id }),
          cookies: { user: encryptedId, isAdmin: encryptedAdmin }
        });
      });
    });
  }
};
