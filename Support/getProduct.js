const db = require('../models');

async function getAllProducts() {
  try {
    const products = await db.products.findAll();
    return products;
  } catch (error) {
    throw new Error('Error fetching products: ' + error.message);
  }
}

module.exports = {
  getAllProducts,
};