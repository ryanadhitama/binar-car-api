const models = require("../models/index");
const { InternalServerError } = require("../utils/response.js");

class UserRepository {
  async getByRole(query) {
    try {
      const { role } = query;
      const user = await models.user.findAll({
        where: { role },
        attributes: {
          exclude: ["password", "deleted_at", "deleted_by"],
        },
      });

      return user;
    } catch (err) {
      throw new InternalServerError();
    }
  }
  async getOneByEmail(query) {
    try {
      const { email } = query;
      const user = await models.user.findOne({
        where: { email }
      });

      return user;
    } catch (err) {
      throw new InternalServerError();
    }
  }
  async getOneById(id) {
    try {
      const user = await models.user.findOne({
        where: {
          id: id,
        },
        attributes: {
          exclude: ["password", "deleted_at", "deleted_by"],
        },
      });
      return user;
    } catch (err) {
      throw new InternalServerError();
    }
  }
}

module.exports = new UserRepository();
