
const express = require('express');
const {connectToMongoDB} = require('./connect');
const urlRoute = require('./routes/url');
const URL = require('./modals/url');
const path = require('path');
const staticRouter = require('./routes/staticRouter');

const app = express();
const PORT = 3000;

// Connection
connectToMongoDB("mongodb://localhost:27017/learningShortURL")
    .then(() => console.log("MongoDB Connected"));

app.use(express.json());         
app.use(express.urlencoded({extended: false}));   

app.set("view engine", "ejs");            // Set the View Engine -> ejs
app.set('views', path.resolve('./views'));

app.get("/test", async (req, res) => {       // at /test link we renders the view given below from ejs file in the view folder
    const allUrls = await URL.find({});
    return res.render("home", {
        urls: allUrls,
    });                  // home.ejs file from views is the view will render
})

app.use("/url", urlRoute);
app.use("/", staticRouter);         // started with "/" then we use static router.

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

