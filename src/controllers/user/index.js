const express = require("express");
const router = express.Router();

const list = require("./list");
const get = require("./get");
const create = require("./create");
const remove = require("./remove");

module.exports = (models, { config }) => {
  router.get("/", list(models, { config }));
  router.get("/:_id", get(models, { config }));
  router.post("/", create(models, { config }));
  router.delete("/:_id", remove(models, { config }));

  return router;
};
