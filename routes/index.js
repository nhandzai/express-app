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

module.exports = router;
