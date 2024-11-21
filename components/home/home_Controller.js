const db = require('../../models');

async function getHome(req, res, next) {
  try {
    const products = await db.products.findAll();
    res.render('home', {
      title: 'Home',
      products: products
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getHome
};