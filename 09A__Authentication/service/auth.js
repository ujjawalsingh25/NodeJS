
const sessionIdToUserMap = new Map();   // Hashmap to iterate in states (key-value pair) to give unique id

function setUser(id, user) {            // Give a unique session id to user by taking user as parameter
  sessionIdToUserMap.set(id, user);
}

function getUser(id) {                    // Checks the unique session id
  return sessionIdToUserMap.get(id);
}

module.exports = {
  setUser,
  getUser,
};
