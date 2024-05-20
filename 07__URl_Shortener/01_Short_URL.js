
const express = require('express');
const {connectToMongoDB} = require('./connect');
const urlRoute = require('./routes/url');
const URL = require('./modals/url');

const app = express();
const PORT = 3000;

// Connection
connectToMongoDB("mongodb://localhost:27017/learningShortURL")
    .then(() => console.log("MongoDB Connected"));

app.use(express.json());            

app.use("/url", urlRoute);

app.get('/:shortId', async(req, res) => {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate(
        {
        shortId,
        },
        { 
            $push : {
                visitHistory: {
                    timestamp: Date.now(),
                },
            }
        }
    );
    res.redirect(entry.redirectURL);
})

app.listen(PORT, () => console.log(`Server started at PORT :: (http://localhost:3000/) : ${PORT}`));
// (http://localhost:3000/) 

// As of now created Shortid URL --->>> http://localhost:3000/O9qHnvdpY
