const express = require('express');
const routes = require('./routes/routes');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

const config = require('./config');
const morgan = require('morgan');

const Utils = require('./utils/utils');

mongoose.Promise = global.Promise;

if (process.env.NODE_ENV !== 'test') {
  mongoose.connect(config.database);
}

app.set('superSecret', config.secret);

app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
);
app.use(bodyParser.json());
app.use(morgan('dev'));

routes(app);

app.use((err, req, res, next) => {
  res.send(Utils.response(false, 'Something went wrong.', err.message));
});

module.exports = app;
