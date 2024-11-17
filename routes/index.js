var express = require('express');
var router = express.Router();
var path = require('path');
var ejs = require('ejs');

/* GET home page. */
router.get('/', function (req, res, next) {
  ejs.renderFile(path.join(__dirname, '../views/home.ejs'), {}, function (err, str) {
    if (err) return next(err);
    res.render('index', {
      title: 'Home',
      body: str, // Rendered home.ejs content
    });
  });
});

/* GET catalog page. */
router.get('/catalog', function (req, res, next) {
  ejs.renderFile(path.join(__dirname, '../views/catalog.ejs'), {}, function (err, str) {
    if (err) return next(err);
    res.render('index', {
      title: 'Catalog',
      body: str, // Rendered catalog.ejs content
    });
  });
});

router.get('/home', function (req, res, next) {
  ejs.renderFile(path.join(__dirname, '../views/home.ejs'), {}, function (err, str) {
    if (err) return next(err);
    res.render('index', {
      title: 'Home',
      body: str, // Rendered home.ejs content
    });
  });
});

router.get('/about-us', function (req, res, next) {
  ejs.renderFile(path.join(__dirname, '../views/about-us.ejs'), {}, function (err, str) {
    if (err) return next(err);
    res.render('index', {
      title: 'About us',
      body: str, // Rendered about-us.ejs content
    });
  });
});

router.get('/contact-us', function (req, res, next) {
  ejs.renderFile(path.join(__dirname, '../views/contact-us.ejs'), {}, function (err, str) {
    if (err) return next(err);
    res.render('index', {
      title: 'Contact us',
      body: str, // Rendered contact-us.ejs content
    });
  });
});

router.get('/sign-up', function (req, res, next) {
  ejs.renderFile(path.join(__dirname, '../views/sign-up.ejs'), {}, function (err, str) {
    if (err) return next(err);
    res.render('index', {
      title: 'Sign up',
      body: str, // Rendered sign-up.ejs content
    });
  });
});
module.exports = router;
