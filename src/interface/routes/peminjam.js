const express = require("express");
const {
  validate,
  createMahasiswaSchema,
  createPeminjamSchema,
} = require("../middleware/validationMiddleware");
const peminjamController = require("../controllers/peminjamController");
const Router = express.Router();

Router.post(
  "/create",
  validate(createPeminjamSchema),
  peminjamController.create
);

Router.put("/update", peminjamController.update);
module.exports = Router;
