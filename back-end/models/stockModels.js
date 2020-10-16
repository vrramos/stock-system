const { Product } = require('../database/models');

class StockModel {
  async getAll() {
    const products = await Product.findAll();

    return products.map(user => user.dataValues);
  }

  async create(newProduct) {
    return await Product.create(newProduct);
  }

  async getById(id) {
    return await Product.findByPk(id);
  }

  async updateProductById(id, body) {
    const productId = await Product.findOne({ where: { id } });
    if (!productId) return false;

    const updatePost = await Product.update(body, { where: { id } });
    if (updatePost[0] === 0) return false;
    
    return updatePost;
  }

  async delete(id) {
    const productId = await Product.findByPk(id);
    if (!productId) return false;

    productId.destroy();
    return productId;
  }
}

module.exports = StockModel;
