const jwt = require('jsonwebtoken');
const secret = require('../api/secrets.js').jwtSecret;

const generateToken = user => {
  const payload = {
    subject: user.id,
    username: user.username,
    department: user.department
  };
  const options = {
    expiresIn: '1d'
  };
  return jwt.sign(payload, secret, options);
};

module.exports = {
  generateToken
};
