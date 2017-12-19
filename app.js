/* This file is used to serve the app locally on your machine. It uses Node JS and Express JS to accomplish this. */

const express = require('express');
const path = require("path");
const app = express()

app.use('/static', express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(3000, () => console.log('Listening on port 3000!'))