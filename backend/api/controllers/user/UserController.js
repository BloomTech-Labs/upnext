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

  patch: async (req, res) => {
    const { receivetexts, receiveEmails, password, email } = req.body
    const userid = CryptographyService.decrypt(this.req.cookies.user)
    let isAdmin = null
    if (this.req.cookies.isAdmin) isAdmin = CryptographyService.decrypt(this.req.cookies.isAdmin)
    let updatedUser = await User.update({ id: userId })
    .set({receiveTexts, receiveEmails, password, email})
    .fetch();
    if (updatedUser) {
      console.log(updatedUser)
      res.status(200).json({success: 'successfully updated'})
    }
  }
}
