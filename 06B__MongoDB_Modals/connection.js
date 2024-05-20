
const mongoose = require('mongoose');
mongoose.set("strictQuery",true);

// __________  Connection  _____________
// mongoose.connect('Database_URL/Database_Name', ).then((return_promise)) .catch((if_Error));  --> Formate
// mongoose
//     .connect('mongodb://127.0.0.1:27017/myyDB1')
//     .then(() => console.log("MongoDB Connected"))
//     .catch((err) => console.log("MongoDB Error: ", err));
// _________________________________________________________________

async function connectMongoDB(url) {
    return mongoose.connect(url);
}

module.exports = {
    connectMongoDB,
}