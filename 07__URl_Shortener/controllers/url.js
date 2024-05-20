
const shortid = require('shortid')
const URL = require('../modals/url')

async function handleGenearteNewShortURL(req, res) {
    const body = req.body;
    if(!body.url) return res.status(400).json({error: "URL is required"})
    const shortID = shortid();

    await URL.create({
        shortId: shortID,
        redirectURL: body.url,
        visitHistory: [],
    });

    return res.json({id : shortID});
}

async function handleGetAnalytics(req, res) {           // GEt the total count of the visited/ clicks
    const shortId = req.params.shortID;
    const result = await URL.findOne({ shortid });
    return res.json({
        totalClicks: result.visitHistory.length,     // visitHisted, array get the list of timestamp of visit 
        analytics: result.visitHistory,                                 //and its lenght give number
    });
}

module.exports = {
    handleGenearteNewShortURL,
    handleGetAnalytics,
}