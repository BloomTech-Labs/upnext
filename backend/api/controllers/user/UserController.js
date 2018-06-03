module.exports = {
  get: (req, res) => {
    const user = CryptographyService.decrypt(req.cookies.user)

    User
      .findOne({id: user})
      .exec((error, user) => {
        if (error) return res.serverError(error)
        if (user) return res.json(user)
      })
  },

  put: async (req, res) => {
    const user = await User.findOne({ id: CryptographyService.decrypt(req.cookies.user)}).fetch()

  }
}
