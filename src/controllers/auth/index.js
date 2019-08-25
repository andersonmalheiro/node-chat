const express = require('express');
const router = express.Router();

const register = require('./register');

module.exports = (models, { config }) => {
  router.post('/register', register(models, { config }));

  return router;
};
