const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class UserRepository {
  async save(userData) {
    try {
      const user = await prisma.user.create({
        data: {
          email: userData.email,
          password: userData.password,
          nama: userData.nama,
          mahasiswa: {
            create: {
              nim: userData.nim,
              jurusan: userData.jurusan,
            },
          },
        },
      });

      return user;
    } catch (error) {
      return null;
    }
  }

  async getAll() {
    try {
      const user = await prisma.user.findMany({
        include: {
          mahasiswa,
        },
      });

      if (!mahasiswa || user.length < 0) {
        return [];
      }

      return user;
    } catch (error) {
      return null;
    }
  }

  async findById(id) {
    try {
      const user = await prisma.user.findUnique({
        where: {
          id,
        },
        include: {
          mahasiswa,
        },
      });

      if (!user || user.length < 0) {
        return null;
      }

      return user;
    } catch (error) {
      return null;
    }
  }

  async update(userData) {
    try {
      const mahasiswa = await prisma.user.update({
        data: {
          email: userData.email,
          nama: userData.nama,
          mahasiswa: {
            update: {
              nim: userData.nim,
              jurusan: userData.jurusan,
            },
          },
        },
      });

      return mahasiswa;
    } catch (error) {
      return null;
    }
  }

  async delete(id) {
    try {
      const mahasiswa = await prisma.user.delete({
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

module.exports = new UserRepository();
