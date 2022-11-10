const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const rootRoute = require('../routes');

const app = express();

app.use(express.urlencoded({ extended: true, limit: '50mb' }));

app.use(express.json({ limit: '50mb' }));

app.use(cookieParser());

app.use(morgan('dev'));

app.use((_, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Credentials', 'true');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	);
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	next();
});

app.use('/', rootRoute);

module.exports = app;
