module.exports = {
  post: async (req, res) => {
    const {
      email,
      fullName,
      password
    } = req.allParams();
    const isAdmin = false;

    const user = await User.create({
      email,
      fullName,
      password,
      isAdmin
    }).fetch();
    // User.create({ name, password, isAdmin }).exec((error, user) => {
    //   if (error) return res.serverError(error);

    //   sails.log.info('Created user', user);
    //   return res.json(user);
    //   //if (user) return res.ok()
    // });
    if (user) {
      sails.log.info('Created user', user);
      const encryptedId = CryptographyService.encrypt(user.id);

      return res.json({
        token: TokenService.issue({
          id: user.id
        }),
        cookies: {
          user: encryptedId,
          isAdmin: user.isAdmin
        },
        user
      });
    }
  }
}
