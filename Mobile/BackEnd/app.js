// Carregar as variáveis de ambeintea partir do arquivo .env
require('dotenv').config()

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/usersIndex');

var app = express();

// Conectar ao banco de dados
require('./config/database')()

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

app.use('/', indexRouter);
app.use('/usersIndex', usersRouter);

/*************************************
 * ROTAS
**************************************/

const cityRouter = require('./routes/cities')
app.use('/city', cityRouter)

const userRouter = require('./routes/users')
app.use('/user', userRouter)

const weatherRouter = require('./routes/weathers')
app.use('/weather', weatherRouter)


module.exports = app;
