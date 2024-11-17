var express = require('express');
var router = express.Router();
var path = require('path');
var ejs = require('ejs');
const db = require('../models');
const renderProductHome = require('../views/product-home');
const renderHome = require('../views/home');




// GET home page  

router.get('/', async function (req, res, next) {
  try {
    // Lấy tất cả các sản phẩm từ cơ sở dữ liệu
    const products = await db.products.findAll();

    // Render các sản phẩm vào trang product-home.ejs
    const productHomeStr = await renderProductHome(req, res, next, products);

    // Render toàn bộ trang home
    const str = await renderHome(req, res, next, productHomeStr);

    // Trả về kết quả render với các dữ liệu đã được lấy từ cơ sở dữ liệu
    res.render('index', {
      title: 'Home',
      body: str, // Rendered home.ejs content
    });
  } catch (error) {
    next(error); // Xử lý lỗi nếu có
  }
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

router.get('/home', async function (req, res, next) {
  try {
    const products = await db.products.findAll();

    const productHomeStr = await renderProductHome(req, res, next, products);
    const str = await renderHome(req, res, next, productHomeStr);

    res.render('index', {
      title: 'Home',
      body: str, // Rendered home.ejs content
    });
  } catch (error) {
    next(error);
  }
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
