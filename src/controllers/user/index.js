const express = require("express");
const router = express.Router();

const list = require("./list");
const get = require("./get");
const create = require("./create");

module.exports = (models, { config }) => {
  router.get("/", list(models, { config }));
  router.get("/:_id", get(models, { config }));
  router.post("/", create(models, { config }));

  return router;
};
