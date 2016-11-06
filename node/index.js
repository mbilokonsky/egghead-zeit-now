var express = require('express');
var app = express();

var getGreeting = require("./getGreeting");
var getDate = require('./getDate');

app.get('/', (req, res) => {
  res.send(`<h1>${getGreeting()}</h1>
    <h2>The current time is: ${getDate()}!</h2>
    <p>This is a new paragraph of content!</p>`);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});