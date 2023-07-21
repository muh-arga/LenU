const addMahasiswaUseCase = require("../../application/useCases/addMahasiswaUseCase");

class MahasiswaController {
  async create(req, res) {
    try {
      const mahasiswa = await addMahasiswaUseCase.execute(req.body);
      res.status(201).json({
        message: "Success create mahasiswa",
        data: mahasiswa,
      });
    } catch (error) {
      res.status(error.status).json({
        message: error.message,
      });
    }
  }
}

module.exports = new MahasiswaController();
