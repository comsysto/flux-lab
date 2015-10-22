var express = require('express');

var app = express(),
    router = express.Router(),
    port = 8666;

router.get('/', function(req, res) {
    res.json({
        foo: 'bar'
    })
});

app.use('/', router);

app.listen(port);
console.log('Listening at', port);
