const db = require('../../models');

async function fetchAllProducts() {
  return await db.products.findAll();
}

module.exports = { fetchAllProducts };
