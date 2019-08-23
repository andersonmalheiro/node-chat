const express = require('express');
const router = express.Router();

const list = require('./list');
const get = require('./get');

module.exports = (models, { config }) => {
  router.get('/', list(models, { config }));
  router.get('/:_id', get(models, { config }))

  return router;
};
