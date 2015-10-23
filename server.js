var express = require('express');

var app = express(),
    router = express.Router(),
    port = 8666;

router.get('/', function(req, res) {
    res.json({
        version: '1.5.6.10'
    })
});

router.get('/versions', function(req, res) {
    res.json([
        {
            name: '1.5',
            active: false
        },
        {
            name: '3.0',
            active: true
        },
        {
            name: '5.0',
            active: false
        }
    ])
});

app.use('/', router);

app.listen(port);
console.log('Listening at', port);
