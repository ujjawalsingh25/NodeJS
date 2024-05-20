
// Middleware to check the cookie(unique session id) and if true next else rejects the response.
const { getUser } = require("../service/auth");

async function restrictToLoggedinUserOnly(req, res, next) {
  const userUid = req.cookies?.uid;                 // sessionid from --> cookie

  if (!userUid) return res.redirect("/login");      // if user and not login redirect to login.
  const user = getUser(userUid);                  // get user

  if (!user) return res.redirect("/login");         // if not user then redirect to login

  req.user = user;                // if all good then request.user will be user and calls next function.
  next();
}

async function checkAuth(req, res, next) {
  const userUid = req.cookies?.uid;

  const user = getUser(userUid);

  req.user = user;
  next();
}

module.exports = {
  restrictToLoggedinUserOnly,
  checkAuth,
};
