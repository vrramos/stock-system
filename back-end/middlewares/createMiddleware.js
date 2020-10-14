const { isNameValid, isQuantityOrPriceValid } = require('../services/fieldsValidation');

exports.createProductValid = (req, res, next) => {
  const { productName, quantity, unityPrice } = req.body;

  if (
    !isNameValid(productName)
    || !isQuantityOrPriceValid(quantity)
    || !isQuantityOrPriceValid(unityPrice)
  )
    res.status(401).json({ message: "Fields Invalid" });

  next();
}
