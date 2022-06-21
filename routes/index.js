const express = require('express');
const router = express.Router();

const useBuffer = new Set([
    "application/octet-stream",
    "text/plain",
]);

/* GET home page. */
router.all('/', function (req, res, next) {
    let body = req.body;
    if (useBuffer.has(req.headers["content-type"])) {
        body = Buffer.from(body).toString('hex');
    }
    res.json({
        headers: req.headers,
        body
    })
});

module.exports = router;
