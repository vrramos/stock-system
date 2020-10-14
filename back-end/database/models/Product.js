const Product = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    productName: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    unityPrice: DataTypes.DECIMAL(10, 2),
  });

  return Product;
};

module.exports = Product;
