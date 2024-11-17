var express = require('express');
var router = express.Router();
var path = require('path');
var ejs = require('ejs');
const db = require('../models');
const renderProductHome = require('../views/product-home');
const renderHome = require('../views/home');
const renderProduct = require('../views/product');
const renderCatalog = require('../views/catalog');
const { getAllProducts } = require('../Support/getProduct');
const { getProductById } = require('../Support/getProdFromId');




// GET home page  

router.get('/', async function (req, res, next) {
  try {

    const products = await getAllProducts();
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
/* GET catalog page. */
router.get('/catalog', async function (req, res, next) {
  try {

    const products = await getAllProducts();
    const productCatalog = await renderProductHome(req, res, next, products);

    const str = await renderCatalog(req, res, next, productCatalog);

    res.render('index', {
      title: 'Catalog',
      body: str, // Rendered home.ejs content
    });
  } catch (error) {
    next(error);
  }
});

router.get('/home', async function (req, res, next) {
  try {

    const products = await getAllProducts();
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
router.get('/product', async function (req, res, next) {
  try {
    const productId = +req.query.id;

    const product = await getProductById(productId);


    const str = await renderProduct(req, res, next, product);

    res.render('index', {
      title: 'Product',
      body: str,
    });
  } catch (error) {
    next(error);
  }
});



module.exports = router;

