require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserRepository = require("../repository/user.repository.js");
const {
  NotAuthenticated,
  NotFound,
  UserAlreadyExists,
} = require("../utils/response.js");

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
  async register(data) {
    const { name, email, password, phone, address } = data;
    const role = "MEMBER";

    const isExists = await UserRepository.getOneByEmail({ email });
    if (isExists) {
      throw new UserAlreadyExists();
    }

    const encryptedPassword = await bcrypt.hash(password, 10);
    const user = await UserRepository.store({
      name,
      email,
      password: encryptedPassword,
      phone,
      address,
      role,
    });

    return user;
  }
  async getOneById(id) {
    const user = await UserRepository.getOneById(id);
    return user;
  }
  async getAllAdmins() {
    const user = await UserRepository.getByRole({ role: "ADMIN" });
    return user;
  }
  async createAdmin(data) {
    const { name, email, password, phone, address } = data;
    const role = "ADMIN";

    const isExists = await UserRepository.getOneByEmail({ email });
    if (isExists) {
      throw new UserAlreadyExists();
    }

    const encryptedPassword = await bcrypt.hash(password, 10);
    const admin = await UserRepository.store({
      name,
      email,
      password: encryptedPassword,
      phone,
      address,
      role,
    });

    return admin;
  }
  async updateAdmin(id, data) {
    const { name, email, password, phone, address } = data;

    const isExists = await UserRepository.getOneById(id);
    if (!isExists) {
      throw new NotFound();
    }
    if (isExists.role !== "ADMIN") {
      throw new NotFound();
    }

    const encryptedPassword = await bcrypt.hash(password, 10);
    const admin = await UserRepository.update(id, {
      name,
      email,
      password: encryptedPassword,
      phone,
      address,
    });

    return admin;
  }
  async deleteAdmin(id, user) {
    const deleted_by = user?.id;
    const deleted_at = new Date();

    const isExists = await UserRepository.getOneById(id);
    if (!isExists) {
      throw new NotFound();
    }
    if (isExists.role !== "ADMIN") {
      throw new NotFound();
    }
    await UserRepository.update(id, {
      deleted_at,
      deleted_by,
    });
    return null;
  }
}

module.exports = new UserService();
