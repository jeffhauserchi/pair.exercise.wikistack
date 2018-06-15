const express = require('express');
const volleyball = require('volleyball');
const bodyParser = require('body-parser');

const app = express();

app.use(volleyball);

app.use(express.static(__dirname.concat('/public')));

app.get('/', (req, res) => {
  res.send('Hello World.');
});
// app.use(router);

app.listen(1337);
