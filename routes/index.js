const express = require('express');
const router = express.Router();

/* GET home page. */
router.all('/', function (req, res, next) {
    let body = req.body;
    if (req.headers["content-type"] === "application/octet-stream"){
        body = Buffer.from(body).toString('hex');
    }
    res.json({
        headers: req.headers,
        body
    })
});

module.exports = router;
