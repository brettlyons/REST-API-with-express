// swords for routing
//

var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.status(200).json({ message: 'rawr! you did it!'  });
});

module.exports = router
