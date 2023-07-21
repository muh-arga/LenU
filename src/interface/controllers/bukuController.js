const addBukuUseCase = require("../../application/useCases/addBukuUseCase");

class BukuController {
  async create(req, res) {
    try {
      const buku = await addBukuUseCase.execute(req.body);
      res.status(201).json({
        message: "Success create buku",
        data: buku,
      });
    } catch (error) {
      res.status(error.status).json({
        message: error.message,
      });
    }
  }
}

module.exports = new BukuController();
