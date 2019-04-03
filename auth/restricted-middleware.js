const jwt = require('jsonwebtoken');

const secrets = require('../api/secrets.js').jwtSecret;

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, secrets, error => {
      if (error) {
        res.status(401).json({ message: 'You shall not pass!' });
      } else {
        next();
      }
    });
  } else {
    res.status(401).json({ message: 'no token provided' });
  }
};
