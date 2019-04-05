const express = require('express');
const configuredMiddleware = require('./middleware.js');
const authRouter = require('../auth/auth-router.js');
const userRouter = require('../users/users-router.js');

const server = express();

configuredMiddleware(server);

server.use('/api/auth', authRouter);
server.use('/api/users', userRouter);

module.exports = server;
