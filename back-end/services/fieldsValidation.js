function isNameValid(productName = '') {
  const regex = /[a-zA-Z0-9]{3}/g;
  return regex.test(productName);
}

function isQuantityOrPriceValid(value = '') {
  const regex = /\d+/g;
  return regex.test(value);
}

module.exports = {
  isNameValid,
  isQuantityOrPriceValid,
}
