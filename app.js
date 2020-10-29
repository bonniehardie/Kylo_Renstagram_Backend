const cors = require('cors');
const createError = require('http-errors');
const express = require('express');
const helmet = require('helmet');
const path = require('path');
const logger = require('morgan');

const usersRoute = require('./routes/api/users');
const photosRoute = require('./routes/api/photos');

const app = express();

app.use(cors({ origin: true }));
app.use(helmet({ hsts: false }));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.use('/api/users', usersRoute);
app.use('/api/photos', photosRoute);

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  if (err.status === 401) {
    res.set('WWW-Authenticate', 'Bearer');
  }
  res.json({
    message: err.message,
    error: JSON.parse(JSON.stringify(err)),
  });
});

app.use((err, req, res, next) => {
    console.log("I'm here");
    console.log(err);
    res.status(err.status || 500);
    const errMsg = err.errors;

    res.json({
        title: err.title,
        errors: errMsg,
    });
    console.log(errMsg);
});

module.exports = app;
