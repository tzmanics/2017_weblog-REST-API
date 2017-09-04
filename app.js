const bodyParser = require('body-parser');
const express = require('express');
const logger = require('morgan');

const app = express();

require('dotenv').config();

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('*', (req, res) => res.status(202).send({
  message: 'Well, hello there! So glad you came, but there\'s nothing here 🐼',
}));

module.exports = app;