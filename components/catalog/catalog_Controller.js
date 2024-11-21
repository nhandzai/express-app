const db = require('../../models');

const getCatalog = async (req, res, next) => {
  try {
    const products = await db.products.findAll();
    res.render('catalog', {
      title: 'Catalog',
      products: products
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getCatalog,
};
