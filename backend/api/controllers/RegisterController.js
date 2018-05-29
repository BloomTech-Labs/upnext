module.exports = {
  post: async (req, res) => {
    const { name, password, isAdmin } = req.allParams();
    var createdUser = await User.create({ name, password, isAdmin }).fetch();
    // User.create({ name, password, isAdmin }).exec((error, user) => {
    //   if (error) return res.serverError(error);

    //   sails.log.info('Created user', user);
    //   return res.json(user);
    //   //if (user) return res.ok()
    // });
    if (createdUser) {
      sails.log.info('Created user', createdUser);
      return res.json(createdUser);
    }
  }
};
