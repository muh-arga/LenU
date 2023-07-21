const express = require("express");
const {
  validate,
  createMahasiswaSchema,
} = require("../middleware/validationMiddleware");
const mahasiswaController = require("../controllers/mahasiswaController");
const Router = express.Router();

Router.post(
  "/create",
  validate(createMahasiswaSchema),
  mahasiswaController.create
);

module.exports = Router;
