var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World!\n');
});

app.get('/mars', function (req, res) {
  res.send('Hello Mars!\n');
});

app.get('/feature1', function (req, res) {
  res.send('Hello feature1!\n');
});

app.get('/feature2', function (req, res) {
  res.send('Hello feature2!\n');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

