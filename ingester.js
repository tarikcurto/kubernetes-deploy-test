var express = require('express')
var app = express()

app.get('/', function (req, res) {
  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  res.send("Hellow, i'm ingester. You are " + ip + ".");
});

app.listen(80);
