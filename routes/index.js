var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',body: '' });
});

/* GET catalog page. */
router.get('/catalog', function(req, res, next) {
  res.render('catalog', { title: 'Catalog' });
});
module.exports = router;
