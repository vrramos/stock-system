const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/test', (_req, res) => {
  res.status(200).json({ message: 'Tudo certo!' })
});

module.exports = app;
