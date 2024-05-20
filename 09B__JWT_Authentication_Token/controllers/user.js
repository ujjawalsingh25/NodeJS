
const User = require('../modals/user');
const {v4: uuidv4} = require('uuid');
const {setUser} = require('../service/auth');

async function handleUserSignup(req, res) {
    const {name, email, password} = req.body;
    await User.create({
        name, 
        email,
        password,
    });
    return res.redirect("/");
}

async function handleUserLogin(req, res) {
    const {email, password} = req.body;
    const user = await User.findOne({email, password});      
    if(!user) {
        return res.render("login", {
            error: "Invalid Username or Password",
        });
    }
    const token =  setUser(user);
    res.cookie("uid", token);
    // res.cookie("uid", token, {
    //     domain: "www.wesdite.com",           // Since Cookie are Domain Specific so added domain to which cookie should added
    // });                              //  if the given domain will not be opened then cookie would not be generated.
    return res.redirect("/");
}

module.exports = {
    handleUserSignup,
    handleUserLogin,
}