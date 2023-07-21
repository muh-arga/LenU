const PeminjamRepository = require("../../infrastructure/repositories/peminjamRepository");
const { NotFoundError, BadRequestError } = require("../errors");

class UpdatePeminjamUseCase {
  constructor(PeminjamRepository) {
    this.peminjamRepository = this.peminjamRepository;
    this.execute = this.execute.bind(this);
  }

  async execute(peminjamId, peminjamData) {
    try {
      const peminjam = await this.peminjamRepository.findById(peminjamId);
      if (!peminjam) {
        throw NotFoundError("Peminjam not found");
      }

      const { tanggalPengembalian } = peminjamData;

      const hariLebihMili = Math.abs(
        tanggalPengembalian - peminjam.batasPengembalian
      );

      const hariLebih = hariLebihMili / (1000 * 60 * 60 * 24);

      const dendaAwal = 1000;
      const dendaSelanjutnya = 1000;

      let denda = 0;
      let hariTambahan = 0;

      while (hariLebih > 0) {
        if (hariTambahan === 0) {
          denda += dendaAwal;
          hariTambahan = 2;
        } else {
          denda += dendaSelanjutnya;
          hariTambahan--;
        }
      }

      peminjamData = { ...peminjamData, denda };

      const updatedPeminjam = await this.peminjamRepository.update(
        peminjamId,
        peminjamData
      );
      if (!updatedPeminjam) {
        throw new BadRequestError("Failed update peminjam");
      }

      return updatedPeminjam;
    } catch (error) {
      throw error;
    }
  }
}

const updatePeminjamUseCase = new UpdatePeminjamUseCase(PeminjamRepository);

module.exports = updatePeminjamUseCase;
