const express = require("express");
const {
  validate,
  createBukuSchema,
} = require("../middleware/validationMiddleware");
const bukuController = require("../controllers/bukuController");
const Router = express.Router();

Router.post("/create", validate(createBukuSchema), bukuController.create);

module.exports = Router;
