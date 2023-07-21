const express = require("express");
const Router = express.Router();

const mahasiswa = require("./mahasiswa");
const buku = require("./buku");
const peminjam = require("./peminjam");


Router.use("/mahasiswa", mahasiswa);
Router.use("/buku", buku);
Router.use("/peminjam", peminjam);

module.exports = Router;
