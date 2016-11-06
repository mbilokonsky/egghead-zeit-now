var express = require('express');
var app = express();

app.get('/', (req, res) => {
  res.send(`<h1>Hello World!</h1>
    <h2>The current time is: ${new Date().toISOString()}!</h2>
    <p>This is a new paragraph of content!</p>`);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});