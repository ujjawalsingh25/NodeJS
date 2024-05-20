
// FOR MAKING TOKEN

// const sessionIdToUserMap = new Map();   // Hashmap to iterate in states (key-value pair) to give unique id
const jwt = require('jsonwebtoken'); 
//            --> Apart from Hashmap we use token JWT so that even server restart the payload gives same data

const secret = "ujjawal@123";

function setUser(user) {   // the function creats token using the secret key in token, because od secretKey user can make tokens
  return jwt.sign({
    _id: user._id,
    email: user.email,
    role: user.role,
  }, secret);      // user will be the payload for which token assigned.
}

function getUser(token) {                   // verify the user if the token that was put found similar then get access.
  if(!token)  return null;
  return jwt.verify(token, secret);       // the token can be seen Inspect ->> Application -->> Cookies (below a code)
}                                                       // If code will decoded in jwt.io it gives payload Data.
// However the token can be seen in ""Inspect ->> Application -->> Cookies (below a code)"" 
// and can change but if we change since we do not have "Secret KEY" the app creashes OR won't work
// Also if in "jwt.io" the token changes and also given the "SECRET KEY" the new generated token can also be valid and work as same

module.exports = {
  setUser,
  getUser,
};
