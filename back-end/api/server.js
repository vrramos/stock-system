const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

const { createProductValid } = require('../middlewares/createMiddleware');

const { listAllProducts, register, getProduct } = require('../api/routes');
const { updateProduct, deleteProduct } = require('../api/routes');

app.get('/products', listAllProducts);
app.get('/product/:id', getProduct);
app.post('/product', createProductValid, register);
app.put('/product/:id', updateProduct);
app.delete('/product/:id', deleteProduct);

app.use('*', (_req, res) => res.status(404).json({ message: 'Página não encontrada' }));

module.exports = app;

