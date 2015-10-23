var express = require('express');

var app = express(),
    port = 8666;


app.get('/versions', function(req, res) {
    res.json([
        {
            name: '1.5',
            active: false
        },
        {
            name: '9.0',
            active: true
        },
        {
            name: '5.0',
            active: false
        }
    ])
});

app.use('/', express.static('./'));

app.listen(port);
console.log('Listening at', port);
