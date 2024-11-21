const express = require('express');
const router = express.Router();

// Controllers
const homeController = require('../components/home/home_Controller');
const catalogController = require('../components/catalog/catalog_Controller');
const productController = require('../components/product/product_Controller');
const aboutUsController = require('../components/about-us/about-us_Controller');
const contactUsController = require('../components/contact-us/contact-us_Controller');
const userController = require('../components/users/users_Controller');


router.get('/', homeController.getHome);
router.get('/home', homeController.getHome);


router.get('/catalog', catalogController.getCatalog);


router.get('/product', productController.getProduct);


router.get('/about-us', aboutUsController.getAboutUs);
router.get('/contact-us', contactUsController.getContactUs);
router.get('/sign-up', userController.getSignUp);

module.exports = router;

