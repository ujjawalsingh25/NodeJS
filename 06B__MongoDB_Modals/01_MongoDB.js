
// mongoose -->> Package to connect NodeJS to MongoDB
// npm i mongoose

const express = require('express');
const users = require('./MOCK_DATA.json');
const fs = require('fs')
const app = express();
const { type } = require('os');
const PORT = 3000;

// Middlewares
const{logReqRes} = require('./middlewares')
// Router
const userRouter = require('./routes/user');
// Mongoose 
const {connectMongoDB} = require('./connection');
// Connection
connectMongoDB("mongodb://127.0.0.1:27017/myyDB1")
    .then(() => console.log("MongoDB Connected"));



app.use(express.urlencoded({extended: false}));     // -->> Middleware
// The above Middleware takes the data from Client User and process the data to Object and "Response" to the body of html.

// __________  02 Updat in fs _______________________________
app.use(logReqRes("log.txt"));


// Routes
app.use("/api/users", userRouter);

app.listen(PORT, () => console.log(`Server started at PORT :: (http://localhost:3000/) : ${PORT}`));
// (http://localhost:3000/) 