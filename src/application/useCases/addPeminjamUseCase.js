const PeminjamRepository = require("../../infrastructure/repositories/peminjamRepository");
const BukuRepository = require("../../infrastructure/repositories/bukuRepository");
const { NotFoundError, BadRequestError } = require("../errors");

class AddPeminjamUseCase {
  constructor(peminjamRepository, bukuRepository, userRepository) {
    this.peminjamRepository = peminjamRepository;
    this.bukuRepository = bukuRepository;
    this.execute = this.execute.bind(this);
  }

  async execute(dataPeminjam) {
    try {
      const tanggalPinjam = new Date();
      const batasPengembalian = new Date(dataPeminjam.batasPengembalian);
      dataPeminjam = { ...dataPeminjam, tanggalPinjam, batasPengembalian };

      const buku = await this.bukuRepository.findById(dataPeminjam.bukuId);
      if (!buku) {
        throw new NotFoundError("Buku not found");
      }

      if (buku.kuantitas === 0 || buku.kuantitas === "") {
        throw new BadRequestError("Not enough book");
      }

      const peminjam = await this.peminjamRepository.save(dataPeminjam);
      if (!peminjam) {
        throw new BadRequestError("Failed when pinjam buku");
      }

      const updateBuku = this.bukuRepository.update({
        kuantitas: buku.kuantitas - 1,
      });

      if (!updateBuku) {
        throw new BadRequestError("There is an error when pinjam buku");
      }

      return peminjam;
    } catch (error) {
      throw error;
    }
  }
}

const addPeminjamUseCase = new AddPeminjamUseCase(
  PeminjamRepository,
  BukuRepository
);

module.exports = addPeminjamUseCase;
