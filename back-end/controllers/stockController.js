const StockModel = require('../models/stockModels');

exports.listAllProducts = async (_req, res) => {
  const allProduct = await new StockModel().getAll();

  res.status(200).json(allProduct);
};

exports.register = async (req, res) => {
  const newProduct = await new StockModel().create(req.body);

  res.status(200).json(newProduct);
};

exports.getProduct = async (req, res) => {
  productById = await new StockModel().getById(req.params.id);

  res.status(200).json(productById);
};

exports.updateProduct = async (req, res) => {
  updateProduct = await new StockModel().updateProductById(req.params.id, req.body);

  res.status(200).json({ message: "Produto Atualizado" });
};

exports.deleteProduct = async (req, res) => {
  updateProduct = await new StockModel().delete(req.params.id);

  res.status(200).json({ message: "Produto Deletado." });
};
