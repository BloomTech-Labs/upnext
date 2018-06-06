module.exports = {

  get: (req, res) => {
    const user = CryptographyService.decrypt(req.cookies.user)

    User
      .findOne({
        id: user
      })
      .exec((error, user) => {
        if (error) return res.serverError(error)
        if (user) return res.json(user)
      })
  },

  updateNotificationSettings: async (req, res) => {
    const {  receiveEmails, receiveTexts } = req.allParams()
    const userid = CryptographyService.decrypt(this.req.cookies.user)
    let isAdmin = null
    if (this.req.cookies.isAdmin) isAdmin = CryptographyService.decrypt(this.req.cookies.isAdmin)
    let updatedUser = await User.update({id: userId})
      .set({ receiveEmails, receiveTexts })
      .fetch();
    if (updatedUser) return res.json(updatedUser);
  }
}
