const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

const { listAllProducts, register, getProduct } = require('../api/routes');
const { updateProduct, deleteProduct } = require('../api/routes'); updateProduct

app.get('/products', listAllProducts);
app.get('/product/:id', getProduct);
app.post('/product', register);
app.put('/product/:id', updateProduct);
app.delete('/product/:id', deleteProduct);

module.exports = app;
