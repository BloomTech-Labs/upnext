module.exports = {
  getEventsByUser: (req, res) => {
    const user = CryptographyService.decrypt(req.cookies.user);
    const isAdmin = CryptographyService.decrypt(req.cookies.isAdmin);

    User.find({ user })
      .populate('subscribedEvents')
      .populate('adminEvents')
      .exec((error, user) => {
        if (error) return res.serverError(error);
        if (isAdmin) {
          res.json(user.adminEvents);
        } else {
          res.json(user.subscribedEvents);
        }
      });
  },
  add: (req, res) => {
    const user = CryptographyService.decrypt(req.cookies.user);

    // User.find({user})
    //   .exec((error, user) => {
    //     user.adminEvents =
    //     Event.create(event)
    //   })
  }
};
