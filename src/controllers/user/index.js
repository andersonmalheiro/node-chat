const express = require('express');
const router = express.Router();

// const create = require('./create');
const list = require('./list');
const get = require('./get');
const remove = require('./remove');
const update = require('./update');

module.exports = (models, { config }) => {
  // router.post('/', create(models, { config }));
  router.get('/', list(models, { config }));
  router.get('/:_id', get(models, { config }));
  router.delete('/:_id', remove(models, { config }));
  router.put('/:_id', update(models, { config }));

  return router;
};
