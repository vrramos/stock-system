const { listAllProducts, register, getProduct } = require('../controllers/stockController');
const { updateProduct, deleteProduct } = require('../controllers/stockController');

module.exports = {
  listAllProducts,
  register,
  getProduct,
  updateProduct,
  deleteProduct,
};
