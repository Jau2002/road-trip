const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const rootRoute = require('../routes');

const server = express();

server.use(express.urlencoded({ extended: true, limit: '50mb' }));

server.use(express.json({ limit: '50mb' }));

server.use(cookieParser());

server.use(morgan('dev'));

server.use((_, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Credentials', 'true');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	);
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	next();
});

server.use('/', rootRoute);

module.exports = server;
