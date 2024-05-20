
// Middleware to check the cookie(unique session id) and if true next else rejects the response.
const { getUser } = require("../service/auth");

function checkForAuthentication(req, res, next) {
  const tokenCookie = req.cookies?.token;       
  req.user = null; 
  if(!tokenCookie)    return next();

  const token = tokenCookie;
  const user = getUser(token);
  req.user = user;
  return next();
}

function restrictTo(roles = []){           // Roles such as for Admin, Normal user
  return function(req, res, next) {
    if(!req.user) return res.redirect("/login");
    if(!roles.includes(req.user.role))  return res.end("UnAuthorized");
    return next();
  }
}

module.exports = {
  checkForAuthentication,
  restrictTo,
};
