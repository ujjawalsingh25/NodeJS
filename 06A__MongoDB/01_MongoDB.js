
// mongoose -->> Package to connect NodeJS to MongoDB
// npm i mongoose
// _____________  Working of MongoDB  _______________
// Schema  -->>  Define the structure   (Tables having id, name, email, address)
//      Using Schema  -->> We create Model
//      Using Model  -->> We perform CRUD Operation
// __________________________________________________


// mongoose -->> Package to connect NodeJS to MongoDB
// npm i mongoose

const express = require('express');
const users = require('./MOCK_DATA.json');
const fs = require('fs')
const app = express();
const mongoose = require('mongoose');
const { type } = require('os');
const PORT = 3000;


// _____________________________________________  MongoDB  ____________________________________________________
// __________  Connection  _____________
// mongoose.connect('Database_URL/Database_Name', ).then((return_promise)) .catch((if_Error));  --> Formate
mongoose
    .connect('mongodb://127.0.0.1:27017/myyDB1')
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log("MongoDB Error: ", err));

// __________  SCHEMA  __________________________
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
        unique: true,
    },
    jobTitle : {
        type: String,
    },
    gender : {
        type: String,
    },
}, {timestamps: true});     // -->> It gives the created and updated entry timeStamp
// _________________________
// ___________  MODEL  ________________
// const User = mongoose.model("model_Name", passed_Schema)     -->> Formate
const User = mongoose.model("user", userSchema);
// ___________________________________________________________________________________________________________




app.use(express.urlencoded({extended: false}));     // -->> Middleware
// The above Middleware takes the data from Client User and process the data to Object and "Response" to the body of html.

// __________  02 Updat in fs _______________________________
const currTime =new Date(Date.now()).toLocaleString();
app.use((req, res, next) => {
    fs.appendFile('log.txt', 
    `\n${currTime} : ${req.ip} : ${req.method} : ${req.path}`, 
    (err, data) => {
        next();
    })
});  //______________________________________________________ log written to txt file



// ____  Routes  ____  Getting Data through DB  ________
app.get('/api/users', async(req, res) => {
    const allDbUser = await User.find({});
    return res.json(allDbUser);
});
app.get("/users", async(req, res) => {
    const allDbUser =  await User.find({}); 
    const html = `<ul>
                    ${allDbUser.map((user) => `<li>${user.firstName} - ${user.email}</li>`).join("")}
                </ul>`;
    res.send(html);
});

app
    .route("api/users/:id")
    .get(async(req, res) => {
        const user = await User.findById(req.params.id);
        if(!user)   return res.status(404).json({error: "User not found"});
        return res.json(user);
    })
    .patch(async(req, res) => {
        await User.findByIdAndUpdate(req.params.id, {lastName: "ChangeTOKumar"});
        return res.json({status: "Success"});
    })
    .delete( async(req, res) => {
        await User.findByIdAndDelete(req.params.id);
        return res.json({status: "Deleted"});
    })
// __________________________________________________________________________________________________

app.post('/api/users', async(req, res) => {
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
    return res.status(201).json({msg: "Success"});
});

app.listen(PORT, () => console.log(`Server started at PORT :: (http://localhost:3000/) : ${PORT}`));
// (http://localhost:3000/) 