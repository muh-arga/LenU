const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class BukuRepository {
  async save(bukuData) {
    try {
      const buku = await prisma.buku.create({
        data: {
          judul: bukuData.judul,
          penulis: bukuData.penulis,
          kuantitas: bukuData.kuantitas,
          tempat: bukuData.tempat,
        },
      });

      return buku;
    } catch (error) {
        console.log(error)
      return null;
    }
  }

  async getAll() {
    try {
      const buku = await prisma.buku.findMany();

      if (!buku || buku.length < 0) {
        return [];
      }

      return buku;
    } catch (error) {
      return null;
    }
  }

  async findById(id) {
    try {
      const buku = await prisma.buku.findUnique({
        where: {
          id,
        },
      });

      if (!buku || buku.length < 0) {
        return null;
      }

      return buku;
    } catch (error) {
      return null;
    }
  }

  async update(bukuData) {
    try {
      const buku = await prisma.buku.update({
        data: {
          judul: bukuData.judul,
          penulis: bukuData.penulis,
          kuantitas: bukuData.kuantitas,
          tempat: bukuData.tempat,
        },
      });

      return buku;
    } catch (error) {
      return null;
    }
  }

  async delete(id) {
    try {
      const buku = await prisma.buku.delete({
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

module.exports = new BukuRepository();
