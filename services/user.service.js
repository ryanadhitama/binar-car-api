require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserRepository = require("../repository/user.repository.js");
const { NotAuthenticated, NotFound } = require("../utils/response.js");

class UserService {
  async login(email, password) {
    const user = await UserRepository.getOneByEmail({ email });
    if (!user) {
      throw new NotFound();
    }

    const authenticate = await bcrypt.compare(password, user.password);

    if (authenticate) {
      const payload = {
        id: user.id,
        email: user.email,
        role: user.role,
      };

      const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
        expiresIn: "3h",
      });

      return { ...payload, token: token };
    }

    throw new NotAuthenticated();
  }

  async getOneById(id) {
    const user = await UserRepository.getOneById(id);
    return user;
  }
  async getAllAdmins() {
    const user = await UserRepository.getByRole({ role: "ADMIN" });
    return user;
  }
}

module.exports = new UserService();
