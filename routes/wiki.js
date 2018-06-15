const wikiRoute = require('express').Router();
const { Page } = require('../models');
const { addPage } = require('../views');

wikiRoute
  .route('/')
  .get((req, res, next) => {})
  .post(async (req, res, next) => {
    console.log(req.body);
    const page = new Page({
      title: req.body.title,
      content: req.body.content,
      status: req.body.status,
    });
    console.log(page);
    try {
      await page.save();
      res.redirect('/');
    } catch (error) {
      next(error);
    }
  });

wikiRoute
  .route('/add')
  .get((req, res, next) => {
    res.send(addPage());
  })
  .post((req, res, next) => {});

module.exports = wikiRoute;
