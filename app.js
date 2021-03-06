require('dotenv').config();

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var etudiantsRouter = require('./routes/etudiants');
var locauxRouter = require('./routes/locaux');
var reservationsRouter = require('./routes/reservations');

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/etudiants', etudiantsRouter);
app.use('/locaux', locauxRouter);
app.use('/reservations', reservationsRouter);

module.exports = app;
