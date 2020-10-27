const cors = require('cors');
const createError = require('http-errors');
const express = require('express');
const helmet = require('helmet');
const path = require('path');
const logger = require('morgan');
const routes = require('./routes');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const app = express();

app.use(cors({ origin: true }));
app.use(helmet({ hsts: false }));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
