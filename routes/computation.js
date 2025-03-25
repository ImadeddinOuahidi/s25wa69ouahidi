var express = require('express');
var router = express.Router();

/* GET computation. */
router.get('/', function (req, res, next) {
    let x = Math.random() * 100;
    if (req.query.x) {
        x = req.query.x;
    }

    let result = Math.sqrt(x);

    res.send(`sqrt applied to ${x} is ${result}`);
});

module.exports = router;
