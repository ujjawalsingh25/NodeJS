
const express = require('express');
const {handleGenearteNewShortURL, handleGetAnalytics} = require('../controllers/url');

const router = express.Router();

router.post("/", handleGenearteNewShortURL);

router.get('/analytics/:shortId', handleGetAnalytics);  
        // Check at postman-->> http://localhost:3000/url/analytics/O9qHnvdpYrl/

module.exports = router;