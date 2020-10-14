const { listAllProducts, register, getProduct } = require('../controllers/stockController');
const { updateProduct, deleteProduct } = require('../controllers/stockController'); updateProduct

module.exports = {
  listAllProducts,
  register,
  getProduct,
  updateProduct,
  deleteProduct,
};
