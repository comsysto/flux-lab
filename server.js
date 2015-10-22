var express = require('express');

var app = express(),
    router = express.Router(),
    port = 8666;

router.get('/', function(req, res) {
    res.json({
        version: '1.5.6.10'
    })
});

app.use('/', router);

app.listen(port);
console.log('Listening at', port);
