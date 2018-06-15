const wikiRoute = require('express').Router();
const { Page } = require('../models');
const { addPage, wikiPage, main} = require('../views');

wikiRoute
  .route('/add')
  .get((req, res, next) => {
    res.send(addPage());
  });
  //.post((req, res, next) => {});

  wikiRoute
  .get('/:slug', async (req, res, next) => {
     const row=await Page.findOne({where: {slug:req.params.slug}}); //assume just one
     console.log(row);
     res.send(wikiPage(row));
  });

wikiRoute
  .route('/')
  .get( async (req, res, next) => {
     const rows=await Page.findAll();
     res.send(main(rows));
  })
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
      res.redirect(`/wiki/${page.slug}`);
    } catch (error) {
      next(error);
    }
  });

module.exports = wikiRoute;
