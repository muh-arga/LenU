const bcrypt = require("bcryptjs");

class PasswordService {
  async hashPassword(password) {
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt)
    return hashed
  }

  async comparePassword(password, hashedPassword) {
    const result = await bcrypt.compare(password, hashedPassword);
    return result;
  }
}

module.exports = new PasswordService();
