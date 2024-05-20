
const User = require('../models/user')

async function handleGetALlUser(req, res) {                 // GET for "/" for Home
    const allDbUser = await User.find({});
    return res.json(allDbUser);
}

async function handleGetUserByID(req, res) {                 // GET
    const user = await User.findById(req.params.id);
    if(!user)   return res.status(404).json({error: "User not found"});
    return res.json(user);
} 

async function handleUpdateUserByID(req, res) {                     //PATCH
    // await User.findByIdAndUpdate(req.params.id, {lastName: "ChangeTOKumar"});
    await User.findByIdAndUpdate(req.params.id, {jobTitle: "Developer"});
    return res.json({status: "Success"});
}
async function handleDeleteUserByID(req, res) {                 // DELETE
    await User.findByIdAndDelete(req.params.id);
    return res.json({status: "Deleted"});
}

async function handleCreateNewUser(req, res) {                  // POST
    const body = req.body;
    if(
        !body || 
        !body.first_name || 
        !body.last_name || 
        !body.email ||
        !body.gender ||
        !body.job_title
    ){
        return res.status(400).json({msg: "All fields are required"});
    }          

    const result = await User.create({              // result will get the return of the User created
        firstName: body.first_name,
        lastName: body.last_name,
        email: body.email,
        gender: body.gender,
        jobTitle: body.job_title,
    });
    console.log("Result: ", result);
    return res.status(201).json({msg: "Success", id: result._id});
}

module.exports = {
    handleGetALlUser,
    handleGetUserByID,
    handleUpdateUserByID,
    handleDeleteUserByID,
    handleCreateNewUser
}