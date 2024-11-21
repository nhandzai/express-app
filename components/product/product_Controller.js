const db = require('../../models');

const getProduct = async (req, res, next) => {
  try {
    const productId = +req.query.id;
    const product = await db.products.findByPk(productId);
    if (!product) {
      return res.status(404).send('Product not found');
    }
    res.render('product', {
      title: 'Product Details',
      product: product
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getProduct,
};
