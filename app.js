const express = require('express');
const volleyball = require('volleyball');
const bodyParser = require('body-parser');
const layout = require('./views/layout');
const { db, Page, User } = require('./models');

// config
const PORT = 1337;

// setup
const app = express();

// middleware
app.use(volleyball);
app.use(bodyParser.urlencoded());
app.use(express.static(__dirname.concat('/public')));

// routes
app.get('/', (req, res, next) => res.redirect('/wiki'));
app.post('/', (req, res, next) => res.redirect('/wiki'));
app.use('/user', require('./routes/user.js'));
app.use('/wiki', require('./routes/wiki.js'));

// database setup
const init = async () => {
  db.authenticate().then(() => {
    console.log('connected to the database');
  });
  await User.sync();
  await Page.sync();

  app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
  });
};

init();
