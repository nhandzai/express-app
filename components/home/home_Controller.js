const { fetchAllProducts } = require('./home_model'); 
const { renderHomePage } = require('./home_view'); 

async function getHome(req, res, next) {
  try {
    const products = await fetchAllProducts(); 
    renderHomePage(res, products); 
  } catch (error) {
    next(error); 
  }
}

module.exports = { getHome };

