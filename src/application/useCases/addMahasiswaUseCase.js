const { hashPassword } = require("../../domain/services/passwordService");
const UserRepository = require("../../infrastructure/repositories/userRepository");
const { BadRequestError } = require("../errors");

class AddMahasiswaUseCase {
  constructor(userRepository) {
    this.userRepository = userRepository;
    this.execute = this.execute.bind(this);
  }

  async execute(mahasiswaData) {
    try {
      const { password } = mahasiswaData;
      const hashedPassword = await hashPassword(password);
      mahasiswaData.password = hashedPassword;

      const mahasiswa = await this.userRepository.save(mahasiswaData);
      if (!mahasiswa) {
        throw new BadRequestError("Failed when create mahasiswa");
      }

      return mahasiswa;
    } catch (error) {
      throw error;
    }
  }
}

const addMahasiswaUseCase = new AddMahasiswaUseCase(UserRepository);

module.exports = addMahasiswaUseCase;
