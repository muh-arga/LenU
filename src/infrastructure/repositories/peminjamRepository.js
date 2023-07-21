const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class PeminjamRepository {
  async save(peminjamData) {
    try {
      const peminjam = await prisma.peminjam.create({
        data: {
          bukuId: peminjamData.bukuId,
          mahasiswaId: peminjamData.mahasiswaId,
          tanggalPinjam: peminjamData.tanggalPinjam,
          batasPengembalian: peminjamData.batasPengembalian,
        },
      });

      return peminjam;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async findById(id) {
    try {
      const peminjam = await prisma.peminjam.findUnique({
        where: {
          id,
        },
      });

      if (!peminjam || peminjam.length < 0) {
        return null;
      }

      return peminjam;
    } catch (error) {
      return null;
    }
  }

  async update(peminjamId, peminjamData) {
    try {
      const buku = await prisma.buku.update({
        where: {
          id: peminjamId,
        },
        data: {
          tanggalPengembalian: peminjamData.tanggalPengembalian,
          denda: peminjamData.denda,
        },
      });

      return buku;
    } catch (error) {
      return null;
    }
  }

  async delete(id) {
    try {
      const peminjam = await prisma.peminjam.delete({
        where: {
          id,
        },
      });

      return true;
    } catch (error) {
      return false;
    }
  }
}

module.exports = new PeminjamRepository();
