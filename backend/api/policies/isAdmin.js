module.exports = function isAdmin(req, res, next) {
  if (process.env.NODE_ENV === 'test') return next();
  let token = req.headers.token;

  if ('undefined' === token) return res.forbidden();

  try {
    let decryptedSessionStorageToken = TokenService.verify(token);
    if (decryptedSessionStorageToken.isAdmin) {
      return next();
    }
  } catch (error) {
    return res.forbidden(error);
  }
};
