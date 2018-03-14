var express = require('express')
var morgan = require('morgan')
var app = express()

app.use(morgan('combined'))

app.get('/', function (req, res) {
  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  res.send("Hello, i'm digester. You are " + ip + ".");
});

app.listen(80);
