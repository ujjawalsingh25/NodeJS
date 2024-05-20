
const express = require('express');
const URL = require('./modals/url');
const path = require('path');
const cookieParser = require("cookie-parser");
const {connectToMongoDB} = require('./connect');
const { restrictToLoggedinUserOnly, checkAuth } = require("./middlewares/auth");

// Routes
const urlRoute = require('./routes/url');
const staticRouter = require('./routes/staticRouter');
const userRoute = require('./routes/user');

const app = express();
const PORT = 3000;

// Connection
connectToMongoDB("mongodb://localhost:27017/learningShortURL")
    .then(() => console.log("MongoDB Connected"));

app.use(express.json());         
app.use(express.urlencoded({extended: false}));   
app.use(cookieParser());

app.set("view engine", "ejs");            // Set the View Engine -> ejs
app.set('views', path.resolve('./views'));

app.get("/test", async (req, res) => {       // at /test link we renders the view given below from ejs file in the view folder
    const allUrls = await URL.find({});
    return res.render("home", {
        urls: allUrls,
    });                  // home.ejs file from views is the view will render
})

app.use("/url", restrictToLoggedinUserOnly, urlRoute);      // restrictToLoggedinUserOnly will only run if "/url" 
//                                                                          so to access "/url" need to logged-in / authenticate
app.use("/user", userRoute);        // userRoute when url as or started with http://localhost:3000/user
app.use("/", checkAuth, staticRouter);         // started with "/" then we use static router.

app.get("/url/:shortId", async (req, res) => {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate(
      {
        shortId,
      },
      {
        $push: {
          visitHistory: {
            timestamp: Date.now(),
          },
        },
      }
    );
    res.redirect(entry.redirectURL);        // (http://localhost:3000/url/1qy7rPaBa)
});                    

app.listen(PORT, () => console.log(`Server started at PORT :: (http://localhost:3000/) : ${PORT}`));
// (http://localhost:3000/) 

