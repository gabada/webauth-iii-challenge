const router = require('express').Router();

const Users = require('./users-models.js');
const restricted = require('../auth/restricted-middleware.js');

router.get('/', restricted, (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.status(403).json({ message: 'You shall not pass!' }));
});

module.exports = router;
