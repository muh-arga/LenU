const BukuRepository = require("../../infrastructure/repositories/bukuRepository");
const { BadRequestError } = require("../errors");

class AddBukuUseCase {
  constructor(bukuRepository) {
    this.bukuRepository = bukuRepository;
    this.execute = this.execute.bind(this);
  }

  async execute(bukuData) {
    try {
      const buku = await this.bukuRepository.save(bukuData);
      if (!buku) {
        throw new BadRequestError("Failed when create buku");
      }
      return buku;
    } catch (error) {
      throw error;
    }
  }
}

const addBukuUseCase = new AddBukuUseCase(BukuRepository);

module.exports = addBukuUseCase;
