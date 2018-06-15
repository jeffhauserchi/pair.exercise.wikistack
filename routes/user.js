const userRoute = require('express').Router();

userRoute.get('/', (req, res) => {
  res.send('Hi');
});

module.exports = userRoute;
