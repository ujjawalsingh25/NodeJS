
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName : {
        type: String,
        required: true,     // --> It need to br filled (By default False)  
    },
    lastName : {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,           // Each entry should be unique
    },
    jobTitle : {
        type: String,
    },
    gender : {
        type: String,
    },
}, {timestamps: true});     // -->> It gives the created and updated entry timeStamp


    // ___________  MODEL  ________________
// const User = mongoose.model("model_Name", passed_Schema)     -->> Formate
const User = mongoose.model("user", userSchema);
// ___________________________________________________________________________________________________________

module.exports = User;
