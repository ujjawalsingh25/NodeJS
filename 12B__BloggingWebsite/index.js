
const path = require('path')
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const Blog = require('./models/blog');

// Routes
const userRoute = require('./routes/user');
const blogRoute = require('./routes/blog');
const { checkForAuthenticationCookie } = require('./middleware/authentication');
 
 
const app = express();
const PORT = 3000;

mongoose
    .connect("mongodb://localhost:27017/03__myyBlogDB")
    .then((e) => console.log("MongoDB Connected"));

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.urlencoded({extended: false}));     // Add middleware
app.use(cookieParser());
app.use(checkForAuthenticationCookie("token"));
// Express do not take the os/ system folder as routes to takes/upload the files so need to make that folder as static Routes
app.use(express.static(path.resolve("./public")));  

app.get('/', async (req, res) => {
    const allBlogs = await Blog.find({});
    res.render("home", {
        user: req.user,
        blogs: allBlogs,
    });
})

app.use("/user", userRoute);
app.use("/blog", blogRoute);

app.listen(PORT, () => console.log(`Server started at PORT :: (http://localhost:${PORT}/) : `));
// (http://localhost:3000/) 