var express = require('express');

var app = express();

// Respond with 'hello world'
app.get('/', function (req, res) {
    res.send('hello world');
})

// Listen on port 3000
app.listen(process.env.port || 3000);

module.exports = app;