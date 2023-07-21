const addPeminjamUseCase = require("../../application/useCases/addPeminjamUseCase");
const updatePeminjamUseCase = require("../../application/useCases/updatePeminjamUseCase");

class PeminjamController {
  async create(req, res) {
    try {
      const peminjam = await addPeminjamUseCase.execute(req.body);
      res.status(201).json({
        message: "success create peminjam",
        data: peminjam,
      });
    } catch (error) {
      res.status(error.status).json({
        message: error.message,
      });
    }
  }

  async update(req, res) {
    try {
      const peminjam = await updatePeminjamUseCase.execute(req.body);
      res.status(200).json({
        message: "Success update peminjam",
        data: peminjam,
      });
    } catch (error) {
      throw res.status(error.status).json({
        message: error.message,
      });
    }
  }
}

module.exports = new PeminjamController();
