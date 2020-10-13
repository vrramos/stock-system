const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

const { test } = require('../api/routes');

app.get('/test', test)

module.exports = app;
