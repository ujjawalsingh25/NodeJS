
const path = require('path')
const express = require('express');
const mongoose = require('mongoose');

// Routes
const userRoute = require('./routes/user');


const app = express();
const PORT = 3000;

mongoose
    .connect("mongodb://localhost:27017/03__myyBlogDB")
    .then((e) => console.log("MongoDB Connected"));

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

// Add middleware
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.render("home");
})

app.use("/user", userRoute);

app.listen(PORT, () => console.log(`Server started at PORT :: (http://localhost:${PORT}/) : `));
// (http://localhost:3000/) 