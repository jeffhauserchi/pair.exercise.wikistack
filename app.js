const express = require('express');
const volleyball = require('volleyball');
const bodyParser = require('body-parser');

const { db, Page, User } = require('./models')
db.authenticate().
then(() => {
  console.log('connected to the database');
})

const app = express();

app.use(volleyball);

app.use(express.static(__dirname.concat('/public')));

const layout= require("./views/layout");

app.get('/', (req, res) => {
  res.send(layout(""));
});
// app.use(router);

const init = async () => {
  await User.sync();
  await Page.sync();

  app.listen(1337, ()=> {console.log("listening")});

}

init();

